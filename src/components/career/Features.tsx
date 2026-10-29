import { FC, ReactNode } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: (props: { className?: string }) => ReactNode;
}

const benefits: BenefitItem[] = [
  {
    id: 1,
    title: 'Practical Learning',
    description: 'Learn by working on meaningful assignments and projects.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Skill Development',
    description: 'Strengthen technical, creative, and professional skills.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Beginner Friendly',
    description: 'Start even if you have zero prior experience.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Project Experience',
    description: 'Apply your knowledge to practical tasks.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Self-Evaluation',
    description: 'Identify your strengths and areas for improvement.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Feedback & Growth',
    description: 'Improve through reviews and constructive feedback where available.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Portfolio Building',
    description: 'Develop suitable work samples to demonstrate your abilities.',
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Completion Certificate',
    description: "Receive a certificate after meeting the program's completion requirements.",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

const Features: FC = () => {
  return (
    <section className="dark:bg-background-6 bg-white py-[100px] xl:py-[160px]">
      <div className="main-container">
        <div className="mb-12 text-center md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5 !normal-case">Why Join Us</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>More Than an Internship</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-xl font-medium mt-3 mb-2">
              Your first step toward a stronger future.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[680px] text-secondary/80 dark:text-accent/80">
              Build confidence, develop practical skills, and discover your potential in a learning-focused environment.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealAnimation key={item.id} delay={0.2 + (index % 4) * 0.1}>
                <div className="bg-background-2 dark:bg-background-5 flex h-full flex-col justify-between space-y-4 rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="space-y-4">
                    <div className="bg-background-1 dark:bg-background-6 flex size-12 items-center justify-center rounded-xl text-secondary dark:text-accent shadow-sm">
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

export default Features;
