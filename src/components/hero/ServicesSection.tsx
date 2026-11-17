'use client';

import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Product Design & UI/UX Systems',
    description:
      'We define product strategy, user journeys, information architecture, and scalable design systems that make intricate digital tools effortless to navigate.',
    link: '/services',
  },
  {
    number: '02',
    title: 'Brand Architecture & Launch Strategy',
    description:
      'We craft iconic brand identities, interactive landing platforms, and launch collateral that communicate technical vision, build instant trust, and attract the right customers.',
    link: '/services',
  },
  {
    number: '03',
    title: 'Full-Stack Software & Cloud Engineering',
    description:
      'High-performance Next.js web platforms, robust REST & GraphQL APIs, distributed database architectures, and automated cloud deployments designed for fault-tolerant operation.',
    link: '/services',
  },
  {
    number: '04',
    title: 'Autonomous AI & Agent Workflows',
    description:
      'Turn cutting-edge language models and autonomous agent architectures into production-ready software with structured reasoning, tool orchestration, and human oversight.',
    link: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative px-4 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28 border-t border-secondary/10 dark:border-accent/10">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-[700px]">
            <span className="font-mono text-xs uppercase tracking-widest text-primary-500 font-semibold mb-3 block">
              What We Deliver
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary dark:text-accent leading-[1.15]">
              Everything needed to turn a complex idea into a clear, launch-ready product.
            </h2>
          </div>
          <p className="max-w-[440px] text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
            From initial system architecture and wireframing to production deployment and continuous platform evolution.
          </p>
        </div>

        {/* Numbered Service Rows */}
        <div className="divide-y divide-secondary/10 dark:divide-accent/10 border-y border-secondary/10 dark:border-accent/10">
          {services.map((svc) => (
            <div
              key={svc.number}
              data-cursor-text="Service"
              className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-8 sm:py-10 transition-colors duration-300 hover:bg-secondary/2 dark:hover:bg-accent/2 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl">
              <div className="flex items-start gap-6 max-w-[740px]">
                <span className="font-mono text-lg font-bold text-primary-500 shrink-0 mt-0.5">
                  {svc.number}.
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm sm:text-base text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 lg:mt-0 flex items-center justify-end">
                <Link
                  href="#contact"
                  data-cursor-text="Book"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary/15 dark:border-accent/15 bg-white dark:bg-background-8 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-secondary dark:text-accent transition-all duration-300 hover:border-primary-500 hover:bg-dark-950 hover:text-white dark:hover:bg-white dark:hover:text-dark-950">
                  <span>Book an intro call</span>
                  <span className="text-primary-500">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
