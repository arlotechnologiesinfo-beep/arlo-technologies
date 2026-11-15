import Link from 'next/link';
import { ReactNode } from 'react';
import AuthGallery from './AuthGallery';

const BrandMark = () => (
  <Link href="/" className="flex items-center gap-2.5" aria-label="Arlo Technologies home">
    <span className="from-primary-500 to-primary-800 flex size-8 items-center justify-center rounded-lg bg-linear-to-br text-sm font-bold text-white">
      A
    </span>
    <span className="text-[15px] font-semibold tracking-tight text-slate-900">Arlo Technologies</span>
  </Link>
);

interface AuthShellProps {
  /** Which page this is; the header link points to the other one. */
  mode: 'login' | 'signup';
  children: ReactNode;
}

/** Shared split-screen layout for the login and sign-up pages. */
const AuthShell = ({ mode, children }: AuthShellProps) => {
  const isSignup = mode === 'signup';

  return (
    <main className="grid min-h-dvh bg-white md:grid-cols-[42fr_58fr] lg:grid-cols-2">
      <div className="hidden md:sticky md:top-0 md:block md:h-dvh">
        <AuthGallery />
      </div>
      <div className="from-primary-50/60 flex flex-col bg-linear-to-b to-white px-5 py-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <BrandMark />
          <p className="text-sm text-slate-500">
            <span className="hidden sm:inline">{isSignup ? 'Already a member? ' : 'New to Arlo? '}</span>
            <Link href={isSignup ? '/login' : '/signup'} className="text-primary-600 hover:text-primary-700 font-semibold">
              {isSignup ? 'Sign in' : 'Create account'}
            </Link>
          </p>
        </header>
        <div className="flex flex-1 items-center justify-center py-10">{children}</div>
      </div>
    </main>
  );
};

export default AuthShell;
