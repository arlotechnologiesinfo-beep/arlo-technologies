import { FC, ReactNode } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface WhyArloItem {
  id: number;
  title: string;
  description: string;
  icon: (props: { className?: string }) => ReactNode;
}

const reasons: WhyArloItem[] = [
  {
    id: 1,
    title: 'Built Around Your Goals',
    description: 'We start with your vision and create solutions aligned with your objectives.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'AI-Powered Possibilities',
    description: 'We explore intelligent technologies that simplify workflows and unlock new opportunities.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Design That Feels Natural',
    description: 'We create intuitive digital experiences that make complex technology easier to use.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Engineering for Growth',
    description: 'We build with scalability, reliability, and long-term improvement in mind.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'A Collaborative Approach',
    description: 'We value transparent communication, thoughtful feedback, and shared progress.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Focused on What Matters',
    description: 'We prioritise practical outcomes over unnecessary complexity and empty promises.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const WhyArlo: FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-background-1 dark:bg-background-5">
      <div className="main-container">
        <div className="mb-14 text-center space-y-3">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-2 !normal-case">Our Advantages</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              Why Arlo Technologies?
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-xl font-medium">
              Innovation With Intention.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[680px] text-secondary/80 dark:text-accent/80 text-base leading-relaxed">
              We combine technical excellence, user-centered thinking, and transparent collaboration to build digital
              solutions that create enduring value.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealAnimation key={item.id} delay={0.2 + (index % 3) * 0.1}>
                <div className="bg-background-2 dark:bg-background-6 flex h-full flex-col justify-between space-y-6 rounded-[20px] p-8 border border-stroke-3 dark:border-stroke-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="space-y-4">
                    <div className="bg-background-1 dark:bg-background-5 flex size-12 items-center justify-center rounded-xl text-secondary dark:text-accent shadow-sm">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-heading-6 mb-2 font-normal">{item.title}</h3>
                      <p className="text-secondary/80 dark:text-accent/80 text-tagline-2 leading-relaxed">
                        {item.description}
                      </p>
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

WhyArlo.displayName = 'WhyArlo';
export default WhyArlo;
