import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const SupportCTA = () => {
  return (
    <section className="bg-white dark:bg-background-6 py-16 md:py-20 lg:py-28 border-t border-stroke-3 dark:border-stroke-7" aria-label="support cta section">
      <div className="main-container">
        <div className="mx-auto max-w-[800px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-2 !normal-case">Get in Touch</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              Your Next Step Starts With a Conversation.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg max-w-[680px] mx-auto leading-relaxed">
              Whether you need technical support, want to explore our digital services, or have an ambitious project
              idea, we&apos;re ready to listen and help you move forward.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-pair-left btn-md w-full sm:w-auto">
                Get Started
              </LinkButton>
              <LinkButton
                href="/services"
                className="btn btn-pair-right btn-md w-full sm:w-auto">
                Explore Our Services
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

SupportCTA.displayName = 'SupportCTA';
export default SupportCTA;
