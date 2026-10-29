'use client';

import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface CategoryNav {
  label: string;
  href: string;
  badge?: string;
}

const categoryNavs: CategoryNav[] = [
  { label: 'Websites & Experiences', href: '#websites' },
  { label: 'Apps & Custom Software', href: '#apps-software' },
  { label: 'Arlo Products', href: '#arlo-products', badge: 'Subscriptions' },
  { label: 'Ongoing Care', href: '#ongoing-care' },
  { label: 'Pricing FAQs', href: '#faq' },
];

const PricingHero = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="pt-32 pb-12 sm:pt-36 md:pt-40 lg:pt-44 lg:pb-16 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan font-mono tracking-wider uppercase text-xs">
              DIGITAL SOLUTIONS. CLEAR PRICING.
            </span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-2 sm:text-heading-1 font-normal tracking-tight">
              One Partner. Multiple Ways to Build.
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 sm:text-tagline-2 max-w-3xl mx-auto leading-relaxed">
              From your first website to a custom digital product, Arlo Technologies helps you choose the right starting
              point, build with confidence, and grow at your own pace. Transparent pricing in Indian Rupees with zero
              hidden costs.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#websites"
                onClick={(e) => handleScrollTo(e, '#websites')}
                className="btn btn-primary btn-md">
                <span>Explore Pricing</span>
              </a>
              <Link href="/contact-us" className="btn btn-white dark:btn-white-dark btn-md">
                <span>Discuss Your Project</span>
              </Link>
            </div>
          </RevealAnimation>

          {/* Quick Category Anchor Pills */}
          <RevealAnimation delay={0.5}>
            <div className="pt-8">
              <p className="text-xs uppercase tracking-wider text-secondary/50 dark:text-accent/50 mb-3 font-medium">
                Jump to Category
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {categoryNavs.map((nav) => (
                  <a
                    key={nav.href}
                    href={nav.href}
                    onClick={(e) => handleScrollTo(e, nav.href)}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 text-secondary/80 dark:text-accent/80 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/40 transition-all shadow-xs">
                    <span>{nav.label}</span>
                    {nav.badge && (
                      <span className="text-[10px] uppercase tracking-wide bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 px-1.5 py-0.5 rounded-full font-semibold">
                        {nav.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
