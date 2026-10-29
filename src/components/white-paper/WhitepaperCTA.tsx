import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const WhitepaperCTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-background-6 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="mx-auto max-w-[900px] text-center space-y-12">
          {/* Research Topic Suggestion Card */}
          <div className="rounded-3xl bg-background-3 dark:bg-background-7 p-8 sm:p-10 border border-stroke-3 dark:border-stroke-7 space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan !normal-case">Research Collaboration</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent">
                Have a Research Topic in Mind?
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base max-w-[700px] mx-auto leading-relaxed">
                We&apos;re interested in the questions shaping the future of AI, software, automation, and digital experiences. Suggest a topic, share a technical challenge, or explore a potential research collaboration with our team.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <LinkButton
                  href="/contact-us?subject=Suggest+a+Research+Topic"
                  className="btn btn-pair-left btn-md w-full sm:w-auto">
                  Suggest a Topic
                </LinkButton>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-pair-right btn-md w-full sm:w-auto">
                  Contact Arlo Technologies
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Closing Section: Still Curious? Let's Explore What's Possible */}
          <div className="space-y-6 pt-4">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green !normal-case">Next Steps</span>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <h3 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal text-secondary dark:text-accent">
                Still Curious? Let&apos;s Explore What&apos;s Possible.
              </h3>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg max-w-[720px] mx-auto leading-relaxed">
                The next breakthrough can start with one good question. Explore our research, suggest a topic, or connect with Arlo Technologies to discuss your next idea.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <LinkButton
                  href="#explore-whitepapers"
                  className="btn btn-pair-left btn-md w-full sm:w-auto">
                  Explore Whitepapers
                </LinkButton>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-pair-right btn-md w-full sm:w-auto">
                  Talk to Our Team
                </LinkButton>
              </div>
            </RevealAnimation>

            {/* Stay Ahead Through Understanding Callout */}
            <RevealAnimation delay={0.6}>
              <div className="mt-10 rounded-2xl bg-background-3 dark:bg-background-7 p-6 border border-stroke-3 dark:border-stroke-7 text-center space-y-2 max-w-[780px] mx-auto">
                <h4 className="text-heading-6 font-normal text-secondary dark:text-accent">
                  Stay Ahead Through Understanding
                </h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Better technology decisions begin with better questions. Explore our research to discover new perspectives, evaluate your options, and approach your next digital initiative with greater clarity.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

WhitepaperCTA.displayName = 'WhitepaperCTA';
export default WhitepaperCTA;
