//Success Stories Hero
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="xl:pt-[180px] md:pt-42 pt-36 xl:pb-28 md:pb-24 pb-10" aria-label="success stories hero section">
      <div className="main-container">
        <div className="lg:max-w-[780px] text-center space-y-4 lg:mx-auto">
          <RevealAnimation delay={0.1} instant>
            <h1 className="lg:text-heading-2">Real Businesses. Bold Ideas. Meaningful Progress.</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2} instant>
            <p className="text-secondary/80 dark:text-accent/80 text-base md:text-lg leading-relaxed">
              Every successful digital experience begins with an idea and grows through the right partnership.
              Discover the businesses we&apos;ve worked with, the people driving their vision, and the digital
              experiences created through collaboration with Arlo Technologies.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
