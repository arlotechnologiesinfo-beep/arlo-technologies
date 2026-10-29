'use client';

import arloHorizontalLogo from '@public/images/brand-kit/arlo-technologies-horizontal-logo.png';
import arloStackedLogo from '@public/images/brand-kit/arlo-technologies-stacked-logo.png';
import arloIconLogo from '@public/images/shared/arlo-icon.png';
import arloRoundWhite from '@public/images/shared/arlo-round-white.png';
import arloRoundGlass from '@public/images/shared/arlo-round-glass.png';
import nsImg376 from '@public/images/ns-img-376.svg';
import nsImg377 from '@public/images/ns-img-377.svg';
import nsImg378 from '@public/images/ns-img-378.svg';
import Image, { StaticImageData } from 'next/image';
import LinkButton from '../ui/button/LinkButton';
import RevealAnimation from '../animation/RevealAnimation';

interface BrandCard {
  id: string;
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  delay: number;
}

const brandCards: BrandCard[] = [
  {
    id: '1',
    image: nsImg376,
    alt: 'Arlo Technologies ArtReview feature',
    title: 'Arlo Technologies: Redefining the intersection of design and intelligent technology',
    description:
      'ArtReview spoke with the team at Arlo Technologies about how our engineering and design platform bridges human creativity and AI workflows while upholding architectural rigor and brand trust.',
    delay: 0.4,
  },
  {
    id: '2',
    image: nsImg377,
    alt: 'Creative technology showcase',
    title: 'Reimagining modern digital experiences with Arlo Technologies',
    description:
      'Following key engineering showcases, Arlo Technologies empowers founders and product teams with transparent, high-performance tools that give full creative control over their digital platforms.',
    delay: 0.5,
  },
  {
    id: '3',
    image: nsImg378,
    alt: 'Top tech platforms recognition',
    title: 'Modern frameworks transforming client web & digital products',
    description:
      'Recognized among forward-thinking digital agencies and engineering studios, Arlo Technologies delivers custom full-stack web applications, AI agents, and distinctive digital identities worldwide.',
    delay: 0.6,
  },
];

const brandColors = [
  { name: 'Prism Sapphire', hex: '#0B47A8', desc: 'Primary Brand Blue', textColor: 'text-white' },
  { name: 'Azure Cyan', hex: '#56CCF2', desc: 'Prism Accent Glow', textColor: 'text-secondary' },
  { name: 'Charcoal Noir', hex: '#1A1A1C', desc: 'Primary Typography', textColor: 'text-white' },
  { name: 'Pure White', hex: '#FFFFFF', desc: 'Surface Canvas', textColor: 'text-secondary', border: true },
];

