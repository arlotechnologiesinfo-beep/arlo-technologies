'use client';

import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import googleImage from '@public/images/icons/google.svg';
import Image from 'next/image';
import { useState } from 'react';

const SocialAuth = ({ next = '/account' }: { next?: string }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    if (!isSupabaseConfigured) {
      setError('Sign-in is not configured yet.');
      return;
    }
    setLoading(true);
    setError('');
    const { error: oauthError } = await createClient().auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}` },
    });
    if (oauthError) {
      setError(oauthError.message);
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={signInWithGoogle}
        disabled={loading}
        className="border-stroke-3 dark:border-stroke-7 hover:bg-primary-500 group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border px-8 py-3 transition-colors duration-500 ease-in-out disabled:opacity-60">
        <span className="block size-6">
          <Image src={googleImage} alt="" className="size-full" />
        </span>
        <span className="text-tagline-2 text-secondary dark:text-accent group-hover:text-accent font-medium transition-colors duration-500 ease-in-out">
          {loading ? 'Redirecting…' : 'Continue with Google'}
        </span>
      </button>
      {error && (
        <p role="alert" className="text-tagline-2 text-center text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default SocialAuth;
