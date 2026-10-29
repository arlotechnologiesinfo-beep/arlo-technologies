import RevealAnimation from '../animation/RevealAnimation';

const coreCategories = [
  {
    id: 'ai-agents',
    title: 'Artificial Intelligence & AI Agents',
    description:
      'Understand AI architectures, agent workflows, retrieval-augmented generation, evaluation methods, and responsible implementation.',
    topics: ['AI agents', 'RAG systems', 'Model selection', 'Evaluation', 'Human oversight'],
    badge: 'AI & Machine Learning',
  },
  {
    id: 'automation-workflows',
    title: 'Automation & Intelligent Workflows',
    description:
      'Explore how connected systems and automated processes can reduce repetitive work and improve operational consistency.',
    topics: ['Workflow design', 'API integrations', 'Event-driven automation', 'Process optimization'],
    badge: 'Automation',
  },
  {
    id: 'software-architecture',
    title: 'Software Engineering & Architecture',
    description:
      'Examine the technical foundations behind maintainable, scalable, and reliable digital products.',
    topics: ['System architecture', 'Backend selection', 'API design', 'Testing', 'Deployment'],
    badge: 'Engineering',
  },
  {
    id: 'security-trust',
    title: 'Privacy, Security & Trust',
    description:
      'Explore practical approaches to protecting information, managing access, assessing risks, and building security into product development.',
    topics: ['Secure-by-design principles', 'Data protection', 'Access control', 'Threat modelling'],
    badge: 'Security',
  },
  {
    id: 'product-experience',
    title: 'Product Design & Digital Experiences',
    description:
      'Learn how usability, accessibility, information architecture, and design systems contribute to better digital products.',
    topics: ['UX research', 'Onboarding', 'Accessibility', 'Design systems', 'Mobile-first design'],
    badge: 'Design & UX',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation & Business Technology',
    description:
      'Understand how organizations can evaluate technology choices, connect existing systems, and plan practical digital improvements.',
    topics: ['Technology strategy', 'System integration', 'Digital operations', 'Implementation planning'],
    badge: 'Strategy',
  },
];

const WhitepaperCategories = () => {
  return (
    <section id="explore-whitepapers" className="scroll-mt-28 py-16 md:py-20 lg:py-24 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="mx-auto max-w-[850px] text-center space-y-4 mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan !normal-case">Research Areas</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              Explore Our Whitepapers
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg leading-relaxed max-w-[700px] mx-auto">
              Discover research and guides across our core areas of technology.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCategories.map((cat, index) => {
            const delay = 0.15 + (index % 3) * 0.1;
            return (
              <RevealAnimation key={cat.id} delay={delay}>
                <div className="h-full rounded-2xl bg-white dark:bg-background-6 p-6 sm:p-8 border border-stroke-3 dark:border-stroke-7 shadow-xs flex flex-col justify-between space-y-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="space-y-3">
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent inline-block">
                      {cat.badge}
                    </span>
                    <h3 className="text-heading-6 sm:text-heading-5 font-normal text-secondary dark:text-accent">
                      {cat.title}
                    </h3>
                    <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stroke-3 dark:border-stroke-7 space-y-2">
                    <p className="text-xs font-semibold text-secondary/60 dark:text-accent/60 uppercase tracking-wider">
                      Key Topics
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2.5 py-0.5 rounded-md bg-background-3 dark:bg-background-7 text-secondary/80 dark:text-accent/80 font-normal">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

WhitepaperCategories.displayName = 'WhitepaperCategories';
export default WhitepaperCategories;
