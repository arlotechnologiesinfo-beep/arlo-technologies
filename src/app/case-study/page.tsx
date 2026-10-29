import RevealAnimation from '@/components/animation/RevealAnimation';
import CaseStudiesExplorer from '@/components/case-study/CaseStudiesExplorer';
import LinkButton from '@/components/ui/button/LinkButton';
import { getAllCaseStudies } from '@/data/caseStudies';
import { clientProjects } from '@/data/clientProjectsData';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Projects & Case Studies || Arlo Technologies',
  description:
    'Explore our comprehensive portfolio of delivered client websites, autonomous AI agents, product engineering, software development, and UI/UX design solutions.',
  alternates: {
    canonical: 'https://arlotechnologies.com/case-study',
  },
};

export default function CaseStudyPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main className="bg-background-3 dark:bg-background-7 min-h-screen relative overflow-hidden">
      {/* Ambient Atmospheric Lighting Blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-br from-primary-500/15 via-ns-cyan/10 to-transparent blur-[140px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[30%] -right-40 w-[600px] h-[600px] bg-gradient-to-l from-ns-green/10 via-primary-400/5 to-transparent blur-[120px] -z-10"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-14 sm:pt-36 md:pt-44 md:pb-16 lg:pb-20 xl:pt-[190px]">
        <div className="main-container">
          <div className="mx-auto max-w-[980px] text-center space-y-6">
            <RevealAnimation delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-stroke-3 dark:border-stroke-7 bg-white/80 dark:bg-background-6/80 px-4 py-1.5 backdrop-blur-md shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-ns-green animate-ping" />
                <span className="text-xs sm:text-tagline-2 font-medium text-secondary dark:text-accent">
                  Portfolio &amp; Production Engineering Case Studies
                </span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal leading-[1.12] tracking-tight">
                Architecting Digital Excellence. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-secondary via-primary-600 to-secondary dark:from-accent dark:via-primary-300 dark:to-accent bg-clip-text text-transparent">
                  Engineered for Lasting Impact.
                </span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[780px] text-base sm:text-lg md:text-xl text-secondary/80 dark:text-accent/80 leading-relaxed font-normal">
                Explore our complete body of work spanning verified client production websites,
                autonomous AI agent architectures, full-stack software development, and human-centered digital experiences.
              </p>
            </RevealAnimation>

            {/* Hero Quick Action Buttons */}
            <RevealAnimation delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <LinkButton
                  href="#case-studies-explorer"
                  className="btn btn-pair-left btn-md shadow-md">
                  Explore All 36+ Works
                </LinkButton>
                <LinkButton
                  href="#client-spotlight"
                  className="btn btn-pair-right btn-md shadow-md">
                  Live Client Websites
                </LinkButton>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-pair-right btn-md shadow-md">
                  Start Your Project
                </LinkButton>
              </div>
            </RevealAnimation>

            {/* Metrics & Performance Strip */}
            <RevealAnimation delay={0.5}>
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[860px] mx-auto">
                <div className="rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-white/60 dark:bg-background-6/60 p-4 sm:p-5 backdrop-blur-md text-center transition-transform hover:-translate-y-1">
                  <span className="block text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent font-mono">
                    36+
                  </span>
                  <span className="text-xs text-secondary/60 dark:text-accent/60 uppercase tracking-wider font-medium">
                    Production Solutions
                  </span>
                </div>
                <div className="rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-white/60 dark:bg-background-6/60 p-4 sm:p-5 backdrop-blur-md text-center transition-transform hover:-translate-y-1">
                  <span className="block text-heading-5 sm:text-heading-4 font-normal text-primary-600 dark:text-primary-400 font-mono">
                    4
                  </span>
                  <span className="text-xs text-secondary/60 dark:text-accent/60 uppercase tracking-wider font-medium">
                    Live Client Websites
                  </span>
                </div>
                <div className="rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-white/60 dark:bg-background-6/60 p-4 sm:p-5 backdrop-blur-md text-center transition-transform hover:-translate-y-1">
                  <span className="block text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent font-mono">
                    6
                  </span>
                  <span className="text-xs text-secondary/60 dark:text-accent/60 uppercase tracking-wider font-medium">
                    Tech Disciplines
                  </span>
                </div>
                <div className="rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-white/60 dark:bg-background-6/60 p-4 sm:p-5 backdrop-blur-md text-center transition-transform hover:-translate-y-1">
                  <span className="block text-heading-5 sm:text-heading-4 font-normal text-emerald-600 dark:text-ns-green font-mono">
                    100%
                  </span>
                  <span className="text-xs text-secondary/60 dark:text-accent/60 uppercase tracking-wider font-medium">
                    Modern Stack Rigor
                  </span>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Featured Live Client Websites Spotlight Banner */}
      <section id="client-spotlight" className="pb-12 md:pb-16 scroll-mt-28">
        <div className="main-container">
          <div className="rounded-3xl border border-stroke-3 dark:border-stroke-7 bg-white/80 dark:bg-background-6/80 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div className="space-y-2">
                <span className="badge badge-green font-medium !normal-case">
                  Delivered Client Production Highlights
                </span>
                <h2 className="text-heading-5 sm:text-heading-4 md:text-heading-3 font-normal">
                  Live Websites Built for Growing Brands
                </h2>
                <p className="text-secondary/70 dark:text-accent/70 text-sm md:text-base max-w-xl">
                  Publicly deployed customer storefronts and digital hubs designed and deployed with responsive performance and modern UX.
                </p>
              </div>

              <LinkButton
                href="#case-studies-explorer"
                className="btn-sm btn-white dark:btn-transparent hover:btn-secondary dark:hover:btn-accent self-start md:self-auto border border-stroke-3 dark:border-stroke-7 shadow-xs">
                View Full Catalog
              </LinkButton>
            </div>

            {/* Quick Grid of 4 Client Websites */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {clientProjects.map((client) => (
                <div
                  key={client.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-8 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-md">
                  <div className="space-y-3">
                    <div className="relative h-36 w-full overflow-hidden rounded-xl bg-background-2 dark:bg-background-7">
                      <Image
                        src={client.thumbnail}
                        alt={client.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[10px] text-white">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                        {client.category}
                      </span>
                      <h3 className="text-heading-6 text-base font-medium line-clamp-1 group-hover:text-primary-600 transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-xs text-secondary/70 dark:text-accent/70 line-clamp-2 mt-1">
                        {client.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-stroke-3/50 dark:border-stroke-7/50 flex items-center justify-between">
                    <a
                      href={client.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-secondary dark:text-accent hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <span>Visit Live Site</span>
                      <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                    <Link
                      href={`/case-study/${client.id}`}
                      className="text-[11px] text-secondary/50 dark:text-accent/50 hover:underline">
                      Case Study
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Explorer (Filter Pills, Search, View Switcher & Animated Cards) */}
      <section id="case-studies-explorer" className="pb-20 md:pb-28 lg:pb-32 scroll-mt-24">
        <div className="main-container">
          <CaseStudiesExplorer initialStudies={caseStudies} />
        </div>
      </section>

      {/* High-Impact Bottom CTA Section */}
      <section className="py-16 md:py-24 lg:py-28 bg-white dark:bg-background-6 border-t border-stroke-3 dark:border-stroke-7 relative overflow-hidden">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-primary-500/10 via-ns-cyan/5 to-transparent blur-[120px] -z-10"
          aria-hidden="true"
        />

        <div className="main-container">
          <div className="mx-auto max-w-[860px] text-center space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow mb-2 !normal-case">
                Let&apos;s Build Together
              </span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                Have a Complex Vision? We Engineer Scalable Digital Realities.
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg max-w-[700px] mx-auto leading-relaxed">
                From high-conversion e-commerce storefronts and custom web applications to autonomous AI workflows and enterprise integrations,
                partner with Arlo Technologies to bring your next product to life.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-pair-left btn-md w-full sm:w-auto shadow-md">
                  <span>Schedule Discovery Session</span>
                </LinkButton>
                <LinkButton
                  href="/services"
                  className="btn btn-pair-right btn-md w-full sm:w-auto shadow-md">
                  <span>Explore Engineering Services</span>
                </LinkButton>
                <LinkButton
                  href="/pricing"
                  className="btn btn-pair-right btn-md w-full sm:w-auto shadow-md">
                  <span>View Pricing &amp; Plans</span>
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}

CaseStudyPage.displayName = 'CaseStudyPage';
