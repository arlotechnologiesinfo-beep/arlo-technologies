import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-24">
      <div className="main-container">
        <div className="mx-auto max-w-[900px] text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-2 !normal-case">Why Choose Us</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="font-normal text-heading-3 sm:text-heading-2 md:text-heading-1 leading-tight">
              Built on Ideas. Driven by Innovation. Focused on Impact.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[760px] text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
              We combine technology, creativity, and forward-thinking engineering to transform ambitious ideas into
              meaningful digital solutions. At Arlo Technologies, every challenge is an opportunity to build something
              better.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
