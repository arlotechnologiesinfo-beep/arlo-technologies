import { webBgAssets } from '@/data/webBgImages';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const servicesList = [
  {
    title: 'Custom Web & Enterprise Platform Engineering',
    subtitle: 'High-performance Next.js, React, Node.js, and TypeScript architectures with sub-second performance',
    image: webBgAssets.futuristicRobot,
    alt: 'Custom web and enterprise platform engineering',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    figureClass: 'w-full overflow-hidden rounded-2xl h-[220px]',
  },
  {
    title: 'Enterprise UI/UX Design & Product Systems',
    subtitle: 'Scalable design systems, interactive web applications, and intuitive product user experiences',
    image: webBgAssets.futuristicPrism,
    alt: 'UI and UX enterprise product design systems',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    figureClass: 'w-full overflow-hidden rounded-2xl h-[220px]',
  },
  {
    title: 'Autonomous AI Agents & Intelligent Automation',
    subtitle: 'Custom LLM reasoning chains, multi-agent workflows, and practical machine learning integrations',
    image: webBgAssets.heroGradient,
    alt: 'Autonomous AI agents and intelligent automation systems',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    figureClass: 'w-full overflow-hidden rounded-2xl h-[220px]',
  },
  {
    title: 'Mobile Architecture & Offline-First Security',
    subtitle: 'Native and cross-platform mobile apps with hardware-backed encryption, SQLCipher, and zero cloud lock-in',
    image: webBgAssets.futuristicPortrait,
    alt: 'Mobile application architecture and offline-first security',
    colSpan: 'col-span-12 sm:col-span-6 lg:col-span-4',
    figureClass: 'w-full overflow-hidden rounded-2xl h-[220px]',
  },
  {
    title: 'Strategic Cloud Architecture & Technical Advisory',
    subtitle: 'End-to-end guidance from architectural blueprints through cloud scalability, zero-trust security, and operational reliability',
    image: webBgAssets.godrays,
    alt: 'Strategic cloud architecture and technical advisory',
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
            <h2>Engineering Capabilities &amp; Services</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[776px] text-secondary/80 dark:text-accent/80">
              From intelligent autonomous AI agents to mission-critical web platforms, we engineer software that solves complex problems and drives business growth.
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
              Explore All Services
            </LinkButton>
            <LinkButton
              href="/contact-us"
              className="btn btn-pair-right btn-md w-[90%] md:w-auto shadow-md">
              Book Technical Consultation
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Services.displayName = 'Services';
export default Services;
