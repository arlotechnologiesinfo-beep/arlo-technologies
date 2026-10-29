import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const PricingCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-background-2 dark:bg-background-8 border-t border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="mx-auto max-w-4xl rounded-4xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-sm">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Tailored Recommendations</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 sm:text-heading-2 font-normal max-w-2xl mx-auto">
              Not Sure Which Plan Fits? Let&apos;s Find Your Starting Point.
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-2xl mx-auto leading-relaxed">
              Every business problem is unique. Tell us what you are trying to accomplish, your target launch window,
              and your technical requirements. We will review your goals and recommend the most practical,
              cost-effective path forward.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact-us" className="btn btn-primary btn-md">
                <span>Let&apos;s Find Your Plan</span>
              </Link>
              <Link href="/case-study" className="btn btn-white dark:btn-white-dark btn-md">
                <span>Explore Client Work</span>
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
