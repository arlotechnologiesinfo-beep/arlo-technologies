import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

interface SitemapHeroProps {
  totalCount: number;
  categoryCount: number;
}

const SitemapHero = ({ totalCount, categoryCount }: SitemapHeroProps) => {
  return (
    <section className="pt-32 pb-12 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-24" aria-label="Sitemap Hero">
      <div className="main-container">
        <div className="mx-auto max-w-[880px] text-center space-y-6">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green !normal-case tracking-wider text-xs sm:text-sm uppercase font-semibold">
              EXPLORE THE ARLO ECOSYSTEM
            </span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal leading-tight">
              Every Path Leads to Possibility.
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[760px] text-base sm:text-lg md:text-xl text-secondary/75 dark:text-accent/75 leading-relaxed font-normal">
              Discover everything Arlo Technologies has to offer—from intelligent products and digital solutions to practical resources, customer support, and company information. Explore the map, follow your interests, and find the right destination in just a few clicks.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#sitemap-content"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md sm:btn-lg w-full sm:w-auto">
                Explore All Pages
              </a>
              <Link
                href="/contact-us"
                className="btn btn-outline-secondary dark:btn-outline-accent btn-md sm:btn-lg w-full sm:w-auto">
                Talk to Our Team
              </Link>
            </div>
          </RevealAnimation>

          {/* Quick Metrics Pill Bar */}
          <RevealAnimation delay={0.5}>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-tagline-2 text-secondary/70 dark:text-accent/70 border-t border-stroke-3/50 dark:border-stroke-7/50 mt-8">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary-500 animate-pulse"></span>
                <span><strong className="font-semibold text-secondary dark:text-accent">{categoryCount}</strong> Core Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500"></span>
                <span><strong className="font-semibold text-secondary dark:text-accent">{totalCount}</strong> Verified Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-blue-500"></span>
                <span>Instant Live Search</span>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SitemapHero;
