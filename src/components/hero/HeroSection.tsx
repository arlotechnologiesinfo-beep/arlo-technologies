'use client';

import Link from 'next/link';

const clientLogos = [
  'Enterprise AI',
  'Fintech Core',
  'Autonomous Systems',
  'Cloud Architecture',
  'Sanraksha Vault',
  'Next-Gen Web',
];

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:min-h-[820px] lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Top Crosshair Rules */}
      <div className="hidden lg:block">
        <span
          aria-hidden="true"
          style={{ top: '49px' }}
          className="pointer-events-none absolute left-1/2 w-[100vw] -translate-x-1/2 border-t border-secondary/10 dark:border-accent/10"
        />
        <span
          aria-hidden="true"
          style={{ top: '49px' }}
          className="pointer-events-none absolute z-30 grid size-3.5 grid-cols-[3px_3px] content-between justify-between -left-[7px] -translate-y-1/2">
          <span className="size-[3px] bg-secondary/30 dark:bg-accent/30" />
          <span className="size-[3px] bg-secondary/30 dark:bg-accent/30" />
          <span className="size-[3px] bg-secondary/30 dark:bg-accent/30" />
          <span className="size-[3px] bg-secondary/30 dark:bg-accent/30" />
        </span>
        <span
          aria-hidden="true"
          style={{ top: '49px' }}
          className="pointer-events-none absolute z-30 grid size-3.5 grid-cols-[3px_3px] content-between justify-between -right-[7px] -translate-y-1/2">
          <span className="size-[3px] bg-secondary/30 dark:bg-accent/30" />
          <span className="size-[3px] bg-secondary/30 dark:bg-accent/30" />
          <span className="size-[3px] bg-secondary/30 dark:bg-accent/30" />
          <span className="size-[3px] bg-secondary/30 dark:bg-accent/30" />
        </span>

        {/* Micro-statement header line */}
        <div className="flex h-8 items-center justify-between px-6 font-mono text-[11px] tracking-wider uppercase text-secondary/50 dark:text-accent/50 absolute inset-x-0 top-[49px]">
          <p>Engineered for mission-critical scale.</p>
          <p>Built for what follows.</p>
        </div>

        <span
          aria-hidden="true"
          style={{ top: '81px' }}
          className="pointer-events-none absolute left-1/2 w-[100vw] -translate-x-1/2 border-t border-dashed border-secondary/10 dark:border-accent/10"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mt-6 lg:mt-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/10 dark:border-accent/15 bg-white/70 dark:bg-background-8/70 px-4 py-1.5 backdrop-blur-md shadow-xs">
            <span className="size-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-secondary/80 dark:text-accent/80 uppercase">
              Arlo Engineering Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary dark:text-accent max-w-[1020px] leading-[1.08]">
            Product design and development studio for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-400 to-emerald-400">
              AI, Cloud Platforms
            </span>
            , and Intelligent Systems.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-secondary/70 dark:text-accent/70 max-w-[740px] leading-relaxed">
            We transform complex architectures and ambitious ideas into intuitive, high-performance digital
            experiences and scalable technology platforms.
          </p>

          {/* Services list ticker */}
          <div className="text-xs sm:text-sm font-medium tracking-wider text-secondary/60 dark:text-accent/60 uppercase">
            Product Strategy · Cloud Engineering · Autonomous AI · Modern UI/UX
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link
              href="#contact"
              data-cursor-text="Connect"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-dark-950 dark:bg-white text-white dark:text-dark-950 px-8 py-4 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md">
              <span>Start a project</span>
              <svg
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="#work"
              data-cursor-text="View"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary/15 dark:border-accent/15 bg-white/60 dark:bg-background-8/60 px-8 py-4 text-sm font-medium text-secondary dark:text-accent backdrop-blur-md transition-all duration-300 hover:bg-background-2 dark:hover:bg-white/10 hover:border-secondary/30">
              <span>Explore Selected Work</span>
            </Link>
          </div>
        </div>

        {/* Client Capabilities Strip */}
        <div className="mt-20 pt-10 border-t border-secondary/10 dark:border-accent/10">
          <p className="text-center font-mono text-[11px] tracking-widest uppercase text-secondary/50 dark:text-accent/50 mb-6">
            Engineered with deep specialization across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {clientLogos.map((item) => (
              <span
                key={item}
                className="font-mono text-xs sm:text-sm font-medium text-secondary/60 dark:text-accent/60 px-3 py-1 rounded-md border border-secondary/5 dark:border-accent/5 bg-secondary/5 dark:bg-accent/5">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
