export interface WebsitePlan {
  id: string;
  name: string;
  price: string;
  priceDetail: string;
  badge?: string;
  recommended?: boolean;
  forText: string;
  features: string[];
  exclusions?: string;
  ctaText: string;
  ctaHref: string;
}

export interface AppPackage {
  id: string;
  name: string;
  price: string;
  bestFor: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface ProductPlan {
  id: string;
  name: string;
  category: string;
  tagline: string;
  status: 'available' | 'coming-soon' | 'waitlist';
  badge?: string;
  tiers: {
    name: string;
    price: string;
    allowance: string;
    details?: string;
  }[];
  notes: string;
  ctaText: string;
  ctaHref: string;
}

export interface CarePlan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  recommended?: boolean;
  forText: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'websites' | 'apps' | 'care';
}

export const websitePlans: WebsitePlan[] = [
  {
    id: 'free-launch',
    name: 'Free Launch',
    price: '₹0',
    priceDetail: 'Free · Limited starter website',
    forText: 'Individuals testing an idea or building their first online presence.',
    features: [
      'One basic template-based landing page',
      'Essential content & hero sections',
      'Mobile-friendly responsive layout',
      'Arlo subdomain (where supported)',
      'Basic contact & inquiry information',
    ],
    exclusions: 'Not a free custom website. Custom domain, bespoke design, backend systems, and ongoing support are excluded.',
    ctaText: 'Explore Free Launch',
    ctaHref: '/contact-us?plan=free-launch',
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '₹14,999',
    priceDetail: 'one-time investment',
    forText: 'Freelancers, creators, and new businesses establishing credibility.',
    features: [
      'Custom-branded website layout',
      'Up to 5 agreed pages',
      'Responsive, mobile-first implementation',
      'Interactive contact & enquiry form',
      'Basic on-page SEO meta configuration',
      'Deployment & launch assistance',
    ],
    ctaText: 'Choose Starter',
    ctaHref: '/contact-us?plan=starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹29,999',
    priceDetail: 'one-time investment',
    badge: 'Recommended',
    recommended: true,
    forText: 'Growing small and medium businesses ready to expand their reach.',
    features: [
      'Up to 8 agreed pages with tailored layout',
      'Polished visual design aligned with brand',
      'Performance-conscious, fast-loading code',
      'Contact forms & selected integrations',
      'Google Analytics & SEO foundations',
      'Cross-browser & device pre-launch testing',
    ],
    ctaText: 'Choose Growth',
    ctaHref: '/contact-us?plan=growth',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹59,999',
    priceDetail: 'one-time investment',
    forText: 'Brands that need a stronger, more engaging digital experience.',
    features: [
      'Up to 12 agreed bespoke pages',
      'Custom UI/UX & refined interactions',
      'Advanced storytelling & content sections',
      'Selected API or third-party integrations',
      'Comprehensive technical SEO architecture',
      'Rigorous accessibility & performance checks',
    ],
    ctaText: 'Choose Premium',
    ctaHref: '/contact-us?plan=premium',
  },
  {
    id: 'ultra-premium',
    name: 'Ultra Premium',
    price: '₹99,999',
    priceDetail: 'starting price',
    forText: 'Businesses that require a sophisticated digital experience platform.',
    features: [
      'Bespoke design system & tailored user journeys',
      'Extended page structure & content depth',
      'Micro-animations & interactive elements',
      'Selected custom functionality & workflows',
      'Complex information architecture',
      'Extended QA & post-launch support window',
    ],
    exclusions: 'Backend platforms, complex integrations, and large database migrations require a separate agreed scope.',
    ctaText: 'Discuss Ultra Premium',
    ctaHref: '/contact-us?plan=ultra-premium',
  },
  {
    id: 'enterprise-web',
    name: 'Enterprise',
    price: 'Custom quote',
    priceDetail: 'tailored proposal',
    forText: 'Larger organisations with complex, multi-team requirements.',
    features: [
      'Multi-stakeholder & multi-role requirements',
      'Custom enterprise integrations & workflows',
      'Security review & cloud infrastructure planning',
      'Defined delivery milestones & sprint cadence',
      'Dedicated project manager & SLA arrangements',
    ],
    ctaText: 'Talk to Arlo',
    ctaHref: '/contact-us?plan=enterprise-web',
  },
];

