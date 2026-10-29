'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { sitemapCategories, SitemapCategory } from '@/data/sitemapData';

const popularKeywords = ['AI Solutions', 'Services', 'Glossary', 'Whitepapers', 'Support', 'Pricing', 'Security'];

const SitemapExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filtered categories and items
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return sitemapCategories
      .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
      .map((cat) => {
        // If there's no search query, return all items in the category
        if (!query) {return cat;}

        // Check if category name or description matches query
        const catMatches =
          cat.name.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);

        const matchingItems = cat.items.filter((item) => {
          if (catMatches) {return true;}
          const nameMatch = item.name.toLowerCase().includes(query);
          const descMatch = item.description.toLowerCase().includes(query);
          const hrefMatch = item.href.toLowerCase().includes(query);
          const keywordMatch = item.keywords.some((kw) => kw.toLowerCase().includes(query));
          return nameMatch || descMatch || hrefMatch || keywordMatch;
        });

        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [searchQuery, selectedCategory]);

  const totalFilteredItems = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleSelectKeyword = (kw: string) => {
    setSearchQuery(kw);
    setSelectedCategory('all');
  };

  return (
    <section id="sitemap-content" className="pb-24 sm:pb-32 scroll-mt-24" aria-label="Sitemap Explorer">
      <div className="main-container">
        {/* Search & Filter Control Bar */}
        <div className="mx-auto max-w-[980px] mb-14 space-y-6">
          <div className="relative">
            <label htmlFor="sitemap-search" className="sr-only">
              Search sitemap pages and topics
            </label>
            <div className="relative flex items-center">
              {/* Search Icon */}
              <div className="pointer-events-none absolute left-5 text-secondary/40 dark:text-accent/40">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Input */}
              <input
                id="sitemap-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, solutions, guides, or policies..."
                className="w-full h-14 sm:h-16 pl-14 pr-24 rounded-2xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-sm text-tagline-1 text-secondary dark:text-accent placeholder:text-secondary/40 dark:placeholder:text-accent/40 focus:outline-none focus:border-secondary dark:focus:border-accent transition-colors"
              />

              {/* Clear button or match counter */}
              <div className="absolute right-4 flex items-center gap-2">
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    aria-label="Clear search query"
                    className="p-1.5 rounded-lg text-secondary/60 dark:text-accent/60 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                ) : (
                  <span className="hidden sm:inline-block text-tagline-3 text-secondary/50 dark:text-accent/50 pr-2">
                    Instant filter
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-tagline-2 font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-secondary text-white dark:bg-accent dark:text-secondary shadow-sm'
                  : 'bg-white dark:bg-background-6 text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent border border-stroke-3 dark:border-stroke-7'
              }`}>
              All Categories
            </button>
            {sitemapCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-tagline-2 font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-secondary text-white dark:bg-accent dark:text-secondary shadow-sm'
                    : 'bg-white dark:bg-background-6 text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent border border-stroke-3 dark:border-stroke-7'
                }`}>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Result Status & Popular Keywords */}
          {searchQuery && (
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 text-tagline-2 text-secondary/70 dark:text-accent/70">
              <p>
                Found <strong className="text-secondary dark:text-accent">{totalFilteredItems}</strong> result
                {totalFilteredItems === 1 ? '' : 's'} for &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={handleClearSearch}
                className="text-primary-500 hover:underline text-tagline-3 font-medium">
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Content Area: Categories & Destination Cards */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-16">
            {filteredCategories.map((category: SitemapCategory, catIndex: number) => (
              <div key={category.id} id={category.id} className="scroll-mt-28">
                <RevealAnimation delay={0.1 * (catIndex % 3)}>
                  <div className="rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-6 sm:p-8 lg:p-10 shadow-sm space-y-8">
                    {/* Category Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stroke-3/60 dark:border-stroke-7/60">
                      <div className="space-y-1.5 max-w-[700px]">
                        <span className="text-xs uppercase tracking-wider text-primary-500 font-semibold">
                          {category.eyebrow}
                        </span>
                        <h2 className="text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent">
                          {category.name}
                        </h2>
                        <p className="text-secondary/70 dark:text-accent/70 text-tagline-2 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <span className="badge badge-green !normal-case text-xs">
                          {category.items.length} {category.items.length === 1 ? 'Destination' : 'Destinations'}
                        </span>
                      </div>
                    </div>

                    {/* Destination Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {category.items.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="group relative flex flex-col justify-between rounded-2xl p-5 bg-background-1 dark:bg-background-7 border border-stroke-3/80 dark:border-stroke-7/80 hover:border-secondary dark:hover:border-accent hover:shadow-md transition-all duration-300">
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="text-heading-6 font-medium text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
                                {item.name}
                              </h3>
                              {item.badge && (
                                <span className="text-[11px] px-2 py-0.5 rounded-full font-medium bg-stroke-3/50 dark:bg-stroke-7/50 text-secondary/70 dark:text-accent/70">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-secondary/70 dark:text-accent/70 text-tagline-3 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          <div className="pt-4 mt-3 border-t border-stroke-3/40 dark:border-stroke-7/40 flex items-center justify-between text-tagline-3">
                            <span className="text-secondary/50 dark:text-accent/50 font-mono text-[11px]">
                              {item.href}
                            </span>
                            <span className="text-primary-500 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              Visit
                              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        ) : (
          /* Empty / No Results State */
          <div className="rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-10 sm:p-16 text-center space-y-6 max-w-[700px] mx-auto">
            <div className="size-16 rounded-full bg-primary-50 dark:bg-background-5 text-primary-500 mx-auto flex items-center justify-center">
              <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent">
                No matching pages found
              </h3>
              <p className="text-secondary/70 dark:text-accent/70 text-tagline-1">
                We couldn&apos;t find any pages matching &ldquo;<span className="font-semibold text-secondary dark:text-accent">{searchQuery}</span>&rdquo;.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleClearSearch}
                className="btn btn-sm btn-primary hover:btn-secondary dark:hover:btn-accent">
                Clear Search Query
              </button>
            </div>
            <div className="pt-6 border-t border-stroke-3/60 dark:border-stroke-7/60 space-y-3">
              <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">
                Or try searching for one of these popular topics:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {popularKeywords.map((kw) => (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => handleSelectKeyword(kw)}
                    className="px-3 py-1 rounded-full text-tagline-3 bg-background-1 dark:bg-background-7 text-secondary/80 dark:text-accent/80 hover:text-primary-500 border border-stroke-3/80 dark:border-stroke-7/80 transition-colors">
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SitemapExplorer;
