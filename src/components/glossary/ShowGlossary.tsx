'use client';

import { useEffect, useState } from 'react';
import glossaryData from '@/data/json/glossary/glossary.json';
import { cn } from '@/utils/cn';
import GlossaryCard, { GlossarySection } from './GlossaryCard';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ShowGlossary = () => {
  const sections = glossaryData as GlossarySection[];
  const [activeLetter, setActiveLetter] = useState<string>('A');

  const scrollToLetter = (letter: string) => {
    setActiveLetter(letter);
    const element = document.getElementById(`section-${letter.toLowerCase()}`);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(`section-${section.letter.toLowerCase()}`);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveLetter(section.letter);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <section className="pb-16 xl:pb-28" id="glossary-content">
      <div className="main-container">
        {/* Mobile Sticky Horizontal A-Z Bar */}
        <div className="sticky top-20 z-30 -mx-4 mb-8 flex items-center gap-1.5 overflow-x-auto bg-background-2/95 px-4 py-3 backdrop-blur-md dark:bg-background-7/95 lg:hidden scrollbar-none border-y border-stroke-1 dark:border-stroke-7">
          {alphabet.map((letter) => {
            const hasTerms = sections.some((s) => s.letter === letter);
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                aria-label={`Jump to letter ${letter}`}
                aria-current={isActive ? 'true' : undefined}
                disabled={!hasTerms}
                className={cn(
                  'flex size-9 shrink-0 items-center justify-center rounded-lg text-tagline-2 font-medium transition-all duration-200',
                  isActive
                    ? 'bg-secondary text-accent dark:bg-accent dark:text-secondary font-bold shadow-xs scale-105'
                    : hasTerms
                      ? 'text-secondary/70 hover:bg-background-3 hover:text-secondary dark:text-accent/70 dark:hover:bg-background-6 dark:hover:text-accent'
                      : 'text-secondary/30 dark:text-accent/30 cursor-not-allowed',
                )}>
                {letter}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          {/* Desktop Left-Side Sticky A-Z Navigation */}
          <aside className="hidden lg:block lg:w-[68px] shrink-0 sticky top-28 self-start">
            <div className="rounded-2xl border border-stroke-1 bg-white/70 p-2 shadow-xs backdrop-blur-md dark:border-stroke-7 dark:bg-background-6/70">
              <nav aria-label="A to Z Glossary Navigation" className="flex flex-col gap-1 items-center">
                {alphabet.map((letter) => {
                  const hasTerms = sections.some((s) => s.letter === letter);
                  const isActive = activeLetter === letter;
                  return (
                    <button
                      key={letter}
                      onClick={() => scrollToLetter(letter)}
                      aria-label={`Jump to letter ${letter}`}
                      aria-current={isActive ? 'true' : undefined}
                      disabled={!hasTerms}
                      className={cn(
                        'flex size-6 items-center justify-center rounded text-caption-1 font-medium transition-all duration-150',
                        isActive
                          ? 'bg-secondary text-accent dark:bg-accent dark:text-secondary font-bold scale-110 shadow-xs'
                          : hasTerms
                            ? 'text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent hover:bg-background-2 dark:hover:bg-background-7'
                            : 'text-secondary/20 dark:text-accent/20 cursor-not-allowed',
                      )}>
                      {letter}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right-Side Glossary Content Sections */}
          <div className="flex-1 space-y-12">
            {sections.map((section) => (
              <GlossaryCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ShowGlossary.displayName = 'ShowGlossary';
export default ShowGlossary;