export const appPackages: AppPackage[] = [
  {
    id: 'free-discovery',
    name: 'Free Discovery',
    price: '₹0',
    bestFor: 'Initial consultation and high-level technical direction',
    description: 'A focused discussion to clarify your product vision, evaluate feasibility, and recommend the most practical next step. No production software is included.',
    features: [
      '30-minute structured discovery consultation',
      'Product requirements & feasibility evaluation',
      'High-level technical architecture recommendation',
      'Preliminary scope & timeline roadmap',
    ],
    ctaText: 'Book Free Discovery',
    ctaHref: '/contact-us?subject=App+Discovery',
  },
  {
    id: 'mvp-starter',
    name: 'MVP Starter',
    price: '₹49,999',
    bestFor: 'Narrowly scoped prototype or testable functional MVP',
    description: 'Turn your core hypothesis into a functional, user-testable product without spending months in bloated development.',
    features: [
      'Tightly defined core feature set',
      'Primary user flows & essential screens',
      'Core application logic & data handling',
      'Staging deployment for real user testing',
      'Handover walkthrough & review session',
    ],
    ctaText: 'Start Your MVP',
    ctaHref: '/contact-us?subject=MVP+Starter',
  },
  {
    id: 'product-growth',
    name: 'Product Growth',
    price: '₹99,999',
    bestFor: 'Complete functional web application ready for active users',
    description: 'A production-grade web application built with clean architecture, database integration, and user authentication.',
    features: [
      'Comprehensive web application architecture',
      'Secure authentication & role management',
      'Relational / document database integration',
      'REST or GraphQL API endpoints',
      'Interactive dashboard & administrative views',
      'Automated testing & deployment pipeline',
    ],
    ctaText: 'Build Product Growth',
    ctaHref: '/contact-us?subject=Product+Growth',
  },
  {
    id: 'premium-build',
    name: 'Premium Build',
    price: '₹1,99,999',
    bestFor: 'Advanced functionality and multi-service integrations',
    description: 'Engineered for scaling digital products requiring external API connectors, real-time events, and high reliability.',
    features: [
      'Advanced workflows & background task processing',
      'Third-party payment, CRM, or messaging APIs',
      'Role-based access control (RBAC) & audit logs',
      'Optimised database queries & caching layer',
      'Comprehensive QA, security review & load tests',
      'Production deployment on AWS / Vercel / Cloud',
    ],
    ctaText: 'Plan Premium Build',
    ctaHref: '/contact-us?subject=Premium+Build',
  },
  {
    id: 'enterprise-engineering',
    name: 'Enterprise Engineering',
    price: 'Custom quote',
    bestFor: 'Complex, multi-module distributed platforms',
    description: 'Full-cycle bespoke engineering with high availability, enterprise compliance, and dedicated team staffing.',
    features: [
      'Microservices or modular monolith architecture',
      'High-throughput infrastructure & failover design',
      'Compliance & data residency alignment (DPDP)',
      'Custom CI/CD pipelines & container orchestration',
      'Dedicated sprint teams & executive reporting',
    ],
    ctaText: 'Request Engineering Proposal',
    ctaHref: '/contact-us?subject=Enterprise+Engineering',
  },
];