const Content = () => {
  return (
    <section>
      <div className="main-container">
        <div className="mx-auto w-full max-w-[920px] space-y-16 pb-16 lg:pb-24 xl:pb-28">
          
          {/* Official Logo Assets Section */}
          <RevealAnimation delay={0.1}>
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="badge badge-green font-medium !normal-case">Official Brand Assets</span>
                <h2 className="text-heading-4 sm:text-heading-3 font-normal">
                  Arlo Technologies Brand Marks
                </h2>
                <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base max-w-2xl">
                  Download the official Arlo Technologies brand marks in high resolution. Optimized for responsive navigation, glassmorphic headers, square profile avatars, and vector publication.
                </p>
              </div>

              {/* Grid of official logos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Logo 1: Horizontal Lockup */}
                <div className="group rounded-[24px] border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-white p-4 shadow-inner border border-stroke-2">
                      <Image
                        src={arloHorizontalLogo}
                        alt="Arlo Technologies Horizontal Logo"
                        className="max-h-[130px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute top-3 left-3 rounded-full bg-secondary/80 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                        Horizontal Lockup
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium text-secondary dark:text-accent">
                          Horizontal Logo
                        </h3>
                        <span className="text-[11px] font-mono text-secondary/50 dark:text-accent/50">PNG • Hi-Res</span>
                      </div>
                      <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                        Standard primary mark featuring the prism crest and horizontal wordmark. For headers and banners.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-2">
                    <LinkButton
                      download="arlo-technologies-horizontal-logo.png"
                      href="/images/brand-kit/arlo-technologies-horizontal-logo.png"
                      className="btn-sm btn-secondary hover:btn-primary dark:btn-accent dark:hover:btn-primary text-xs shadow-xs w-full">
                      Download (PNG)
                    </LinkButton>
                  </div>
                </div>

                {/* Logo 2: Round Glassmorphic & White Badge (Header Logo) */}
                <div className="group rounded-[24px] border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="relative flex h-[220px] w-full items-center justify-center gap-4 overflow-hidden rounded-[18px] bg-secondary/90 p-4 shadow-inner border border-stroke-2/20">
                      <div className="flex flex-col items-center gap-2">
                        <Image
                          src={arloRoundWhite}
                          alt="Round White Emblem"
                          className="size-24 object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                        <span className="text-[10px] text-white/70 font-mono">White Disc</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Image
                          src={arloRoundGlass}
                          alt="Round Glassmorphic Emblem"
                          className="size-24 object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-transform duration-500 group-hover:scale-105"
                          priority
                        />
                        <span className="text-[10px] text-white/70 font-mono">Glassmorphic</span>
                      </div>
                      <div className="absolute top-3 left-3 rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                        Header Round Disc
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium text-secondary dark:text-accent">
                          Round Emblem Badge
                        </h3>
                        <span className="text-[11px] font-mono text-secondary/50 dark:text-accent/50">PNG • 512x512</span>
                      </div>
                      <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                        Curated round emblem badge designed specifically for floating glassmorphism headers, app launchers, and user avatars.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-2 grid grid-cols-2 gap-2">
                    <LinkButton
                      download="arlo-round-white.png"
                      href="/images/shared/arlo-round-white.png"
                      className="btn-sm btn-secondary hover:btn-primary dark:btn-accent dark:hover:btn-primary text-[11px] shadow-xs w-full text-center">
                      White (PNG)
                    </LinkButton>
                    <LinkButton
                      download="arlo-round-glass.png"
                      href="/images/shared/arlo-round-glass.png"
                      className="btn-sm btn-primary hover:btn-accent text-[11px] shadow-xs w-full text-center">
                      Glass (PNG)
                    </LinkButton>
                  </div>
                </div>

                {/* Logo 3: Stacked Badge Lockup */}
                <div className="group rounded-[24px] border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-white p-4 shadow-inner border border-stroke-2">
                      <Image
                        src={arloStackedLogo}
                        alt="Arlo Technologies Stacked Logo"
                        className="max-h-[160px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute top-3 left-3 rounded-full bg-secondary/80 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                        Stacked Lockup
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium text-secondary dark:text-accent">
                          Stacked Emblem
                        </h3>
                        <span className="text-[11px] font-mono text-secondary/50 dark:text-accent/50">PNG • Hi-Res</span>
                      </div>
                      <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                        Vertical lockup designed for square viewports, avatars, splash cards, and centered layouts.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-2">
                    <LinkButton
                      download="arlo-technologies-stacked-logo.png"
                      href="/images/brand-kit/arlo-technologies-stacked-logo.png"
                      className="btn-sm btn-secondary hover:btn-primary dark:btn-accent dark:hover:btn-primary text-xs shadow-xs w-full">
                      Download (PNG)
                    </LinkButton>
                  </div>
                </div>

                {/* Logo 4: Standalone Prism Icon */}
                <div className="group rounded-[24px] border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-white p-4 shadow-inner border border-stroke-2">
                      <Image
                        src={arloIconLogo}
                        alt="Arlo Technologies Prism Icon Mark"
                        className="max-h-[160px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute top-3 left-3 rounded-full bg-secondary/80 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                        Standalone Crest
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium text-secondary dark:text-accent">
                          Prism Emblem Mark
                        </h3>
                        <span className="text-[11px] font-mono text-secondary/50 dark:text-accent/50">PNG • Hi-Res</span>
                      </div>
                      <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                        Pure geometric brand emblem without wordmark. For app icons, favicons, badges, and mobile nav.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-2">
                    <LinkButton
                      download="arlo-icon.png"
                      href="/images/shared/arlo-icon.png"
                      className="btn-sm btn-secondary hover:btn-primary dark:btn-accent dark:hover:btn-primary text-xs shadow-xs w-full">
                      Download (PNG)
                    </LinkButton>
                  </div>
                </div>

              </div>
            </div>
          </RevealAnimation>

          {/* Official Brand Palette */}
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-heading-4 font-normal">Brand Color Palette</h2>
                <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base">
                  Core color codes extracted from the Arlo Technologies prism identity for unified brand consistency across web and print.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {brandColors.map((color) => (
                  <div
                    key={color.hex}
                    className="rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 p-4 shadow-sm space-y-3">
                    <div
                      style={{ backgroundColor: color.hex }}
                      className={`h-20 w-full rounded-xl flex items-end p-2.5 ${color.border ? 'border border-stroke-2' : ''}`}>
                      <span className={`text-xs font-mono font-bold ${color.textColor}`}>{color.hex}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-secondary dark:text-accent">{color.name}</h4>
                      <p className="text-[11px] text-secondary/60 dark:text-accent/60">{color.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* Brand Identity Guidelines */}
          <RevealAnimation delay={0.25}>
            <div className="space-y-6">
              <h2 className="text-heading-4 font-normal">Brand Identity &amp; Philosophy</h2>
              <div className="space-y-4 text-secondary/80 dark:text-accent/80 text-sm sm:text-base leading-relaxed">
                <p>
                  Arlo Technologies represents forward-thinking engineering, purposeful digital design, and practical innovation.
                  Our visual identity is defined by precision, structural balance, and vibrant forward motion, symbolized by the multi-faceted geometric crest that anchors our brand.
                </p>
                <p>
                  When applying the Arlo Technologies brand marks, always maintain adequate clear space around the emblem equal to at least half the height of the icon. Do not rotate, skew, recolor, or distort the mark. Always ensure high contrast against background surfaces.
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* Press & Media Features */}
          <div className="space-y-6">
            <RevealAnimation delay={0.3}>
              <h2 className="text-heading-4 font-normal">Media &amp; Industry Features</h2>
            </RevealAnimation>
            <div className="space-y-4">
              {brandCards.map((card) => (
                <RevealAnimation key={card.id} delay={card.delay}>
                  <div className="border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6 flex flex-col items-center gap-x-6 rounded-[22px] border p-3 sm:p-4 lg:flex-row transition-all duration-300 hover:shadow-md">
                    <div className="flex w-full max-w-full items-center justify-center rounded-xl bg-white px-8 py-8 lg:max-w-[320px] border border-stroke-2">
                      <figure className="w-full max-w-[130px]">
                        <Image src={card.image} alt={card.alt} className="size-full object-contain" />
                      </figure>
                    </div>
                    <div className="space-y-2 py-4 pr-4 pl-2 lg:pl-0">
                      <h3 className="text-heading-6 sm:text-heading-5 font-normal leading-snug">{card.title}</h3>
                      <p className="text-xs sm:text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
