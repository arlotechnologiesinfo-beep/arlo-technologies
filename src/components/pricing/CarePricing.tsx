import { carePlans } from '@/data/pricingData';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const CarePricing = () => {
  return (
    <section id="ongoing-care" className="py-16 md:py-24 bg-background-2 dark:bg-background-8 scroll-mt-24">
      <div className="main-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Keep Your Digital Business Moving</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 sm:text-heading-2 font-normal">
              More Than a Launch. A Partner for What Comes Next.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-2xl mx-auto">
              Give your digital product or website dependable ongoing care. Predictable monthly plans with clearly
              defined support hours, routine maintenance, and guaranteed response windows.
            </p>
          </RevealAnimation>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
          {carePlans.map((plan, index) => (
            <RevealAnimation key={plan.id} delay={0.08 + index * 0.06}>
              <div
                className={`relative flex flex-col justify-between h-full rounded-3xl p-5 sm:p-6 transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-background-1 dark:bg-background-6 border-2 border-primary-500 shadow-xl'
                    : 'bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 hover:border-primary-500/30 hover:shadow-md'
                }`}>
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-semibold bg-primary-500 text-white shadow-xs uppercase tracking-wider">
                      Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-stroke-3 dark:border-stroke-7 pb-4 mb-4">
                    <h3 className="text-heading-6 font-normal mb-1">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-heading-4 font-normal text-secondary dark:text-accent tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-[11px] text-secondary/60 dark:text-accent/60">{plan.period}</span>
                    </div>
                    <p className="text-[12px] text-secondary/70 dark:text-accent/70 mt-2 leading-relaxed">
                      {plan.forText}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-[11px] uppercase tracking-wider text-secondary/50 dark:text-accent/50 font-semibold">
                      Included Care:
                    </p>
                    <ul className="space-y-2 text-[12px] text-secondary/80 dark:text-accent/80">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="shrink-0 mt-0.5 size-3.5 rounded-full bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center text-[10px]">
                            ✓
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={plan.ctaHref}
                    className={`btn btn-sm w-full text-center text-xs ${
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

        {/* Commitment statement */}
        <RevealAnimation delay={0.35}>
          <div className="p-5 rounded-2xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 max-w-4xl mx-auto text-tagline-2 text-secondary/70 dark:text-accent/70 text-center">
            <strong className="text-secondary dark:text-accent">No Lock-in Commitment: </strong>
            All ongoing care plans operate on month-to-month billing. You can pause, scale, or cancel your maintenance
            plan with a simple 15-day notice before your next monthly billing date.
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CarePricing;
