export type ArticleStatus = 'draft' | 'scheduled' | 'published' | 'archived';

export type ArticleLevel = 'Beginner' | 'Beginner to intermediate' | 'Intermediate' | 'Advanced';

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface ArticleHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  readTime: string;
  level: ArticleLevel;
  status: ArticleStatus;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  relatedArticleIds?: string[];
  sourceReferences?: string[];
}

export interface BlogFilterOptions {
  searchQuery?: string;
  category?: string;
  tag?: string;
  sortBy?: 'newest' | 'oldest' | 'reading-time';
}

export interface BlogPaginationResult {
  articles: Article[];
  total: number;
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}
