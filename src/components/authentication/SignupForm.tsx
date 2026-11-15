'use client';

import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import googleImage from '@public/images/icons/google.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';

/** Only same-site relative paths are allowed as post-signup destinations. */
export const safeNext =(value: string | null) => (value && value.startsWith('/') && !value.startsWith('//') ? value : '/account');

export const EMAIL_RE =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const strengthOf = (password: string) => {
  let score = 0;
  if (password.length >= 8) {score++;}
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {score++;}
  if (/\d/.test(password)) {score++;}
  if (/[^A-Za-z0-9]/.test(password)) {score++;}
  return password ? Math.max(1, score) : 0;
};
const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
const strengthColors = ['', 'bg-red-400', 'bg-amber-400', 'bg-primary-400', 'bg-emerald-500'];

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

const UserIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
export const MailIcon =() => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const LockIcon =() => (
  <svg {...iconProps}>
    <rect x="4" y="11" width="16" height="10" rx="3" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
export const EyeIcon =({ off }: { off: boolean }) => (
  <svg {...iconProps}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
    {off && <path d="m4 4 16 16" />}
  </svg>
);

export const inputClass =
  'peer h-12 w-full rounded-xl border border-slate-200 bg-white/80 pr-4 pl-11 text-[15px] text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15 aria-[invalid=true]:border-red-400 aria-[invalid=true]:focus:ring-red-400/15';

const linkClass = 'text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline';

interface FieldProps {
  id: string;
  label: string;
  icon: ReactNode;
  error?: string;
  trailing?: ReactNode;
  children: ReactNode;
}

export const Field = ({ id, label, icon, error, trailing, children }: FieldProps) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">
      {label}
    </label>
    <div className="relative">
      {children}
      <span className="peer-focus:text-primary-500 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400 transition-colors">
        {icon}
      </span>
      {trailing}
    </div>
    {error && (
      <p id={`${id}-error`} className="mt-1.5 text-[13px] text-red-500">
        {error}
      </p>
    )}
  </div>
);

type Values = { name: string; email: string; password: string; confirm: string };

const SignupForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const next = safeNext(params.get('next'));

  const [values, setValues] = useState<Values>({ name: '', email: '', password: '', confirm: '' });
  const [terms, setTerms] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [googleBusy, setGoogleBusy] = useState(false);
  const [error, setError] = useState(params.get('error') ? 'Sign-in failed. Please try again.' : '');
  const [notice, setNotice] = useState('');

  const strength = strengthOf(values.password);
  const errors = {
    name: values.name.trim() ? '' : 'Please enter your full name.',
    email: EMAIL_RE.test(values.email.trim()) ? '' : 'Enter a valid email address.',
    password: values.password.length >= 8 ? '' : 'Use at least 8 characters.',
    confirm: values.confirm && values.confirm === values.password ? '' : 'Passwords do not match.',
    terms: terms ? '' : 'Please accept the Terms and Privacy Policy.',
  };
  const shown = (key: keyof typeof errors) => (touched[key] ? errors[key] : '');
  const onChange = (key: keyof Values) => (e: ChangeEvent<HTMLInputElement>) => setValues((v) => ({ ...v, [key]: e.target.value }));
  const onBlur = (key: string) => () => setTouched((t) => ({ ...t, [key]: true }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) {
      return;
    }
    setError('');
    setNotice('');
    setTouched({ name: true, email: true, password: true, confirm: true, terms: true });
    if (Object.values(errors).some(Boolean)) {
      return;
    }
    if (!isSupabaseConfigured) {
      setError('Sign-up is not configured yet.');
      return;
    }

    setBusy(true);
    const { data, error: signUpError } = await createClient().auth.signUp({
      email: values.email.trim(),
      password: values.password,
      options: {
        data: { full_name: values.name.trim() },
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
      setNotice('Account created. Check your inbox to confirm your email address, then sign in.');
    }
  };

  const signInWithGoogle = async () => {
    if (!isSupabaseConfigured) {
      setError('Sign-up is not configured yet.');
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

  return (
    <div className="w-full max-w-[440px]">
      <h1 className="text-[32px] leading-tight font-semibold tracking-tight text-slate-900 sm:text-4xl">Create your account</h1>
      <p className="mt-2 text-[15px] text-slate-500">Join Arlo Technologies and start building something extraordinary.</p>

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
        <Field id="name" label="Full name" icon={<UserIcon />} error={shown('name')}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Cooper"
            value={values.name}
            onChange={onChange('name')}
            onBlur={onBlur('name')}
            aria-invalid={!!shown('name')}
            aria-describedby={shown('name') ? 'name-error' : undefined}
            className={inputClass}
          />
        </Field>

        <Field id="email" label="Email address" icon={<MailIcon />} error={shown('email')}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={onChange('email')}
            onBlur={onBlur('email')}
            aria-invalid={!!shown('email')}
            aria-describedby={shown('email') ? 'email-error' : undefined}
            className={inputClass}
          />
        </Field>

        <div>
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
              autoComplete="new-password"
              placeholder="At least 8 characters"
              value={values.password}
              onChange={onChange('password')}
              onBlur={onBlur('password')}
              aria-invalid={!!shown('password')}
              aria-describedby={shown('password') ? 'password-error' : 'password-strength'}
              className={`${inputClass} pr-12`}
            />
          </Field>
          <div id="password-strength" className="mt-2.5 flex items-center gap-3" aria-live="polite">
            <div className="flex flex-1 gap-1.5">
              {[1, 2, 3, 4].map((n) => (
                <span
                  key={n}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${n <= strength ? strengthColors[strength] : 'bg-slate-200'}`}
                />
              ))}
            </div>
            <span className="w-12 text-right text-xs font-medium text-slate-500">{strengthLabels[strength]}</span>
          </div>
        </div>

        <Field id="confirm" label="Confirm password" icon={<LockIcon />} error={shown('confirm')}>
          <input
            id="confirm"
            name="confirm"
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder="Re-enter your password"
            value={values.confirm}
            onChange={onChange('confirm')}
            onBlur={onBlur('confirm')}
            aria-invalid={!!shown('confirm')}
            aria-describedby={shown('confirm') ? 'confirm-error' : undefined}
            className={inputClass}
          />
        </Field>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => {
                setTerms(e.target.checked);
                setTouched((t) => ({ ...t, terms: true }));
              }}
              aria-invalid={!!shown('terms')}
              className="accent-primary-600 mt-0.5 size-[18px] shrink-0 cursor-pointer rounded"
            />
            <span>
              I agree to the{' '}
              <Link href="/terms-conditions" className={linkClass}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className={linkClass}>
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {shown('terms') && <p className="mt-1.5 text-[13px] text-red-500">{errors.terms}</p>}
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
          {busy ? 'Creating account…' : 'Create account'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold underline-offset-2 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
