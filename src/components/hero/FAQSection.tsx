'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Are you a good fit if I’m looking for the lowest-cost option?',
    answer:
      'Probably not. We focus on engineering rigor, structural clarity, high velocity, and scalable architectures — not low-cost rushed production. We partner with founders and technical leaders who value craft, reliability, and tangible business impact.',
  },
  {
    question: 'How quickly can we start working together?',
    answer:
      'Depending on current studio capacity and the scope of work, we typically kick off engagements within 1 to 2 weeks following initial discovery alignment and scope finalization.',
  },
  {
    question: 'Do you handle both product design and full-stack engineering?',
    answer:
      'Yes. We are an end-to-end product design and engineering studio. We handle everything from system architecture, UX wireframes, and design systems to full-stack Next.js, TypeScript, cloud microservices, and mobile security vault implementations.',
  },
  {
    question: 'How do you coordinate and communicate during sprints?',
    answer:
      'We embed directly into your workflow via dedicated Slack or Discord channels, weekly async video demos or live alignment syncs, and transparent task tracking on shared sprint boards.',
  },
  {
    question: 'What happens after our product is launched?',
    answer:
      'We provide complete documentation, deployment runbooks, and a 30-day post-launch warranty period. Many clients also transition directly into our Ongoing Product Partner model for continuous iteration and scaling.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative px-4 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28 border-t border-secondary/10 dark:border-accent/10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column / Header */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary-500 font-semibold block">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary dark:text-accent leading-[1.15]">
              Read the FAQs
            </h2>
            <p className="text-base text-secondary/70 dark:text-accent/70 leading-relaxed max-w-[420px]">
              Everything you need to know about partnering with Arlo Technologies, our engineering standards, and how we
              collaborate.
            </p>
          </div>

          {/* Right Column / Accordion */}
          <div className="lg:col-span-7 divide-y divide-secondary/10 dark:divide-accent/10">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={faq.question} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left font-sans text-lg font-bold text-secondary dark:text-accent hover:text-primary-500 transition-colors">
                    <span>{faq.question}</span>
                    <span className="font-mono text-xl text-primary-500 shrink-0 transition-transform duration-300">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}>
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base text-secondary/70 dark:text-accent/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
