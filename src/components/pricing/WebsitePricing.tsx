import { websitePlans } from '@/data/pricingData';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const WebsitePricing = () => {
  return (
    <section id="websites" className="py-16 md:py-24 scroll-mt-24">
      <div className="main-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Websites &amp; Digital Experiences</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 sm:text-heading-2 font-normal">Build Your Digital Presence.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-2xl mx-auto">
              From your first online presence to your next stage of growth. Choose a starting plan that fits your goals,
              with clear one-time project fees and no hidden development surprises.
            </p>
          </RevealAnimation>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {websitePlans.map((plan, index) => (
            <RevealAnimation key={plan.id} delay={0.1 + index * 0.08}>
              <div
                className={`relative flex flex-col justify-between h-full rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-background-1 dark:bg-background-6 border-2 border-primary-500 shadow-xl lg:-translate-y-2'
                    : 'bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 hover:border-primary-500/30 hover:shadow-lg'
                }`}>
                {/* Recommended Tag */}
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-500 text-white shadow-md uppercase tracking-wider">
                      Most Popular &bull; Recommended
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="border-b border-stroke-3 dark:border-stroke-7 pb-6 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-heading-5 font-normal">{plan.name}</h3>
                      <span className="text-[11px] font-mono text-secondary/60 dark:text-accent/60 uppercase">
                        One-Time
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-heading-3 sm:text-heading-2 font-normal text-secondary dark:text-accent tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-secondary/60 dark:text-accent/60">{plan.priceDetail}</span>
                    </div>
                    <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 mt-3 leading-relaxed">
                      <strong className="font-medium text-secondary dark:text-accent">Best For:</strong> {plan.forText}
                    </p>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-4 mb-6">
                    <p className="text-xs uppercase tracking-wider text-secondary/50 dark:text-accent/50 font-semibold">
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2.5 text-tagline-2 text-secondary/80 dark:text-accent/80">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="shrink-0 mt-1 size-4 rounded-full bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions / Limitations Callout */}
                  {plan.exclusions && (
                    <div className="mb-6 p-3 rounded-xl bg-background-2 dark:bg-background-8 text-[11px] text-secondary/60 dark:text-accent/60 border border-stroke-3 dark:border-stroke-7">
                      <span className="font-semibold text-secondary/80 dark:text-accent/80">Scope Note: </span>
                      {plan.exclusions}
                    </div>
                  )}
                </div>

                {/* Plan Action CTA */}
                <div className="pt-4">
                  <Link
                    href={plan.ctaHref}
                    className={`btn btn-md w-full text-center ${
                      plan.recommended
                        ? 'btn-primary'
                        : 'btn-white dark:btn-white-dark hover:btn-primary dark:hover:btn-accent'
                    }`}>
                    <span>{plan.ctaText}</span>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitePricing;
