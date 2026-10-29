import { Metadata } from 'next';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';
import SitemapHero from '@/components/sitemap/SitemapHero';
import SitemapExplorer from '@/components/sitemap/SitemapExplorer';
import { allSitemapItems, sitemapCategories } from '@/data/sitemapData';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sitemap | Explore the Arlo Technologies Ecosystem',
  description:
    'Discover everything Arlo Technologies has to offer—from intelligent products and digital solutions to practical resources, customer support, and company information.',
  alternates: {
    canonical: 'https://arlotechnologies.com/sitemap',
  },
};

const SitemapPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen">
      <SitemapHero totalCount={allSitemapItems.length} categoryCount={sitemapCategories.length} />
      <SitemapExplorer />

      {/* Assistance CTA Section */}
      <section className="pb-24 sm:pb-32" aria-label="Sitemap Assistance">
        <div className="main-container">
          <RevealAnimation delay={0.2}>
            <div className="rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-8 sm:p-12 text-center space-y-6 max-w-[840px] mx-auto shadow-sm">
              <span className="badge badge-green !normal-case">Need Assistance?</span>
              <div className="space-y-3">
                <h2 className="text-heading-4 sm:text-heading-3 font-normal text-secondary dark:text-accent">
                  Can&apos;t Find What You&apos;re Looking For?
                </h2>
                <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-[620px] mx-auto">
                  Our team is available to assist you. Whether you need technical documentation, custom solution pricing, or enterprise consultation, we&apos;re here to help.
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md sm:btn-lg w-full sm:w-auto">
                  Contact Our Team
                </Link>
                <Link
                  href="/support"
                  className="btn btn-outline-secondary dark:btn-outline-accent btn-md sm:btn-lg w-full sm:w-auto">
                  Visit Support Center
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default SitemapPage;
