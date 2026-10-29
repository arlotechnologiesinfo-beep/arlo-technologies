import { getAllCaseStudies } from '@/data/caseStudies';

export async function GET() {
  const baseUrl = 'https://arlotechnologies.com';

  const staticRoutes = [
    '',
    '/about',
    '/process',
    '/career',
    '/services',
    '/features',
    '/integration',
    '/use-case',
    '/analytics',
    '/case-study',
    '/success-stories',
    '/blog',
    '/tutorial',
    '/glossary',
    '/whitepaper',
    '/support',
    '/documentation',
    '/referral-program',
    '/affiliates',
    '/affiliate-policy',
    '/security',
    '/terms-conditions',
    '/privacy-policy',
    '/refund-policy',
    '/pricing',
    '/legal',
    '/contact-us',
    '/sitemap',
  ];

  const caseStudies = getAllCaseStudies();
  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-study/${study.slug}`,
    lastmod: study.lastReviewed || study.publishedAt,
    changefreq: 'monthly',
    priority: study.type === 'client-project' ? '0.9' : '0.7',
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
  ${caseStudyRoutes
    .map(
      (study) => `
    <url>
      <loc>${study.url}</loc>
      <lastmod>${study.lastmod}</lastmod>
      <changefreq>${study.changefreq}</changefreq>
      <priority>${study.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
