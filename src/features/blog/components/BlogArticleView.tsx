import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import { blogContentProvider } from '../services/blogContentProvider';
import { Article } from '../types/blog';
import BlogCTA from './BlogCTA';
import RelatedArticles from './RelatedArticles';
import ShareButtons from './ShareButtons';
import TableOfContents from './TableOfContents';

interface BlogArticleViewProps {
  article: Article;
}

const BlogArticleView: React.FC<BlogArticleViewProps> = ({ article }) => {
  const headings = blogContentProvider.extractHeadings(article.content);
  const relatedArticles = blogContentProvider.getRelatedArticles(article.id, 3);

  return (
    <>
      <article className="pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-20">
        <div className="main-container">
          <div className="max-w-[1050px] mx-auto space-y-8">
            {/* 1. Breadcrumb Navigation */}
            <RevealAnimation delay={0.1}>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-secondary/60 dark:text-accent/60">
                <Link href="/" className="hover:text-secondary dark:hover:text-accent">
                  Home
                </Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-secondary dark:hover:text-accent">
                  The Arlo Journal
                </Link>
                <span>/</span>
                <Link href={`/blog?category=${encodeURIComponent(article.category)}`} className="hover:text-secondary dark:hover:text-accent">
                  {article.category}
                </Link>
                <span>/</span>
                <span className="truncate max-w-[200px] text-secondary/80 dark:text-accent/80 font-medium">
                  {article.title}
                </span>
              </nav>
            </RevealAnimation>

            {/* 2. Header & Title Area */}
            <div className="space-y-4">
              <RevealAnimation delay={0.15}>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="badge badge-cyan !normal-case text-xs">
                    {article.category}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent font-medium">
                    {article.level}
                  </span>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal tracking-tight leading-tight">
                  {article.title}
                </h1>
              </RevealAnimation>

              <RevealAnimation delay={0.25}>
                <p className="text-secondary/80 dark:text-accent/80 text-base sm:text-lg md:text-xl leading-relaxed">
                  {article.excerpt}
                </p>
              </RevealAnimation>

              {/* Author & Publication Metadata */}
              <RevealAnimation delay={0.3}>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stroke-3 dark:border-stroke-7">
                  <div className="flex items-center gap-3">
                    <figure className="size-12 rounded-full overflow-hidden shrink-0 border border-stroke-3 dark:border-stroke-7">
                      <Image
                        src={article.authorAvatar}
                        alt={article.authorName}
                        width={48}
                        height={48}
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

                  <div className="flex items-center gap-4 text-xs text-secondary/60 dark:text-accent/60">
                    <time dateTime={article.publishedAt}>
                      Published {article.publishedAt}
                    </time>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* 3. Cover Image */}
            <RevealAnimation delay={0.35}>
              <figure className="w-full aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-stroke-3 dark:border-stroke-7">
                <Image
                  src={article.coverImage}
                  alt={article.coverImageAlt}
                  width={1100}
                  height={620}
                  priority
                  className="w-full h-full object-cover"
                />
              </figure>
            </RevealAnimation>

            {/* 4. Article Body Layout (Main Content + Sticky TOC) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
              {/* Sticky Sidebar on Desktop */}
              <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
                <TableOfContents headings={headings} />

                {/* Return to Blog Link */}
                <div className="rounded-2xl bg-background-3 dark:bg-background-7 p-5 border border-stroke-3 dark:border-stroke-7 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary/70 dark:text-accent/70">
                    The Arlo Journal
                  </h4>
                  <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                    Explore more research, guides, and engineering frameworks.
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary dark:text-accent hover:underline">
                    ← Back to all articles
                  </Link>
                </div>
              </div>

              {/* Markdown Content Column */}
              <div className="lg:col-span-8 min-w-0 space-y-8">
                {/* Mobile TOC Accordion / Collapsible */}
                <div className="block lg:hidden">
                  <TableOfContents headings={headings} />
                </div>

                <div className="details-body prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>
                    {article.content}
                  </ReactMarkdown>
                </div>

                {/* Tags List */}
                <div className="pt-6 border-t border-stroke-3 dark:border-stroke-7 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary/60 dark:text-accent/60">
                    Related Tags
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="text-xs px-3 py-1 rounded-md bg-background-3 dark:bg-background-7 text-secondary dark:text-accent hover:bg-secondary/10 dark:hover:bg-accent/10 transition-colors">
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share Action */}
                <div className="pt-6 border-t border-stroke-3 dark:border-stroke-7 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm font-medium text-secondary dark:text-accent">
                    Share this article:
                  </span>
                  <ShareButtons title={article.title} slug={article.slug} />
                </div>

                {/* Editorial Disclaimer */}
                <div className="p-4 rounded-xl bg-background-3 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  <strong className="text-secondary dark:text-accent font-medium">Editorial Notice: </strong>
                  The Arlo Journal provides educational and architectural analysis. Technical implementations, API policies, and cloud pricing models can evolve over time; verify current provider documentation before deploying critical infrastructure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 5. Related Articles Section */}
      <RelatedArticles articles={relatedArticles} />

      {/* 6. Closing Services CTA */}
      <BlogCTA />
    </>
  );
};

export default BlogArticleView;
