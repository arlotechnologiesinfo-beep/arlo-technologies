'use client';

import Link from 'next/link';
import { useState } from 'react';

const projectTypes = ['New Product (0 to 1)', 'Architecture Redesign', 'Autonomous AI Integration', 'Enterprise Scaling'];

export default function ContactSection() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative px-4 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28 border-t border-secondary/10 dark:border-accent/10">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center max-w-[840px] mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary-500 font-semibold block">
            Initiate Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary dark:text-accent leading-[1.12]">
            Building a complex product? Let’s make it clearer.
          </h2>
          <p className="text-base sm:text-lg text-secondary/70 dark:text-accent/70 leading-relaxed max-w-[620px] mx-auto">
            Tell us about what you are engineering, the stage of your product, and the primary technical or design
            challenge you want to solve.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="mx-auto max-w-[760px] rounded-3xl border border-secondary/10 dark:border-accent/10 bg-white/70 dark:bg-background-8/70 p-6 sm:p-10 lg:p-12 backdrop-blur-sm shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="size-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto text-2xl">
                &check;
              </div>
              <h3 className="text-2xl font-bold text-secondary dark:text-accent">Thank You</h3>
              <p className="text-sm text-secondary/70 dark:text-accent/70 max-w-[420px] mx-auto">
                Your message has been received. Our leadership and engineering team will review your project details and
                reply within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Type Selection Chips */}
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-secondary/60 dark:text-accent/60 block mb-3 font-semibold">
                  What are you building?
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-200 ${
                        selectedType === type
                          ? 'bg-dark-950 dark:bg-white text-white dark:text-dark-950 shadow-xs'
                          : 'border border-secondary/15 dark:border-accent/15 bg-white/60 dark:bg-background-7/60 text-secondary/80 dark:text-accent/80 hover:border-primary-500'
                      }`}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="hero-name" className="font-mono text-xs uppercase tracking-wider text-secondary/60 dark:text-accent/60 block mb-1.5 font-semibold">
                    Full Name *
                  </label>
                  <input
                    id="hero-name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="hero-contact-input"
                  />
                </div>
                <div>
                  <label htmlFor="hero-email" className="font-mono text-xs uppercase tracking-wider text-secondary/60 dark:text-accent/60 block mb-1.5 font-semibold">
                    Work Email *
                  </label>
                  <input
                    id="hero-email"
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="hero-contact-input"
                  />
                </div>
              </div>

              {/* Project Details textarea */}
              <div>
                <label htmlFor="hero-details" className="font-mono text-xs uppercase tracking-wider text-secondary/60 dark:text-accent/60 block mb-1.5 font-semibold">
                  Project Details & Key Objectives *
                </label>
                <textarea
                  id="hero-details"
                  required
                  rows={4}
                  placeholder="Tell us about your product, timeline, and current bottlenecks..."
                  className="hero-contact-input resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-secondary/10 dark:border-accent/10">
                <span className="font-mono text-xs text-secondary/50 dark:text-accent/50">
                  Or direct email:{' '}
                  <a
                    href="mailto:hello@arlotechnologies.in"
                    className="text-primary-500 hover:underline">
                    hello@arlotechnologies.in
                  </a>
                </span>

                <button
                  type="submit"
                  data-cursor-text="Send"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-dark-950 dark:bg-white text-white dark:text-dark-950 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md">
                  <span>Send Inquiry</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 pt-10 border-t border-secondary/10 dark:border-accent/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary/60 dark:text-accent/60">
          <p>Not made for the moment. Built for what follows.</p>
          <div className="flex items-center gap-6">
            <Link href="/portfolio" className="hover:text-primary-500 transition-colors">
              Portfolio
            </Link>
            <Link href="/services" className="hover:text-primary-500 transition-colors">
              Services
            </Link>
            <Link href="/sanraksha" className="hover:text-primary-500 transition-colors">
              Sanraksha
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
