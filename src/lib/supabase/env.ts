export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
export const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '';

/** True when the public Supabase credentials are present (auth + session refresh can run). */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/** True when server-side form storage can run (needs the secret service-role key). */
export const isSupabaseAdminConfigured = () =>
  Boolean(supabaseUrl && process.env.SUPABASE_SERVICE_ROLE_KEY);
