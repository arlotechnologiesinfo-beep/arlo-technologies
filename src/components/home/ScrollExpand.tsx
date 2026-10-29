'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollExpandProps {
  image: StaticImageData | string;
  videoSrc?: string;
  fallbackSources?: string[];
}

const ScrollExpand = ({
  image,
  videoSrc,
  fallbackSources = [],
}: ScrollExpandProps) => {
  const scrollExpandRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(-1);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const activeSrc =
    currentSrcIndex === -1 ? videoSrc : fallbackSources[currentSrcIndex] || '';

  // Ensure muted autoplay and intersection observer control
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {return;}

    video.defaultMuted = true;
    video.muted = true;

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

    if (scrollExpandRef.current) {
      observer.observe(scrollExpandRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [activeSrc]);

  useGSAP(
    () => {
      const element = scrollExpandRef.current;
      if (!element) {return;}

      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        gsap.set(element, { minWidth: '280px', width: '100%' });
        return;
      }

      // Initial desktop state
      gsap.set(element, { minWidth: '500px' });

      // Create ScrollTrigger expansion
      const scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 65%',
        end: 'bottom 35%',
        onEnter: () => {
          gsap.to(element, {
            minWidth: '950px',
            duration: 0.6,
            ease: 'power2.out',
          });
        },
        onEnterBack: () => {
          gsap.to(element, {
            minWidth: '950px',
            duration: 0.6,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(element, {
            minWidth: '500px',
            duration: 0.6,
            ease: 'power2.out',
          });
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    },
    { scope: scrollExpandRef }
  );

  const handleVideoError = () => {
    if (currentSrcIndex + 1 < fallbackSources.length) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setHasVideoError(true);
    }
  };

  return (
    <figure
      ref={scrollExpandRef}
      className="group relative rounded-[20px] overflow-hidden max-h-[380px] h-[380px] min-w-[280px] md:min-w-[500px] shrink-0 border border-stroke-3/60 dark:border-stroke-7/60 bg-background-2 dark:bg-background-8 transition-shadow duration-300 hover:shadow-2xl select-none">
      
      {/* Fallback Image */}
      {(!isVideoLoaded || hasVideoError || !activeSrc) && (
        <Image
          src={image}
          className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          alt="hero-expanding-featured-card"
          fill
          priority
          unoptimized={typeof image === 'string'}
          sizes="(max-width: 768px) 100vw, 950px"
        />
      )}

      {/* Looping Ambient Video */}
      {activeSrc && !hasVideoError && (
        <video
          ref={videoRef}
          src={activeSrc}
          poster={typeof image === 'string' ? image : image.src}
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
};

export default ScrollExpand;
