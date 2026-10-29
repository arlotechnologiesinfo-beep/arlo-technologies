export interface SitemapItem {
  id: string;
  name: string;
  href: string;
  description: string;
  badge?: string;
  keywords: string[];
}

export interface SitemapCategory {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  items: SitemapItem[];
}

export const sitemapCategories: SitemapCategory[] = [
  {
    id: 'discover-arlo',
    name: 'Discover Arlo',
    eyebrow: 'Company & Vision',
    description:
      'Explore the foundations of Arlo Technologies, our people, our engineering methodology, and the partnerships shaping modern digital solutions.',
    items: [
      {
        id: 'home',
        name: 'Home',
        href: '/',
        description: 'The front door to Arlo Technologies, featuring our core vision, portfolio highlights, and intelligent solutions.',
        badge: 'Main',
        keywords: ['home', 'landing', 'start', 'main', 'overview', 'ecosystem'],
      },
      {
        id: 'about-us',
        name: 'About Us',
        href: '/about',
        description: 'Our story, founding philosophy, leadership team, and mission to turn ambitious ideas into impactful technology.',
        badge: 'Company',
        keywords: ['about', 'company', 'story', 'mission', 'values', 'vision', 'team'],
      },
      {
        id: 'our-process',
        name: 'Our Process',
        href: '/process',
        description: 'The end-to-end engineering methodology, collaborative design cycles, and delivery standards behind our client work.',
        badge: 'Methodology',
        keywords: ['process', 'how we work', 'methodology', 'agile', 'workflow', 'delivery', 'sprint'],
      },
      {
        id: 'careers',
        name: 'Careers',
        href: '/career',
        description: 'Open opportunities, remote culture, engineering values, and life at Arlo Technologies for builders and problem-solvers.',
        badge: 'Hiring',
        keywords: ['career', 'careers', 'jobs', 'hiring', 'openings', 'culture', 'work with us'],
      },
      {
        id: 'selected-work',
        name: 'Selected Work',
        href: '/case-study',
        description: 'Curated portfolio of delivered client applications, enterprise platforms, and technical case studies.',
        badge: 'Portfolio',
        keywords: ['selected work', 'work', 'portfolio', 'projects', 'clients', 'case studies'],
      },
      {
        id: 'success-stories',
        name: 'Success Stories',
        href: '/success-stories',
        description: 'Real businesses, bold ideas, and meaningful progress created through long-term technical partnerships with Arlo.',
        badge: 'Impact',
        keywords: ['success stories', 'stories', 'testimonials', 'client results', 'partnerships', 'outcomes'],
      },
      {
        id: 'contact-us',
        name: 'Contact Us',
        href: '/contact-us',
        description: 'Connect with our Hyderabad office or leadership team for consultations, technical inquiries, and project proposals.',
        badge: 'Connect',
        keywords: ['contact', 'email', 'phone', 'office', 'hyderabad', 'talk', 'enquiry', 'reach out'],
      },
    ],
  },
  {
    id: 'products-solutions',
    name: 'Products & Solutions',
    eyebrow: 'Platform & Engineering',
    description:
      'Engineered products, intelligent services, and modular components designed to scale business operations and software velocity.',
    items: [
      {
        id: 'features',
        name: 'Features',
        href: '/features',
        description: 'Intelligent automation engines, modular architecture, and platform components engineered for enterprise performance.',
        badge: 'Core',
        keywords: ['features', 'capabilities', 'automation', 'speed', 'scale', 'modularity'],
      },
      {
        id: 'our-services',
        name: 'Our Services',
        href: '/services',
        description: 'Full-spectrum software engineering, AI agent implementation, cloud infrastructure, and modern web applications.',
        badge: 'Services',
        keywords: ['services', 'software development', 'ai agents', 'web development', 'cloud', 'design', 'engineering'],
      },
      {
        id: 'integrations',
        name: 'Integrations',
        href: '/integration',
        description: 'Pre-built connectors, enterprise REST APIs, webhooks, and third-party data pipelines that link your software stack.',
        badge: 'Connectivity',
        keywords: ['integrations', 'api', 'connectors', 'webhooks', 'crm', 'database', 'tools'],
      },
      {
        id: 'use-cases',
        name: 'Use Cases',
        href: '/use-case',
        description: 'Practical industry solutions for finance, healthcare, SaaS, commerce, and complex operational workflows.',
        badge: 'Applications',
        keywords: ['use cases', 'industry', 'applications', 'scenarios', 'healthcare', 'fintech', 'saas'],
      },
      {
        id: 'analytics',
        name: 'Analytics',
        href: '/analytics',
        description: 'Real-time telemetry, user behavior metrics, performance analytics, and reporting dashboards for data-driven teams.',
        badge: 'Insights',
        keywords: ['analytics', 'metrics', 'insights', 'dashboards', 'telemetry', 'reporting', 'data'],
      },
      {
        id: 'pricing',
        name: 'Pricing & Plans',
        href: '/pricing',
        description: 'Unified transparent pricing across website development, custom apps, Arlo products, and ongoing care packages.',
        badge: 'Pricing',
        keywords: ['pricing', 'plans', 'rates', 'cost', 'subscriptions', 'care', 'quote', 'fees'],
      },
    ],
  },
  {
    id: 'knowledge-resources',
    name: 'Knowledge & Resources',
    eyebrow: 'Learning & Research',
    description:
      'Practical publications, tutorials, technical definitions, and research whitepapers explaining modern software and AI technology.',
    items: [
      {
        id: 'blog',
        name: 'Blog',
        href: '/blog',
        description: 'The Arlo Journal: Thought leadership, engineering architecture deep-dives, and practical artificial intelligence essays.',
        badge: 'Journal',
        keywords: ['blog', 'articles', 'journal', 'insights', 'news', 'reading', 'posts'],
      },
      {
        id: 'tutorials',
        name: 'Tutorials',
        href: '/tutorial',
        description: 'Step-by-step guides, code implementations, and hands-on walkthroughs for developers, designers, and system architects.',
        badge: 'Guides',
        keywords: ['tutorials', 'tutorial', 'guides', 'walkthroughs', 'how to', 'code', 'learn'],
      },
      {
        id: 'productivity-glossary',
        name: 'Productivity Glossary',
        href: '/glossary',
        description: 'Plain-English definitions and practical examples for 26 key modern productivity concepts, from AI to Zero Trust.',
        badge: 'Reference',
        keywords: ['glossary', 'definitions', 'terms', 'dictionary', 'productivity', 'concepts', 'az'],
      },
      {
        id: 'whitepapers',
        name: 'Whitepapers',
        href: '/whitepaper',
        description: 'Authoritative research papers exploring intelligent automation, software architecture, cybersecurity, and emerging tech.',
        badge: 'Research',
        keywords: ['whitepapers', 'whitepaper', 'research', 'reports', 'technical papers', 'analysis'],
      },
      {
        id: 'case-studies',
        name: 'Case Studies',
        href: '/case-study',
        description: 'Technical breakdowns, architecture decisions, and measurable operational outcomes from delivered enterprise projects.',
        badge: 'Deep Dive',
        keywords: ['case studies', 'case study', 'results', 'benchmarks', 'client projects', 'architecture'],
      },
    ],
  },
  {
    id: 'support-community',
    name: 'Support & Community',
    eyebrow: 'Assistance & Partnerships',
    description:
      'Direct assistance, platform documentation, referral incentives, and affiliate partnership opportunities across our ecosystem.',
    items: [
      {
        id: 'support-center',
        name: 'Support Center',
        href: '/support',
        description: 'Assistance channels, help request triage, response timelines, and direct support from the Arlo engineering team.',
        badge: 'Help Desk',
        keywords: ['support', 'help', 'help desk', 'assistance', 'ticket', 'troubleshooting'],
      },
      {
        id: 'knowledge-base',
        name: 'Knowledge Base',
        href: '/documentation',
        description: 'Comprehensive technical documentation, setup guides, component references, and configuration instructions.',
        badge: 'Docs',
        keywords: ['knowledge base', 'documentation', 'docs', 'manual', 'reference', 'setup', 'guides'],
      },
      {
        id: 'referral-program',
        name: 'Referral Program',
        href: '/referral-program',
        description: 'Reward structure and credit incentives for introducing friends, colleagues, and businesses to Arlo Technologies.',
        badge: 'Rewards',
        keywords: ['referral', 'referral program', 'refer', 'rewards', 'invite', 'share', 'credits'],
      },
      {
        id: 'affiliate-program',
        name: 'Affiliate Program',
        href: '/affiliates',
        description: 'Collaborate with Arlo Technologies as a creator, agency, or consultant to earn recurring partnership commissions.',
        badge: 'Partnership',
        keywords: ['affiliate', 'affiliates', 'affiliate program', 'partners', 'commission', 'earn'],
      },
      {
        id: 'affiliate-policy',
        name: 'Affiliate Policy',
        href: '/affiliate-policy',
        description: 'Operating guidelines, commission schedules, ethical promotional standards, attribution rules, and partner compliance.',
        badge: 'Rules',
        keywords: ['affiliate policy', 'policy', 'rules', 'compliance', 'attribution', 'guidelines'],
      },
    ],
  },
  {
    id: 'trust-legal',
    name: 'Trust & Legal',
    eyebrow: 'Governance & Privacy',
    description:
      'Enterprise security standards, regulatory compliance, platform terms, and customer data protection policies.',
    items: [
      {
        id: 'security',
        name: 'Security',
        href: '/security',
        description: 'Infrastructure hardening, encryption standards, continuous monitoring, and data access controls protecting your assets.',
        badge: 'Protection',
        keywords: ['security', 'compliance', 'encryption', 'data protection', 'soc2', 'audit', 'infrastructure'],
      },
      {
        id: 'terms-conditions',
        name: 'Terms & Conditions',
        href: '/terms-conditions',
        description: 'Master service agreement, platform usage guidelines, intellectual property rights, and commercial provisions.',
        badge: 'Agreement',
        keywords: ['terms', 'terms and conditions', 'terms of service', 'agreement', 'contract', 'legal'],
      },
      {
        id: 'privacy-policy',
        name: 'Privacy Policy',
        href: '/privacy-policy',
        description: 'How we collect, store, safeguard, and manage personal and organizational data in full respect of privacy standards.',
        badge: 'Privacy',
        keywords: ['privacy', 'privacy policy', 'data', 'cookies', 'gdpr', 'confidentiality'],
      },
      {
        id: 'refund-policy',
        name: 'Refund Policy',
        href: '/refund-policy',
        description: 'Transparent cancellation policies, evaluation periods, eligibility criteria, and payment reimbursement rules.',
        badge: 'Billing',
        keywords: ['refund', 'refund policy', 'cancellation', 'money back', 'billing', 'reimbursement'],
      },
      {
        id: 'legal-hub',
        name: 'Legal Hub & Grievances',
        href: '/legal',
        description: 'Statutory corporate disclosures, Grievance Officer details, AI use policies, and regulatory escalation channels.',
        badge: 'Governance',
        keywords: ['legal', 'legal hub', 'grievance', 'regulatory', 'disclosures', 'compliance', 'officer', 'disclaimer', 'delivery'],
      },
    ],
  },
];

export const allSitemapItems: SitemapItem[] = sitemapCategories.flatMap((c) => c.items);
