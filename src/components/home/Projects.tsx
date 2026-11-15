import { webBgAssets } from '@/data/webBgImages';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const flagshipSolutions = [
  {
    id: 'sanraksha-vault',
    name: 'Sanraksha — Secure Offline Document Vault',
    category: 'Flagship Security Product',
    description:
      'A private, offline-first personal and family document vault built with AES-256-GCM encryption, SQLCipher, and Android Keystore hardware security. No cloud uploads, no tracking.',
    href: '/sanraksha',
    linkLabel: 'Discover Sanraksha',
    thumbnail: webBgAssets.starryNight,
    badge: 'Offline-First Security',
  },
  {
    id: 'ai-agents-automation',
    name: 'Autonomous AI Agents & Enterprise Automation',
    category: 'Intelligent AI Systems',
    description:
      'Custom LLM pipelines, multi-agent systems, and automated cognitive workflows that reduce operational friction and execute complex business logic autonomously.',
    href: '/services',
    linkLabel: 'Explore AI Services',
    thumbnail: webBgAssets.futuristicRobot,
    badge: 'AI Systems',
  },
  {
    id: 'enterprise-cloud-saas',
    name: 'High-Scale Cloud & Enterprise SaaS Architectures',
    category: 'Cloud Engineering',
    description:
      'Fault-tolerant Next.js, React, Node.js, and cloud-native microservices designed for high concurrency, sub-second response times, and seamless third-party integrations.',
    href: '/services',
    linkLabel: 'View Architecture',
    thumbnail: webBgAssets.ditherGradient,
    badge: 'Cloud Platforms',
  },
  {
    id: 'creative-client-portfolio',
    name: 'Curated Works & Creative Portfolio',
    category: 'Client Solutions',
    description:
      'Our complete showcase of delivered client storefronts, live web platforms, and bespoke digital experiences crafted for ambitious consumer and B2B brands.',
    href: '/portfolio',
    linkLabel: 'View 36+ Works',
    thumbnail: webBgAssets.heroGradient,
    badge: 'Portfolio Showcase',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>Flagship Solutions &amp; Engineering Highlights</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[720px] text-secondary/80 dark:text-accent/80">
              Purpose-built software platforms, privacy-first mobile architecture, and intelligent digital systems
              engineered for measurable real-world impact.
            </p>
          </RevealAnimation>
        </div>
        <div className="mb-14">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-14">
            {flagshipSolutions.map((item, index) => {
              const isFullWidth = index % 3 === 0;
              const colSpanClass = isFullWidth ? 'col-span-12' : 'col-span-12 lg:col-span-6';
              const imgHeightClass = isFullWidth
                ? 'h-[320px] sm:h-[420px] md:max-h-[576px] xl:h-[576px]'
                : 'h-[300px] sm:h-[360px] md:max-h-[280px] lg:max-h-[400px] xl:h-[576px]';

              return (
                <div key={item.id} className={colSpanClass}>
                  <RevealAnimation delay={0.2 + (index % 3) * 0.1}>
                    <figure className="space-y-4">
                      {/* Category and Link header */}
                      <div className="flex items-center justify-between px-1">
                        <span className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-medium tracking-wide uppercase">
                          {item.category}
                        </span>
                        <Link
                          href={item.href}
                          aria-label={`Learn more about ${item.name}`}
                          className="group/link flex items-center gap-1.5 rounded-full border border-stroke-2 dark:border-stroke-6 bg-white/80 dark:bg-background-8/80 px-3 py-1 text-tagline-2 text-secondary dark:text-accent transition-all duration-300 hover:border-secondary dark:hover:border-accent hover:shadow-sm">
                          <span className="text-xs font-normal">{item.linkLabel}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-3 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </div>

                      {/* Card Thumbnail */}
                      <Link
                        href={item.href}
                        className={`group relative block w-full overflow-hidden rounded-[20px] ${imgHeightClass}`}>
                        <Image
                          src={item.thumbnail}
                          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          alt={item.name}
                          fill
                          priority={index < 2}
                          unoptimized
                          sizes="(min-width: 1280px) 1200px, 100vw"
                        />
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs text-white">
                          <span className="size-2 rounded-full bg-primary-400" />
                          <span>{item.badge}</span>
                        </div>
                      </Link>

                      {/* Card Title and Description */}
                      <div className="flex flex-col justify-start gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 px-1">
                        <h3 className="text-heading-6 sm:text-heading-5">
                          <Link href={item.href} className="hover:text-primary-500 transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="line-clamp-2 max-w-[420px] text-left sm:text-right text-secondary/70 dark:text-accent/70">
                          {item.description}
                        </p>
                      </div>
                    </figure>
                  </RevealAnimation>
                </div>
              );
            })}
          </div>
        </div>
        <RevealAnimation delay={0.6}>
          <div className="text-center">
            <LinkButton
              href="/portfolio"
              className="btn btn-primary btn-xl w-[90%] md:w-auto shadow-md">
              Explore Full Creative Portfolio &amp; Client Work
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Projects.displayName = 'Projects';
export default Projects;
