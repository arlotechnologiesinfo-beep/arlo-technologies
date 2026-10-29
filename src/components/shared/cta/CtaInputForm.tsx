'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import { submitForm } from '@/lib/forms/submit';

interface CtaInputFormProps {
  btnClass?: string;
  ctaBtnText?: string;
  inputFieldClass?: string;
}

const CtaInputForm = ({ btnClass, ctaBtnText = 'Get Started', inputFieldClass }: CtaInputFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      return;
    }
    setError('');
    const result = await submitForm('newsletter', { email, source: 'cta' });
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-full bg-primary-500/10 border border-primary-500/30 px-6 py-3.5 text-center">
        <p className="text-tagline-2 text-primary-600 dark:text-primary-400 font-medium">
          ✓ Thank you! We&apos;ve received your request.
        </p>
      </div>
    );
  }

  return (
    <RevealAnimation delay={0.4}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start gap-3 md:flex-row"
        aria-label="cta-form">
        <input
          type="email"
          name="email"
          id="userEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={cn(
            'placeholder:text-secondary/50 border-stroke-1 dark:border-stroke-7 dark:placeholder:text-accent/60 text-secondary dark:text-accent focus-visible:outline-stroke-7 focus:border-primary-600 dark:focus:border-primary-400 h-12 w-[85%] rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none focus-visible:outline-1 md:w-[430px] lg:w-[340px]',
            inputFieldClass,
          )}
          aria-label="cta-input"
        />
        <button
          type="submit"
          className={cn(
            'btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent h-12 w-[85%] md:w-auto cursor-pointer',
            btnClass,
          )}
          aria-label="cta-button">
          <span>{ctaBtnText}</span>
        </button>
        {error && (
          <p role="alert" className="text-tagline-2 text-red-500">
            {error}
          </p>
        )}
      </form>
    </RevealAnimation>
  );
};
CtaInputForm.displayName = 'CtaInputForm';

export default CtaInputForm;
