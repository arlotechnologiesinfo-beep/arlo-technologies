import RevealAnimation from '@/components/animation/RevealAnimation';
import React from 'react';
import { Article } from '../types/blog';
import BlogCard from './BlogCard';

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  if (!articles || articles.length === 0) {return null;}

  return (
    <section className="py-14 md:py-20 border-t border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6">
      <div className="main-container space-y-8">
        <RevealAnimation delay={0.1}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="badge badge-cyan !normal-case text-xs mb-2">Recommended Reading</span>
              <h2 className="text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent">
                Related Articles
              </h2>
            </div>
            <a
              href="/blog"
              className="text-xs sm:text-sm font-medium text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent hover:underline">
              View All Articles →
            </a>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <RevealAnimation key={article.id} delay={0.2 + idx * 0.1}>
              <BlogCard article={article} />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
