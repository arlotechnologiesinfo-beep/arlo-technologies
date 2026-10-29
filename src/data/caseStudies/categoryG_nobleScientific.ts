import { ICaseStudyItem } from './types';

export const categoryG_nobleScientific: ICaseStudyItem[] = [
  {
    id: 37,
    slug: 'noble-scientific-solutions',
    type: 'client-project',
    categoryKey: 'client-projects',
    categoryLabel: 'Delivered Client Project',
    title: 'Noble Scientific Solutions — Laboratory & Industrial Supply Brand Experience',
    seoTitle:
      'Noble Scientific Solutions Case Study | Scientific Equipment Supplier Web Presence | Arlo Technologies',
    metaDescription:
      'See how Arlo Technologies shaped the digital brand presence of Noble Scientific Solutions, a supplier of laboratory equipment, scientific instruments, robotic components, and industrial solutions with global shipping.',
    primarySearchIntent: 'Scientific and laboratory equipment supplier website design',
    seoKeywords: [
      'scientific equipment supplier website',
      'laboratory equipment b2b web design',
      'industrial supplies brand identity',
      'robotic components catalog website',
    ],
    thumbnail: '/images/projects/noble-scientific-solutions.png',
    imageAlt:
      'Noble Scientific Solutions banner showing laboratory equipment, robotics, university and industry buildings, and global shipping',
    publishedAt: '2026-10-29',
    lastReviewed: '2026-10-29',
    readTime: '4 min read',
    statusNotice:
      'Delivered Client Project: Based on the brand positioning shared by Noble Scientific Solutions. Sales figures, customer names, and private commercial details belong to the client and are not claimed here.',
    intro:
      'Noble Scientific Solutions supplies laboratory equipment, scientific instruments, robotic components, and industrial solutions to educational institutions, research organizations, and businesses, with reliable service and global shipping. Arlo Technologies shaped a clear, trustworthy digital presence for the brand under the line "Equip · Innovate · Advance".',
    executiveSummary: {
      challenge:
        'A supplier serving universities, research labs, and industry must speak to very different buyers at once while looking dependable enough to order specialist equipment from across borders.',
      approach:
        'Built a visual identity and brand narrative around two audiences, educational institutions and companies and industries, supported by a wide product range and global shipping assurance.',
      potentialValue:
        'A professional first impression that helps institutional and business buyers understand the offering quickly and start a supply conversation with confidence.',
    },
    businessContext:
      'Procurement teams in education and industry compare many suppliers and favor those that look established, offer a broad catalogue, and make logistics clear. Trust and clarity matter as much as price.',
    problemOrOpportunity:
      'Noble Scientific Solutions needed a presentation that unified lab science, robotics, and industrial supply into one coherent brand, and that made its audiences and its global shipping support obvious at a glance.',
    goalsAndRequirements: [
      'Present a cohesive brand covering scientific instruments, robotic components, and industrial products.',
      'Address educational institutions and companies and industries as distinct audiences.',
      'Communicate reliable service and global shipping support clearly.',
      'Use a clean, modern, trustworthy visual language suited to scientific buyers.',
    ],
    proposedSolution:
      'A bright, science-led brand experience combining real-world laboratory and logistics imagery with a crisp blue identity, a direct value headline, and four short pillars: for educational institutions, for companies and industries, a wide range of scientific and industrial products, and global shipping support.',
    systemArchitecture: {
      overview:
        'A modular, content-first web architecture where brand messaging, audience sections, and product categories are reusable components that can grow as the catalogue expands.',
      components: [
        {
          name: 'Audience Pathways',
          description:
            'Dedicated sections that speak separately to educational institutions and to companies and industries.',
        },
        {
          name: 'Product Range Showcase',
          description:
            'Category-led presentation of scientific instruments, laboratory equipment, robotic components, and industrial solutions.',
        },
        {
          name: 'Enquiry & Shipping Information',
          description:
            'Clear enquiry routes and global shipping messaging to reduce hesitation for remote buyers.',
        },
      ],
      techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    },
    implementationRoadmap: [
      {
        phase: 'Phase 1: Brand & Audience Discovery',
        title: 'Positioning',
        activities: [
          'Defined the two core audiences and the supplier promise: innovative supplies for a smarter tomorrow.',
          'Mapped the product range into clear categories.',
        ],
      },
      {
        phase: 'Phase 2: Visual Identity & Layout',
        title: 'Design',
        activities: [
          'Designed the brand banner and identity with the Equip · Innovate · Advance tagline.',
          'Structured the page around audience, range, and shipping pillars.',
        ],
      },
      {
        phase: 'Phase 3: Build & Review',
        title: 'Engineering & QA',
        activities: [
          'Built responsive, accessible components for desktop and mobile buyers.',
          'Reviewed content accuracy with the client before release.',
        ],
      },
    ],
    safeguards: {
      security: 'HTTPS delivery and sanitized enquiry handling.',
      privacy: 'Buyer enquiry details are used only to respond to the request.',
      accessibility: 'Semantic structure, keyboard navigation, and checked color contrast.',
      reliability: 'Static-first delivery with minimal runtime dependencies.',
    },
    measurementPlan: {
      description: 'Success is tracked through engagement and enquiry quality rather than assumed figures.',
      metrics: [
        {
          name: 'Qualified Enquiries',
          baselineAndTracking: 'Count of enquiries from educational institutions and businesses, tracked over time.',
        },
        {
          name: 'Page Performance',
          baselineAndTracking: 'Core Web Vitals monitored on desktop and mobile.',
        },
      ],
    },
    challengesAndTradeoffs: [
      {
        challenge: 'Covering science, robotics, and industrial supply without a cluttered message.',
        mitigationOrTradeoff:
          'Used a single unifying headline and four concise pillars, keeping detail on deeper pages.',
      },
    ],
    lessonsAndRecommendations: [
      'Naming each audience explicitly helps institutional buyers recognise that the offer is for them.',
      'Showing logistics and global shipping early removes a major objection for remote procurement.',
    ],
    faqs: [
      {
        question: 'What does Noble Scientific Solutions supply?',
        answer:
          'Laboratory equipment, scientific instruments, robotic components, and industrial solutions for educational institutions, research organizations, and businesses.',
      },
      {
        question: 'Does Noble Scientific Solutions ship internationally?',
        answer: 'Yes. Global shipping support is one of the brand’s core service pillars.',
      },
    ],
    relatedServices: [
      { title: 'B2B Website Design & Development', href: '/services' },
      { title: 'Brand Identity & UI/UX Design', href: '/services' },
    ],
    relatedCaseStudies: [
      { title: 'Aeli Adops — Digital Services Website', slug: 'aeli-adops', categoryLabel: 'Delivered Client Project' },
      { title: 'Raveena Sarees — E-commerce Website Experience', slug: 'raveena-sarees', categoryLabel: 'Delivered Client Project' },
    ],
  },
];
