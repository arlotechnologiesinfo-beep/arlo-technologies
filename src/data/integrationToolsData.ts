export type ToolCategory =
  | 'Website Builders & CMS'
  | 'No-Code & Low-Code Platforms'
  | 'UI/UX & Creative Tools'
  | 'E-commerce & Payments'
  | 'Automation & Communication'
  | 'AI Models & Developer APIs'
  | 'Frontend & Backend Development'
  | 'Databases & Authentication'
  | 'Deployment & Infrastructure'
  | 'Analytics & Productivity';

export type IntegrationStatus = 'Live' | 'Planned' | 'Potential';

export interface IToolItem {
  id: string;
  name: string;
  category: ToolCategory;
  tagline: string;
  description: string;
  websiteUrl: string;
  officialAssetSource: string;
  localAssetPath: string | null; // null triggers typographic fallback
  status: IntegrationStatus;
  isCurrentStack: boolean;
  featured: boolean;
}

export const CATEGORIES: ToolCategory[] = [
  'Website Builders & CMS',
  'No-Code & Low-Code Platforms',
  'UI/UX & Creative Tools',
  'E-commerce & Payments',
  'Automation & Communication',
  'AI Models & Developer APIs',
  'Frontend & Backend Development',
  'Databases & Authentication',
  'Deployment & Infrastructure',
  'Analytics & Productivity',
];

