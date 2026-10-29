import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featuredResearchItems = [
  {
    title: 'Building Reliable AI Agents for Real-World Workflows',
    description:
      'A practical guide to agent architecture, tool permissions, evaluation, human oversight, and failure handling.',
    category: 'Artificial Intelligence',
    format: 'Technical Guide',
    slug: 'building-reliable-ai-agents-for-real-world-workflows',
    badgeClass: 'badge-cyan',
  },
  {
    title: 'Choosing the Right Backend for a Digital Product',
    description:
      'Compare common backend approaches, including managed databases, authentication, APIs, hosting, cost considerations, and vendor dependency.',
    category: 'Software Architecture',
    format: 'Decision Guide',
    slug: 'choosing-the-right-backend-for-a-digital-product',
    badgeClass: 'badge-green',
  },
  {
    title: 'Security by Design for Modern Applications',
    description:
      'Explore how teams can incorporate threat modelling, secure development practices, access controls, dependency management, and incident readiness into the product lifecycle.',
    category: 'Security & Privacy',
    format: 'Engineering Guide',
    slug: 'security-by-design-for-modern-applications',
    badgeClass: 'badge-yellow',
  },
  {
    title: 'From Automation to Connected Workflows',
    description:
      'Learn how to map business processes, select integration patterns, handle failures, and measure whether automation delivers meaningful value.',
    category: 'Intelligent Automation',
    format: 'Implementation Guide',
    slug: 'from-automation-to-connected-workflows',
    badgeClass: 'badge-cyan-v2',
  },
];

const FeaturedResearch = () => {
  return (
    <section id="featured-research" className="scroll-mt-28 py-16 md:py-20 lg:py-24 bg-white dark:bg-background-6 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="mx-auto max-w-[850px] text-center space-y-4 mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green !normal-case">Featured Publications</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              Featured Research
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg leading-relaxed max-w-[700px] mx-auto">
              In-depth research guides and technical frameworks crafted by our engineering and product teams.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1140px] mx-auto">
          {featuredResearchItems.map((item, index) => {
            const delay = 0.15 + index * 0.1;
            return (
              <RevealAnimation key={item.slug} delay={delay}>
                <div className="h-full rounded-2xl bg-background-3 dark:bg-background-7 p-6 sm:p-8 border border-stroke-3 dark:border-stroke-7 shadow-xs flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-md">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`badge ${item.badgeClass} !normal-case text-xs`}>
                        {item.category}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-background-1 dark:bg-background-6 text-secondary/70 dark:text-accent/70 border border-stroke-3 dark:border-stroke-7">
                        {item.format}
                      </span>
                    </div>

                    <h3 className="text-heading-6 sm:text-heading-5 font-normal text-secondary dark:text-accent leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-secondary/70 dark:text-accent/70 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <LinkButton
                      href={`/whitepaper/${item.slug}`}
                      className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-sm w-full sm:w-auto">
                      Read Whitepaper
                    </LinkButton>
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

FeaturedResearch.displayName = 'FeaturedResearch';
export default FeaturedResearch;
