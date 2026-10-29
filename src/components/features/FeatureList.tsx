import { CheckIcon } from '@/icons';
import aboutBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureListItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const FeatureList = () => {
  const featuresListData: FeatureListItem[] = [
    {
      id: 'understand-the-challenge',
      number: '01',
      title: 'Understand the Challenge',
      description: 'We explore your goals, users, and requirements before choosing the right approach.',
    },
    {
      id: 'design-with-clarity',
      number: '02',
      title: 'Design With Clarity',
      description: 'We create focused, intuitive experiences that connect technology with real needs.',
    },
    {
      id: 'engineer-thoughtfully',
      number: '03',
      title: 'Engineer Thoughtfully',
      description: 'We develop practical solutions with maintainability, reliability, and future growth in mind.',
    },
    {
      id: 'improve-continuously',
      number: '04',
      title: 'Improve Continuously',
      description: 'We test, learn, and refine our work to make every iteration more useful.',
    },
  ];

  return (
    <section className="pt-[100px]">
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          <div className="relative z-10">
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
              <Image src={aboutBg} alt="about bg" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-8 px-6 py-14 max-lg:grid-cols-1 max-sm:gap-10 lg:px-11">
              <div className="max-w-[500px] flex flex-col justify-between">
                <div className="space-y-4 mb-8">
                  <h2 className="text-accent text-heading-4 sm:text-heading-3 font-normal">
                    Built With Purpose. Designed for Progress.
                  </h2>
                  <p className="text-accent/80 text-base leading-relaxed">
                    At Arlo Technologies, we bring strategy, creativity, and engineering together to build digital solutions that address real needs. Every project begins with understanding the challenge and finding a thoughtful way forward.
                  </p>
                </div>
                <div>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-primary btn-accent dark:btn-dark hover:btn-primary btn-md border-0">
                    Get started
                  </LinkButton>
                </div>
              </div>
              <div>
                <ul className="space-y-6">
                  {featuresListData.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-3">
                      <span className="bg-accent/17 dark:bg-accent/10 flex size-6 shrink-0 items-center justify-center rounded-full mt-0.5">
                        <CheckIcon className="dark:fill-accent" />
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-accent font-semibold text-base sm:text-lg">
                          {feature.number} — {feature.title}
                        </h3>
                        <p className="text-accent/80 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

FeatureList.displayName = 'FeatureList';
export default FeatureList;
