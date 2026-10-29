import RevealAnimation from '../animation/RevealAnimation';

interface AffiliateStep {
  id: string;
  stepNumber: string;
  icon: string;
  title: string;
  description: string;
}

const affiliateStepsData: AffiliateStep[] = [
  {
    id: '1',
    stepNumber: 'Step 1',
    icon: 'ns-shape-35',
    title: 'Submit Application & Channel Review',
    description:
      'Share your platform, audience focus, and promotional methods for review by our partnerships team.',
  },
  {
    id: '2',
    stepNumber: 'Step 2',
    icon: 'ns-shape-12',
    title: 'Receive Unique Tracking Attribution',
    description:
      'Upon approval, receive dedicated tracking parameters and official brand assets built for clear attribution.',
  },
  {
    id: '3',
    stepNumber: 'Step 3',
    icon: 'ns-shape-3',
    title: 'Earn on Eligible Attributed Sales',
    description:
      'Receive commissions on verified, successfully attributed customer acquisitions according to agreed terms.',
  },
];

const AffiliatesStep = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {affiliateStepsData.map((step, index) => (
        <RevealAnimation key={step.id} delay={0.3 + index * 0.1}>
          <article className="space-y-3.5 p-8 col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-background-6 rounded-[20px] border border-stroke-3 dark:border-stroke-7 shadow-sm">
            <div className="space-y-11">
              <span className="text-tagline-2 font-medium inline-block text-secondary/60 dark:text-accent/60">
                {step.stepNumber}
              </span>
              <div>
                <span className={`${step.icon} text-[52px] text-secondary dark:text-accent`} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-heading-6 md:text-heading-5 font-medium">{step.title}</h3>
              <p className="text-secondary/70 dark:text-accent/70 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </article>
        </RevealAnimation>
      ))}
    </div>
  );
};

AffiliatesStep.displayName = 'AffiliatesStep';
export default AffiliatesStep;