export const integrationToolsData: IToolItem[] = [
  // --- 1. Website Builders & CMS ---
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'Website Builders & CMS',
    tagline: 'CMS & Websites',
    description: 'Open-source content management system powering versatile blogs, marketing sites, and scalable web solutions.',
    websiteUrl: 'https://wordpress.org/',
    officialAssetSource: 'https://wordpress.org/about/logos/',
    localAssetPath: '/images/icons/wordpress.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'wix',
    name: 'Wix',
    category: 'Website Builders & CMS',
    tagline: 'Website Builder',
    description: 'Cloud-based website creation platform for rapid business web presence and content management.',
    websiteUrl: 'https://www.wix.com/',
    officialAssetSource: 'https://www.wix.com/about/design-assets',
    localAssetPath: '/images/icons/wix.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'webflow',
    name: 'Webflow',
    category: 'Website Builders & CMS',
    tagline: 'Visual Web Development',
    description: 'Visual development platform for building custom, responsive websites with clean production-ready code.',
    websiteUrl: 'https://webflow.com/',
    officialAssetSource: 'https://brand.webflow.com/brand-assets',
    localAssetPath: '/images/icons/webflow.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'framer',
    name: 'Framer',
    category: 'Website Builders & CMS',
    tagline: 'Design & Publishing',
    description: 'Interactive canvas tool for designing, prototyping, and publishing high-performance marketing websites.',
    websiteUrl: 'https://www.framer.com/',
    officialAssetSource: 'https://www.framer.com/brand/',
    localAssetPath: '/images/icons/framer.svg',
    status: 'Live',
    isCurrentStack: true,
    featured: true,
  },

  // --- 2. No-Code & Low-Code Platforms ---
  {
    id: 'bubble',
    name: 'Bubble',
    category: 'No-Code & Low-Code Platforms',
    tagline: 'No-Code Web Apps',
    description: 'Visual programming platform allowing users to build and host full-stack interactive web applications without code.',
    websiteUrl: 'https://bubble.io/',
    officialAssetSource: 'https://bubble.io/press',
    localAssetPath: null, // Typographic fallback until official SVG verified
    status: 'Potential',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'flutterflow',
    name: 'FlutterFlow',
    category: 'No-Code & Low-Code Platforms',
    tagline: 'Visual App Development',
    description: 'Visual builder for native mobile and web applications powered by Google Flutter framework.',
    websiteUrl: 'https://flutterflow.io/',
    officialAssetSource: 'https://flutterflow.io/',
    localAssetPath: '/images/icons/flutterflow.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'No-Code & Low-Code Platforms',
    tagline: 'Workflow Automation',
    description: 'Connects thousands of web apps to automate multi-step workflows and eliminate repetitive tasks.',
    websiteUrl: 'https://zapier.com/',
    officialAssetSource: 'https://zapier.com/brand',
    localAssetPath: '/images/icons/zapier.svg',
    status: 'Planned',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'make',
    name: 'Make',
    category: 'No-Code & Low-Code Platforms',
    tagline: 'Visual Automation',
    description: 'Visual platform to design, build, and automate complex workflows across software ecosystems.',
    websiteUrl: 'https://www.make.com/',
    officialAssetSource: 'https://www.make.com/en/brand-assets',
    localAssetPath: '/images/icons/make.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: false,
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'No-Code & Low-Code Platforms',
    tagline: 'Fair-Code Workflow Automation',
    description: 'Self-hostable workflow automation tool with extensive developer-first API integration support.',
    websiteUrl: 'https://n8n.io/',
    officialAssetSource: 'https://n8n.io/brand',
    localAssetPath: '/images/icons/n8n.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: false,
  },

  // --- 3. UI/UX & Creative Tools ---
  {
    id: 'figma',
    name: 'Figma',
    category: 'UI/UX & Creative Tools',
    tagline: 'Collaborative UI/UX Design',
    description: 'Industry-standard collaborative interface design, design system governance, and interactive prototyping tool.',
    websiteUrl: 'https://www.figma.com/',
    officialAssetSource: 'https://www.figma.com/brand-guidelines/',
    localAssetPath: '/images/icons/figma.svg',
    status: 'Live',
    isCurrentStack: true,
    featured: true,
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'UI/UX & Creative Tools',
    tagline: 'Graphics & Visual Content',
    description: 'Design platform for social visual assets, presentations, and rapid brand collateral creation.',
    websiteUrl: 'https://www.canva.com/',
    officialAssetSource: 'https://www.canva.com/brand/',
    localAssetPath: '/images/icons/canva.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: false,
  },
  {
    id: 'adobe-creative-cloud',
    name: 'Adobe Creative Cloud',
    category: 'UI/UX & Creative Tools',
    tagline: 'Creative Production Suite',
    description: 'Professional creative suite encompassing Photoshop, Illustrator, After Effects, and multimedia production tools.',
    websiteUrl: 'https://www.adobe.com/creativecloud.html',
    officialAssetSource: 'https://www.adobe.com/legal/permissions/trademarks.html',
    localAssetPath: null, // Typographic fallback per brand asset guidelines
    status: 'Potential',
    isCurrentStack: false,
    featured: false,
  },

  // --- 4. E-commerce & Payments ---
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'E-commerce & Payments',
    tagline: 'E-commerce & Storefronts',
    description: 'Leading commerce platform powering online stores, product catalogs, and headless checkout architectures.',
    websiteUrl: 'https://www.shopify.com/',
    officialAssetSource: 'https://www.shopify.com/brand-assets',
    localAssetPath: '/images/icons/shopify.svg',
    status: 'Live',
    isCurrentStack: true,
    featured: true,
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    category: 'E-commerce & Payments',
    tagline: 'WordPress Commerce',
    description: 'Open, customizable e-commerce platform built for modular WordPress storefronts and digital products.',
    websiteUrl: 'https://woocommerce.com/',
    officialAssetSource: 'https://woocommerce.com/brand/',
    localAssetPath: '/images/icons/woocommerce.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'E-commerce & Payments',
    tagline: 'Global Payment Infrastructure',
    description: 'Financial infrastructure suite for internet businesses to accept payments, manage subscriptions, and send payouts.',
    websiteUrl: 'https://stripe.com/',
    officialAssetSource: 'https://stripe.com/newsroom/brand-assets',
    localAssetPath: '/images/icons/stripe.svg',
    status: 'Planned',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'razorpay',
    name: 'Razorpay',
    category: 'E-commerce & Payments',
    tagline: 'Payment Gateway & Banking',
    description: 'Payment gateway enabling businesses to accept, process, and disburse digital payments with high conversion.',
    websiteUrl: 'https://razorpay.com/',
    officialAssetSource: 'https://razorpay.com/brand/',
    localAssetPath: '/images/icons/razorpay.svg',
    status: 'Planned',
    isCurrentStack: false,
    featured: true,
  },

  // --- 5. Automation & Communication ---
  {
    id: 'slack',
    name: 'Slack',
    category: 'Automation & Communication',
    tagline: 'Team Communication',
    description: 'Productivity platform uniting team messaging, bot notifications, and automated operational updates.',
    websiteUrl: 'https://slack.com/',
    officialAssetSource: 'https://slack.com/brand-folder',
    localAssetPath: '/images/icons/slack.svg',
    status: 'Planned',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business Platform',
    category: 'Automation & Communication',
    tagline: 'Customer Messaging API',
    description: 'Official API for automated transactional notifications, interactive support, and direct customer communication.',
    websiteUrl: 'https://business.whatsapp.com/',
    officialAssetSource: 'https://about.meta.com/brand/resources/whatsapp/whatsapp-brand/',
    localAssetPath: '/images/icons/whatsapp.svg',
    status: 'Planned',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'Automation & Communication',
    tagline: 'CRM & Marketing Automation',
    description: 'Inbound marketing, sales CRM, and customer service platform supporting lead capture and nurture pipelines.',
    websiteUrl: 'https://www.hubspot.com/',
    officialAssetSource: 'https://www.hubspot.com/style-guide',
    localAssetPath: '/images/icons/hubspot.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    category: 'Automation & Communication',
    tagline: 'Data & Reporting Sync',
    description: 'Cloud spreadsheet software integrated with backend hooks for rapid structured data collection and client sync.',
    websiteUrl: 'https://sheets.google.com/',
    officialAssetSource: 'https://about.google/brand-resource-center/',
    localAssetPath: '/images/icons/googlesheets.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: false,
  },

  // --- 6. AI Models & Developer APIs ---
  {
    id: 'openai-api',
    name: 'OpenAI API',
    category: 'AI Models & Developer APIs',
    tagline: 'AI Models & Assistants',
    description: 'Enterprise API access to advanced language models, embeddings, and conversational AI endpoints.',
    websiteUrl: 'https://openai.com/',
    officialAssetSource: 'https://openai.com/brand',
    localAssetPath: '/images/icons/openai.svg',
    status: 'Planned',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'gemini-api',
    name: 'Gemini API',
    category: 'AI Models & Developer APIs',
    tagline: 'Google Multimodal AI',
    description: 'Next-generation multimodal reasoning, vision understanding, and structured output API from Google DeepMind.',
    websiteUrl: 'https://ai.google.dev/',
    officialAssetSource: 'https://ai.google.dev/',
    localAssetPath: '/images/icons/googlegemini.svg',
    status: 'Live',
    isCurrentStack: true,
    featured: true,
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    category: 'AI Models & Developer APIs',
    tagline: 'Unified Model API Gateway',
    description: 'Unified gateway providing normalized API routing and cost comparison across top open and proprietary LLMs.',
    websiteUrl: 'https://openrouter.ai/',
    officialAssetSource: 'https://openrouter.ai/',
    localAssetPath: null, // Typographic fallback
    status: 'Potential',
    isCurrentStack: false,
    featured: true,
  },

  // --- 7. Frontend & Backend Development ---
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend & Backend Development',
    tagline: 'React Framework for the Web',
    description: 'Production React framework enabling hybrid static site generation, server components, and performant web apps.',
    websiteUrl: 'https://nextjs.org/',
    officialAssetSource: 'https://nextjs.org/',
    localAssetPath: '/images/icons/nextdotjs.svg',
    status: 'Live',
    isCurrentStack: true,
    featured: true,
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend & Backend Development',
    tagline: 'Component UI Library',
    description: 'Declarative component library for building modular, high-performing user interfaces across web platforms.',
    websiteUrl: 'https://react.dev/',
    officialAssetSource: 'https://react.dev/',
    localAssetPath: '/images/icons/react.svg',
    status: 'Live',
    isCurrentStack: true,
    featured: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend & Backend Development',
    tagline: 'Typed JavaScript',
    description: 'Strict syntactical superset of JavaScript providing compile-time type safety and developer productivity.',
    websiteUrl: 'https://www.typescriptlang.org/',
    officialAssetSource: 'https://www.typescriptlang.org/branding/',
    localAssetPath: '/images/icons/typescript.svg',
    status: 'Live',
    isCurrentStack: true,
    featured: true,
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Frontend & Backend Development',
    tagline: 'Code & Version Control',
    description: 'Cloud Git repository hosting, code review workflows, CI/CD Actions, and developer team collaboration.',
    websiteUrl: 'https://github.com/',
    officialAssetSource: 'https://github.com/logos',
    localAssetPath: '/images/icons/github.svg',
    status: 'Live',
    isCurrentStack: true,
    featured: true,
  },

  // --- 8. Databases & Authentication ---
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Databases & Authentication',
    tagline: 'Open-Source Firebase Alternative',
    description: 'Postgres database backend featuring row-level security, instant REST & realtime APIs, Auth, and Storage.',
    websiteUrl: 'https://supabase.com/',
    officialAssetSource: 'https://supabase.com/brand-assets',
    localAssetPath: '/images/icons/supabase.svg',
    status: 'Planned',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Databases & Authentication',
    tagline: 'App Development Platform',
    description: 'Google platform offering cloud databases, user authentication, analytics, and managed backend infrastructure.',
    websiteUrl: 'https://firebase.google.com/',
    officialAssetSource: 'https://firebase.google.com/brand-guidelines',
    localAssetPath: '/images/icons/firebase.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: true,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases & Authentication',
    tagline: 'Relational Database',
    description: 'Powerful, open-source object-relational database system known for reliability, feature robustness, and performance.',
    websiteUrl: 'https://www.postgresql.org/',
    officialAssetSource: 'https://www.postgresql.org/about/press/',
    localAssetPath: '/images/icons/postgresql.svg',
    status: 'Planned',
    isCurrentStack: false,
    featured: false,
  },

  // --- 9. Deployment & Infrastructure ---
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Deployment & Infrastructure',
    tagline: 'Frontend Cloud & Edge Deployment',
    description: 'Global cloud platform optimized for deploying Next.js applications, serverless compute, and static caching.',
    websiteUrl: 'https://vercel.com/',
    officialAssetSource: 'https://vercel.com/design/brands',
    localAssetPath: '/images/icons/vercel.svg',
    status: 'Live',
    isCurrentStack: true,
    featured: true,
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'Deployment & Infrastructure',
    tagline: 'Edge Network & Security',
    description: 'Global cloud network offering DDoS protection, web application firewall (WAF), edge workers, and DNS routing.',
    websiteUrl: 'https://www.cloudflare.com/',
    officialAssetSource: 'https://www.cloudflare.com/brand-assets/',
    localAssetPath: '/images/icons/cloudflare.svg',
    status: 'Planned',
    isCurrentStack: false,
    featured: true,
  },

  // --- 10. Analytics & Productivity ---
  {
    id: 'notion',
    name: 'Notion',
    category: 'Analytics & Productivity',
    tagline: 'Knowledge & Project Workspace',
    description: 'All-in-one connected workspace for team documentation, product roadmaps, and client project management.',
    websiteUrl: 'https://www.notion.so/',
    officialAssetSource: 'https://www.notion.so/brand',
    localAssetPath: '/images/icons/notion-v2.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: false,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'Analytics & Productivity',
    tagline: 'Video & Social Platform',
    description: 'Video platform integrations for campaign tracking, embedded content, and digital audience growth.',
    websiteUrl: 'https://www.tiktok.com/',
    officialAssetSource: 'https://www.tiktok.com/',
    localAssetPath: '/images/icons/tiktok.svg',
    status: 'Potential',
    isCurrentStack: false,
    featured: false,
  },
];

