'use client';

import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import googleImage from '@public/images/icons/google.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { EMAIL_RE, EyeIcon, Field, LockIcon, MailIcon, inputClass, safeNext } from './SignupForm';

const LoginForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const next = safeNext(params.get('next'));

  const [values, setValues] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [googleBusy, setGoogleBusy] = useState(false);
  const [error, setError] = useState(params.get('error') ? 'Sign-in failed. Please try again.' : '');
  const [notice, setNotice] = useState('');

  const errors = {
    email: EMAIL_RE.test(values.email.trim()) ? '' : 'Enter a valid email address.',
    password: values.password ? '' : 'Enter your password.',
  };
  const shown = (key: keyof typeof errors) => (touched[key] ? errors[key] : '');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) {
      return;
    }
    setError('');
    setNotice('');
    setTouched({ email: true, password: true });
    if (Object.values(errors).some(Boolean)) {
      return;
    }
    if (!isSupabaseConfigured) {
      setError('Sign-in is not configured yet.');
      return;
    }

    setBusy(true);
    const { error: signInError } = await createClient().auth.signInWithPassword({
      email: values.email.trim(),
      password: values.password,
    });
    setBusy(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    router.replace(next);
    router.refresh();
  };

  const signInWithGoogle = async () => {
    if (!isSupabaseConfigured) {
      setError('Sign-in is not configured yet.');
      return;
    }
    setGoogleBusy(true);
    setError('');
    const { error: oauthError } = await createClient().auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}` },
    });
    if (oauthError) {
      setError(oauthError.message);
      setGoogleBusy(false);
    }
  };

  const forgotPassword = async () => {
    setError('');
    setNotice('');
    if (!EMAIL_RE.test(values.email.trim())) {
      setTouched((t) => ({ ...t, email: true }));
      setError('Enter your email above first.');
      return;
    }
    if (!isSupabaseConfigured) {
      setError('Sign-in is not configured yet.');
      return;
    }
    const { error: resetError } = await createClient().auth.resetPasswordForEmail(values.email.trim(), {
      redirectTo: `${window.location.origin}/auth/callback?next=/account`,
    });
    if (resetError) {
      setError(resetError.message);
    } else {
      setNotice('If that email has an account, a reset link is on its way.');
    }
  };

  return (
    <div className="w-full max-w-[440px]">
      <h1 className="text-[32px] leading-tight font-semibold tracking-tight text-slate-900 sm:text-4xl">Welcome back</h1>
      <p className="mt-2 text-[15px] text-slate-500">Sign in to your Arlo Technologies account to continue.</p>

      <button
        type="button"
        onClick={signInWithGoogle}
        disabled={googleBusy}
        className="focus-visible:ring-primary-500/20 mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-[15px] font-medium text-slate-800 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md focus-visible:ring-4 focus-visible:outline-none disabled:opacity-60">
        <Image src={googleImage} alt="" className="size-5" />
        {googleBusy ? 'Redirecting…' : 'Continue with Google'}
      </button>

      <div className="my-6 flex items-center gap-4" role="separator">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="text-[11px] font-medium tracking-[0.14em] text-slate-400">OR CONTINUE WITH EMAIL</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <form onSubmit={onSubmit} noValidate aria-busy={busy} className="space-y-4">
        <Field id="email" label="Email address" icon={<MailIcon />} error={shown('email')}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            aria-invalid={!!shown('email')}
            aria-describedby={shown('email') ? 'email-error' : undefined}
            className={inputClass}
          />
        </Field>

        <Field
          id="password"
          label="Password"
          icon={<LockIcon />}
          error={shown('password')}
          trailing={
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
              className="hover:text-primary-600 focus-visible:ring-primary-500/40 absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition-colors focus-visible:ring-2 focus-visible:outline-none">
              <EyeIcon off={showPassword} />
            </button>
          }>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Your password"
            value={values.password}
            onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
            aria-invalid={!!shown('password')}
            aria-describedby={shown('password') ? 'password-error' : undefined}
            className={`${inputClass} pr-12`}
          />
        </Field>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={forgotPassword}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium underline-offset-2 hover:underline">
            Forgot password?
          </button>
        </div>

        {error && (
          <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}
        {notice && (
          <p role="status" className="border-primary-200 bg-primary-50 text-primary-800 rounded-xl border px-4 py-3 text-sm">
            {notice}
          </p>
        )}

        <button
          type="submit"
          disabled={busy}
          className="from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700 focus-visible:ring-primary-500/30 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(8,79,194,0.7)] transition-all duration-200 hover:-translate-y-px focus-visible:ring-4 focus-visible:outline-none active:translate-y-0 disabled:translate-y-0 disabled:opacity-70">
          {busy && <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />}
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        New to Arlo Technologies?{' '}
        <Link href="/signup" className="text-primary-600 hover:text-primary-700 font-semibold underline-offset-2 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
