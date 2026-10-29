import { appPackages } from '@/data/pricingData';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const AppPricing = () => {
  return (
    <section id="apps-software" className="py-16 md:py-24 bg-background-2 dark:bg-background-8 scroll-mt-24">
      <div className="main-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Build Your Next Product</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 sm:text-heading-2 font-normal">From Ideas to Working Products.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-2xl mx-auto">
              Whether you need to test a promising prototype or engineer a high-throughput multi-module system, we
              deliver with defined sprint milestones, clean code, and predictable execution.
            </p>
          </RevealAnimation>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {appPackages.map((pkg, index) => (
            <RevealAnimation key={pkg.id} delay={0.1 + index * 0.08}>
              <div className="flex flex-col justify-between h-full rounded-3xl p-6 sm:p-8 bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 hover:border-primary-500/40 hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="border-b border-stroke-3 dark:border-stroke-7 pb-6 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-heading-5 font-normal">{pkg.name}</h3>
                      <span className="text-[11px] font-mono text-secondary/60 dark:text-accent/60 uppercase">
                        Engineering
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-heading-3 font-normal text-secondary dark:text-accent tracking-tight">
                        {pkg.price}
                      </span>
                      {pkg.price !== 'Custom quote' && pkg.price !== '₹0' && (
                        <span className="text-xs text-secondary/60 dark:text-accent/60">starting price</span>
                      )}
                    </div>
                    <p className="text-tagline-2 text-primary-600 dark:text-primary-400 font-medium mt-1">
                      {pkg.bestFor}
                    </p>
                    <p className="text-tagline-3 text-secondary/70 dark:text-accent/70 mt-3 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-xs uppercase tracking-wider text-secondary/50 dark:text-accent/50 font-semibold">
                      Package Deliverables:
                    </p>
                    <ul className="space-y-2.5 text-tagline-2 text-secondary/80 dark:text-accent/80">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="shrink-0 mt-1 size-4 rounded-full bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={pkg.ctaHref}
                    className="btn btn-md btn-white dark:btn-white-dark hover:btn-primary dark:hover:btn-accent w-full text-center">
                    <span>{pkg.ctaText}</span>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Scope Note Banner */}
        <RevealAnimation delay={0.4}>
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 text-tagline-2 text-secondary/70 dark:text-accent/70 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="badge badge-yellow shrink-0">Note on Scope</span>
            <p className="leading-relaxed">
              These prices represent transparent entry points for typical scoping frameworks. Native Android/iOS mobile
              applications, complex real-time messaging, AI model deployments, and multi-tenant SaaS platforms are
              estimated following technical discovery to reflect exact architecture, infrastructure, and security
              needs.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AppPricing;
