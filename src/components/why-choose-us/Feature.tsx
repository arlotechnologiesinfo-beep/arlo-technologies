import { cn } from '@/utils/cn';
import nsImg208 from '@public/images/ns-img-208.png';
import nsImgDark141 from '@public/images/ns-img-dark-141.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface FeatureItem {
  id: string;
  text: string;
  iconClass: string;
}

const featureItems: FeatureItem[] = [
  {
    id: 'ai-automation',
    text: 'AI-powered products & intelligent automation',
    iconClass: 'ns-shape-10',
  },
  {
    id: 'modern-websites',
    text: 'Modern, responsive websites & digital platforms',
    iconClass: 'ns-shape-12',
  },
  {
    id: 'scalable-software',
    text: 'Scalable software engineering & robust codebases',
    iconClass: 'ns-shape-14',
  },
  {
    id: 'human-design',
    text: 'Human-centered design tailored around your vision',
    iconClass: 'ns-shape-16',
  },
];

const Feature = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-[100px] lg:py-[100px] lg:pb-[140px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="mx-auto max-w-[540px] space-y-6 sm:space-y-8 lg:mx-0 lg:max-w-full">
              <div className="space-y-4">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-green-v2 !normal-case mb-2">Tailored Approach</span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                    Personalized Solutions That Make Sense
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-secondary dark:text-accent text-xl font-medium">
                    Technology Designed Around Your Vision.
                  </p>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <div className="space-y-3 text-secondary/80 dark:text-accent/80 text-base leading-relaxed">
                    <p>
                      No two challenges are the same. That&apos;s why we focus on understanding your goals, your users,
                      and your challenges before shaping the right solution.
                    </p>
                    <p>
                      From AI-powered products and intelligent automation to modern websites and scalable software,
                      Arlo Technologies brings ideas, design, and technology together to create solutions built around
                      real needs.
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              <ul className="space-y-2">
                {featureItems.map((item, index) => (
                  <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                    <li className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-background-2 dark:hover:bg-background-6">
                      <span
                        className={cn('text-secondary dark:text-accent text-[32px]', item.iconClass)}
                        aria-hidden="true"
                      />
                      <span className="text-tagline-1 text-secondary dark:text-accent font-medium">{item.text}</span>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.3}>
              <figure className="mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-[669px]">
                <Image
                  src={nsImg208}
                  alt="Personalized solutions that make sense"
                  className="size-full dark:hidden"
                />
                <Image
                  src={nsImgDark141}
                  alt="Personalized solutions that make sense in dark mode"
                  className="hidden size-full dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Feature.displayName = 'Feature';
export default Feature;
