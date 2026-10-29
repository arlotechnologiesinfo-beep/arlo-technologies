import { CheckIcon } from '@/icons';
import totalEarnImg from '@public/images/ns-img-356.png';
import roundImage from '@public/images/ns-img-73.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeaturesV2 = () => {
  return (
    <section className="pt-32 pb-28 sm:pt-36 md:pt-42 xl:pt-[200px]">
      <div className="main-container flex flex-col-reverse items-center gap-x-24 gap-y-12 overflow-hidden lg:flex-row">
        <div className="relative flex w-full justify-start md:flex-1 lg:w-auto">
          <RevealAnimation delay={0.2}>
            <Image src={roundImage} alt="Finance Hero" className="h-auto w-full max-w-[450px]" />
          </RevealAnimation>
          <RevealAnimation delay={0.3} direction="right" offset={90}>
            <div className="bg-ns-yellow text-heading-4 text-secondary absolute top-[49%] right-[15%] flex max-h-[70px] max-w-[219px] items-center justify-center rounded-2xl p-4">
              $
              <NumberAnimation number={245450} speed={2000} interval={200} rooms={6} />
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={100}>
            <figure className="shadow-10 absolute right-[17%] bottom-[15%] w-full max-w-[186px] overflow-hidden rounded-xl">
              <Image src={totalEarnImg} alt="Finance Hero" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
        <div className="flex flex-col md:flex-1 lg:items-start lg:text-left">
          <RevealAnimation delay={0.2}>
            <h2 className="mb-2 text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              From Possibility to Practical Solutions.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.25}>
            <p className="text-secondary dark:text-accent text-lg sm:text-xl font-medium mb-3">
              Technology That Works for Your World.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mb-6 text-secondary/70 dark:text-accent/70 leading-relaxed">
              Whether you&apos;re launching a new digital product, improving an existing platform, or exploring AI-powered opportunities, Arlo Technologies helps turn your vision into a practical solution.
            </p>
          </RevealAnimation>
          <ul className="mb-10 space-y-4 md:mb-14 md:space-y-5">
            <RevealAnimation delay={0.4}>
              <li className="flex items-start gap-3">
                <span className="bg-secondary dark:bg-accent/10 flex size-[22px] shrink-0 items-center justify-center rounded-full mt-0.5">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="text-tagline-1 dark:text-accent font-semibold">AI &amp; Automation</h3>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm mt-0.5 leading-relaxed">
                    Explore intelligent workflows that simplify repetitive tasks and support better processes.
                  </p>
                </div>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="flex items-start gap-3">
                <span className="bg-secondary dark:bg-accent/10 flex size-[22px] shrink-0 items-center justify-center rounded-full mt-0.5">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="text-tagline-1 dark:text-accent font-semibold">Digital Products</h3>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm mt-0.5 leading-relaxed">
                    Build modern websites, applications, and software experiences around real user needs.
                  </p>
                </div>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <li className="flex items-start gap-3">
                <span className="bg-secondary dark:bg-accent/10 flex size-[22px] shrink-0 items-center justify-center rounded-full mt-0.5">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="text-tagline-1 dark:text-accent font-semibold">Connected Experiences</h3>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm mt-0.5 leading-relaxed">
                    Bring design, technology, and integrations together to create more cohesive digital solutions.
                  </p>
                </div>
              </li>
            </RevealAnimation>
          </ul>
          <RevealAnimation delay={0.7}>
            <div>
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary hover:btn-white dark:btn-white-dark btn-xl mx-auto block w-full md:inline-block md:w-auto">
                Get started
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

FeaturesV2.displayName = 'FeaturesV2';
export default FeaturesV2;
