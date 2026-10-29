import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const dynamic = 'force-dynamic';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** One-click unsubscribe used in newsletter emails: /api/newsletter/unsubscribe?token=<uuid> */
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token') ?? '';
  const admin = createAdminClient();
  if (!UUID.test(token) || !admin) {
    return NextResponse.redirect(new URL('/?unsubscribed=error', req.url));
  }

  const { error } = await admin
    .from('newsletter_subscribers')
    .update({ status: 'unsubscribed', unsubscribed_at: new Date().toISOString() })
    .eq('unsubscribe_token', token);

  return NextResponse.redirect(new URL(`/?unsubscribed=${error ? 'error' : 'ok'}`, req.url));
}
