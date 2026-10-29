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

// Base endpoint for Cloudflare R2 streaming
export const R2_BASE = process.env.NEXT_PUBLIC_R2_URL || '/api/r2';

// Videos directly analyzed and verified from Cloudflare R2 "arlo-technologies" bucket:
const CLOUDFLARE_HERO_VIDEOS = {
  entryway:
    'portfolio/hero/From Klickpin.com- 9 Timeless entryway organization ideas that are worth saving if you love elegant details and creative inspiration for anyone wh.mp4',
  businessGoals:
    'portfolio/hero/From Klickpin.com- Business Goal Ideas for a More Beautiful Life 56045-pin-id-845973111274326707.mp4',
  glowySkin:
    'portfolio/hero/From Klickpin.com- Fresh glowy skin routine tips that can instantly upgrade your look room party or daily routine for ideas worth saving right now (1).mp4',
  centerpieces:
    'portfolio/hero/From Klickpin.com- Wedding Table Centerpieces That Feel So Put Together 41256-pin-id-978195981571745679.mp4',
  weddingHair:
    'portfolio/hero/From Klickpin.com- Wedding hair ideas that are trending right now and still timeless enough to save for later for anyone who wants easy but elegan.mp4',
};

function getR2VideoUrl(key: string): string {
  // Encodes each path segment so spaces and special characters stream correctly
  return `${R2_BASE}/${key.split('/').map(encodeURIComponent).join('/')}`;
}

export const heroVideoCards: IHeroVideoCard[] = [
  {
    id: 'hero-card-1',
    videoSrc: getR2VideoUrl(CLOUDFLARE_HERO_VIDEOS.entryway),
    fallbackSources: [
      `/api/r2/${CLOUDFLARE_HERO_VIDEOS.entryway.split('/').map(encodeURIComponent).join('/')}`,
      '/videos/hero/hero-1.mp4',
    ],
    poster: hero1,
    title: 'Creative Concepts & Spaces',
    badge: 'Design Vision',
    alt: 'Hero video 1: Creative concepts and curated design inspiration',
    category: 'Design Architecture',
  },
  {
    id: 'hero-card-2',
    videoSrc: getR2VideoUrl(CLOUDFLARE_HERO_VIDEOS.businessGoals),
    fallbackSources: [
      `/api/r2/${CLOUDFLARE_HERO_VIDEOS.businessGoals.split('/').map(encodeURIComponent).join('/')}`,
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
    videoSrc: getR2VideoUrl(CLOUDFLARE_HERO_VIDEOS.glowySkin),
    fallbackSources: [
      `/api/r2/${CLOUDFLARE_HERO_VIDEOS.glowySkin.split('/').map(encodeURIComponent).join('/')}`,
      '/videos/hero/hero-3.mp4',
    ],
    poster: hero3,
    title: 'Modern Lifestyle & Aesthetics',
    badge: 'Digital Presence',
    alt: 'Hero video 3: Modern lifestyle aesthetics and high-impact branding',
    category: 'Branding',
  },
  {
    id: 'hero-card-4',
    // Center flagship card that expands on scroll via ScrollExpand
    videoSrc: getR2VideoUrl(CLOUDFLARE_HERO_VIDEOS.centerpieces),
    fallbackSources: [
      `/api/r2/${CLOUDFLARE_HERO_VIDEOS.centerpieces.split('/').map(encodeURIComponent).join('/')}`,
      getR2VideoUrl(CLOUDFLARE_HERO_VIDEOS.businessGoals),
      '/videos/hero/hero-4.mp4',
    ],
    poster: hero4,
    title: 'Production Excellence at Scale',
    badge: 'Flagship Showcase',
    alt: 'Hero video 4: Curated production excellence expanding centerpiece',
    category: 'Flagship',
  },
  {
    id: 'hero-card-5',
    videoSrc: getR2VideoUrl(CLOUDFLARE_HERO_VIDEOS.weddingHair),
    fallbackSources: [
      `/api/r2/${CLOUDFLARE_HERO_VIDEOS.weddingHair.split('/').map(encodeURIComponent).join('/')}`,
      '/videos/hero/hero-5.mp4',
    ],
    poster: hero5,
    title: 'Timeless Elegance & Detail',
    badge: 'Art Direction',
    alt: 'Hero video 5: Timeless elegance and creative craftsmanship',
    category: 'Craftsmanship',
  },
  {
    id: 'hero-card-6',
    videoSrc: getR2VideoUrl(CLOUDFLARE_HERO_VIDEOS.businessGoals),
    fallbackSources: [
      `/api/r2/${CLOUDFLARE_HERO_VIDEOS.businessGoals.split('/').map(encodeURIComponent).join('/')}`,
      '/videos/hero/hero-6.mp4',
    ],
    poster: hero6,
    title: 'Digital Systems & Operations',
    badge: 'Enterprise Platform',
    alt: 'Hero video 6: High-conversion digital operations and software platforms',
    category: 'Platforms',
  },
  {
    id: 'hero-card-7',
    videoSrc: getR2VideoUrl(CLOUDFLARE_HERO_VIDEOS.entryway),
    fallbackSources: [
      `/api/r2/${CLOUDFLARE_HERO_VIDEOS.entryway.split('/').map(encodeURIComponent).join('/')}`,
      '/videos/hero/hero-7.mp4',
    ],
    poster: hero7,
    title: 'Full-Stack Digital Experiences',
    badge: 'Experience Design',
    alt: 'Hero video 7: Full-stack digital experiences and modern web applications',
    category: 'Interactive Experiences',
  },
];
