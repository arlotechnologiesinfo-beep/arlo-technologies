import RevealAnimation from '@/components/animation/RevealAnimation';
import { CheckIcon } from '@/icons';
import Link from 'next/link';
import OperationCards from './OperationCards';

interface UseCaseTeam {
  id: string;
  badge: string;
  title: string;
  subheading: string;
  description: string;
  benefits: {
    title: string;
    description: string;
  }[];
}

const teamsData: UseCaseTeam[] = [
  {
    id: 'product-teams',
    badge: 'Engineering & Innovation',
    title: 'Product & Development Teams',
    subheading: 'From First Idea to Functional Product.',
    description:
      'Build, test, and evolve digital products with thoughtful engineering, intuitive design, and AI-powered possibilities.',
    benefits: [
      {
        title: 'Accelerate Development',
        description: 'Turn concepts into practical digital solutions through structured development workflows.',
      },
      {
        title: 'Build Better Experiences',
        description: 'Create intuitive interfaces and useful features around real user needs.',
      },
      {
        title: 'Scale With Confidence',
        description: 'Design software with maintainability, reliability, and future growth in mind.',
      },
    ],
  },
  {
    id: 'marketing-teams',
    badge: 'Growth & Reach',
    title: 'Marketing Teams',
    subheading: 'Create Experiences That Connect.',
    description:
      'Bring your brand, content, campaigns, and digital touchpoints together to deliver a more consistent experience.',
    benefits: [
      {
        title: 'Consistent Brand Experiences',
        description: 'Align your messaging and digital presence across platforms.',
      },
      {
        title: 'Smarter Campaign Workflows',
        description: 'Simplify repetitive marketing tasks and content processes.',
      },
      {
        title: 'Meaningful Insights',
        description: 'Organise campaign information to better understand performance and opportunities.',
      },
    ],
  },
  {
    id: 'customer-support',
    badge: 'Support & Success',
    title: 'Customer Support & Success',
    subheading: 'Better Connections. Better Experiences.',
    description:
      'Create more organised customer journeys with helpful digital tools, streamlined communication, and accessible information.',
    benefits: [
      {
        title: 'Streamlined Support',
        description: 'Organise common questions, requests, and support workflows.',
      },
      {
        title: 'Connected Customer Journeys',
        description: 'Bring relevant information and digital touchpoints together.',
      },
      {
        title: 'Consistent Communication',
        description: 'Create clearer, more structured customer interactions.',
      },
    ],
  },
  {
    id: 'founders',
    badge: 'Leadership & Strategy',
    title: 'Founders & Executives',
    subheading: 'Turn Your Vision Into Momentum.',
    description:
      'Move from ambitious ideas to actionable plans with digital products, intelligent solutions, and technology designed around your goals.',
    benefits: [
      {
        title: 'Validate New Ideas',
        description: 'Explore concepts and develop practical prototypes.',
      },
      {
        title: 'Build With Purpose',
        description: 'Focus technology investments on meaningful business needs.',
      },
      {
        title: 'Prepare for Growth',
        description: 'Create adaptable digital foundations for future opportunities.',
      },
    ],
  },
  {
    id: 'freelancers',
    badge: 'Agility & Scale',
    title: 'Freelancers & Small Teams',
    subheading: 'Big Ideas Don’t Need Big Teams.',
    description:
      'Make your work more efficient with accessible digital tools, connected workflows, and practical solutions that grow with your ambitions.',
    benefits: [
      {
        title: 'Simplify Everyday Work',
        description: 'Reduce repetitive tasks and organise essential workflows.',
      },
      {
        title: 'Work More Efficiently',
        description: 'Connect tools and streamline common processes.',
      },
      {
        title: 'Grow at Your Pace',
        description: 'Build a digital setup that can evolve with your needs.',
      },
    ],
  },
];

