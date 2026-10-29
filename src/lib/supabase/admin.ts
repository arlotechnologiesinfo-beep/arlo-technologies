import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabaseUrl } from './env';

let client: SupabaseClient | null = null;

/**
 * Service-role client. Bypasses RLS, so it must only be used in server code
 * (API routes / server actions) and never imported from a client component.
 */
export function createAdminClient(): SupabaseClient | null {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return null;
  }
  client ??= createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
