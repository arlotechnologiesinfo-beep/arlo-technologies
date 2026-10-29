import RevealAnimation from '../animation/RevealAnimation';

const knowledgePillars = [
  {
    number: '01',
    title: 'Research That Goes Beyond the Headlines',
    description:
      'Explore the principles, architectures, and implementation choices behind emerging technologies.',
    tag: 'Deep Technical Analysis',
  },
  {
    number: '02',
    title: 'Practical, Implementation-Focused Insights',
    description:
      'Understand how ideas can translate into technical plans, workflows, and real-world applications.',
    tag: 'Actionable Blueprints',
  },
  {
    number: '03',
    title: 'Responsible Innovation',
    description:
      'Examine security, privacy, reliability, and human oversight alongside performance and innovation.',
    tag: 'Governance & Trust',
  },
];

const WhitepaperKnowledge = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-background-6 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="mx-auto max-w-[850px] text-center space-y-4 mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green !normal-case">Our Philosophy</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              Knowledge for What&apos;s Next
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-base sm:text-lg font-medium leading-relaxed">
              Technology evolves quickly. Making the right decisions requires more than following trends—it requires understanding the opportunities, trade-offs, risks, and practical realities behind them.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/70 dark:text-accent/70 text-sm sm:text-base leading-relaxed">
              Our whitepapers bring together structured analysis, technical concepts, and actionable recommendations to help founders, developers, product teams, and business leaders make more informed decisions.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {knowledgePillars.map((pillar, index) => (
            <RevealAnimation key={pillar.number} delay={0.2 + index * 0.1}>
              <div className="h-full rounded-2xl bg-background-3 dark:bg-background-7 p-6 sm:p-8 border border-stroke-3 dark:border-stroke-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-secondary dark:text-accent">
                      {pillar.number}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">
                    {pillar.title}
                  </h3>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

WhitepaperKnowledge.displayName = 'WhitepaperKnowledge';
export default WhitepaperKnowledge;