const FinanceAndOperation = () => {
  return (
    <section className="pt-6 pb-[100px] md:pb-[140px] lg:pt-10 lg:pb-[180px]">
      <div className="main-container">
        <div className="space-y-16 md:space-y-24">
          {/* Section 1: Finance and Operation */}
          <div className="space-y-8" id="finance-and-operations">
            <div className="space-y-3 max-w-[760px]">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green !normal-case mb-2">Operations</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                  Finance &amp; Operations
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary dark:text-accent text-xl font-medium">
                  Bring Clarity to Complexity.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg leading-relaxed">
                  Connect your workflows, simplify repetitive processes, and create more organised ways to manage everyday
                  business operations.
                </p>
              </RevealAnimation>
            </div>

            {/* 4 Operation Cards */}
            <OperationCards />
          </div>

          {/* Teams / Roles Sections */}
          {teamsData.map((team) => (
            <div
              key={team.id}
              id={team.id}
              className="bg-background-2 dark:bg-background-6 rounded-[24px] p-8 sm:p-12 border border-stroke-3 dark:border-stroke-7 space-y-6">
              <div className="space-y-3 max-w-[800px]">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-cyan !normal-case mb-2">{team.badge}</span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h3 className="text-heading-4 sm:text-heading-3 font-normal">{team.title}</h3>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-secondary dark:text-accent text-xl font-medium">{team.subheading}</p>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p className="text-secondary/80 dark:text-accent/80 text-base leading-relaxed">
                    {team.description}
                  </p>
                </RevealAnimation>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4 pt-4 border-t border-stroke-3 dark:border-stroke-7">
                <RevealAnimation delay={0.2}>
                  <h4 className="text-tagline-1 text-secondary dark:text-accent font-semibold uppercase tracking-wider">
                    Key Benefits
                  </h4>
                </RevealAnimation>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {team.benefits.map((benefit, bIndex) => (
                    <RevealAnimation key={bIndex} delay={0.3 + bIndex * 0.1}>
                      <li className="bg-background-1 dark:bg-background-5 rounded-2xl p-5 border border-stroke-3 dark:border-stroke-7 flex flex-col justify-start space-y-2 h-full">
                        <div className="flex items-center gap-2.5">
                          <span className="bg-secondary dark:bg-accent flex size-5 shrink-0 items-center justify-center rounded-full">
                            <CheckIcon className="dark:fill-secondary h-2 w-2.5 fill-white" />
                          </span>
                          <span className="text-secondary dark:text-accent font-semibold text-tagline-1">
                            {benefit.title}
                          </span>
                        </div>
                        <p className="text-tagline-2 text-secondary/75 dark:text-accent/75 leading-relaxed pl-7">
                          {benefit.description}
                        </p>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Section: How to Manage or Delete Your Data */}
          <div
            id="data-management"
            className="bg-background-2 dark:bg-background-6 rounded-[24px] p-8 sm:p-12 border border-stroke-3 dark:border-stroke-7 space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow !normal-case mb-2">Privacy &amp; Control</span>
            </RevealAnimation>
            <div className="space-y-3 max-w-[800px]">
              <RevealAnimation delay={0.2}>
                <h3 className="text-heading-4 sm:text-heading-3 font-normal">
                  How to Manage or Delete Your Data
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary dark:text-accent text-xl font-medium">Your Data. Your Control.</p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/80 dark:text-accent/80 text-base leading-relaxed">
                  Understand how information is collected, used, managed, and deleted across Arlo Technologies&apos;
                  digital products. Find the relevant product privacy policy or contact our team for guidance on
                  data-related requests.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.5}>
              <div className="pt-2">
                <Link
                  href="/privacy-policy"
                  className="btn btn-secondary hover:btn-primary dark:btn-accent dark:hover:btn-primary btn-md inline-flex items-center gap-2">
                  Explore Privacy &amp; Data Controls
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

FinanceAndOperation.displayName = 'FinanceAndOperation';
export default FinanceAndOperation;
