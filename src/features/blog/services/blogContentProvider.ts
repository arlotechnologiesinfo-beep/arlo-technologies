import { allArticles, allCategories } from '../data/articles';
import { Article, ArticleHeading, BlogFilterOptions, BlogPaginationResult } from '../types/blog';

/**
 * Central CRM-Ready Content Provider Service
 * This abstraction separates the UI components from the underlying storage mechanism.
 * When a future CRM / Headless CMS API is deployed, this service can fetch from the API
 * without modifying UI cards, filters, or detail pages.
 */
class BlogContentProvider {
  private articles: Article[] = allArticles;

  /**
   * Retrieves all published articles (excluding drafts and archived items)
   */
  public getPublishedArticles(): Article[] {
    return this.articles.filter((article) => article.status === 'published');
  }

  /**
   * Retrieves the featured article for the hero section
   */
  public getFeaturedArticle(): Article {
    const published = this.getPublishedArticles();
    return published.find((a) => a.featured) || published[0];
  }

  /**
   * Retrieves a single article by unique slug
   */
  public getArticleBySlug(slug: string): Article | undefined {
    return this.articles.find((a) => a.slug === slug && a.status === 'published');
  }

  /**
   * Retrieves all available unique categories
   */
  public getCategories(): string[] {
    return allCategories;
  }

  /**
   * Retrieves related articles based on explicit IDs or shared category/tags
   */
  public getRelatedArticles(articleId: string, limit: number = 3): Article[] {
    const current = this.articles.find((a) => a.id === articleId);
    if (!current) {return this.getPublishedArticles().slice(0, limit);}

    const published = this.getPublishedArticles().filter((a) => a.id !== articleId);

    // If explicit related IDs exist, prioritize them
    if (current.relatedArticleIds && current.relatedArticleIds.length > 0) {
      const explicit = published.filter((a) => current.relatedArticleIds?.includes(a.id));
      if (explicit.length >= limit) {return explicit.slice(0, limit);}
    }

    // Otherwise, match by category or shared tags
    const scored = published.map((candidate) => {
      let score = 0;
      if (candidate.category === current.category) {score += 3;}
      const sharedTags = candidate.tags.filter((t) => current.tags.includes(t));
      score += sharedTags.length;
      return { candidate, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, limit).map((s) => s.candidate);
  }

  /**
   * Searches and filters articles client-side or server-side
   */
  public filterArticles(filters: BlogFilterOptions = {}): Article[] {
    let result = this.getPublishedArticles();

    // 1. Category Filter
    if (filters.category && filters.category !== 'All Articles') {
      result = result.filter(
        (a) => a.category.toLowerCase() === filters.category?.toLowerCase(),
      );
    }

    // 2. Tag Filter
    if (filters.tag) {
      result = result.filter((a) =>
        a.tags.some((t) => t.toLowerCase() === filters.tag?.toLowerCase()),
      );
    }

    // 3. Search Query (across title, excerpt, content, tags, category)
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase().trim();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.content.toLowerCase().includes(q),
      );
    }

    // 4. Sort Options
    if (filters.sortBy === 'oldest') {
      result.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
    } else if (filters.sortBy === 'reading-time') {
      result.sort((a, b) => a.readingTimeMinutes - b.readingTimeMinutes);
    } else {
      // Default: newest
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    return result;
  }

  /**
   * Paginated article retrieval
   */
  public paginateArticles(
    filters: BlogFilterOptions = {},
    page: number = 1,
    pageSize: number = 9,
  ): BlogPaginationResult {
    const filtered = this.filterArticles(filters);
    const total = filtered.length;
    const totalPages = Math.ceil(total / pageSize) || 1;
    const currentPage = Math.min(Math.max(1, page), totalPages);
    const startIndex = (currentPage - 1) * pageSize;
    const paginated = filtered.slice(startIndex, startIndex + pageSize);

    return {
      articles: paginated,
      total,
      currentPage,
      totalPages,
      hasMore: currentPage < totalPages,
    };
  }

  /**
   * Helper to parse markdown H2 and H3 headings into Table of Contents items
   */
  public extractHeadings(markdown: string): ArticleHeading[] {
    const headings: ArticleHeading[] = [];
    const lines = markdown.split('\n');

    for (const line of lines) {
      const h2Match = line.match(/^##\s+(.+)$/);
      const h3Match = line.match(/^###\s+(.+)$/);

      if (h2Match) {
        const text = h2Match[1].trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        headings.push({ id, text, level: 2 });
      } else if (h3Match) {
        const text = h3Match[1].trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        headings.push({ id, text, level: 3 });
      }
    }

    return headings;
  }
}

export const blogContentProvider = new BlogContentProvider();