export const arloProducts: ProductPlan[] = [
  {
    id: 'sampark-ai',
    name: 'Sampark AI',
    category: 'WhatsApp Automation',
    tagline: 'Automate customer conversations, inquiries, and notifications on WhatsApp.',
    status: 'available',
    badge: 'Live',
    tiers: [
      {
        name: 'Free Allowance',
        price: '₹0',
        allowance: '100 automated WhatsApp messages (lifetime allowance)',
        details: 'Ideal for trying out automated customer routing.',
      },
      {
        name: 'Basic Plan',
        price: '₹150 / mo',
        allowance: '500 Sampark AI credits per billing month',
        details: 'Planned recurring credits for growing customer communications.',
      },
    ],
    notes: 'Provider messaging fees and telecom infrastructure costs may apply separately depending on usage volume and template categories.',
    ctaText: 'Get Started with Sampark',
    ctaHref: '/contact-us?product=sampark-ai',
  },
  {
    id: 'samvad',
    name: 'SAMVAD',
    category: 'Secure Messaging & Communities',
    tagline: 'Consumer communication built around privacy, clean interactions, and community channels.',
    status: 'available',
    badge: 'Free Core',
    tiers: [
      {
        name: 'Core Messaging',
        price: 'Free to use',
        allowance: 'Unlimited essential 1-on-1 and community conversations',
        details: 'Free communication remains the foundational model of SAMVAD.',
      },
    ],
    notes: 'Monetisation, if introduced in the future for optional enterprise tools, will remain strictly separated from essential messaging features.',
    ctaText: 'Explore SAMVAD',
    ctaHref: '/contact-us?product=samvad',
  },
  {
    id: 'sandesh',
    name: 'Sandesh',
    category: 'Smart Email Workflows',
    tagline: 'Streamlined email automation, transactional delivery, and contact management.',
    status: 'coming-soon',
    badge: 'Coming Soon',
    tiers: [
      {
        name: 'Free Tier Planned',
        price: '₹0 planned',
        allowance: 'Generous initial allowance upon public launch',
        details: 'Subject to infrastructure and deliverability benchmarks.',
      },
    ],
    notes: 'In active development. Paid usage tiers will be announced once deliverability controls and sending infrastructure are fully validated.',
    ctaText: 'Join Sandesh Waitlist',
    ctaHref: '/contact-us?waitlist=sandesh',
  },
  {
    id: 'docusafe',
    name: 'DocuSafe',
    category: 'Document Organisation & Security',
    tagline: 'Structured document storage, client vault access, and encrypted file sharing.',
    status: 'coming-soon',
    badge: 'Coming Soon',
    tiers: [
      {
        name: 'Free Tier Planned',
        price: '₹0 planned',
        allowance: 'Encrypted storage allotment upon general release',
        details: 'Start with secure document categorisation and access control.',
      },
    ],
    notes: 'Paid tiers will be introduced based on actual cloud storage, enterprise backup, and automated processing costs. No upfront fees.',
    ctaText: 'Join DocuSafe Waitlist',
    ctaHref: '/contact-us?waitlist=docusafe',
  },
];

export const carePlans: CarePlan[] = [
  {
    id: 'essential-care',
    name: 'Essential Care',
    price: '₹999',
    period: '/ month',
    forText: 'Small websites with basic routine upkeep requirements.',
    features: [
      'Routine content & text updates (up to 2 hrs/mo)',
      'Monthly uptime & functionality check',
      'Standard email support with 48h response target',
      'Basic monthly health report',
    ],
    ctaText: 'Subscribe Essential',
    ctaHref: '/contact-us?care=essential',
  },
  {
    id: 'growth-care',
    name: 'Growth Care',
    price: '₹2,499',
    period: '/ month',
    badge: 'Recommended',
    recommended: true,
    forText: 'Businesses actively updating their digital presence and content.',
    features: [
      'Everything in Essential Care',
      'Up to 6 hours of agreed monthly design/content updates',
      'Routine dependency & security updates',
      'Performance checks & page-speed audits',
      'Priority email & chat support within 24 hours',
    ],
    ctaText: 'Subscribe Growth',
    ctaHref: '/contact-us?care=growth',
  },
  {
    id: 'premium-care',
    name: 'Premium Care',
    price: '₹4,999',
    period: '/ month',
    forText: 'Brands needing frequent technical attention, updates, and oversight.',
    features: [
      'Everything in Growth Care',
      'Up to 12 hours of development & update allocation',
      'Bi-weekly performance & SEO health diagnostics',
      'Integration monitoring & error log tracking',
      'Priority same-day response during business hours',
    ],
    ctaText: 'Subscribe Premium',
    ctaHref: '/contact-us?care=premium',
  },
  {
    id: 'priority-care',
    name: 'Priority Care',
    price: '₹9,999',
    period: '/ month',
    forText: 'Active applications and revenue-generating digital products.',
    features: [
      'Dedicated monthly engineering allocation (up to 24 hrs)',
      'Scheduled maintenance & code hygiene reviews',
      'Continuous uptime & critical error monitoring',
      'Guaranteed 4-hour initial response target',
      'Monthly strategic review & roadmap call',
    ],
    ctaText: 'Subscribe Priority',
    ctaHref: '/contact-us?care=priority',
  },
  {
    id: 'enterprise-care',
    name: 'Enterprise Care',
    price: 'Custom quote',
    period: 'tailored SLA',
    forText: 'Complex products requiring dedicated operational agreements.',
    features: [
      'Bespoke maintenance windows & on-call coverage',
      'Custom service-level agreements (SLAs)',
      'Dedicated infrastructure & database management',
      'Quarterly security audits & compliance reviews',
      'Dedicated Slack / Teams direct channel',
    ],
    ctaText: 'Discuss Enterprise Care',
    ctaHref: '/contact-us?care=enterprise',
  },
];

