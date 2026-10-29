import featureIntroImg from '@public/images/ns-img-353.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const FeatureIntro = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[850px] space-y-4 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green !normal-case mb-2">Use Cases</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal leading-tight">
              Technology That Works for the Way You Work.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[720px] text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
              Discover how Arlo Technologies helps teams, businesses, and innovators turn complex challenges into
              intelligent products, streamlined workflows, and meaningful digital experiences.
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="h-auto w-full overflow-hidden rounded-[20px] shadow-lg">
            <Image src={featureIntroImg} alt="Technology that works for the way you work" className="size-full object-cover object-center" priority />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

FeatureIntro.displayName = 'FeatureIntro';
export default FeatureIntro;
