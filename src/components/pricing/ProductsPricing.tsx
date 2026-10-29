import { arloProducts } from '@/data/pricingData';
import LinkButton from '../ui/button/LinkButton';
import RevealAnimation from '../animation/RevealAnimation';

const ProductsPricing = () => {
  return (
    <section id="arlo-products" className="py-16 md:py-24 scroll-mt-24">
      <div className="main-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Discover Arlo Products</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 sm:text-heading-2 font-normal">
              Powerful Tools. Start Free. Upgrade When Ready.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-2xl mx-auto">
              Explore individual Arlo products, each with its own dedicated subscription model, verified usage limits,
              and independent upgrade paths. Subscribe only to what you actually use.
            </p>
          </RevealAnimation>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {arloProducts.map((prod, index) => (
            <RevealAnimation key={prod.id} delay={0.1 + index * 0.1}>
              <div className="flex flex-col justify-between h-full rounded-3xl p-6 sm:p-8 bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 hover:border-primary-500/40 hover:shadow-lg transition-all duration-300">
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-stroke-3 dark:border-stroke-7 pb-5 mb-6">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400 font-semibold">
                        {prod.category}
                      </span>
                      <h3 className="text-heading-4 font-normal mt-1">{prod.name}</h3>
                      <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 mt-2">{prod.tagline}</p>
                    </div>
                    {prod.badge && (
                      <span
                        className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                          prod.status === 'available'
                            ? 'bg-ns-green/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                            : 'bg-ns-yellow/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                        }`}>
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  {/* Tiers List */}
                  <div className="space-y-4 mb-6">
                    <p className="text-xs uppercase tracking-wider text-secondary/50 dark:text-accent/50 font-semibold">
                      Available Plans &amp; Allowances:
                    </p>
                    <div className="space-y-3">
                      {prod.tiers.map((tier, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-semibold text-secondary dark:text-accent text-sm">{tier.name}</span>
                            <span className="font-semibold text-primary-600 dark:text-primary-400 text-sm">
                              {tier.price}
                            </span>
                          </div>
                          <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 font-medium">
                            {tier.allowance}
                          </p>
                          {tier.details && (
                            <p className="text-[11px] text-secondary/60 dark:text-accent/60 mt-1">{tier.details}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Notes */}
                  <div className="p-3.5 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 text-tagline-3 text-secondary/60 dark:text-accent/60 mb-6">
                    <strong className="text-secondary/80 dark:text-accent/80">Policy Note: </strong>
                    {prod.notes}
                  </div>
                </div>

                {/* Card Action */}
                <div>
                  <LinkButton
                    href={prod.ctaHref}
                    className="btn btn-md btn-primary w-full text-center shadow-md">
                    {prod.ctaText}
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Clear Separation Notice */}
        <RevealAnimation delay={0.4}>
          <div className="p-4 sm:p-5 rounded-2xl bg-background-2 dark:bg-background-8 text-center text-xs text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto border border-stroke-3 dark:border-stroke-7">
            Each Arlo product is independently architected. A subscription to one service does not imply or bundle
            unrestricted access to other tools, ensuring complete transparency and predictable infrastructure costs.
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProductsPricing;
