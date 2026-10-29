import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="xl:pt-[190px] pt-[130px] xl:pb-16 lg:pb-14 pb-10 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="mx-auto max-w-[900px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan mb-2 !normal-case">Security &amp; Trust</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal">
              Security, Privacy &amp; Responsible Engineering
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-lg sm:text-xl font-medium">
              Transparent Boundaries. Verified Practices. Built Around Your Ambition.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-[800px] mx-auto">
              At Arlo Technologies, we design and build digital solutions, software products, and AI workflows with security considered from day one. We believe security communications should be grounded in verifiable engineering facts—clearly distinguishing between active implemented controls, product-specific configurations, standard engineering practices, and planned roadmap capabilities.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Verified Implemented Control
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                <span className="size-1.5 rounded-full bg-sky-500"></span>
                Product-Dependent Control
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                <span className="size-1.5 rounded-full bg-amber-500"></span>
                Intended Engineering Practice
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
                <span className="size-1.5 rounded-full bg-purple-500"></span>
                Planned Roadmap Capability
              </span>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
