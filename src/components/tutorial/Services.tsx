import { cn } from '@/utils/cn';
import gradient28 from '@public/images/ns-img-516.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ServiceStat {
  label: string;
  value: string;
  description: string;
}

interface ServiceCardProps {
  stat: ServiceStat;
  isFirst?: boolean;
}

const serviceStats: ServiceStat[] = [
  {
    label: 'Practical Guides',
    value: '50+',
    description: 'Step-by-step tutorials & walkthroughs',
  },
  {
    label: 'Project Blueprints',
    value: '24+',
    description: 'Real-world practical architectures',
  },
  {
    label: 'Core Integrations',
    value: '30+',
    description: 'Connected tools, platforms & APIs',
  },
  {
    label: 'Code Patterns',
    value: '100+',
    description: 'Production-ready reusable snippets',
  },
  {
    label: 'Community Builders',
    value: '10k+',
    description: 'Engineers & digital creators',
  },
];

const ServiceCard = ({ stat, isFirst = false }: ServiceCardProps) => (
  <div
    className={cn(
      'bg-background-2 hover:bg-secondary dark:bg-background-6 hover:dark:bg-background-8 group relative z-0 flex min-h-[270px] min-w-[360px] flex-col justify-between gap-y-8 overflow-hidden rounded-[20px] p-8 transition-all duration-700 ease-in-out',
      isFirst && 'ml-8',
    )}>
    <figure className="pointer-events-none absolute inset-0 -top-[210%] -right-[160%] -z-10 rotate-[-78deg] transform opacity-0 transition-all duration-1000 ease-in-out select-none group-hover:scale-110 group-hover:opacity-100">
      <Image src={gradient28} alt="review-bg" className="h-full w-full object-cover" />
    </figure>
    <div className="transform transition-all duration-700 ease-in-out group-hover:translate-y-[4px]">
      <p className="text-secondary/60 dark:text-accent/60 mb-2 text-lg transition-colors duration-700 ease-in-out group-hover:text-white">
        {stat.label}
      </p>
      <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
        {stat.value}
      </h3>
    </div>
    <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transform transition-all duration-700 ease-in-out group-hover:translate-y-[-6px] group-hover:opacity-90">
      {stat.description}
    </p>
  </div>
);

const Services = () => {
  return (
    <section className="bg-background-3 dark:bg-background-5 py-[50px] sm:py-[100px] md:py-[200px] dark:md:py-[100px]">
      <RevealAnimation delay={0.1}>
        <div className="relative">
          <div className="from-background-3 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-background-3 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
          <Marquee className="cards-marquee-container" pauseOnHover={true} autoFill={true}>
            <div className="mb-14 flex items-center justify-center gap-8">
              {serviceStats.map((stat, index) => (
                <ServiceCard key={`${stat.label}-${index}`} stat={stat} isFirst={index === 0} />
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Services;