// Arlo's Verified Current Stack audited directly from repository & project manifests
export interface IStackCategory {
  category: string;
  technologies: {
    name: string;
    role: string;
    localAssetPath: string | null;
    websiteUrl: string;
    verificationSource: string;
  }[];
}

export const auditedCurrentStack: IStackCategory[] = [
  {
    category: 'Frameworks & Core Architecture',
    technologies: [
      {
        name: 'Next.js 16',
        role: 'Production React Framework with Turbopack & App Router',
        localAssetPath: '/images/icons/nextdotjs.svg',
        websiteUrl: 'https://nextjs.org/',
        verificationSource: 'Audited in package.json (next@16.1.1)',
      },
      {
        name: 'React 19',
        role: 'Component UI Architecture & Concurrent Rendering',
        localAssetPath: '/images/icons/react.svg',
        websiteUrl: 'https://react.dev/',
        verificationSource: 'Audited in package.json (react@19.2.3)',
      },
      {
        name: 'TypeScript',
        role: 'End-to-End Type Safety & Robust Developer Tooling',
        localAssetPath: '/images/icons/typescript.svg',
        websiteUrl: 'https://www.typescriptlang.org/',
        verificationSource: 'Audited in package.json (typescript@5)',
      },
    ],
  },
  {
    category: 'Styling & Design Engineering',
    technologies: [
      {
        name: 'Tailwind CSS v4',
        role: 'Modern Utility-First Design Token System',
        localAssetPath: null, // Clean typographic fallback
        websiteUrl: 'https://tailwindcss.com/',
        verificationSource: 'Audited in package.json (tailwindcss@4)',
      },
      {
        name: 'Figma',
        role: 'UI/UX Design Systems & Design-to-Code Handoff',
        localAssetPath: '/images/icons/figma.svg',
        websiteUrl: 'https://www.figma.com/',
        verificationSource: 'Verified in design workflows & client deliverables',
      },
      {
        name: 'Framer',
        role: 'Interactive Prototyping & Motion Exploration',
        localAssetPath: '/images/icons/framer.svg',
        websiteUrl: 'https://www.framer.com/',
        verificationSource: 'Verified in client showcase workflows',
      },
    ],
  },
  {
    category: 'Commerce & Client Platforms',
    technologies: [
      {
        name: 'Shopify Storefronts',
        role: 'E-commerce Architecture & Digital Storefronts',
        localAssetPath: '/images/icons/shopify.svg',
        websiteUrl: 'https://www.shopify.com/',
        verificationSource: 'Verified in Raveena Sarees client delivery',
      },
      {
        name: 'Gemini AI API',
        role: 'Multimodal AI Integration & Autonomous Reasoning',
        localAssetPath: '/images/icons/googlegemini.svg',
        websiteUrl: 'https://ai.google.dev/',
        verificationSource: 'Verified in Arlo AI product & agent solutions',
      },
    ],
  },
  {
    category: 'Deployment & Version Control',
    technologies: [
      {
        name: 'Vercel Edge Cloud',
        role: 'Edge Routing, Global Static CDN & Continuous Delivery',
        localAssetPath: '/images/icons/vercel.svg',
        websiteUrl: 'https://vercel.com/',
        verificationSource: 'Production deployment configuration',
      },
      {
        name: 'GitHub',
        role: 'Source Code Management, PR Reviews & CI Workflows',
        localAssetPath: '/images/icons/github.svg',
        websiteUrl: 'https://github.com/',
        verificationSource: 'Repository version control architecture',
      },
    ],
  },
];
