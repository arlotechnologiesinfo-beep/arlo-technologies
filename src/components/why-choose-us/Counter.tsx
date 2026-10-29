import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Counter = () => {
  return (
    <section className="py-14 lg:py-20 xl:py-28">
      <div className="main-container">
        <div className="mb-10 text-center space-y-2">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-3 !normal-case">Impact</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
              Our Impact at a Glance
            </h2>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3}>
          <div className="rounded-3xl bg-secondary dark:bg-background-6 p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-accent/15">
              {/* Metric 1: Integrations */}
              <div className="flex flex-col items-center justify-start text-center space-y-4 pt-4 md:pt-0 md:px-4">
                <div className="bg-ns-green px-10 py-3 rounded-full w-fit shadow-md">
                  <p className="text-heading-4 lg:text-heading-3 font-semibold text-secondary flex items-center justify-center">
                    <NumberAnimation number={50} speed={1500} interval={100} rooms={2} />
                    <span>+</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white text-heading-6 font-normal">Integrations</h3>
                  <p className="text-accent/80 text-tagline-2 max-w-[280px] mx-auto leading-relaxed">
                    Connecting tools, platforms, and digital ecosystems.
                  </p>
                </div>
              </div>

              {/* Metric 2: Compliance Experts */}
              <div className="flex flex-col items-center justify-start text-center space-y-4 pt-8 md:pt-0 md:px-4">
                <div className="bg-ns-green px-10 py-3 rounded-full w-fit shadow-md">
                  <p className="text-heading-4 lg:text-heading-3 font-semibold text-secondary flex items-center justify-center">
                    <NumberAnimation number={20} speed={1500} interval={100} rooms={2} />
                    <span>+</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white text-heading-6 font-normal">
                    Compliance Experts &amp; Former Auditors
                  </h3>
                  <p className="text-accent/80 text-tagline-2 max-w-[300px] mx-auto leading-relaxed">
                    Bringing a detail-oriented, risk-aware perspective to the solutions we develop.
                  </p>
                </div>
              </div>

              {/* Metric 3: In Funding */}
              <div className="flex flex-col items-center justify-start text-center space-y-4 pt-8 md:pt-0 md:px-4">
                <div className="bg-ns-green px-10 py-3 rounded-full w-fit shadow-md">
                  <p className="text-heading-4 lg:text-heading-3 font-semibold text-secondary flex items-center justify-center">
                    <span>$</span>
                    <NumberAnimation number={1} speed={1200} interval={100} rooms={1} />
                    <span>M+</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white text-heading-6 font-normal">In Funding</h3>
                  <p className="text-accent/80 text-tagline-2 max-w-[280px] mx-auto leading-relaxed">
                    A funding milestone that reflects our ambition to pursue meaningful innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Counter.displayName = 'Counter';
export default Counter;
