import CaseStudyArticle from '@/components/case-study/CaseStudyArticle';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/data/caseStudies';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      ...defaultMetadata,
      title: 'Case Study Not Found || Arlo Technologies',
    };
  }

  const canonicalUrl = `https://arlotechnologies.com/case-study/${study.slug}`;

  return {
    ...defaultMetadata,
    title: study.seoTitle,
    description: study.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: study.seoTitle,
      description: study.metaDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: study.publishedAt,
      modifiedTime: study.lastReviewed,
      images: [
        {
          url: study.thumbnail,
          width: 1200,
          height: 630,
          alt: study.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: study.seoTitle,
      description: study.metaDescription,
      images: [study.thumbnail],
    },
  };
}

const CaseStudyDetailsPage = async ({ params }: CaseStudyDetailsPageProps) => {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  // JSON-LD Structured Data
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.metaDescription,
    image: `https://arlotechnologies.com${study.thumbnail}`,
    datePublished: study.publishedAt,
    dateModified: study.lastReviewed,
    author: {
      '@type': 'Organization',
      name: 'Arlo Technologies',
      url: 'https://arlotechnologies.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Arlo Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://arlotechnologies.com/images/icons/client-logo-1.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://arlotechnologies.com/case-study/${study.slug}`,
    },
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://arlotechnologies.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: 'https://arlotechnologies.com/case-study',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: study.title,
        item: `https://arlotechnologies.com/case-study/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <main className="bg-background-3 dark:bg-background-7 min-h-screen">
        <CaseStudyArticle study={study} />
      </main>
    </>
  );
};

CaseStudyDetailsPage.displayName = 'CaseStudyDetailsPage';
export default CaseStudyDetailsPage;
