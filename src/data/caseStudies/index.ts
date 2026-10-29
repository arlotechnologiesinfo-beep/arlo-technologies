import { categoryA_clientProjects } from './categoryA_clientProjects';
import { categoryB_aiAgents } from './categoryB_aiAgents';
import { categoryC_aiProducts } from './categoryC_aiProducts';
import { categoryD_webDev } from './categoryD_webDev';
import { categoryE_uiUx } from './categoryE_uiUx';
import { categoryF_industrySolutions } from './categoryF_industrySolutions';
import { categoryG_nobleScientific } from './categoryG_nobleScientific';
import { CaseStudyCategory, ICaseStudyItem } from './types';
import { webBgCardImages } from '../webBgImages';

export * from './types';

// Map verified Cloudflare R2 client project screenshots
const clientScreenshotMap: Record<string, string> = {
  'raveena-sarees': '/images/projects/raveena-sarees.png',
  'revengo': '/images/projects/revengo.png',
  'career-corner-india': '/images/projects/career-corner-india.png',
  'aeli-adops': '/api/r2/portfolio/projects/Screenshot%202026-03-19%20142335.png',
  'noble-scientific-solutions': '/images/projects/noble-scientific-solutions.png',
};

const rawCaseStudies: ICaseStudyItem[] = [
  ...categoryA_clientProjects, // 01 - 04
  ...categoryB_aiAgents, // 05 - 12
  ...categoryC_aiProducts, // 13 - 15
  ...categoryD_webDev, // 16 - 21
  ...categoryE_uiUx, // 22 - 26
  ...categoryF_industrySolutions, // 27 - 36
  ...categoryG_nobleScientific, // 37
];

// Enrich all case studies with Cloudflare R2 web-bg artwork and verified client screenshots
export const allCaseStudies: ICaseStudyItem[] = rawCaseStudies.map((study, idx) => {
  const clientImg = clientScreenshotMap[study.slug];
  if (clientImg) {
    return {
      ...study,
      thumbnail: clientImg,
    };
  }

  // Assign curated Cloudflare R2 web-bg imagery
  const r2Image = webBgCardImages[(idx - 4 + webBgCardImages.length) % webBgCardImages.length];
  return {
    ...study,
    thumbnail: r2Image || study.thumbnail,
  };
});

export const caseStudyCategories: { key: 'all' | CaseStudyCategory; label: string }[] = [
  { key: 'all', label: 'All Studies' },
  { key: 'ai-agents', label: 'AI Agents & Automation' },
  { key: 'ai-products', label: 'AI Products & Advanced AI' },
  { key: 'web-dev', label: 'Web & Software Development' },
  { key: 'ui-ux', label: 'UI/UX & Digital Design' },
  { key: 'industry-solutions', label: 'Industry Solutions' },
  { key: 'client-projects', label: 'Client Projects' },
];

export function getAllCaseStudies(): ICaseStudyItem[] {
  return allCaseStudies;
}

export function getCaseStudyBySlug(slug: string): ICaseStudyItem | undefined {
  const normalizedSlug = slug.toLowerCase().trim();
  const directMatch = allCaseStudies.find((study) => study.slug.toLowerCase() === normalizedSlug);
  if (directMatch) {return directMatch;}

  // Fallback aliases for legacy links
  if (normalizedSlug === 'bright-path-customer-engagement-and-retention') {
    return allCaseStudies.find((s) => s.slug === 'customer-self-service-portal');
  }

  return undefined;
}

export function getCaseStudiesByCategory(categoryKey: 'all' | CaseStudyCategory): ICaseStudyItem[] {
  if (categoryKey === 'all') {
    return allCaseStudies;
  }
  return allCaseStudies.filter((study) => study.categoryKey === categoryKey);
}
