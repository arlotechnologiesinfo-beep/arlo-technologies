'use client';

import { useEffect, useRef, useState } from 'react';

interface CursorState {
  isActive: boolean;
  text: string;
  variant?: 'soon' | 'play' | 'view' | 'drag' | 'explore' | 'default';
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>({
    isActive: false,
    text: '',
    variant: 'default',
  });

  useEffect(() => {
    // Only run on devices with fine pointer (mouse/trackpad), not touch screens
    if (typeof window === 'undefined' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const cursorEl = cursorRef.current;
    if (!cursorEl) {
      return;
    }

    let active = false;
    let currentText = '';
    let currentVariant: CursorState['variant'] = 'default';
    let clientX = -100;
    let clientY = -100;

    const checkElement = (target: Element | null) => {
      if (!target) {
        if (active) {
          active = false;
          setCursorState({ isActive: false, text: '', variant: 'default' });
        }
        return;
      }

      // Check if target or any ancestor has data-cursor-*
      const cursorTarget = target.closest?.(
        '[data-cursor-text], [data-cursor-soon], [data-cursor-variant], [data-cursor-drag], [data-cursor-play]'
      ) as HTMLElement | null;

      if (cursorTarget) {
        let text = cursorTarget.getAttribute('data-cursor-text') || '';
        let variant = (cursorTarget.getAttribute('data-cursor-variant') as CursorState['variant']) || 'default';

        if (cursorTarget.hasAttribute('data-cursor-soon')) {
          text = text || 'Soon...';
          variant = 'soon';
        } else if (cursorTarget.hasAttribute('data-cursor-play')) {
          text = text || 'Play';
          variant = 'play';
        } else if (cursorTarget.hasAttribute('data-cursor-drag')) {
          text = text || 'Drag';
          variant = 'drag';
        }

        if (!active || text !== currentText || variant !== currentVariant) {
          active = true;
          currentText = text;
          currentVariant = variant;
          setCursorState({ isActive: true, text, variant });
        }
      } else {
        if (active) {
          active = false;
          currentText = '';
          currentVariant = 'default';
          setCursorState({ isActive: false, text: '', variant: 'default' });
        }
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;
      // Center the 96px follower badge on pointer
      cursorEl.style.transform = `translate3d(${clientX - 48}px, ${clientY - 48}px, 0)`;
      checkElement(e.target as Element);
    };

    // Keep cursor state updated while scrolling even without mouse movement
    const handleScroll = () => {
      if (clientX >= 0 && clientY >= 0) {
        checkElement(document.elementFromPoint(clientX, clientY));
      }
    };

    const handlePointerLeave = () => {
      active = false;
      currentText = '';
      currentVariant = 'default';
      setCursorState({ isActive: false, text: '', variant: 'default' });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll, { capture: true });
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform select-none"
      style={{ width: 96, height: 96 }}>
      <div
        className={`flex size-full items-center justify-center rounded-full border border-white/20 bg-dark-950/90 text-center font-sans text-sm font-semibold tracking-wider text-primary-400 shadow-2xl backdrop-blur-md transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:border-white/25 dark:bg-black/85 dark:text-accent ${
          cursorState.isActive
            ? 'scale-100 opacity-100'
            : 'scale-50 opacity-0 pointer-events-none'
        } ${
          cursorState.variant === 'soon'
            ? 'text-lime-400 dark:text-lime-300'
            : cursorState.variant === 'play'
            ? 'text-primary-300 dark:text-primary-400'
            : ''
        }`}>
        {cursorState.variant === 'play' && (
          <span className="inline-flex items-center gap-1.5 pl-0.5">
            <svg
              className="size-3.5 fill-current"
              viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>{cursorState.text || 'Play'}</span>
          </span>
        )}
        {cursorState.variant === 'drag' && (
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest">
            <span className="text-secondary/50 dark:text-accent/50 text-[10px]">&lsaquo;</span>
            <span>{cursorState.text || 'Drag'}</span>
            <span className="text-secondary/50 dark:text-accent/50 text-[10px]">&rsaquo;</span>
          </span>
        )}
        {cursorState.variant !== 'play' && cursorState.variant !== 'drag' && (
          <span>{cursorState.text}</span>
        )}
      </div>
    </div>
  );
}
