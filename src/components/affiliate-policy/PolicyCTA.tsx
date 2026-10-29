import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const PolicyCTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-background-5 border-t border-stroke-3 dark:border-stroke-7" aria-label="affiliate policy cta">
      <div className="main-container">
        <div className="mx-auto max-w-[800px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-2">Partner Inquiries</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 md:text-heading-2 font-normal">
              Have Questions About Our Affiliate Guidelines?
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg max-w-[620px] mx-auto leading-relaxed">
              Our partnerships team is available to clarify attribution models, approved promotional channels,
              and custom enterprise collaboration terms.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href="/affiliates"
                className="btn btn-pair-left btn-lg w-full sm:w-auto">
                Explore Affiliate Program
              </LinkButton>
              <LinkButton
                href="/contact-us"
                className="btn btn-pair-right btn-lg w-full sm:w-auto">
                Contact Partnerships Team
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

PolicyCTA.displayName = 'PolicyCTA';
export default PolicyCTA;
