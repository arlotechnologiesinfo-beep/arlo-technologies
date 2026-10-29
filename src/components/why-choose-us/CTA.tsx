import LinkButton from '@/components/ui/button/LinkButton';
import nsImg336 from '@public/images/ns-img-336.svg';
import nsImg337 from '@public/images/ns-img-337.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CTA = () => {
  return (
    <section className="py-16 lg:py-22 xl:py-28">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-background-12 dark:bg-background-8 relative z-0 mx-auto flex flex-col items-center justify-center space-y-8 overflow-hidden rounded-4xl px-6 py-20 sm:py-28 text-center border border-stroke-3 dark:border-stroke-7 shadow-lg">
            <RevealAnimation delay={0.3} direction="left" offset={90} useSpring={true} duration={2.4}>
              <figure className="pointer-events-none absolute -bottom-10 -left-[10%] select-none md:-left-[5%] lg:left-0">
                <Image src={nsImg336} alt="cta decorative gradient" className="pointer-events-none select-none max-sm:scale-75" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="right" offset={90} useSpring={true} duration={2.4}>
              <figure className="pointer-events-none absolute top-0 -right-[16%] select-none md:-right-[10%] lg:right-0">
                <Image src={nsImg337} alt="cta decorative gradient" className="pointer-events-none select-none max-sm:scale-75" />
              </figure>
            </RevealAnimation>

            <div className="space-y-4 max-w-[760px] mx-auto relative z-10">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green !normal-case mb-2">Get Started</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                  Let&apos;s Build Something That Matters.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary dark:text-accent text-xl font-medium">
                  Your Vision Deserves More Than an Idea.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg leading-relaxed">
                  Whether you&apos;re launching a new product, modernising your digital presence, or exploring
                  what&apos;s possible with AI, Arlo Technologies is ready to help you move forward.
                </p>
              </RevealAnimation>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <LinkButton
                  href="/#projects"
                  className="btn btn-pair-left btn-md md:btn-lg w-full sm:w-auto">
                  Explore Our Work
                </LinkButton>
              </RevealAnimation>
              <RevealAnimation delay={0.6} direction="left" offset={60}>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-pair-right btn-md md:btn-lg w-full sm:w-auto">
                  Let&apos;s Build Together
                </LinkButton>
              </RevealAnimation>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
