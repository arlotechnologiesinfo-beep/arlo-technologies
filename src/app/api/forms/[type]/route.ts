import { createHash } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { FORM_TYPES, FormType, limits, normalizers, schemas, tables } from '@/lib/forms/schemas';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/env';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 20_000;

const json = (body: Record<string, unknown>, status = 200, headers?: HeadersInit) =>
  NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });

const clientIp = (req: NextRequest) =>
  req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';

/** Salted hash so abuse can be tracked without storing raw IP addresses. */
const hashIp = (ip: string) =>
  createHash('sha256')
    .update(`${process.env.RATE_LIMIT_SALT ?? 'arlo-default-salt'}:${ip}`)
    .digest('hex')
    .slice(0, 32);

const isSameOrigin = (req: NextRequest) => {
  const origin = req.headers.get('origin');
  if (!origin) {
    return true; // non-browser clients; rate limiting still applies
  }
  try {
    return new URL(origin).host === req.headers.get('host');
  } catch {
    return false;
  }
};

export async function POST(req: NextRequest, { params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!(FORM_TYPES as readonly string[]).includes(type)) {
    return json({ ok: false, error: 'Unknown form.' }, 404);
  }
  const formType = type as FormType;

  if (!isSameOrigin(req)) {
    return json({ ok: false, error: 'Forbidden.' }, 403);
  }

  const admin = createAdminClient();
  if (!admin) {
    return json({ ok: false, error: 'Form service is not configured yet. Please email us directly.' }, 503);
  }

  const lengthHeader = Number(req.headers.get('content-length') ?? 0);
  if (lengthHeader > MAX_BODY_BYTES) {
    return json({ ok: false, error: 'Request too large.' }, 413);
  }

  let raw: Record<string, unknown>;
  try {
    const parsed = await req.json();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('bad body');
    }
    raw = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Honeypot: bots fill the hidden "website" field. Pretend success, store nothing.
  if (typeof raw.website === 'string' && raw.website.trim() !== '') {
    return json({ ok: true });
  }

  const ipHash = hashIp(clientIp(req));
  const [max, windowSeconds] = limits[formType];
  const { data: allowed, error: limitError } = await admin.rpc('check_rate_limit', {
    p_key: `${formType}:${ipHash}`,
    p_limit: max,
    p_window_seconds: windowSeconds,
  });
  if (limitError) {
    console.error('rate limit check failed', limitError.message);
    return json({ ok: false, error: 'Service temporarily unavailable.' }, 503);
  }
  if (allowed === false) {
    return json({ ok: false, error: 'Too many requests. Please try again later.' }, 429, {
      'Retry-After': String(windowSeconds),
    });
  }

  const result = schemas[formType].safeParse(normalizers[formType](raw));
  if (!result.success) {
    const fields = Object.fromEntries(result.error.issues.map((i) => [String(i.path[0] ?? 'form'), i.message]));
    return json({ ok: false, error: 'Please check the highlighted fields.', fields }, 422);
  }

  // Attach the logged-in user when there is one (optional).
  let userId: string | null = null;
  if (isSupabaseConfigured) {
    try {
      const supabase = await createClient();
      const { data } = await supabase.auth.getUser();
      userId = data.user?.id ?? null;
    } catch {
      userId = null;
    }
  }

  const base = { ...result.data, ip_hash: ipHash };
  const table = tables[formType];

  if (formType === 'newsletter') {
    // Idempotent: re-subscribing reactivates an unsubscribed address without duplicating rows.
    const { error } = await admin
      .from(table)
      .upsert(
        { ...base, status: 'subscribed', unsubscribed_at: null, subscribed_at: new Date().toISOString() },
        { onConflict: 'email', ignoreDuplicates: false },
      );
    if (error && error.code !== '23505') {
      console.error('newsletter insert failed', error.message);
      return json({ ok: false, error: 'Could not subscribe. Please try again.' }, 500);
    }
    return json({ ok: true });
  }

  const row =
    formType === 'comment'
      ? { ...base, user_id: userId }
      : { ...base, user_id: userId, user_agent: req.headers.get('user-agent')?.slice(0, 300) ?? null };

  const { error } = await admin.from(table).insert(row);
  if (error) {
    console.error(`${formType} insert failed`, error.message);
    return json({ ok: false, error: 'Could not save your submission. Please try again.' }, 500);
  }

  return json({ ok: true });
}