export const pricingFAQs: FAQItem[] = [
  {
    question: 'What does the Free Launch website option include?',
    answer: 'The Free Launch offering provides one basic, template-based landing page with essential sections, hosted on an Arlo subdomain where supported. It is designed for individuals testing an initial concept or establishing their very first web presence. It does not include bespoke custom development, backend code, a free custom domain, or ongoing maintenance.',
    category: 'websites',
  },
  {
    question: 'Are domain names and cloud hosting costs included in the website prices?',
    answer: 'Our website development prices cover complete design, responsive coding, SEO foundations, and deployment setup. Third-party expenses—such as domain name registration (e.g., .in or .com) and ongoing cloud hosting (such as Vercel, AWS, or Netlify)—are billed directly by their respective providers at actual cost or arranged under an ongoing care plan.',
    category: 'websites',
  },
  {
    question: 'Are the prices quoted one-time fees or recurring subscriptions?',
    answer: 'Website development and custom software engineering packages are one-time project investments tied to an agreed scope and deliverables. Arlo product tiers (such as Sampark AI Basic) and Ongoing Care packages are monthly subscriptions that you can pause or cancel in accordance with our Refund & Cancellation Policy.',
    category: 'general',
  },
  {
    question: 'What determines the cost of custom application development?',
    answer: 'The cost of custom software is determined by platform requirements (web vs. mobile), complexity of user flows, backend database architecture, third-party integrations (payments, SMS, AI), security and compliance requirements, and delivery timeline. We provide a transparent scope breakdown before starting any work.',
    category: 'apps',
  },
  {
    question: 'Are statutory taxes like GST included in the listed prices?',
    answer: 'All prices are quoted exclusive of statutory taxes. Applicable GST (Goods and Services Tax) is added to tax invoices as required under Indian law once registered. Full GST invoices with input tax credit eligibility are issued for all business transactions.',
    category: 'general',
  },
  {
    question: 'Are third-party API or provider fees included in product subscriptions?',
    answer: 'For products that integrate external infrastructure (such as WhatsApp Business API charges from Meta for Sampark AI, or cloud AI tokens), third-party usage costs are billed based on official carrier/provider rates or consumed from pre-purchased allowances. We never hide carrier markups.',
    category: 'general',
  },
  {
    question: 'Can I start with Starter or Growth and upgrade my website or plan later?',
    answer: 'Yes! We design every digital asset to scale. You can begin with a Starter website or MVP Starter and seamlessly transition to a larger page structure, custom application features, or higher care tiers as your business and customer volume grow.',
    category: 'websites',
  },
  {
    question: 'What is included in Arlo Ongoing Care plans, and can I cancel anytime?',
    answer: 'Ongoing Care plans provide proactive technical maintenance, dependency updates, agreed content adjustments, security audits, and dedicated support hours. Monthly care plans carry no long-term lock-in and can be cancelled with 15 days notice before the next monthly billing cycle.',
    category: 'care',
  },
  {
    question: 'How do I request a custom quotation for an enterprise project?',
    answer: 'Simply click "Talk to Arlo" or visit our Contact Us page. Share your high-level objectives, timeline, and requirements. Our engineering leadership in Hyderabad will schedule a technical discovery call to prepare an itemised Statement of Work (SOW) tailored to your organisation.',
    category: 'general',
  },
];
