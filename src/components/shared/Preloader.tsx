'use client';

import { animate, AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SESSION_KEY = 'arlo-preloaded';
const COUNT_DURATION = 1.4;
const EASE = [0.76, 0, 0.24, 1] as const;

/** Inline script (run before paint) that skips the preloader on repeat visits in the same session. */
export const preloaderSkipScript = `try{if(sessionStorage.getItem('${SESSION_KEY}'))document.documentElement.classList.add('preloaded')}catch(e){}`;

/**
 * Full-screen intro: brand wordmark, 0-100 counter and a curtain reveal.
 * Only transform/opacity are animated and the counter writes straight to the DOM,
 * so there are no React re-renders while it runs. Shown once per session.
 */
const Preloader = () => {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

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

    let finished = false;
    const finish = () => {
      if (finished) {
        return;
      }
      finished = true;
      root.style.overflow = '';
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // ignore
      }
      setVisible(false);
    };

    const controls = animate(0, 100, {
      duration: reduce ? 0.4 : COUNT_DURATION,
      ease: 'easeInOut',
      onUpdate: (v) => {
        if (counterRef.current) {
          counterRef.current.textContent = String(Math.round(v));
        }
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${v / 100})`;
        }
      },
      onComplete: () => {
        const run = () => setTimeout(finish, 150);
        if (document.readyState === 'complete') {
          run();
        } else {
          window.addEventListener('load', run, { once: true });
        }
      },
    });

    // Safety net: never block the site for more than 4s.
    const failsafe = setTimeout(finish, 4000);

    return () => {
      controls.stop();
      clearTimeout(failsafe);
      root.style.overflow = '';
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="preloader"
          aria-hidden="true"
          className="bg-secondary fixed inset-0 z-[9999] flex items-center justify-center text-white"
          style={{ willChange: 'transform' }}
          initial={false}
          exit={{ y: '-100%', transition: { duration: reduce ? 0.2 : 0.8, ease: EASE } }}>
          <div className="flex w-[min(80vw,420px)] flex-col items-center gap-6">
            <motion.p
              className="text-heading-4 font-semibold tracking-tight"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}>
              Arlo Technologies
            </motion.p>
            <div className="h-px w-full overflow-hidden bg-white/20">
              <div ref={barRef} className="h-full origin-left bg-white" style={{ transform: 'scaleX(0)' }} />
            </div>
            <p className="text-tagline-2 flex w-full justify-between text-white/70 tabular-nums">
              <span>Loading experience</span>
              <span>
                <span ref={counterRef}>0</span>%
              </span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
