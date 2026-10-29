'use client';

import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

const labelClass = 'text-tagline-2 text-secondary dark:text-accent block font-medium select-none';

/** Only same-site relative paths are allowed as post-login destinations. */
const safeNext = (value: string | null) => (value && value.startsWith('/') && !value.startsWith('//') ? value : '/account');

const AuthForm = ({ mode }: { mode: 'login' | 'signup' }) => {
  const router = useRouter();
  const params = useSearchParams();
  const next = safeNext(params.get('next'));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(params.get('error') ? 'Sign-in failed. Please try again.' : '');
  const [notice, setNotice] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) {
      return;
    }
    setError('');
    setNotice('');

    if (!isSupabaseConfigured) {
      setError('Sign-in is not configured yet.');
      return;
    }

    const form = new FormData(e.currentTarget);
    const email = String(form.get('email') ?? '').trim();
    const password = String(form.get('password') ?? '');

    if (mode === 'signup') {
      if (password.length < 8) {
        setError('Password must be at least 8 characters.');
        return;
      }
      if (password !== String(form.get('confirm') ?? '')) {
        setError('Passwords do not match.');
        return;
      }
    }

    setBusy(true);
    const supabase = createClient();

    if (mode === 'login') {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (signInError) {
        setError(signInError.message);
        return;
      }
      router.replace(next);
      router.refresh();
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: String(form.get('username') ?? '').trim() },
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
    setBusy(false);
    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    if (data.session) {
      router.replace(next);
      router.refresh();
    } else {
      setNotice('Check your inbox to confirm your email address, then log in.');
    }
  };

  const forgotPassword = async (formEl: HTMLFormElement | null) => {
    const email = String(new FormData(formEl ?? undefined).get('email') ?? '').trim();
    if (!email) {
      setError('Enter your email above first.');
      return;
    }
    if (!isSupabaseConfigured) {
      setError('Sign-in is not configured yet.');
      return;
    }
    setError('');
    const { error: resetError } = await createClient().auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/account`,
    });
    if (resetError) {
      setError(resetError.message);
    } else {
      setNotice('If that email has an account, a reset link is on its way.');
    }
  };

  return (
    <form onSubmit={onSubmit} aria-busy={busy} className="mb-6">
      {mode === 'signup' && (
        <fieldset className="mb-4 space-y-2">
          <label htmlFor="username" className={labelClass}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            maxLength={60}
            autoComplete="name"
            className="auth-form-input"
            placeholder="Your name"
          />
        </fieldset>
      )}
      <fieldset className="mb-4 space-y-2">
        <label htmlFor="email" className={labelClass}>
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="auth-form-input"
          placeholder="Email address"
        />
      </fieldset>
      <fieldset className="mb-3 space-y-2">
        <label htmlFor="password" className={labelClass}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength={mode === 'signup' ? 8 : undefined}
          autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
          className="auth-form-input"
          placeholder="At least 8 characters"
        />
      </fieldset>
      {mode === 'signup' && (
        <fieldset className="mb-3 space-y-2">
          <label htmlFor="confirm" className={labelClass}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm"
            name="confirm"
            required
            autoComplete="new-password"
            className="auth-form-input"
            placeholder="Re-enter your password"
          />
        </fieldset>
      )}
      {mode === 'login' && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={(e) => forgotPassword(e.currentTarget.form)}
            className="text-tagline-2 text-secondary dark:text-accent font-medium underline">
            Forgot password?
          </button>
        </div>
      )}
      {error && (
        <p role="alert" className="text-tagline-2 mt-4 font-medium text-red-500">
          {error}
        </p>
      )}
      {notice && (
        <p role="status" className="text-tagline-2 text-primary-600 mt-4 font-medium">
          {notice}
        </p>
      )}
      <div className="mt-8">
        <button
          type="submit"
          disabled={busy}
          className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent w-full first-letter:uppercase before:content-none disabled:opacity-60">
          {busy ? 'Please wait…' : mode === 'login' ? 'Log In' : 'Sign up'}
        </button>
      </div>
      <p className="text-tagline-2 text-secondary dark:text-accent mt-6 flex items-center justify-center gap-1 text-center font-normal">
        {mode === 'login' ? 'Not registered yet?' : 'Already have an account?'}
        <Link href={mode === 'login' ? '/signup' : '/login'} className="text-tagline-1 footer-link-v2 font-medium">
          {mode === 'login' ? 'Create an Account' : 'Log In'}
        </Link>
      </p>
    </form>
  );
};

export default AuthForm;
