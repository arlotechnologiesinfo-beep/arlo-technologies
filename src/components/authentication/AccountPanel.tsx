'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

interface AccountPanelProps {
  email: string;
  name: string;
  role: string;
}

const AccountPanel = ({ email, name, role }: AccountPanelProps) => {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const signOut = async () => {
    await createClient().auth.signOut();
    router.replace('/login');
    router.refresh();
  };

  const changePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setMessage('');
    const form = e.currentTarget;
    const password = String(new FormData(form).get('password') ?? '');
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    const { error: updateError } = await createClient().auth.updateUser({ password });
    if (updateError) {
      setError(updateError.message);
    } else {
      setMessage('Password updated.');
      form.reset();
    }
  };

  return (
    <div className="bg-background-1 dark:bg-background-6 mx-auto max-w-[480px] space-y-8 rounded-[20px] px-8 py-12">
      <div className="space-y-1">
        <h1 className="text-heading-5 font-normal">{name || 'Your account'}</h1>
        <p className="text-tagline-2 text-secondary/70 dark:text-accent/70">{email}</p>
        <span className="badge badge-green !normal-case">{role}</span>
      </div>

      <form onSubmit={changePassword} className="space-y-3">
        <label htmlFor="new-password" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
          Change password
        </label>
        <input
          id="new-password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
          className="auth-form-input"
          placeholder="New password (min 8 characters)"
        />
        {error && (
          <p role="alert" className="text-tagline-2 text-red-500">
            {error}
          </p>
        )}
        {message && (
          <p role="status" className="text-tagline-2 text-primary-600">
            {message}
          </p>
        )}
        <button type="submit" className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent w-full">
          Update password
        </button>
      </form>

      <button
        type="button"
        onClick={signOut}
        className="btn btn-md w-full border-stroke-3 dark:border-stroke-7 border">
        Sign out
      </button>
    </div>
  );
};

export default AccountPanel;
