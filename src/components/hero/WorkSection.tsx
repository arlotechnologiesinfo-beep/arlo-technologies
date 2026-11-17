'use client';

import Link from 'next/link';

const flagshipWorks = [
  {
    id: 'work-sanraksha',
    title: 'Sanraksha — Secure Offline Document Vault',
    category: 'Security & Mobile Architecture',
    description:
      'Engineered an offline-first document vault with AES-256-GCM encryption, biometric verification, and zero cloud footprint, protecting sensitive personal documents with zero-trust principles.',
    tags: ['Android Keystore', 'SQLCipher', 'Local-First', 'AES-256'],
    link: '/sanraksha',
    badge: 'Flagship Platform',
  },
  {
    id: 'work-ai',
    title: 'Autonomous Multi-Agent Enterprise Orchestrator',
    category: 'AI Platform Engineering',
    description:
      'Architected an autonomous agent fabric that coordinates multi-step reasoning, real-time tool calling, and automated document synthesis with human-in-the-loop oversight.',
    tags: ['LLM Orchestration', 'Real-time Streaming', 'TypeScript', 'Next.js'],
    link: '/case-study',
    badge: 'Enterprise AI',
  },
  {
    id: 'work-commerce',
    title: 'High-Performance Modern Digital Commerce Engine',
    category: 'Digital Product Design & Dev',
    description:
      'Developed a blazingly fast digital storefront and bespoke inventory sync architecture for premier brands, achieving sub-second page loads and a 42% boost in checkout conversions.',
    tags: ['Next.js 16', 'Tailwind CSS', 'Turbopack', 'Microservices'],
    link: '/projects',
    badge: 'Commerce Core',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative px-4 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28 border-t border-secondary/10 dark:border-accent/10">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-[720px]">
            <span className="font-mono text-xs uppercase tracking-widest text-primary-500 font-semibold mb-3 block">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary dark:text-accent leading-[1.15]">
              Real products. Real users. Real outcomes.
            </h2>
          </div>
          <p className="max-w-[440px] text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
            Products, platforms, and digital systems engineered to solve tangible problems and power scalable growth.
          </p>
        </div>

        {/* Featured Case Cards */}
        <div className="space-y-10">
          {flagshipWorks.map((work, idx) => (
            <div
              key={work.id}
              data-cursor-text="View"
              className="group relative rounded-3xl border border-secondary/10 dark:border-accent/10 bg-white/70 dark:bg-background-8/70 p-8 sm:p-10 lg:p-12 backdrop-blur-sm transition-all duration-500 hover:border-primary-500/40 hover:shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-[700px] space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary-500 font-semibold">
                      0{idx + 1} — {work.category}
                    </span>
                    <span className="rounded-full bg-primary-500/10 px-3 py-0.5 font-mono text-xs text-primary-500 dark:text-primary-400 font-medium">
                      {work.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
                    {work.title}
                  </h3>

                  <p className="text-base text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-secondary/60 dark:text-accent/60 bg-secondary/5 dark:bg-accent/5 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex lg:flex-col items-center lg:items-end justify-between gap-4">
                  <Link
                    href={work.link}
                    data-cursor-text="Open"
                    className="inline-flex items-center gap-2 rounded-full border border-secondary/20 dark:border-accent/20 bg-dark-950 dark:bg-white text-white dark:text-dark-950 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-sm">
                    <span>Explore Platform</span>
                    <svg
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
