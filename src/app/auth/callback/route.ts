import { NextRequest, NextResponse } from 'next/server';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

/** Only allow same-site relative redirects (prevents open redirects). */
const safeNext = (value: string | null) => (value && value.startsWith('/') && !value.startsWith('//') ? value : '/account');

/** OAuth (Google) and email-confirmation links land here with a `code` to exchange for a session. */
export async function GET(req: NextRequest) {
  const { searchParams, origin } = req.nextUrl;
  const next = safeNext(searchParams.get('next'));
  const code = searchParams.get('code');

  if (isSupabaseConfigured && code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth`);
}
