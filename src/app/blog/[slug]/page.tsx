import BlogContent from '@/components/blog-details/BlogContent';
import BlogArticleView from '@/features/blog/components/BlogArticleView';
import { blogContentProvider } from '@/features/blog/services/blogContentProvider';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // 1. All 24 Arlo Journal articles
  const journalSlugs = blogContentProvider.getPublishedArticles().map((article) => ({
    slug: article.slug,
  }));

  // 2. Legacy markdown files (for backwards compatibility)
  const legacyBlogs = getMarkDownData('src/data/blogs');
  const legacySlugs = legacyBlogs.map((post) => ({
    slug: post.slug,
  }));

  // Combine and deduplicate
  const allSlugs = [...journalSlugs];
  for (const item of legacySlugs) {
    if (!allSlugs.some((s) => s.slug === item.slug)) {
      allSlugs.push(item);
    }
  }

  return allSlugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const article = blogContentProvider.getArticleBySlug(slug);

  if (article) {
    return {
      ...defaultMetadata,
      title: `${article.title} || The Arlo Journal`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        type: 'article',
        publishedTime: article.publishedAt,
        authors: [article.authorName],
        images: [
          {
            url: article.coverImage,
            alt: article.coverImageAlt,
          },
        ],
      },
    };
  }

  // Fallback for legacy items
  try {
    const legacy = getMarkDownContent('src/data/blogs/', slug);
    if (legacy && legacy.data) {
      return {
        ...defaultMetadata,
        title: `${legacy.data.title || 'Article'} || The Arlo Journal`,
        description: legacy.data.description || 'Article from Arlo Technologies',
      };
    }
  } catch {
    // ignore
  }

  return {
    ...defaultMetadata,
    title: 'Article Not Found || The Arlo Journal',
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  // 1. Check CRM-ready Arlo Journal provider first
  const article = blogContentProvider.getArticleBySlug(slug);
  if (article) {
    // Generate JSON-LD Structured Data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.excerpt,
      image: article.coverImage,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      author: {
        '@type': 'Person',
        name: article.authorName,
        jobTitle: article.authorRole,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Arlo Technologies',
        url: 'https://arlotechnologies.com',
      },
    };

    return (
      <main className="bg-background-1 dark:bg-background-7 min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BlogArticleView article={article} />
      </main>
    );
  }

  // 2. Fallback to legacy markdown if present
  try {
    const legacyBlog = getMarkDownContent('src/data/blogs/', slug);
    if (legacyBlog && legacyBlog.data && legacyBlog.content) {
      return (
        <main className="bg-background-3 dark:bg-background-7 min-h-screen">
          <BlogContent blog={legacyBlog} />
        </main>
      );
    }
  } catch {
    // fall through to notFound
  }

  // 3. Not found
  notFound();
};

export default page;
