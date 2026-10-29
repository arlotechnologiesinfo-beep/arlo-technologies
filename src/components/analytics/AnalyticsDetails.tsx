import analytics1 from '@public/images/ns-img-367.png';
import analytics2 from '@public/images/ns-img-368.png';
import analytics3 from '@public/images/ns-img-369.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import SocialLinkV3 from '../shared/SocialLinkV3';

const AnalyticsDetails = () => {
  const social = {
    facebook: 'https://www.facebook.com',
    dribble: 'https://dribbble.com',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com',
  };

  return (
    <section className="analytics pt-[70px] pb-[100px]">
      <div className="mx-auto flex w-[95%] max-w-[950px] flex-col space-y-16">
        {/* Section 1: Build for Visibility */}
        <div className="space-y-6">
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-5 sm:text-heading-4 font-normal">Build for Visibility</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.15}>
              <h3 className="text-secondary dark:text-accent text-lg sm:text-xl font-medium">
                See the Bigger Picture. Understand Every Detail.
              </h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/70 dark:text-accent/70 leading-relaxed text-sm sm:text-base">
                Bring important business information together in clear, structured views. From website performance and product engagement to operational activity, create a better understanding of what&apos;s happening across your digital ecosystem.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <RevealAnimation delay={0.25}>
              <div className="rounded-xl bg-background-1 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7 h-full space-y-2">
                <span className="text-xs font-mono font-bold text-secondary dark:text-accent uppercase">Feature 1</span>
                <h4 className="font-semibold text-secondary dark:text-accent text-sm sm:text-base">Real-Time Visibility</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Monitor available data and key indicators through dashboards that help you understand activity and emerging changes.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="rounded-xl bg-background-1 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7 h-full space-y-2">
                <span className="text-xs font-mono font-bold text-secondary dark:text-accent uppercase">Feature 2</span>
                <h4 className="font-semibold text-secondary dark:text-accent text-sm sm:text-base">Meaningful Metrics</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Focus on relevant performance indicators instead of getting lost in unnecessary numbers.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <div className="rounded-xl bg-background-1 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7 h-full space-y-2">
                <span className="text-xs font-mono font-bold text-secondary dark:text-accent uppercase">Feature 3</span>
                <h4 className="font-semibold text-secondary dark:text-accent text-sm sm:text-base">Connected Insights</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Bring information from supported platforms and data sources into a more coherent view of business performance.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Section 2: Customization for Every Need */}
        <div className="space-y-6">
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-5 sm:text-heading-4 font-normal">Customization for Every Need</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.15}>
              <h3 className="text-secondary dark:text-accent text-lg sm:text-xl font-medium">
                Analytics That Adapt to Your Goals.
              </h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/70 dark:text-accent/70 leading-relaxed text-sm sm:text-base">
                Every team measures success differently. Create views around your objectives, workflows, and the information that matters most.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <RevealAnimation delay={0.25}>
              <div className="rounded-xl bg-background-1 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7 h-full space-y-2">
                <span className="text-xs font-mono font-bold text-secondary dark:text-accent uppercase">Feature 1</span>
                <h4 className="font-semibold text-secondary dark:text-accent text-sm sm:text-base">Personalized Dashboards</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Organize charts, metrics, and summaries around your priorities.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="rounded-xl bg-background-1 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7 h-full space-y-2">
                <span className="text-xs font-mono font-bold text-secondary dark:text-accent uppercase">Feature 2</span>
                <h4 className="font-semibold text-secondary dark:text-accent text-sm sm:text-base">Flexible Reporting</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Present information in formats that help different teams understand performance.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <div className="rounded-xl bg-background-1 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7 h-full space-y-2">
                <span className="text-xs font-mono font-bold text-secondary dark:text-accent uppercase">Feature 3</span>
                <h4 className="font-semibold text-secondary dark:text-accent text-sm sm:text-base">Goal-Oriented Views</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Focus on the metrics relevant to your products, customers, and operations.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Section 3: Drill Down. Zoom Out. */}
        <div className="space-y-6">
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-5 sm:text-heading-4 font-normal">Drill Down. Zoom Out.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.15}>
              <h3 className="text-secondary dark:text-accent text-lg sm:text-xl font-medium">
                Explore the Details Without Losing the Bigger Picture.
              </h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/70 dark:text-accent/70 leading-relaxed text-sm sm:text-base">
                Move from high-level summaries to deeper analysis when you need to understand what&apos;s driving a result. Explore patterns, compare periods, and investigate unusual changes using the data available to your system.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <RevealAnimation delay={0.25}>
              <div className="rounded-xl bg-background-1 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7 h-full space-y-2">
                <span className="text-xs font-mono font-bold text-secondary dark:text-accent uppercase">Feature 1</span>
                <h4 className="font-semibold text-secondary dark:text-accent text-sm sm:text-base">Detailed Exploration</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Move from summary metrics to relevant breakdowns and supporting information.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="rounded-xl bg-background-1 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7 h-full space-y-2">
                <span className="text-xs font-mono font-bold text-secondary dark:text-accent uppercase">Feature 2</span>
                <h4 className="font-semibold text-secondary dark:text-accent text-sm sm:text-base">Trend Comparison</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Compare available time periods and identify patterns that deserve attention.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <div className="rounded-xl bg-background-1 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7 h-full space-y-2">
                <span className="text-xs font-mono font-bold text-secondary dark:text-accent uppercase">Feature 3</span>
                <h4 className="font-semibold text-secondary dark:text-accent text-sm sm:text-base">Contextual Insights</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-xs sm:text-sm leading-relaxed">
                  Understand changes in the context of your goals, data sources, and business activity.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Visual Graphics Grid */}
        <div className="grid-column-12 grid gap-y-[50px] pt-4">
          <RevealAnimation delay={0.2}>
            <div className="cols-span-12">
              <figure className="overflow-hidden rounded-[20px] shadow-sm">
                <Image src={analytics1} alt="Analytics visualization interface" className="rounded-[20px] w-full h-auto object-cover" />
              </figure>
            </div>
          </RevealAnimation>
          <div className="cols-span-12 flex flex-col gap-[30px] md:col-span-6 md:flex-row">
            <RevealAnimation delay={0.2}>
              <figure className="overflow-hidden rounded-[20px] shadow-sm">
                <Image src={analytics2} alt="Analytics metric comparisons" className="rounded-[24px] w-full h-auto object-cover" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <figure className="overflow-hidden rounded-[20px] shadow-sm">
                <Image src={analytics3} alt="Analytics reporting breakdown" className="rounded-[24px] w-full h-auto object-cover" />
              </figure>
            </RevealAnimation>
          </div>
        </div>

        {/* Section 4: Your Data, Made More Meaningful */}
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-5 sm:text-heading-4 font-normal">Your Data, Made More Meaningful</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.15}>
              <h3 className="text-secondary dark:text-accent text-lg sm:text-xl font-medium">
                From Information to Action.
              </h3>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <RevealAnimation delay={0.2}>
              <div className="rounded-2xl bg-background-1 dark:bg-background-6 p-6 sm:p-8 border border-stroke-3 dark:border-stroke-7 space-y-3 h-full">
                <span className="badge badge-cyan">Summary 1</span>
                <h4 className="text-heading-6 sm:text-heading-5 font-normal text-secondary dark:text-accent">
                  Understand Performance
                </h4>
                <p className="text-secondary/70 dark:text-accent/70 text-sm sm:text-base leading-relaxed">
                  Bring essential metrics into focus so teams can understand progress, spot gaps, and identify areas that need attention.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <div className="rounded-2xl bg-background-1 dark:bg-background-6 p-6 sm:p-8 border border-stroke-3 dark:border-stroke-7 space-y-3 h-full">
                <span className="badge badge-green">Summary 2</span>
                <h4 className="text-heading-6 sm:text-heading-5 font-normal text-secondary dark:text-accent">
                  Make Informed Decisions
                </h4>
                <p className="text-secondary/70 dark:text-accent/70 text-sm sm:text-base leading-relaxed">
                  Use clear reporting and contextual insights to support planning, prioritisation, and continuous improvement.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Social Share Links */}
        <div className="space-y-4 pt-6 border-t border-stroke-3 dark:border-stroke-7">
          <RevealAnimation delay={0.2}>
            <h5 className="text-sm font-semibold text-secondary/80 dark:text-accent/80">Share this page</h5>
          </RevealAnimation>
          <RevealAnimation delay={0.25}>
            <div className="flex items-center justify-start">
              <SocialLinkV3 social={social} />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AnalyticsDetails.displayName = 'AnalyticsDetails';
export default AnalyticsDetails;
