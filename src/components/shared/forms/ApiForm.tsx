'use client';

import { submitForm } from '@/lib/forms/submit';
import type { FormType } from '@/lib/forms/schemas';
import { FormEvent, ReactNode, useState } from 'react';

interface ApiFormProps {
  type: FormType;
  className?: string;
  /** Extra values merged into the payload (e.g. a blog post slug). */
  extra?: Record<string, unknown>;
  successMessage?: string;
  children: ReactNode;
}

/**
 * Drop-in <form> that posts its fields to /api/forms/<type> (Supabase) and shows the result.
 * Includes a hidden honeypot field. Usable from server components.
 */
const ApiForm = ({ type, className, extra, successMessage = 'Thank you! We have received your message.', children }: ApiFormProps) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') {
      return;
    }
    const form = e.currentTarget;
    const data: Record<string, unknown> = { ...extra };
    new FormData(form).forEach((value, key) => {
      if (typeof value === 'string') {
        data[key] = value;
      }
    });

    if (type === 'comment' && !data.postSlug) {
      data.postSlug = window.location.pathname.split('/').filter(Boolean).pop() ?? 'unknown';
    }

    setStatus('sending');
    const result = await submitForm(type, data);
    if (result.ok) {
      setStatus('done');
      setMessage(successMessage);
      form.reset();
    } else {
      setStatus('error');
      setMessage(result.error);
    }
  };

  return (
    <form onSubmit={onSubmit} className={className} aria-busy={status === 'sending'}>
      {children}
      {/* Honeypot: hidden from people, filled by bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status !== 'idle' && status !== 'sending' && (
        <p
          role="status"
          className={`text-tagline-2 mt-4 font-medium ${status === 'done' ? 'text-primary-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      {status === 'sending' && <p className="text-tagline-2 mt-4 opacity-70">Sending…</p>}
    </form>
  );
};

export default ApiForm;
