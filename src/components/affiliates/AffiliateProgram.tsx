// affiliate-program section
import affiliatesCover from '@public/images/ns-img-371.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const AffiliateProgram = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <RevealAnimation delay={0.1}>
            <div className="mx-auto max-w-[760px] space-y-4 text-center">
              <span className="badge badge-green mb-2">Partner With Arlo</span>
              <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal">
                Turn Your Influence Into Opportunity.
              </h1>
              <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg max-w-[680px] mx-auto leading-relaxed">
                Help businesses discover smarter ways to build, automate, and grow. Partner with Arlo Technologies to
                introduce relevant products to your audience and earn commissions on eligible, successfully attributed sales.
              </p>
              <div className="mt-7 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-pair-left btn-xl w-full sm:w-auto">
                  Apply to Become an Affiliate
                </LinkButton>
                <LinkButton
                  href="/affiliate-policy"
                  className="btn btn-pair-right btn-xl w-full sm:w-auto">
                  View Affiliate Policy
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2} instant>
            <figure className="max-w-full overflow-hidden rounded-[20px]">
              <Image
                src={affiliatesCover}
                className="h-full w-full object-cover object-center"
                alt="Arlo Technologies Affiliate Program Cover"
                priority
              />
            </figure>
          </RevealAnimation>
          <div className="max-w-[830px] space-y-4">
            <RevealAnimation delay={0.3}>
              <h2 className="text-heading-4 sm:text-heading-3 font-normal">
                More than a link. A partnership built around value.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg leading-relaxed">
                We believe affiliate marketing works best when it is rooted in genuine relevance and technical substance.
                We collaborate with affiliates who take pride in recommending tools and services that genuinely empower their audience.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="space-y-3 pt-2">
                <li className="text-tagline-1 text-secondary/70 dark:text-accent/70 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                  <strong className="text-secondary dark:text-accent font-medium">
                    Value-driven introductions:{' '}
                  </strong>
                  <span>
                    Introduce intelligent AI agents, modern web systems, and automation frameworks that solve real operational bottlenecks.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/70 dark:text-accent/70 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                  <strong className="text-secondary dark:text-accent font-medium">
                    Transparent attribution:{' '}
                  </strong>
                  <span>
                    Clear attribution rules and honest accounting ensure that successfully attributed conversions are fairly credited.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/70 dark:text-accent/70 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                  <strong className="text-secondary dark:text-accent font-medium">
                    Responsible brand alignment:{' '}
                  </strong>
                  <span>
                    Promote with complete confidence using verified product information, clear disclosures, and high ethical standards.
                  </span>
                </li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

AffiliateProgram.displayName = 'AffiliateProgram';
export default AffiliateProgram;
