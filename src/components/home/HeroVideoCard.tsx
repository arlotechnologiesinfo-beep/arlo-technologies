'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface HeroVideoCardProps {
  videoSrc: string;
  fallbackSources?: string[];
  poster: StaticImageData | string;
  alt: string;
  className?: string;
}

export default function HeroVideoCard({
  videoSrc,
  fallbackSources = [],
  poster,
  alt,
  className = '',
}: HeroVideoCardProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(-1);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const activeSrc =
    currentSrcIndex === -1 ? videoSrc : fallbackSources[currentSrcIndex] || '';

  // Handle autoplay and ensure audio is strictly muted per browser autoplay policies
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {return;}

    video.defaultMuted = true;
    video.muted = true;

    // Use IntersectionObserver to pause video when off-screen to optimize CPU & performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [activeSrc]);

  const handleVideoError = () => {
    if (currentSrcIndex + 1 < fallbackSources.length) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setHasVideoError(true);
    }
  };

  return (
    <figure
      ref={cardRef}
      className={`group relative h-[380px] w-[260px] min-w-[260px] max-w-[260px] shrink-0 overflow-hidden rounded-[20px] border border-stroke-3/50 dark:border-stroke-7/50 bg-background-2 dark:bg-background-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-500/50 hover:shadow-2xl select-none ${className}`}>
      
      {/* Fallback / Poster Image */}
      {(!isVideoLoaded || hasVideoError) && (
        <Image
          src={poster}
          alt={alt}
          fill
          priority
          unoptimized={typeof poster === 'string'}
          sizes="260px"
          className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Looping Ambient Video */}
      {!hasVideoError && activeSrc && (
        <video
          ref={videoRef}
          src={activeSrc}
          poster={typeof poster === 'string' ? poster : poster.src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={handleVideoError}
          className={`size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      )}
    </figure>
  );
}
