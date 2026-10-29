import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const AffiliateCTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-background-6 border-t border-stroke-3 dark:border-stroke-7" aria-label="affiliate closing cta">
      <div className="main-container">
        <div className="mx-auto max-w-[800px] text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-2">Partnership Application</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 md:text-heading-2 font-normal">
              Let&apos;s Grow Something Meaningful Together.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg max-w-[640px] mx-auto leading-relaxed">
              Help businesses explore smarter ways to build, automate, and grow. Reach out to our partnerships team
              to discuss affiliate collaboration, product tiers, and attribution terms.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-pair-left btn-lg w-full sm:w-auto">
                Apply to Become an Affiliate
              </LinkButton>
              <LinkButton
                href="/affiliate-policy"
                className="btn btn-pair-right btn-lg w-full sm:w-auto">
                Review Affiliate Policy
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AffiliateCTA.displayName = 'AffiliateCTA';
export default AffiliateCTA;
