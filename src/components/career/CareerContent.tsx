import bannerImage from '@public/images/ns-img-379.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CareerContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-12 space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
              <span className="badge badge-green !normal-case">Beginners Welcome</span>
              <span className="badge badge-cyan !normal-case">Zero Experience Required</span>
              <span className="badge badge-yellow !normal-case">Unpaid Internship</span>
              <span className="badge badge-gray-light-v2 !normal-case">Certificate Provided</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Build Your Future With Arlo Technologies</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-xl font-medium">Learn. Create. Grow.</p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[840px] text-lg text-secondary/80 dark:text-accent/80">
              Start your journey with Arlo Technologies through learning-focused internship opportunities. No prior experience is required. Develop practical skills, explore your interests, contribute to projects, evaluate your abilities, and earn a completion certificate after meeting the program requirements.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="pt-2">
              <a
                href="#open-positions"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md inline-flex items-center">
                Explore Open Positions
              </a>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.6}>
          <figure className="mb-8">
            <Image src={bannerImage} alt="Arlo Technologies Career Banner" className="rounded-2xl w-full object-cover" priority />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
