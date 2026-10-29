'use client';

import React from 'react';

interface BlogFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  sortBy: 'newest' | 'oldest' | 'reading-time';
  onSortChange: (sort: 'newest' | 'oldest' | 'reading-time') => void;
  totalResults: number;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  totalResults,
  hasActiveFilters,
  onClearFilters,
}) => {
  return (
    <div className="space-y-6 mb-10">
      {/* Category Filter Chips Carousel / Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-stroke-3 dark:scrollbar-thumb-stroke-7">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-secondary text-white dark:bg-accent dark:text-secondary font-medium shadow-xs'
                  : 'bg-white dark:bg-background-6 text-secondary/70 dark:text-accent/70 border border-stroke-3 dark:border-stroke-7 hover:border-secondary/40 dark:hover:border-accent/40'
              }`}>
              {cat}
            </button>
          );
        })}
      </div>

      {/* Control bar: results count, sort dropdown, and clear filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stroke-3 dark:border-stroke-7 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <span className="font-medium text-secondary dark:text-accent">
            Showing <strong className="font-semibold">{totalResults}</strong> {totalResults === 1 ? 'article' : 'articles'}
          </span>

          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="text-xs px-2.5 py-1 rounded-md bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent hover:bg-secondary/20 transition-colors flex items-center gap-1.5 cursor-pointer">
              <span>Clear filters</span>
              <span>✕</span>
            </button>
          )}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-secondary/60 dark:text-accent/60 text-xs">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'newest' | 'oldest' | 'reading-time')}
            className="rounded-lg bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 px-3 py-1.5 text-xs text-secondary dark:text-accent focus:outline-none focus:border-secondary dark:focus:border-accent cursor-pointer">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="reading-time">Shortest Read Time</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
