-- Arlo Technologies: forms, newsletter, auth profiles and rate limiting.
-- Run in the Supabase SQL editor (or `supabase db push`).
-- Form tables are write-only from the public site: RLS is enabled with no
-- anonymous insert policies, and inserts happen in server API routes via the service role.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------- helpers
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------- profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select to authenticated using (id = auth.uid());

-- Users may edit their own name/avatar but never their role.
create or replace function public.current_user_role()
returns text language sql stable security definer set search_path = public as $$
  select role from public.profiles where id = auth.uid()
$$;

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update to authenticated
  using (id = auth.uid())
  with check (id = auth.uid() and role = public.current_user_role());

-- ---------------------------------------------------------------- contact
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  user_id uuid references auth.users (id) on delete set null,
  full_name text not null check (char_length(full_name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  phone text check (char_length(phone) <= 40),
  company text check (char_length(company) <= 160),
  enquiry_type text check (char_length(enquiry_type) <= 120),
  timeline text check (char_length(timeline) <= 120),
  message text check (char_length(message) <= 5000),
  source text not null default 'contact-page',
  extra jsonb not null default '{}'::jsonb,
  status text not null default 'new' check (status in ('new', 'in_progress', 'resolved', 'spam')),
  ip_hash text,
  user_agent text
);
create index if not exists contact_submissions_created_idx on public.contact_submissions (created_at desc);
create index if not exists contact_submissions_email_idx on public.contact_submissions (lower(email));
drop trigger if exists contact_submissions_updated_at on public.contact_submissions;
create trigger contact_submissions_updated_at before update on public.contact_submissions
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------- newsletter
create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null check (char_length(email) between 3 and 254),
  status text not null default 'subscribed' check (status in ('subscribed', 'unsubscribed')),
  source text not null default 'website',
  unsubscribe_token uuid not null default gen_random_uuid(),
  subscribed_at timestamptz not null default now(),
  unsubscribed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  ip_hash text
);
-- Emails are lower-cased by the API, so a plain unique index supports upsert(onConflict: 'email').
create unique index if not exists newsletter_email_unique on public.newsletter_subscribers (email);
create unique index if not exists newsletter_token_unique on public.newsletter_subscribers (unsubscribe_token);
drop trigger if exists newsletter_updated_at on public.newsletter_subscribers;
create trigger newsletter_updated_at before update on public.newsletter_subscribers
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------- support
create table if not exists public.support_tickets (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  user_id uuid references auth.users (id) on delete set null,
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  subject text check (char_length(subject) <= 200),
  message text not null check (char_length(message) between 1 and 5000),
  priority text not null default 'normal' check (priority in ('low', 'normal', 'high', 'urgent')),
  status text not null default 'open' check (status in ('open', 'in_progress', 'resolved', 'closed', 'spam')),
  source text not null default 'support-page',
  ip_hash text,
  user_agent text
);
create index if not exists support_tickets_created_idx on public.support_tickets (created_at desc);
drop trigger if exists support_tickets_updated_at on public.support_tickets;
create trigger support_tickets_updated_at before update on public.support_tickets
  for each row execute function public.set_updated_at();

alter table public.support_tickets enable row level security;
drop policy if exists "support_tickets_select_own" on public.support_tickets;
create policy "support_tickets_select_own" on public.support_tickets
  for select to authenticated using (user_id = auth.uid());

-- ---------------------------------------------------------------- careers
create table if not exists public.career_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  user_id uuid references auth.users (id) on delete set null,
  full_name text not null check (char_length(full_name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  phone text check (char_length(phone) <= 40),
  position text not null check (char_length(position) <= 160),
  education text check (char_length(education) <= 200),
  experience_level text check (char_length(experience_level) <= 80),
  weekly_availability text check (char_length(weekly_availability) <= 120),
  cover_note text check (char_length(cover_note) <= 5000),
  portfolio_url text check (char_length(portfolio_url) <= 500),
  extra jsonb not null default '{}'::jsonb,
  status text not null default 'received' check (status in ('received', 'reviewing', 'shortlisted', 'rejected', 'hired', 'spam')),
  ip_hash text,
  user_agent text
);
create index if not exists career_applications_created_idx on public.career_applications (created_at desc);
drop trigger if exists career_applications_updated_at on public.career_applications;
create trigger career_applications_updated_at before update on public.career_applications
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------- blog comments
create table if not exists public.blog_comments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  post_slug text not null check (char_length(post_slug) <= 200),
  user_id uuid references auth.users (id) on delete set null,
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  message text not null check (char_length(message) between 1 and 3000),
  approved boolean not null default false,
  ip_hash text
);
create index if not exists blog_comments_post_idx on public.blog_comments (post_slug, created_at desc) where approved;
drop trigger if exists blog_comments_updated_at on public.blog_comments;
create trigger blog_comments_updated_at before update on public.blog_comments
  for each row execute function public.set_updated_at();

alter table public.blog_comments enable row level security;
-- Approved comments are publicly readable. Column privileges below hide email/ip_hash.
drop policy if exists "blog_comments_read_approved" on public.blog_comments;
create policy "blog_comments_read_approved" on public.blog_comments
  for select to anon, authenticated using (approved);
revoke select on public.blog_comments from anon, authenticated;
grant select (id, created_at, post_slug, name, message) on public.blog_comments to anon, authenticated;

-- ---------------------------------------------------------------- rate limiting
create table if not exists public.rate_limits (
  key text not null,
  window_start timestamptz not null,
  count integer not null default 0,
  primary key (key, window_start)
);

-- Atomic fixed-window limiter. Returns true while the caller is within the limit.
create or replace function public.check_rate_limit(p_key text, p_limit integer, p_window_seconds integer)
returns boolean
language plpgsql security definer set search_path = public as $$
declare
  v_window timestamptz;
  v_count integer;
begin
  v_window := to_timestamp(floor(extract(epoch from now()) / p_window_seconds) * p_window_seconds);

  insert into public.rate_limits as r (key, window_start, count)
  values (p_key, v_window, 1)
  on conflict (key, window_start) do update set count = r.count + 1
  returning r.count into v_count;

  return v_count <= p_limit;
end;
$$;

create or replace function public.cleanup_rate_limits()
returns void language sql security definer set search_path = public as $$
  delete from public.rate_limits where window_start < now() - interval '1 day';
$$;

revoke all on function public.check_rate_limit(text, integer, integer) from public, anon, authenticated;
revoke all on function public.cleanup_rate_limits() from public, anon, authenticated;
grant execute on function public.check_rate_limit(text, integer, integer) to service_role;
grant execute on function public.cleanup_rate_limits() to service_role;

-- Lock the remaining tables down: only the service role (server routes) may touch them.
alter table public.contact_submissions enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.career_applications enable row level security;
alter table public.rate_limits enable row level security;
