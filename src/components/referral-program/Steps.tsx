import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StepCard, { StepCardProps } from './StepCard';
import StepDirection from './StepDirection';

const Steps = () => {
  const stepCardData: StepCardProps[] = [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Get Your Referral Link.',
      description: 'Request or generate your unique referral link to easily share Arlo Technologies with your network.',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Bring Someone Into the Arlo Ecosystem.',
      description: 'Introduce founders, businesses, or teams looking for intelligent solutions, software, or workflow automation.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Unlock Your Reward.',
      description: 'When an eligible referral subscribes to an active plan, rewards are credited directly toward your subscription.',
    },
  ];

  return (
    <section
      className="pt-16 pb-12 md:pb-16 lg:pt-22 lg:pb-22 xl:pt-28 xl:pb-24"
      aria-labelledby="how-it-works-heading">
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 id="how-it-works-heading" itemProp="name">
                How the Referral Journey Works
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/70 dark:text-accent/70 max-w-[600px] mx-auto text-base md:text-lg" itemProp="description">
                A transparent, step-by-step process designed to reward genuine connections.
              </p>
            </RevealAnimation>
          </div>
          {/* cards  */}
          <div
            className="relative grid grid-cols-12 items-center justify-center gap-x-3 gap-y-6"
            aria-label="Step-by-step process to use Arlo Technologies">
            {/* card one  */}
            {stepCardData.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.1 + index * 0.2} direction="left">
                <StepCard
                  key={step.id}
                  {...step}
                  className={cn('md:max-w-[406px]', index % 2 === 0 ? 'bg-background-3' : 'bg-ns-green')}
                />
              </RevealAnimation>
            ))}

            {/* -> line 1  */}
            <RevealAnimation delay={0.6} direction="left">
              <StepDirection className="left-[31%] md:block" />
            </RevealAnimation>
            {/* -> line 2  */}
            <RevealAnimation delay={0.4} direction="left">
              <StepDirection className="right-[32%] md:block" />
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.1}>
          <div className="mt-14 flex items-center justify-center text-center">
            <div className="group w-[90%] sm:w-auto">
              <LinkButton href="/contact-us" className="btn-v3-lg btn-v3-secondary mx-auto w-[80%] sm:w-fit">
                Get My Referral Link
              </LinkButton>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Steps.displayName = 'Steps';
export default Steps;
