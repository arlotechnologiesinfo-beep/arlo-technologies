'use client';

export default function BannerSection() {
  return (
    <section
      aria-label="More than a visual layer"
      className="relative z-30 px-4 py-20 md:px-8 md:py-28 lg:py-32 border-t border-secondary/10 dark:border-accent/10 overflow-hidden bg-gradient-to-b from-transparent via-secondary/2 dark:via-accent/2 to-transparent">
      {/* Decorative center grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="size-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] text-center space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-primary-500 font-semibold block">
          Our Engineering Philosophy
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-secondary dark:text-accent max-w-[960px] mx-auto leading-[1.05]">
          More than a visual layer.
        </h2>

        <p className="text-base sm:text-xl text-secondary/70 dark:text-accent/70 max-w-[680px] mx-auto leading-relaxed">
          We engineer the entire system stack — from intuitive UI affordances and resilient data models to high-throughput
          cloud microservices and offline security vaults.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <div className="rounded-full border border-secondary/15 dark:border-accent/15 bg-white/80 dark:bg-background-8/80 px-4 py-1.5 font-mono text-xs text-secondary/80 dark:text-accent/80 backdrop-blur-md">
            Zero bloat
          </div>
          <div className="rounded-full border border-secondary/15 dark:border-accent/15 bg-white/80 dark:bg-background-8/80 px-4 py-1.5 font-mono text-xs text-secondary/80 dark:text-accent/80 backdrop-blur-md">
            Type-safe pipelines
          </div>
          <div className="rounded-full border border-secondary/15 dark:border-accent/15 bg-white/80 dark:bg-background-8/80 px-4 py-1.5 font-mono text-xs text-secondary/80 dark:text-accent/80 backdrop-blur-md">
            Microsecond latency
          </div>
          <div className="rounded-full border border-secondary/15 dark:border-accent/15 bg-white/80 dark:bg-background-8/80 px-4 py-1.5 font-mono text-xs text-secondary/80 dark:text-accent/80 backdrop-blur-md">
            Offline-first security
          </div>
        </div>
      </div>
    </section>
  );
}
