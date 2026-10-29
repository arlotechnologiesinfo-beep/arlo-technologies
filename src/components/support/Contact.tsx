'use client';

import { useState } from 'react';
import supportContact from '@public/images/ns-img-402.jpg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { submitForm } from '@/lib/forms/submit';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) {
      return;
    }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    setError('');
    const result = await submitForm('support', data);
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError(result.error);
    }
  };

  return (
    <section className="pt-[100px] pb-[100px] md:pb-[200px]" id="ticket-form">
      <div className="main-container">
        <div className="grid grid-cols-12 max-lg:gap-y-[100px] lg:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="mb-[70px] space-y-5 text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Support Ticket</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>Let&apos;s Get Your Request Moving.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[550px] leading-relaxed">
                    Share your question, technical issue, or project requirements with us. Provide as much detail as
                    you can so our team can review your request and get back to you with clear, practical guidance.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.4}>
              <figure className="w-full overflow-hidden rounded-[20px] lg:max-w-[595px]">
                <Image src={supportContact} className="size-full object-cover" alt="support-contact" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.5}>
              <form onSubmit={handleSubmit} className="dark:bg-background-8 rounded-[20px] bg-white p-6 lg:p-[42px]">
                {submitted && (
                  <div className="mb-6 rounded-xl border border-primary/30 bg-primary/10 p-4 text-tagline-2 text-secondary dark:text-accent">
                    <p className="font-semibold">Support request received.</p>
                    <p className="mt-1 text-sm text-secondary/80 dark:text-accent/80">
                      Our team will get back to you shortly. For anything urgent, reach out via our{' '}
                      <Link href="/contact-us" className="text-primary-500 underline font-medium">
                        Contact Us
                      </Link>{' '}
                      page.
                    </p>
                  </div>
                )}
                {error && (
                  <p role="alert" className="mb-6 text-tagline-2 font-medium text-red-500">
                    {error}
                  </p>
                )}
                <fieldset className="mb-8 space-y-2">
                  <label htmlFor="name" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 dark:text-accent shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                  />
                </fieldset>
                <fieldset className="mb-8 space-y-2">
                  <label htmlFor="email" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email address"
                    className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 placeholder:text-tagline-1 dark:text-accent placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                  />
                </fieldset>
                <fieldset className="space-y-2">
                  <label htmlFor="comment" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    Your Message
                  </label>
                  <textarea
                    name="comment"
                    id="comment"
                    required
                    placeholder="Describe your question, issue, or project requirements..."
                    className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 dark:text-accent shadow-1 block min-h-[115px] w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                    defaultValue={''}
                  />
                </fieldset>
                <fieldset className="mt-4 mb-4 flex items-center gap-2">
                  <label
                    htmlFor="agree-terms"
                    className="flex items-center gap-x-3"
                    aria-label="Agree to the terms and conditions">
                    <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                    <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                  </label>
                  <label
                    htmlFor="agree-terms"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                    I agree with the{' '}
                    <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full first-letter:uppercase before:content-none cursor-pointer">
                  Submit Support Request
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
