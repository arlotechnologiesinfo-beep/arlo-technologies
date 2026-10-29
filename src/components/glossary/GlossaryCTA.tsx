import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const GlossaryCTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-background-6 border-t border-stroke-1 dark:border-stroke-7">
      <div className="main-container">
        <div className="mx-auto max-w-[800px] text-center space-y-8">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Arlo Knowledge Hub</span>
          </RevealAnimation>

          <div className="space-y-4">
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-3 md:text-heading-2 font-normal text-secondary dark:text-accent">
                Knowledge Turns Complexity Into Possibility.
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg max-w-[650px] mx-auto leading-relaxed">
                From your first technical concept to your next digital innovation, keep exploring the ideas that help you
                work smarter and build with confidence.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <LinkButton
                href="/tutorial"
                className="btn btn-pair-left btn-md w-full sm:w-auto">
                Explore Tutorials
              </LinkButton>
              <LinkButton
                href="/whitepaper"
                className="btn btn-pair-right btn-md w-full sm:w-auto">
                Discover Whitepapers
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

GlossaryCTA.displayName = 'GlossaryCTA';
export default GlossaryCTA;
