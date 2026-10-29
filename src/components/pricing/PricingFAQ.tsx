'use client';

import { FAQItem, pricingFAQs } from '@/data/pricingData';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>('all');

  const filteredFAQs =
    filter === 'all' ? pricingFAQs : pricingFAQs.filter((faq) => faq.category === filter || faq.category === 'general');

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-24">
      <div className="main-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-10 md:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Transparent Pricing</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 sm:text-heading-2 font-normal">Frequently Asked Questions</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-2xl mx-auto">
              Clear answers to the most common questions regarding our packages, billing, included scope, and payment
              terms.
            </p>
          </RevealAnimation>
        </div>

        {/* Filter Chips */}
        <RevealAnimation delay={0.35}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'websites', label: 'Websites' },
              { id: 'apps', label: 'Apps & Engineering' },
              { id: 'care', label: 'Ongoing Care' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setFilter(tab.id);
                  setOpenIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-primary-500 text-white shadow-xs'
                    : 'bg-background-2 dark:bg-background-8 text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent border border-stroke-3 dark:border-stroke-7'
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </RevealAnimation>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFAQs.map((faq: FAQItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <RevealAnimation key={index} delay={0.08 + index * 0.04}>
                <div className="rounded-2xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 overflow-hidden transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 focus:outline-hidden hover:bg-background-1 dark:hover:bg-background-7 transition-colors">
                    <span className="text-tagline-1 font-medium text-secondary dark:text-accent pr-2">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 size-7 rounded-full flex items-center justify-center text-sm font-semibold transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-primary-500 text-white'
                          : 'bg-background-2 dark:bg-background-8 text-secondary/70 dark:text-accent/70 border border-stroke-3 dark:border-stroke-7'
                      }`}>
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-tagline-2 text-secondary/70 dark:text-accent/70 border-t border-stroke-3/50 dark:border-stroke-7/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
