'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import React from 'react';

interface BlogHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  quickCategories: string[];
}

const BlogHero: React.FC<BlogHeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  quickCategories,
}) => {
  return (
    <section className="pt-32 pb-12 sm:pt-36 md:pt-42 md:pb-16 xl:pt-[170px] xl:pb-20 border-b border-stroke-3 dark:border-stroke-7">
      <div className="main-container">
        <div className="max-w-[880px] mx-auto text-center space-y-6">
          <RevealAnimation delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-secondary dark:text-accent">
                THE ARLO JOURNAL
              </span>
              <span className="text-secondary/40 dark:text-accent/40">•</span>
              <span className="badge badge-cyan !normal-case text-xs">
                Ideas • Innovation • Intelligence
              </span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal tracking-tight">
              Ideas That Move Technology Forward.
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg leading-relaxed max-w-[720px] mx-auto">
              Explore practical insights, emerging technologies, and the ideas shaping better digital experiences.
            </p>
          </RevealAnimation>

          {/* Interactive Search Bar */}
          <RevealAnimation delay={0.4}>
            <div className="max-w-[620px] mx-auto pt-2">
              <div className="relative flex items-center rounded-2xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs focus-within:border-secondary dark:focus-within:border-accent transition-all p-1.5 sm:p-2">
                <svg
                  className="size-5 ml-3 text-secondary/50 dark:text-accent/50 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles by title, topic, or keyword..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 text-sm sm:text-base text-secondary dark:text-accent placeholder:text-secondary/50 dark:placeholder:text-accent/50 focus:outline-none"
                  aria-label="Search articles"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="p-1.5 mr-1 text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent text-xs rounded-full hover:bg-background-3 dark:hover:bg-background-7 transition-colors"
                    title="Clear search">
                    ✕
                  </button>
                )}
              </div>
            </div>
          </RevealAnimation>

          {/* Quick Category Shortcuts */}
          <RevealAnimation delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
              <span className="text-secondary/60 dark:text-accent/60">Popular topics:</span>
              {quickCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`px-3 py-1 rounded-full transition-all ${
                      isActive
                        ? 'bg-secondary text-white dark:bg-accent dark:text-secondary font-medium'
                        : 'bg-background-3 dark:bg-background-6 text-secondary/80 dark:text-accent/80 hover:bg-background-4 dark:hover:bg-background-5'
                    }`}>
                    {cat}
                  </button>
                );
              })}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
