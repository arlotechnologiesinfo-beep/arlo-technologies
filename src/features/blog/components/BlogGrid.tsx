'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import React, { useMemo, useState } from 'react';
import { blogContentProvider } from '../services/blogContentProvider';
import BlogCard from './BlogCard';
import BlogFilters from './BlogFilters';

interface BlogGridProps {
  initialSearch?: string;
  initialCategory?: string;
}

const PAGE_SIZE = 9;

const BlogGrid: React.FC<BlogGridProps> = ({
  initialSearch = '',
  initialCategory = 'All Articles',
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'reading-time'>('newest');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories = useMemo(() => blogContentProvider.getCategories(), []);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    return blogContentProvider.filterArticles({
      searchQuery,
      category: selectedCategory,
      sortBy,
    });
  }, [searchQuery, selectedCategory, sortBy]);

  // Handle pagination / load more
  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  const hasMore = visibleCount < filteredArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Articles');
    setSortBy('newest');
    setVisibleCount(PAGE_SIZE);
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All Articles' || sortBy !== 'newest';

  return (
    <section id="articles-grid" className="py-14 md:py-18 lg:py-24">
      <div className="main-container">
        {/* Filters and Controls */}
        <BlogFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setVisibleCount(PAGE_SIZE);
          }}
          sortBy={sortBy}
          onSortChange={(sort) => {
            setSortBy(sort);
            setVisibleCount(PAGE_SIZE);
          }}
          totalResults={filteredArticles.length}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={handleClearFilters}
        />

        {/* Empty State */}
        {filteredArticles.length === 0 ? (
          <div className="rounded-3xl bg-white dark:bg-background-6 p-12 text-center border border-stroke-3 dark:border-stroke-7 space-y-4 max-w-[600px] mx-auto my-10">
            <div className="size-14 rounded-full bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent flex items-center justify-center mx-auto text-xl">
              🔍
            </div>
            <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">
              No matching articles found
            </h3>
            <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">
              We couldn&apos;t find any articles matching &quot;{searchQuery || selectedCategory}&quot;. Try adjusting your keywords or clearing the active filters.
            </p>
            <div className="pt-2">
              <button
                onClick={handleClearFilters}
                className="btn btn-sm btn-primary hover:btn-secondary dark:hover:btn-accent cursor-pointer">
                Reset Filters &amp; View All Articles
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* 3-Column Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {displayedArticles.map((article, index) => {
                const delay = 0.1 + (index % 6) * 0.05;
                return (
                  <RevealAnimation key={article.id} delay={delay}>
                    <BlogCard article={article} />
                  </RevealAnimation>
                );
              })}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-14 text-center">
                <RevealAnimation delay={0.2}>
                  <button
                    onClick={handleLoadMore}
                    className="btn btn-md btn-white dark:btn-transparent hover:btn-secondary dark:hover:btn-accent cursor-pointer px-8 shadow-xs">
                    Load More Articles ({filteredArticles.length - visibleCount} remaining)
                  </button>
                </RevealAnimation>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
