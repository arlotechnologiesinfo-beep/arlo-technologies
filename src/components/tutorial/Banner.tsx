import learnBanner from '@public/images/ns-img-385.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Banner = () => {
  return (
    <section className="pt-[170px] pb-[100px] md:pb-[200px] xl:pt-[200px]">
      <div className="main-container">
        <div className="flex flex-col items-center gap-y-14 lg:flex-row lg:gap-[100px]">
          <div className="mx-auto max-w-[540px] flex-1 space-y-14 text-center lg:mx-0 lg:max-w-full lg:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2>Master Modern Technology. Built for Real-World Implementation.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  Explore step-by-step tutorials, technical walkthroughs, and practical guides designed to help you
                  build intelligent digital solutions, automate workflows, and scale with confidence.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3} instant>
              <div>
                <LinkButton
                  href="/documentation"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent">
                  Explore Guides
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="flex-1">
            <RevealAnimation delay={0.3} instant>
              <figure className="w-full max-w-[596px] overflow-hidden rounded-[20px] opacity-0">
                <Image src={learnBanner} className="h-full w-full object-cover" alt="Arlo Technologies Tutorials and Learning Hub" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
