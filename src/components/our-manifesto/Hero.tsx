import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-24">
      <div className="main-container">
        <div className="mx-auto max-w-[900px] text-center space-y-6">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-2 !normal-case">Our Manifesto</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="font-normal text-heading-3 sm:text-heading-2 md:text-heading-1 leading-tight">
              We Believe the Future Is Built, Not Waited For.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="mx-auto max-w-[760px] space-y-4 text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
              <p>
                Technology should do more than impress. It should solve meaningful problems, unlock human potential,
                and turn ambitious ideas into things that make a difference.
              </p>
              <p>
                At Arlo Technologies, we believe innovation begins with a question, grows through experimentation, and
                becomes meaningful through execution.
              </p>
              <p className="text-xl font-medium text-secondary dark:text-accent pt-2">
                We don&apos;t just imagine what&apos;s next. We work to build it.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
