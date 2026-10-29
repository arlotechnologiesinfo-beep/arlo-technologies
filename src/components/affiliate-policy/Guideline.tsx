import affiliateCover from '@public/images/ns-img-370.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Guideline = () => {
  return (
    <section className="pt-32 pb-16 sm:pt-36 md:pt-42 md:pb-24 lg:pb-28 xl:pt-[180px]" aria-label="affiliate policy hero">
      <div className="main-container">
        <div className="space-y-12 md:space-y-16">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan mb-2">Operational Guidelines</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal">
                Clear Rules. Fair Partnerships. Shared Growth.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg leading-relaxed max-w-[680px] mx-auto">
                Our affiliate programme works best when everyone understands how referrals are tracked, how commissions are earned,
                and what responsible promotion looks like.
              </p>
            </RevealAnimation>

            {/* Proposed Operational Draft Disclaimer */}
            <RevealAnimation delay={0.45}>
              <div className="mt-6 rounded-xl border border-stroke-3 dark:border-stroke-7 bg-background-2 dark:bg-background-6 p-4 md:p-5 text-left text-xs md:text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">
                <span className="font-semibold text-secondary dark:text-accent block mb-1">
                  Proposed Operational Draft — Pending Final Legal Review
                </span>
                This document sets out the operational framework, standards, and commercial expectations for participating in the
                Arlo Technologies Affiliate Program. It is provided for informational and planning purposes and does not constitute a
                final binding contractual agreement until approved and executed within individual partner onboarding documentation.
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5} instant={true}>
            <figure className="max-w-full overflow-hidden rounded-[20px]">
              <Image
                src={affiliateCover}
                quality={100}
                className="h-full w-full object-cover object-center max-h-[460px]"
                alt="Arlo Technologies Affiliate Guidelines"
                priority
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Guideline.displayName = 'Guideline';
export default Guideline;
