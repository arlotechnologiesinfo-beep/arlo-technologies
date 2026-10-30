'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SESSION_KEY = 'arlo-preloaded';
const SHOW_DURATION_MS = 2500;
const COLUMNS = 5;
const EASE = [0.76, 0, 0.24, 1] as const;

/** Inline script (run before paint) that skips the preloader on repeat visits in the same session. */
export const preloaderSkipScript = `try{if(sessionStorage.getItem('${SESSION_KEY}'))document.documentElement.classList.add('preloaded')}catch(e){}`;

/**
 * Full-screen "stairs" intro: brand name and company slogan on a solid backdrop,
 * then the screen lifts away as staggered vertical columns (a staircase).
 * Only transform/opacity are animated. Shown once per session.
 */
const Preloader = () => {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      // storage unavailable: just show the preloader
    }
    if (seen) {
      setVisible(false);
      return;
    }

    const root = document.documentElement;
    root.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      root.style.overflow = '';
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // ignore
      }
      setVisible(false);
    }, reduce ? 800 : SHOW_DURATION_MS);

    return () => {
      clearTimeout(timer);
      root.style.overflow = '';
    };
  }, [reduce]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div id="preloader" aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] flex" initial={false}>
          {/* Staircase columns */}
          {Array.from({ length: COLUMNS }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-secondary h-full flex-1"
              style={{ willChange: 'transform' }}
              exit={{
                y: '-100%',
                transition: { duration: reduce ? 0.2 : 0.7, ease: EASE, delay: reduce ? 0 : 0.1 + (COLUMNS - 1 - i) * 0.07 },
              }}
            />
          ))}

          {/* Brand name + slogan */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-white"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }}>
            <p className="text-heading-3 font-semibold tracking-tight">Arlo Technologies</p>
            <p className="text-tagline-2 text-white/70">Where ideas become intelligent products.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
