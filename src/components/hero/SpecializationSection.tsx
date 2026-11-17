'use client';

const specializations = [
  {
    id: 'spec-ai',
    title: 'Autonomous AI & Intelligent Agents',
    category: 'Agentic Workflows',
    description:
      'Designing and developing human-in-the-loop AI workflows, agentic orchestrations, model integrations, and mission-control interfaces that make autonomous systems trustworthy.',
    highlights: ['Multi-Agent Orchestration', 'RAG & Reasoning Interfaces', 'Operator Dashboards'],
    badge: 'AI Core',
  },
  {
    id: 'spec-cloud',
    title: 'Cloud-Native & Distributed Systems',
    category: 'Architecture',
    description:
      'High-throughput APIs, cloud data pipelines, real-time streaming architectures, and resilient backends designed for enterprise reliability and zero downtime.',
    highlights: ['Scalable Microservices', 'Real-Time Pipelines', 'Infrastructure as Code'],
    badge: 'Cloud Scale',
  },
  {
    id: 'spec-security',
    title: 'Local-First & Cryptographic Vaults',
    category: 'Security Engineering',
    description:
      'Offline-first mobile document security, client-side encryption, zero-knowledge storage, and biometric protection systems — exemplified by our flagship Sanraksha platform.',
    highlights: ['AES-256-GCM Vaults', 'SQLCipher Integration', 'Zero Cloud Footprint'],
    badge: 'Security',
  },
  {
    id: 'spec-web',
    title: 'Modern Web & High-Impact Digital Products',
    category: 'Full-Stack UI/UX',
    description:
      'Fluid, accessible, and blazingly fast full-stack web applications engineered with Next.js, React, and tailored design systems that turn visitors into loyal users.',
    highlights: ['Next.js App Router', 'Motion & Micro-interactions', 'Design Systems'],
    badge: 'Digital Craft',
  },
];

export default function SpecializationSection() {
  return (
    <section className="relative px-4 pt-20 pb-16 md:px-8 md:pt-28 border-t border-secondary/10 dark:border-accent/10">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-[680px]">
            <span className="font-mono text-xs uppercase tracking-widest text-primary-500 font-semibold mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary dark:text-accent leading-[1.15]">
              Specialized in products where clarity and trust are essential.
            </h2>
          </div>
          <p className="max-w-[420px] text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
            We partner with innovative startups and visionary enterprises engineering the next generation of digital
            infrastructure.
          </p>
        </div>

        {/* Scrollable / Grid Cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 scroll-bar snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {specializations.map((item) => (
            <article
              key={item.id}
              data-cursor-text="Explore"
              className="hero-spec-card flex flex-col justify-between border border-secondary/10 dark:border-accent/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary-500 font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="rounded-full bg-secondary/5 dark:bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-secondary/70 dark:text-accent/70">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-secondary dark:text-accent leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-secondary/10 dark:border-accent/10">
                <ul className="space-y-1.5 font-mono text-xs text-secondary/60 dark:text-accent/60">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-primary-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
