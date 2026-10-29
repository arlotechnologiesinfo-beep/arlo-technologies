import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const AnalyticsCTA = () => {
  return (
    <section className="bg-white dark:bg-background-6 py-16 md:py-20 lg:py-28 border-t border-stroke-3 dark:border-stroke-7" aria-label="analytics cta section">
      <div className="main-container">
        <div className="mx-auto max-w-[800px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan mb-2 !normal-case">Get in Touch</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              Make Your Data Work Smarter
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-xl font-medium">
              Clarity Starts With the Right Questions.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg max-w-[680px] mx-auto leading-relaxed">
              Whether you want to understand website performance, monitor product engagement, or improve business reporting, Arlo Technologies can help you explore the right analytics approach for your needs.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-pair-left btn-md w-full sm:w-auto">
                Talk to Our Team
              </LinkButton>
              <LinkButton
                href="/services"
                className="btn btn-pair-right btn-md w-full sm:w-auto">
                Explore Our Solutions
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AnalyticsCTA.displayName = 'AnalyticsCTA';
export default AnalyticsCTA;
