import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Article } from '../types/blog';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <section className="py-12 md:py-16 border-b border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6">
      <div className="main-container">
        <div className="space-y-6">
          <RevealAnimation delay={0.1}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-secondary/70 dark:text-accent/70">
                Featured Editorial
              </span>
              <span className="badge badge-green !normal-case text-xs">Editor&apos;s Pick</span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <article className="rounded-3xl bg-background-3 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Image column */}
                <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] overflow-hidden group">
                  <Image
                    src={article.coverImage}
                    alt={article.coverImageAlt}
                    width={800}
                    height={500}
                    priority
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="badge badge-cyan !normal-case text-xs shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content column */}
                <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-secondary/60 dark:text-accent/60">
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.level}</span>
                    </div>

                    <h2 className="text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent leading-snug">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="hover:text-secondary/80 dark:hover:text-accent/80 transition-colors">
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-secondary/70 dark:text-accent/70 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stroke-3 dark:border-stroke-7 space-y-5">
                    {/* Author block */}
                    <div className="flex items-center gap-3">
                      <figure className="size-11 rounded-full overflow-hidden shrink-0 border border-stroke-3 dark:border-stroke-7">
                        <Image
                          src={article.authorAvatar}
                          alt={article.authorName}
                          width={44}
                          height={44}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <div>
                        <h3 className="text-sm font-semibold text-secondary dark:text-accent">
                          {article.authorName}
                        </h3>
                        <p className="text-xs text-secondary/60 dark:text-accent/60">
                          {article.authorRole}
                        </p>
                      </div>
                    </div>

                    <div>
                      <LinkButton
                        href={`/blog/${article.slug}`}
                        className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md w-full sm:w-auto">
                        Read Full Article
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
