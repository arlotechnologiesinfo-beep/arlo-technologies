import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { webBgAssets } from '@/data/webBgImages';

const servicesList = [
  {
    title: 'Web Design & Front-End Development',
    subtitle: 'High-performance Next.js & React architectures with modern interactivity',
    image: webBgAssets.futuristicRobot,
    alt: 'Web design and front-end development architecture',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    figureClass: 'w-full overflow-hidden rounded-2xl h-[220px]',
  },
  {
    title: 'UI/UX Design for SaaS & Products',
    subtitle: 'Intuitive design systems, complex data dashboards, and conversion flows',
    image: webBgAssets.futuristicPrism,
    alt: 'UI and UX product design systems',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    figureClass: 'w-full overflow-hidden rounded-2xl h-[220px]',
  },
  {
    title: 'Brand Identity & Visual Direction',
    subtitle: 'Memorable brand positioning, typography systems, and digital guidelines',
    image: webBgAssets.heroGradient,
    alt: 'Brand identity design and digital guidelines',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    figureClass: 'w-full overflow-hidden rounded-2xl h-[220px]',
  },
  {
    title: 'Framer, Webflow & Modern Platforms',
    subtitle: 'Rapid go-to-market execution with clean responsive interactions',
    image: webBgAssets.futuristicPortrait,
    alt: 'Modern web platforms and CMS development',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    figureClass: 'w-full overflow-hidden rounded-2xl h-[220px]',
  },
  {
    title: 'Art Direction & Strategic Technology Consulting',
    subtitle: 'End-to-end guidance from conceptualization through enterprise scaling and AI integration',
    image: webBgAssets.godrays,
    alt: 'Art direction and strategic technology consulting',
    colSpan: 'col-span-12 lg:col-span-8',
    figureClass: 'w-full overflow-hidden rounded-2xl h-[220px]',
  },
];

const Services = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>What We Can Help You With</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[776px]">
              From AI-powered innovation to digital experiences, we turn ambitious ideas into impactful solutions.
            </p>
          </RevealAnimation>
        </div>
        <div className="mb-[72px]">
          <div className="grid grid-cols-12 gap-y-8 sm:gap-8">
            {servicesList.map((service, index) => (
              <div key={service.title} className={service.colSpan}>
                <RevealAnimation delay={0.4 + index * 0.1}>
                  <div className="group dark:bg-background-8 space-y-5 rounded-[24px] bg-white p-6 md:p-8 border border-stroke-3/50 dark:border-stroke-7/50 hover:border-primary-500/40 transition-all duration-300 hover:shadow-xl h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-heading-6 md:text-heading-5">{service.title}</h3>
                      <p className="text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>
                    <div>
                      <figure className={`relative ${service.figureClass} border border-stroke-3/40 dark:border-stroke-7/40 bg-background-2 dark:bg-background-9`}>
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          unoptimized
                          className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </figure>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
        <RevealAnimation delay={0.9}>
          <div className="flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-3">
            <LinkButton
              href="/services"
              className="btn btn-pair-left btn-md w-[90%] md:w-auto shadow-md">
              Explore services
            </LinkButton>
            <LinkButton
              href="/contact-us"
              className="btn btn-pair-right btn-md w-[90%] md:w-auto shadow-md">
              Book a call
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
