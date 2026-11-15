import { authGalleryImages, AuthGalleryImage } from '@/data/authGallery';
import Image from 'next/image';
import styles from './AuthGallery.module.css';

const MIN_TILES_PER_SET = 6;
const PLACEHOLDER_COUNT = 8;

/** Soft blue gradients used until real images are supplied. */
const placeholderGradients = [
  'from-primary-100 to-primary-300',
  'from-primary-700 to-primary-500',
  'from-primary-50 to-primary-200',
  'from-primary-800 to-primary-600',
];

/** Repeat the source list until one "set" is tall enough to cover the viewport. */
const buildSet = (images: AuthGalleryImage[], offset: number) => {
  const rotated = images.length ? [...images.slice(offset % images.length), ...images.slice(0, offset % images.length)] : [];
  const set: AuthGalleryImage[] = [];
  while (rotated.length && set.length < MIN_TILES_PER_SET) {
    set.push(...rotated);
  }
  return set;
};

const Tile = ({ image, index, priority }: { image?: AuthGalleryImage; index: number; priority: boolean }) => (
  <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-[20px] shadow-[0_18px_40px_-18px_rgba(4,45,118,0.45)] ring-1 ring-white/60">
    {image ? (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 24vw, 21vw"
        className="object-cover"
        priority={priority}
        loading={priority ? undefined : 'lazy'}
      />
    ) : (
      <div className={`size-full bg-linear-to-br ${placeholderGradients[index % placeholderGradients.length]}`} />
    )}
  </div>
);

const Column = ({ direction, duration, images }: { direction: 'up' | 'down'; duration: number; images: AuthGalleryImage[] }) => {
  const set: (AuthGalleryImage | undefined)[] = images.length ? images : Array.from({ length: PLACEHOLDER_COUNT }, () => undefined);

  return (
    <div className="min-w-0 flex-1 overflow-hidden">
      <div
        className={`${styles.track} ${direction === 'up' ? styles.up : styles.down}`}
        style={{ ['--duration' as string]: `${duration}s` }}>
        {/* Two identical sets: translating by -50% loops with no visible seam. */}
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1}>
            {set.map((image, i) => (
              <Tile key={`${copy}-${i}`} image={image} index={i + (direction === 'up' ? 0 : 2)} priority={copy === 0 && i < 2} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/** Decorative dual infinite-scroll gallery: left column drifts down, right column drifts up. */
const AuthGallery = () => {
  const down = buildSet(authGalleryImages, 0);
  const up = buildSet(authGalleryImages, Math.floor(authGalleryImages.length / 2));

  return (
    <div
      aria-hidden="true"
      className="from-primary-50 to-primary-100 relative h-full overflow-hidden bg-linear-to-b via-white p-6 lg:p-8">
      <div className="bg-primary-300/30 pointer-events-none absolute -top-24 -left-24 size-72 rounded-full blur-3xl" />
      <div className="bg-primary-500/20 pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full blur-3xl" />
      <div className={`${styles.mask} relative flex h-full gap-4`}>
        <Column direction="down" duration={85} images={down} />
        <Column direction="up" duration={70} images={up} />
      </div>
    </div>
  );
};

export default AuthGallery;
