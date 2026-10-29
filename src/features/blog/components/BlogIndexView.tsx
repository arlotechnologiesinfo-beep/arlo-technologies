'use client';

import React, { useState } from 'react';
import { blogContentProvider } from '../services/blogContentProvider';
import BlogCTA from './BlogCTA';
import BlogGrid from './BlogGrid';
import BlogHero from './BlogHero';
import FeaturedArticle from './FeaturedArticle';

const QUICK_CATEGORIES = [
  'All Articles',
  'Artificial Intelligence',
  'Software Development',
  'Automation',
  'Security & Privacy',
  'UI/UX Design',
];

const BlogIndexView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const featuredArticle = blogContentProvider.getFeaturedArticle();

  return (
    <main className="bg-background-1 dark:bg-background-7 min-h-screen">
      {/* Editorial Hero with Working Search */}
      <BlogHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        quickCategories={QUICK_CATEGORIES}
      />

      {/* Featured Editorial Article */}
      {featuredArticle && searchQuery === '' && selectedCategory === 'All Articles' && (
        <FeaturedArticle article={featuredArticle} />
      )}

      {/* 24-Article Responsive Grid with Category Chips, Sorting & Pagination */}
      <BlogGrid
        initialSearch={searchQuery}
        initialCategory={selectedCategory}
      />

      {/* Closing CTA */}
      <BlogCTA />
    </main>
  );
};

export default BlogIndexView;
