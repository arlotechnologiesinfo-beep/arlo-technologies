//white paper research
import { IWhitePaper } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import FeaturedCard from './FeaturedCard';
import ResearchCard from './ResearchCard';

const Research = () => {
  const whitepaperData: IWhitePaper[] = getMarkDownData<IWhitePaper & { [key: string]: unknown }>(
    'src/data/whitepaper',
  );

  const featuredCard = whitepaperData.find((item) => item.featured === true);

  return (
    <section>
      <div className="mx-5">
        <div className="bg-background-12 dark:bg-background-7 mx-auto max-w-[1880px] rounded-[30px] py-16 md:py-20 lg:py-[120px] xl:py-[174px]">
          <div className="main-container">
            <div className="text-center max-w-[800px] mx-auto mb-14 space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan !normal-case">Full Library</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                  Research Publications &amp; Technical Guides
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base">
                  Browse our complete collection of technical whitepapers, architectural decision playbooks, and research analyses.
                </p>
              </RevealAnimation>
            </div>

            <div className="grid grid-cols-12 items-stretch gap-6">
              {/* FEATURED CARD    */}
              {featuredCard && (
                <RevealAnimation delay={0.1} instant>
                  <FeaturedCard card={featuredCard as IWhitePaper} />
                </RevealAnimation>
              )}

              {whitepaperData
                .filter((item) => item.featured === false)
                .map((item, index) => {
                  const delay = 0.2 + index * 0.1;
                  return (
                    <RevealAnimation key={item.slug} delay={delay}>
                      <ResearchCard item={item} />
                    </RevealAnimation>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Research.displayName = 'Research';
export default Research;
