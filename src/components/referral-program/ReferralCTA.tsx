import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ReferralCTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-background-6 border-t border-stroke-3 dark:border-stroke-7" aria-label="referral closing cta">
      <div className="main-container">
        <div className="mx-auto max-w-[800px] text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-2">Start Referring</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 md:text-heading-2 font-normal">
              Your Network Is Your Opportunity.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg max-w-[640px] mx-auto leading-relaxed">
              Every meaningful recommendation creates lasting value. Introduce your friends, founders, and business partners
              to Arlo Technologies and start unlocking rewards toward your own active subscription.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-pair-left btn-lg w-full sm:w-auto">
                Get My Referral Link
              </LinkButton>
              <LinkButton
                href="/services"
                className="btn btn-pair-right btn-lg w-full sm:w-auto">
                Explore Our Services
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

ReferralCTA.displayName = 'ReferralCTA';
export default ReferralCTA;
