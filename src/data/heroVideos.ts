import hero1 from '@public/images/ns-img-133.jpg';
import hero2 from '@public/images/ns-img-134.jpg';
import hero3 from '@public/images/ns-img-135.jpg';
import hero4 from '@public/images/ns-img-136.jpg';
import hero5 from '@public/images/ns-img-137.jpg';
import hero6 from '@public/images/ns-img-138.jpg';
import hero7 from '@public/images/ns-img-139.jpg';
import { StaticImageData } from 'next/image';

export interface IHeroVideoCard {
  id: string;
  videoSrc: string;
  fallbackSources?: string[];
  poster: StaticImageData;
  title: string;
  badge: string;
  alt: string;
  category?: string;
}

// Local video assets verified from public/videos/hero-videos/
const LOCAL_HERO_VIDEOS = {
  digitalProducts:
    '/videos/hero-videos/' +
    encodeURIComponent(
      'From Klickpin.com- Steal these easy digital product ideas that help you get the look without the stress with practical inspiration you can use rig.mp4',
    ),
  businessGoals:
    '/videos/hero-videos/' +
    encodeURIComponent(
      'From Klickpin.com- Business Goal Ideas for a More Beautiful Life 56045-pin-id-845973111274326707.mp4',
    ),
  glowySkin:
    '/videos/hero-videos/' +
    encodeURIComponent(
      'From Klickpin.com- Fresh glowy skin routine tips that can instantly upgrade your look room party or daily routine for ideas worth saving right now (1).mp4',
    ),
  centerpieces:
    '/videos/hero-videos/' +
    encodeURIComponent(
      'From Klickpin.com- Wedding Table Centerpieces That Feel So Put Together 41256-pin-id-978195981571745679.mp4',
    ),
  weddingHair:
    '/videos/hero-videos/' +
    encodeURIComponent(
      'From Klickpin.com- Wedding hair ideas that are trending right now and still timeless enough to save for later for anyone who wants easy but elegan.mp4',
    ),
};

export const heroVideoCards: IHeroVideoCard[] = [
  {
    id: 'hero-card-1',
    videoSrc: LOCAL_HERO_VIDEOS.digitalProducts,
    fallbackSources: [
      '/videos/hero/hero-1.mp4',
    ],
    poster: hero1,
    title: 'Digital Products & Modern UI',
    badge: 'Product Design',
    alt: 'Hero video 1: Digital product concepts and modern user experience',
    category: 'Digital Products',
  },
  {
    id: 'hero-card-2',
    videoSrc: LOCAL_HERO_VIDEOS.businessGoals,
    fallbackSources: [
      '/videos/hero/hero-2.mp4',
    ],
    poster: hero2,
    title: 'Business Growth & Ambition',
    badge: 'Strategic Vision',
    alt: 'Hero video 2: Business goals and strategic enterprise execution',
    category: 'Strategy',
  },
  {
    id: 'hero-card-3',
    videoSrc: LOCAL_HERO_VIDEOS.glowySkin,
    fallbackSources: [
      '/videos/hero/hero-3.mp4',
    ],
    poster: hero3,
    title: 'Modern Aesthetics & Lifestyle',
    badge: 'Visual Craft',
    alt: 'Hero video 3: Visual aesthetics, motion design, and high-impact branding',
    category: 'Branding',
  },
  {
    id: 'hero-card-4',
    // Center flagship card that expands on scroll via ScrollExpand
    videoSrc: LOCAL_HERO_VIDEOS.centerpieces,
    fallbackSources: [
      LOCAL_HERO_VIDEOS.businessGoals,
      '/videos/hero/hero-4.mp4',
    ],
    poster: hero4,
    title: 'Curated Production & Detail',
    badge: 'Flagship Showcase',
    alt: 'Hero video 4: Curated centerpiece production and craftsmanship',
    category: 'Flagship',
  },
  {
    id: 'hero-card-5',
    videoSrc: LOCAL_HERO_VIDEOS.weddingHair,
    fallbackSources: [
      '/videos/hero/hero-5.mp4',
    ],
    poster: hero5,
    title: 'Creative Styling & Elegance',
    badge: 'Art Direction',
    alt: 'Hero video 5: Creative styling, elegance, and art direction',
    category: 'Art Direction',
  },
  {
    id: 'hero-card-6',
    videoSrc: LOCAL_HERO_VIDEOS.digitalProducts,
    fallbackSources: [
      LOCAL_HERO_VIDEOS.businessGoals,
      '/videos/hero/hero-6.mp4',
    ],
    poster: hero6,
    title: 'Interactive Solutions & Apps',
    badge: 'Engineering',
    alt: 'Hero video 6: Interactive web applications and software engineering',
    category: 'Engineering',
  },
  {
    id: 'hero-card-7',
    videoSrc: LOCAL_HERO_VIDEOS.businessGoals,
    fallbackSources: [
      LOCAL_HERO_VIDEOS.glowySkin,
      '/videos/hero/hero-7.mp4',
    ],
    poster: hero7,
    title: 'Enterprise Impact & Scale',
    badge: 'Enterprise Systems',
    alt: 'Hero video 7: Enterprise systems and scalable technology platforms',
    category: 'Scale',
  },
];
