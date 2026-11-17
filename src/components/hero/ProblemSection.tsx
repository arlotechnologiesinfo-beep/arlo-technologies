'use client';

const challenges = [
  {
    number: '01',
    title: 'Complex flows',
    description:
      'Multi-step user journeys, complex transactions, and technical abstractions distilled into intuitive, streamlined experiences.',
  },
  {
    number: '02',
    title: 'Low user trust',
    description:
      'Clear visual affordances, transparent system feedback, and bulletproof security primitives that inspire instant customer confidence.',
  },
  {
    number: '03',
    title: 'Disconnected systems',
    description:
      'Unified design systems, modular APIs, and consolidated component architectures that keep your product ecosystem in total sync.',
  },
  {
    number: '04',
    title: 'Difficult adoption',
    description:
      'Zero-friction onboarding, high-conversion interfaces, and responsive interactions that accelerate user retention from day one.',
  },
];

export default function ProblemSection() {
  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28 border-t border-secondary/10 dark:border-accent/10">
      {/* Decorative side crossbars */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 w-[100vw] -translate-x-1/2 top-0 border-t border-secondary/10 dark:border-accent/10"
      />

      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-[560px]">
            <span className="font-mono text-xs uppercase tracking-widest text-primary-500 font-semibold mb-3 block">
              The Challenge
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary dark:text-accent leading-[1.15]">
              Technology can be complex. The experience should not be.
            </h2>
          </div>

          <div className="max-w-[520px] space-y-4 text-secondary/70 dark:text-accent/70 text-base sm:text-lg leading-relaxed">
            <p>
              Products across AI, cloud systems, enterprise tools, and data platforms often involve intricate
              architectures, diverse user archetypes, and mission-critical workflows.
            </p>
            <p>
              Our purpose is to turn that technical complexity into digital experiences that are immediately
              understandable, resilient, and ready to scale.
            </p>
          </div>
        </div>

        {/* 4-Column Problem Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((item) => (
            <div
              key={item.number}
              data-cursor-text="Solve"
              className="group relative flex flex-col justify-between rounded-2xl border border-secondary/10 dark:border-accent/10 bg-white/60 dark:bg-background-8/60 p-6 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-lg">
              <div>
                <span className="font-mono text-xs font-semibold text-secondary/40 dark:text-accent/40 block mb-4">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold text-secondary dark:text-accent mb-2 group-hover:text-primary-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-secondary/5 dark:border-accent/5 flex items-center justify-between text-xs font-mono text-secondary/40 dark:text-accent/40">
                <span>Resolved by Arlo</span>
                <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
