import { webBgAssets } from '@/data/webBgImages';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import LineExpand from './LineExpand';
import ScrollExpand from './ScrollExpand';

const heroTechCards = [
  {
    id: 'hero-card-1',
    image: webBgAssets.futuristicRobot,
    title: 'Autonomous AI Agents',
    badge: 'AI & Automation',
    alt: 'Autonomous AI agents and intelligent workflow automation',
  },
  {
    id: 'hero-card-2',
    image: webBgAssets.ditherGradient,
    title: 'Cloud-Native Systems',
    badge: 'Cloud Platforms',
    alt: 'Resilient cloud-native systems and scalable microservices',
  },
  {
    id: 'hero-card-3',
    image: webBgAssets.starryNight,
    title: 'Sanraksha Secure Vault',
    badge: 'Local-First Security',
    alt: 'Sanraksha zero-knowledge encrypted offline document vault',
  },
  {
    id: 'hero-card-4',
    image: webBgAssets.futuristicPrism,
    title: 'Intelligent Software Engineering',
    badge: 'Flagship Engineering',
    alt: 'Intelligent software architectures and modern platform engineering',
  },
  {
    id: 'hero-card-5',
    image: webBgAssets.heroGradient,
    title: 'High-Performance Web Platforms',
    badge: 'Modern Web',
    alt: 'High-performance Next.js and React full-stack applications',
  },
  {
    id: 'hero-card-6',
    image: webBgAssets.futuristicPortrait,
    title: 'Human-Centered UI/UX Systems',
    badge: 'Design Craft',
    alt: 'Enterprise UI/UX design systems and product conversion flows',
  },
  {
    id: 'hero-card-7',
    image: webBgAssets.godrays,
    title: 'Scalable APIs & Infrastructure',
    badge: 'Mission-Critical Scale',
    alt: 'Scalable APIs, real-time analytics, and secure integrations',
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-16 lg:pt-[234px] lg:pb-[100px]" id="hero">
      <LineExpand />
      <div className="main-container mb-[80px] lg:mb-[100px]">
        <div className="space-y-12 text-center">
          <div className="space-y-4">
            <RevealAnimation delay={0.2}>
              <h1 className="mx-auto w-full max-w-[920px]">
                Intelligent Software. Scalable Systems. Engineered for Impact.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto w-full max-w-[720px] text-secondary/80 dark:text-accent/80 text-base sm:text-lg">
                Arlo Technologies engineers mission-critical software, autonomous AI agent platforms, and modern digital
                products for forward-thinking enterprises and fast-growing businesses.
              </p>
            </RevealAnimation>
          </div>
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/services"
                  className="btn btn-pair-left btn-md md:btn-xl w-[90%] md:w-auto shadow-md">
                  Explore Services
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left" offset={55}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/portfolio"
                  className="btn btn-pair-right btn-md md:btn-xl w-[90%] md:w-auto shadow-md">
                  View Portfolio
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={60}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-pair-right btn-md md:btn-xl w-[90%] md:w-auto shadow-md">
                  Let&apos;s Build Together
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>

      {/* Hero Showcase Carousel Strip */}
      <RevealAnimation delay={0.2} offset={90}>
        <div className="w-full relative">
          <div className="scroll-bar flex items-center justify-start xl:justify-center gap-4 overflow-x-auto overflow-y-hidden py-4 px-4 sm:px-6 cursor-grab active:cursor-grabbing select-none">
            {/* Card 1 */}
            <figure
              data-cursor-text="Explore"
              data-cursor-variant="explore"
              className="group relative h-[380px] w-[260px] min-w-[260px] max-w-[260px] shrink-0 overflow-hidden rounded-[20px] border border-stroke-3/50 dark:border-stroke-7/50 bg-background-2 dark:bg-background-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-500/50 hover:shadow-2xl select-none">
              <Image
                src={heroTechCards[0].image}
                alt={heroTechCards[0].alt}
                fill
                priority
                unoptimized
                sizes="260px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary-300">
                  {heroTechCards[0].badge}
                </span>
                <p className="text-sm font-medium mt-1 leading-snug">{heroTechCards[0].title}</p>
              </div>
            </figure>

            {/* Card 2 */}
            <figure
              data-cursor-text="Explore"
              data-cursor-variant="explore"
              className="group relative h-[380px] w-[260px] min-w-[260px] max-w-[260px] shrink-0 overflow-hidden rounded-[20px] border border-stroke-3/50 dark:border-stroke-7/50 bg-background-2 dark:bg-background-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-500/50 hover:shadow-2xl select-none">
              <Image
                src={heroTechCards[1].image}
                alt={heroTechCards[1].alt}
                fill
                priority
                unoptimized
                sizes="260px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary-300">
                  {heroTechCards[1].badge}
                </span>
                <p className="text-sm font-medium mt-1 leading-snug">{heroTechCards[1].title}</p>
              </div>
            </figure>

            {/* Card 3 */}
            <figure
              data-cursor-text="Security"
              data-cursor-variant="explore"
              className="group relative h-[380px] w-[260px] min-w-[260px] max-w-[260px] shrink-0 overflow-hidden rounded-[20px] border border-stroke-3/50 dark:border-stroke-7/50 bg-background-2 dark:bg-background-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-500/50 hover:shadow-2xl select-none">
              <Image
                src={heroTechCards[2].image}
                alt={heroTechCards[2].alt}
                fill
                priority
                unoptimized
                sizes="260px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-300">
                  {heroTechCards[2].badge}
                </span>
                <p className="text-sm font-medium mt-1 leading-snug">{heroTechCards[2].title}</p>
              </div>
            </figure>

            {/* Center Featured ScrollExpand Card */}
            <ScrollExpand
              image={heroTechCards[3].image}
            />

            {/* Card 5 */}
            <figure
              data-cursor-text="Explore"
              data-cursor-variant="explore"
              className="group relative h-[380px] w-[260px] min-w-[260px] max-w-[260px] shrink-0 overflow-hidden rounded-[20px] border border-stroke-3/50 dark:border-stroke-7/50 bg-background-2 dark:bg-background-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-500/50 hover:shadow-2xl select-none">
              <Image
                src={heroTechCards[4].image}
                alt={heroTechCards[4].alt}
                fill
                priority
                unoptimized
                sizes="260px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary-300">
                  {heroTechCards[4].badge}
                </span>
                <p className="text-sm font-medium mt-1 leading-snug">{heroTechCards[4].title}</p>
              </div>
            </figure>

            {/* Card 6 */}
            <figure
              data-cursor-text="Explore"
              data-cursor-variant="explore"
              className="group relative h-[380px] w-[260px] min-w-[260px] max-w-[260px] shrink-0 overflow-hidden rounded-[20px] border border-stroke-3/50 dark:border-stroke-7/50 bg-background-2 dark:bg-background-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-500/50 hover:shadow-2xl select-none">
              <Image
                src={heroTechCards[5].image}
                alt={heroTechCards[5].alt}
                fill
                priority
                unoptimized
                sizes="260px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary-300">
                  {heroTechCards[5].badge}
                </span>
                <p className="text-sm font-medium mt-1 leading-snug">{heroTechCards[5].title}</p>
              </div>
            </figure>

            {/* Card 7 */}
            <figure
              data-cursor-text="Explore"
              data-cursor-variant="explore"
              className="group relative h-[380px] w-[260px] min-w-[260px] max-w-[260px] shrink-0 overflow-hidden rounded-[20px] border border-stroke-3/50 dark:border-stroke-7/50 bg-background-2 dark:bg-background-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-500/50 hover:shadow-2xl select-none">
              <Image
                src={heroTechCards[6].image}
                alt={heroTechCards[6].alt}
                fill
                priority
                unoptimized
                sizes="260px"
                className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary-300">
                  {heroTechCards[6].badge}
                </span>
                <p className="text-sm font-medium mt-1 leading-snug">{heroTechCards[6].title}</p>
              </div>
            </figure>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
