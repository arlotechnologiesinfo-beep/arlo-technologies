import { heroVideoCards } from '@/data/heroVideos';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroVideoCard from './HeroVideoCard';
import LineExpand from './LineExpand';
import ScrollExpand from './ScrollExpand';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-16 lg:pt-[234px] lg:pb-[100px]" id="hero">
      <LineExpand />
      <div className="main-container mb-[80px] lg:mb-[100px]">
        <div className="space-y-12 text-center">
          <div className="space-y-4">
            <RevealAnimation delay={0.2}>
              <h1 className="mx-auto w-full max-w-[886px]">Ideas Into Innovation. Technology Into Impact.</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto w-full max-w-[700px]">
                We build intelligent products, modern software, and digital experiences that turn ambitious ideas into
                meaningful solutions.
              </p>
            </RevealAnimation>
          </div>
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/projects"
                  className="btn btn-pair-left btn-md md:btn-xl w-[90%] md:w-auto shadow-md">
                  Explore Our Work
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={60}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="#contact"
                  className="btn btn-pair-right btn-md md:btn-xl w-[90%] md:w-auto shadow-md">
                  Let&apos;s Talk
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>

      {/* Hero Video Carousel / Showcase Strip */}
      <RevealAnimation delay={0.2} offset={90}>
        <div className="w-full relative">
          <div className="scroll-bar flex items-center justify-start xl:justify-center gap-4 overflow-x-auto overflow-y-hidden py-4 px-4 sm:px-6 cursor-grab active:cursor-grabbing select-none">
            {/* Video Card 1 */}
            <HeroVideoCard
              videoSrc={heroVideoCards[0].videoSrc}
              fallbackSources={heroVideoCards[0].fallbackSources}
              poster={heroVideoCards[0].poster}
              alt={heroVideoCards[0].alt}
            />

            {/* Video Card 2 */}
            <HeroVideoCard
              videoSrc={heroVideoCards[1].videoSrc}
              fallbackSources={heroVideoCards[1].fallbackSources}
              poster={heroVideoCards[1].poster}
              alt={heroVideoCards[1].alt}
            />

            {/* Video Card 3 */}
            <HeroVideoCard
              videoSrc={heroVideoCards[2].videoSrc}
              fallbackSources={heroVideoCards[2].fallbackSources}
              poster={heroVideoCards[2].poster}
              alt={heroVideoCards[2].alt}
            />

            {/* Center Featured ScrollExpand Video Card */}
            <ScrollExpand
              image={heroVideoCards[3].poster}
              videoSrc={heroVideoCards[3].videoSrc}
              fallbackSources={heroVideoCards[3].fallbackSources}
            />

            {/* Video Card 5 */}
            <HeroVideoCard
              videoSrc={heroVideoCards[4].videoSrc}
              fallbackSources={heroVideoCards[4].fallbackSources}
              poster={heroVideoCards[4].poster}
              alt={heroVideoCards[4].alt}
            />

            {/* Video Card 6 */}
            <HeroVideoCard
              videoSrc={heroVideoCards[5].videoSrc}
              fallbackSources={heroVideoCards[5].fallbackSources}
              poster={heroVideoCards[5].poster}
              alt={heroVideoCards[5].alt}
            />

            {/* Video Card 7 */}
            <HeroVideoCard
              videoSrc={heroVideoCards[6].videoSrc}
              fallbackSources={heroVideoCards[6].fallbackSources}
              poster={heroVideoCards[6].poster}
              alt={heroVideoCards[6].alt}
            />
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Hero;
