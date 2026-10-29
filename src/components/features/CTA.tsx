import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="bg-white dark:bg-background-6 py-16 md:py-20 lg:py-28 border-t border-stroke-3 dark:border-stroke-7" aria-label="features cta section">
      <div className="main-container">
        <div className="mx-auto max-w-[800px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-2 !normal-case">Get Started</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              Have an Idea Worth Building?
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-xl font-medium">
              Let&apos;s Turn Your Next Big Idea Into Reality.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg max-w-[680px] mx-auto leading-relaxed">
              From intelligent AI solutions to thoughtful digital experiences, Arlo Technologies is ready to explore your next challenge and help you move forward.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-pair-left btn-md w-full sm:w-auto">
                Let&apos;s Talk
              </LinkButton>
              <LinkButton
                href="/#projects"
                className="btn btn-pair-right btn-md w-full sm:w-auto">
                Explore Our Work
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
