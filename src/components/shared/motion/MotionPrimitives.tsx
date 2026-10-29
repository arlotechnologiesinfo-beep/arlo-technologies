'use client';

import { cn } from '@/utils/cn';
import { HTMLMotionProps, Variants, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Container that staggers its <MotionItem> children in when scrolled into view. */
export const MotionStagger = ({ className, children, ...props }: HTMLMotionProps<'div'> & { children: ReactNode }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : staggerVariants}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      {...props}>
      {children}
    </motion.div>
  );
};

export const MotionItem = ({ className, children, ...props }: HTMLMotionProps<'div'> & { children: ReactNode }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} variants={reduce ? undefined : itemVariants} {...props}>
      {children}
    </motion.div>
  );
};

/** Link with a small slide + underline sweep on hover. */
export const MotionLink = ({ className, children, ...props }: ComponentProps<typeof Link>) => (
  <motion.span className="inline-block" whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }}>
    <Link className={cn('relative inline-block', className)} {...props}>
      {children}
    </Link>
  </motion.span>
);

/** Icon link that lifts and tilts on hover. */
export const MotionIconLink = ({ className, children, ...props }: ComponentProps<typeof Link>) => (
  <motion.span
    className="inline-flex"
    whileHover={{ y: -3, rotate: -6, scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
    <Link className={className} {...props}>
      {children}
    </Link>
  </motion.span>
);

/** Card that floats gently and reacts to hover. */
export const MotionPanel = ({ className, children, ...props }: HTMLMotionProps<'div'> & { children: ReactNode }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={reduce ? undefined : { y: -4 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE }}
      {...props}>
      {children}
    </motion.div>
  );
};

/** Thin blue progress bar pinned to the top, driven by page scroll. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      aria-hidden
      className="bg-primary-500 pointer-events-none fixed top-0 right-0 left-0 z-[60] h-[3px] origin-left"
      style={{ scaleX }}
    />
  );
};

/** Opacity-only route fade (a transform here would break position:fixed descendants). */
export const PageFade = ({ children }: { children: ReactNode }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div initial={reduce ? false : { opacity: 0.35 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
};
