'use client';

import Link from 'next/link';

const engagementModels = [
  {
    id: 'sprint',
    title: 'Product Sprint',
    duration: '2–4 Weeks',
    badge: 'Rapid Validation',
    description:
      'Define, prototype, and validate a critical product concept, architecture, or flagship feature before committing to long-term engineering execution.',
    deliverables: [
      'Interactive prototype & validated UX',
      'Technical architecture blueprint',
      'Production-ready design specs',
      'Engineering estimation & roadmap',
    ],
  },
  {
    id: 'audit',
    title: 'UX & Architectural Audit',
    duration: '1–2 Weeks',
    badge: 'Diagnostic',
    description:
      'Identify usability friction, conversion bottlenecks, system latency, and design inconsistencies across your existing application with actionable remediation steps.',
    deliverables: [
      'Comprehensive heuristic UX evaluation',
      'Performance & accessibility report',
      'Architectural recommendations',
      'Priority fix action items',
    ],
  },
  {
    id: 'partner',
    title: 'Ongoing Product Partner',
    duration: 'Monthly Retainer',
    badge: 'Full Embedding',
    description:
      'Add dedicated senior-level product design, frontend craft, and backend engineering firepower directly into your sprint cycle with zero hiring lag.',
    deliverables: [
      'Dedicated product design & engineering',
      'Continuous feature delivery & QA',
      'Design system governance',
      'Direct Slack/Discord collaboration',
    ],
  },
];

export default function EngagementSection() {
  return (
    <section id="ways-to-work" className="relative px-4 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28 border-t border-secondary/10 dark:border-accent/10">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-[700px]">
            <span className="font-mono text-xs uppercase tracking-widest text-primary-500 font-semibold mb-3 block">
              Engagement Models
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary dark:text-accent leading-[1.15]">
              Choose the right way to move your product forward.
            </h2>
          </div>
          <p className="max-w-[440px] text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
            Whether you need a laser-focused sprint to validate an idea or continuous product engineering firepower.
          </p>
        </div>

        {/* 3-Column Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {engagementModels.map((model) => (
            <div
              key={model.id}
              data-cursor-text="Select"
              className="group relative flex flex-col justify-between rounded-3xl border border-secondary/10 dark:border-accent/10 bg-white/70 dark:bg-background-8/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-primary-500 uppercase tracking-wider">
                    {model.badge}
                  </span>
                  <span className="font-mono text-xs text-secondary/60 dark:text-accent/60 bg-secondary/5 dark:bg-accent/5 px-2.5 py-1 rounded-full">
                    {model.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-secondary dark:text-accent mb-3 group-hover:text-primary-500 transition-colors">
                  {model.title}
                </h3>

                <p className="text-sm text-secondary/70 dark:text-accent/70 leading-relaxed mb-6">
                  {model.description}
                </p>

                <div className="pt-4 border-t border-secondary/10 dark:border-accent/10">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-secondary/50 dark:text-accent/50 block mb-3 font-semibold">
                    Key Outcomes
                  </span>
                  <ul className="space-y-2 font-mono text-xs text-secondary/70 dark:text-accent/70">
                    {model.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="text-primary-500 mt-0.5">&bull;</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-secondary/10 dark:border-accent/10">
                <Link
                  href="#contact"
                  data-cursor-text="Discuss"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-secondary/20 dark:border-accent/20 bg-dark-950 dark:bg-white text-white dark:text-dark-950 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-90">
                  <span>Start with this model</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
