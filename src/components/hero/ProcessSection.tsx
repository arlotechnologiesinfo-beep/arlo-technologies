'use client';

const steps = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Foundational Discovery & Alignment',
    description:
      'We deeply analyze your business objectives, target users, technical constraints, data dependencies, and existing architectural bottlenecks to define the problem space with crystal clarity.',
    items: ['Stakeholder alignment', 'Technical feasibility analysis', 'User persona mapping'],
  },
  {
    step: '02',
    title: 'Define',
    tagline: 'Strategy & System Blueprint',
    description:
      'We chart the exact product strategy, user journey maps, information architecture, and technical specifications needed to ensure zero ambiguity during execution.',
    items: ['Information architecture', 'API and data models', 'Sprint milestone roadmap'],
  },
  {
    step: '03',
    title: 'Design',
    tagline: 'Interface & Interactive Craft',
    description:
      'We craft high-fidelity interface layouts, interactive prototypes, and modular design systems that bring elegant clarity to complex technical workflows.',
    items: ['High-fidelity UI mockups', 'Motion & interaction design', 'Design token library'],
  },
  {
    step: '04',
    title: 'Build and Scale',
    tagline: 'Production-Grade Engineering',
    description:
      'We implement the complete full-stack codebase with clean architectures, unit test coverage, CI/CD pipelines, and rigorous performance and security verifications.',
    items: ['Modern web implementation', 'Performance optimization', 'Monitoring & handover'],
  },
];

export default function ProcessSection() {
  return (
    <section className="relative px-4 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28 border-t border-secondary/10 dark:border-accent/10">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-[700px]">
            <span className="font-mono text-xs uppercase tracking-widest text-primary-500 font-semibold mb-3 block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary dark:text-accent leading-[1.15]">
              A clear process for complex products.
            </h2>
          </div>
          <p className="max-w-[440px] text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
            Methodical execution designed to eliminate guesswork, accelerate engineering velocity, and ensure pristine
            outcomes.
          </p>
        </div>

        {/* 4-Column Step Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              data-cursor-text="Step"
              className="group relative flex flex-col justify-between rounded-2xl border border-secondary/10 dark:border-accent/10 bg-white/70 dark:bg-background-8/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-lg">
              <div>
                <span className="font-mono text-2xl font-black text-primary-500 block mb-2">
                  {s.step}.
                </span>
                <h3 className="text-xl font-bold text-secondary dark:text-accent mb-1 group-hover:text-primary-500 transition-colors">
                  {s.title}
                </h3>
                <span className="font-mono text-[11px] text-secondary/50 dark:text-accent/50 block mb-4">
                  {s.tagline}
                </span>

                <p className="text-xs sm:text-sm text-secondary/70 dark:text-accent/70 leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              <div className="pt-4 border-t border-secondary/10 dark:border-accent/10">
                <ul className="space-y-1.5 font-mono text-xs text-secondary/60 dark:text-accent/60">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-primary-500" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
