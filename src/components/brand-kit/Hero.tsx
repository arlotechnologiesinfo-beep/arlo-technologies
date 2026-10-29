import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="xl:pt-[170px] pt-[140px] xl:pb-20 lg:pb-16 pb-12">
      <div className="main-container">
        <div className="mx-auto max-w-[800px] text-center space-y-4">
          <RevealAnimation delay={0.1} instant>
            <span className="badge badge-green !normal-case">Brand Identity &amp; Assets</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2} instant>
            <h1 className="text-center font-normal text-heading-3 sm:text-heading-2 md:text-heading-1">
              Arlo Technologies Brand Kit
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3} instant>
            <p className="mx-auto max-w-[620px] text-base sm:text-lg text-secondary/75 dark:text-accent/75 font-normal">
              Official logos, visual guidelines, color specifications, and digital assets for partners, press, and developers.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
