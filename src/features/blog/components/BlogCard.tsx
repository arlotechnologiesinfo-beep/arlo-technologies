import LinkButton from '@/components/ui/button/LinkButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Article } from '../types/blog';

interface BlogCardProps {
  article: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <article className="h-full">
      <div className="h-full flex flex-col justify-between rounded-2xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
        {/* Top Image & Category */}
        <div>
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.coverImageAlt}
              width={500}
              height={320}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 z-10">
              <span className="badge badge-cyan !normal-case text-[11px] shadow-xs">
                {article.category}
              </span>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs text-secondary/60 dark:text-accent/60">
              <span>{article.readTime}</span>
              <span>•</span>
              <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            </div>

            <h3 className="text-heading-6 font-normal text-secondary dark:text-accent line-clamp-2 leading-snug group-hover:text-secondary/80 dark:group-hover:text-accent/80 transition-colors">
              <Link href={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h3>

            <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>
        </div>

        {/* Card Footer: Author & Read More Button */}
        <div className="px-6 pb-6 pt-2 border-t border-stroke-3 dark:border-stroke-7 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <figure className="size-8 rounded-full overflow-hidden shrink-0 border border-stroke-3 dark:border-stroke-7">
              <Image
                src={article.authorAvatar}
                alt={article.authorName}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-secondary dark:text-accent truncate">
                {article.authorName}
              </p>
              <p className="text-[11px] text-secondary/60 dark:text-accent/60 truncate">
                {article.authorRole}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <LinkButton
              href={`/blog/${article.slug}`}
              className="btn btn-sm btn-white dark:btn-transparent hover:btn-secondary dark:hover:btn-accent">
              Read
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
