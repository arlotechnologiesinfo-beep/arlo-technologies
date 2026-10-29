import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="pt-[110px] pb-16 lg:pt-[150px] lg:pb-20 xl:pt-[180px] xl:pb-24 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="space-y-6 text-center max-w-[920px] mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan !normal-case">Whitepapers &amp; Research</span>
          </RevealAnimation>
          <div className="space-y-4">
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal">
                Ideas That Inform. Research That Moves Technology Forward.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg leading-relaxed max-w-[800px] mx-auto">
                Explore practical research, technical perspectives, and implementation-focused guides from Arlo Technologies. Our whitepapers examine emerging technologies, real-world challenges, and the decisions that help teams build smarter, more responsible digital solutions.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <LinkButton
                href="#explore-whitepapers"
                className="btn btn-pair-left btn-md w-full sm:w-auto">
                Explore Whitepapers
              </LinkButton>
              <LinkButton
                href="/contact-us"
                className="btn btn-pair-right btn-md w-full sm:w-auto">
                Discuss a Research Topic
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
