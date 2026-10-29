import RevealAnimation from '../animation/RevealAnimation';
import { CheckIcon } from '@/icons';

const insideFeatures = [
  {
    title: 'Clear technical explanations',
    description: 'Complex concepts presented in an understandable, structured way.',
  },
  {
    title: 'Architecture and decision frameworks',
    description: 'Options, trade-offs, dependencies, and practical selection criteria.',
  },
  {
    title: 'Implementation considerations',
    description: 'Workflows, testing approaches, operational risks, and maintenance needs.',
  },
  {
    title: 'Responsible technology guidance',
    description: 'Attention to privacy, security, reliability, and human accountability.',
  },
  {
    title: 'Actionable next steps',
    description: 'Recommendations to help readers move from understanding to planning.',
  },
];

const audiences = [
  {
    role: 'Founders & Business Leaders',
    badge: 'Executive',
    description:
      'Evaluate opportunities, technical trade-offs, and implementation priorities before committing resources.',
  },
  {
    role: 'Developers & Engineering Teams',
    badge: 'Engineering',
    description:
      'Explore architectures, development practices, integration patterns, and reliability considerations.',
  },
  {
    role: 'Product Managers & Designers',
    badge: 'Product & UX',
    description:
      'Connect user needs with product strategy, technical feasibility, and measurable outcomes.',
  },
  {
    role: 'Students & Technology Researchers',
    badge: 'Research',
    description:
      'Build a stronger understanding of emerging technologies through structured, practical explanations.',
  },
];

const WhitepaperAudienceAndApproach = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container space-y-20">
        {/* Subsection 1: What You'll Find Inside */}
        <div className="space-y-10">
          <div className="mx-auto max-w-[850px] text-center space-y-3">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan !normal-case">Inside Our Publications</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                What You&apos;ll Find Inside
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg max-w-[650px] mx-auto">
                Every whitepaper is engineered to provide depth, clarity, and actionable decision frameworks.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1140px] mx-auto">
            {insideFeatures.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="h-full rounded-2xl bg-white dark:bg-background-6 p-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-3">
                  <div className="size-8 rounded-full bg-secondary dark:bg-accent flex items-center justify-center shrink-0">
                    <CheckIcon className="fill-accent dark:fill-secondary" />
                  </div>
                  <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">
                    {item.title}
                  </h3>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Subsection 2: Who Are These Whitepapers For? */}
        <div className="space-y-10 pt-4">
          <div className="mx-auto max-w-[850px] text-center space-y-3">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green !normal-case">Audience Focus</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                Who Are These Whitepapers For?
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg max-w-[650px] mx-auto">
                Tailored perspectives that connect technical depth with strategic objectives.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto">
            {audiences.map((aud, index) => (
              <RevealAnimation key={aud.role} delay={0.15 + index * 0.05}>
                <div className="h-full rounded-2xl bg-white dark:bg-background-6 p-6 border border-stroke-3 dark:border-stroke-7 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent inline-block">
                      {aud.badge}
                    </span>
                    <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">
                      {aud.role}
                    </h3>
                  </div>
                  <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Subsection 3: Our Approach to Research */}
        <div className="max-w-[1000px] mx-auto rounded-3xl bg-white dark:bg-background-6 p-8 sm:p-12 border border-stroke-3 dark:border-stroke-7 shadow-sm space-y-6">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan !normal-case">Research Standards</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 font-normal text-secondary dark:text-accent">
              Our Approach to Research
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-base sm:text-lg font-medium leading-relaxed">
              At Arlo Technologies, we believe useful research should clarify decisions—not simply promote technology.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base leading-relaxed">
              We aim to distinguish established practices from emerging ideas, explain important limitations, and identify the assumptions behind recommendations. Where evidence, implementation details, or external sources matter, our publications should make them clear.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="p-4 rounded-xl bg-background-3 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 text-xs sm:text-sm text-secondary/70 dark:text-accent/70">
              <strong className="text-secondary dark:text-accent font-medium">Educational Disclaimer: </strong>
              Whitepapers are educational resources and should not be treated as substitutes for legal, security, financial, or other specialist advice where professional review is required.
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

WhitepaperAudienceAndApproach.displayName = 'WhitepaperAudienceAndApproach';
export default WhitepaperAudienceAndApproach;
