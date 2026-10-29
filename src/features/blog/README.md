# The Arlo Journal — CRM-Ready Content Architecture

## Overview
The Arlo Journal is built with a **frontend-first, CRM-ready content architecture**. It decouples UI components from the underlying content storage, enabling a smooth future transition from local TypeScript/Markdown data stores to an external headless CMS, CRM API, or database without rewriting cards, search, filters, or detail pages.

---

## Directory Structure
```
src/features/blog/
├── types/
│   └── blog.ts                 # Strongly typed Article, Author, and Filter interfaces
├── data/
│   ├── authors.ts              # Centralized author profiles & biographies
│   ├── articles/
│   │   ├── ai.ts               # Artificial Intelligence & AI Engineering articles
│   │   ├── engineering.ts      # Software Architecture & Engineering articles
│   │   ├── automation.ts       # Workflow & Business Automation articles
│   │   └── product_strategy.ts # Product Design, Analytics & Strategy articles
│   └── articles.ts             # Aggregator exporting all articles & categories
├── services/
│   └── blogContentProvider.ts  # Authoritative content service & query provider
├── components/
│   ├── BlogHero.tsx            # Header with search & category shortcuts
│   ├── FeaturedArticle.tsx     # Hero editorial feature card
│   ├── BlogFilters.tsx         # Category chips, sort options, and results count
│   ├── BlogCard.tsx            # Uniform responsive article card
│   ├── BlogGrid.tsx            # Interactive grid with live search & load more
│   ├── TableOfContents.tsx     # Dynamic heading observer for article pages
│   ├── ShareButtons.tsx        # Copy-link toast & Web Share API
│   ├── RelatedArticles.tsx     # Contextual article recommendations
│   ├── BlogCTA.tsx             # Closing services conversion section
│   ├── BlogArticleView.tsx     # Full article reader view
│   └── BlogIndexView.tsx       # Main index page controller
└── README.md                   # This integration guide
```

---

## Content Model (`Article` Interface)
Every article conforms to the typed `Article` contract:

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Stable unique identifier (`art-01`) |
| `slug` | `string` | URL-safe slug (`ai-agents-explained...`) |
| `title` | `string` | Full headline |
| `excerpt` | `string` | 1-2 sentence introductory summary |
| `content` | `string` | Structured Markdown with H2, H3, code, tables |
| `category` | `string` | Primary technology domain |
| `tags` | `string[]` | Keyword tags for cross-navigation |
| `coverImage` | `string` | Image path in `/public/images/` |
| `coverImageAlt` | `string` | Accessible image alternative text |
| `authorId` | `string` | References author in `authors.ts` |
| `authorName` | `string` | Display name of author |
| `authorRole` | `string` | Job title / engineering specialty |
| `authorAvatar` | `string` | Profile image path |
| `publishedAt` | `string` | ISO date string (`YYYY-MM-DD`) |
| `updatedAt` | `string` | Last modified date |
| `readingTimeMinutes`| `number` | Estimated read time in minutes |
| `readTime` | `string` | Display string (`8–10 min read`) |
| `level` | `ArticleLevel` | Difficulty (`Beginner`, `Intermediate`, `Advanced`) |
| `status` | `ArticleStatus`| Publication state (`draft`, `scheduled`, `published`, `archived`) |
| `featured` | `boolean` | Set to `true` to highlight as top editorial story |
| `seoTitle` | `string?` | Custom meta title override |
| `seoDescription` | `string?` | Custom meta description |
| `relatedArticleIds` | `string[]?` | Explicitly curated related article IDs |

---

## How to Add or Edit an Article (Before the CRM Exists)

1. Open the relevant category file in `src/features/blog/data/articles/` (e.g. `ai.ts`, `engineering.ts`, `automation.ts`, or `product_strategy.ts`).
2. Add a new `Article` object conforming to the schema above.
3. Ensure `status: 'published'` is set (drafts and archived articles are automatically excluded from public listings).
4. Save the file. Next.js App Router will automatically generate the static route at `/blog/[slug]`.

---

## Future CRM / CMS API Integration Plan

To replace local data with an external headless CRM or API (e.g., Strapi, Sanity, Contentful, or custom CRM):

1. **Keep Component Contracts Unchanged:** All UI components (`BlogCard`, `BlogGrid`, `BlogArticleView`) only consume the `Article` interface.
2. **Update `blogContentProvider.ts`:**
   * Replace the local array calls with `fetch()` calls to your CRM REST or GraphQL endpoints.
   * Example:
     ```typescript
     public async getPublishedArticles(): Promise<Article[]> {
       const res = await fetch('https://api.crm.arlotechnologies.com/v1/articles?status=published', {
         headers: { Authorization: `Bearer ${process.env.CRM_API_KEY}` },
         next: { revalidate: 3600 }
       });
       return res.json();
     }
     ```
3. **Draft Previews:** A preview route can invoke `getArticleBySlug(slug, { includeDrafts: true })` using an authenticated draft secret token.
