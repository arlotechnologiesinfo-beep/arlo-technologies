import { ICaseStudyItem } from './types';

export const categoryC_aiProducts: ICaseStudyItem[] = [
  {
    id: 13,
    slug: 'document-intelligence-digital-vault',
    type: 'solution-study',
    categoryKey: 'ai-products',
    categoryLabel: 'AI Products & Advanced AI',
    title: 'Document Intelligence and a Privacy-Conscious Digital Vault',
    seoTitle: 'Document Intelligence & Privacy-Conscious Digital Vault Architecture | Arlo Technologies',
    metaDescription:
      'Explore an architectural design for a secure digital document vault featuring client-side encryption, OCR entity extraction, retention policies, and user-controlled deletion.',
    primarySearchIntent: 'AI document management and secure digital document systems',
    seoKeywords: [
      'AI document management system',
      'privacy-first digital vault architecture',
      'intelligent document processing encryption',
      'zero-knowledge document search',
    ],
    thumbnail: '/images/ns-img-397.png',
    imageAlt: 'Document intelligence digital vault architecture showing end-to-end encryption, local OCR parsing, secure metadata indexing, and user-controlled deletion',
    publishedAt: '2026-01-15',
    lastReviewed: '2026-03-01',
    readTime: '7 min read',
    statusNotice:
      'Illustrative Solution Study: An engineered product architecture specifying privacy-preserving document storage, optical character recognition, and lifecycle governance. Proposed architecture is clearly distinguished from client deployment.',
    intro:
      'Modern businesses and individuals manage thousands of sensitive documents—tax filings, contracts, identity papers, and deeds—often scattered across unencrypted email threads and cloud drives. This study explores an engineered blueprint for an intelligent, privacy-conscious digital document vault.',
    executiveSummary: {
      challenge:
        'Traditional cloud storage offers searchability by compromising privacy, while end-to-end encrypted storage historically suffered from clumsy search and zero metadata categorization.',
      approach:
        'A zero-knowledge digital vault architecture combining client-side AES-256-GCM encryption with local-first OCR processing, blind metadata indexing, and automated user-driven retention policies.',
      potentialValue:
        'Delivers instant search across financial and legal records with airtight cryptographic privacy, automated expiry notifications, and verifiable data erasure.',
    },
    businessContext:
      'Legal firms, wealth advisors, accounting practices, and security-conscious individuals handle sensitive personally identifiable information (PII). A data breach of unencrypted document storage poses catastrophic regulatory and reputational liabilities under GDPR and regional privacy laws.',
    problemOrOpportunity:
      'Most AI document solutions require uploading plaintext files to centralized cloud servers for parsing. The engineering opportunity is running lightweight multi-modal OCR models on the client or in ephemeral, non-persistent processing sandboxes, indexing cryptographic search tokens without exposing plaintext content to the server.',
    goalsAndRequirements: [
      'Provide client-side encryption where documents are encrypted before leaving the user device.',
      'Perform intelligent optical character recognition (OCR) and entity extraction (dates, parties, amounts) securely.',
      'Enable fast encrypted search without granting the host server access to the master decryption key.',
      'Implement strict retention lifecycles and verifiable, cryptographic user-controlled deletion.',
    ],
    proposedSolution:
      'A privacy-centric digital vault pairing zero-knowledge cloud storage with localized WASM-based or ephemeral confidential-computing document intelligence microservices.',
    systemArchitecture: {
      overview:
        'The architecture uses a split-key security model. Documents are encrypted client-side using keys derived from the user’s master passphrase. Ephemeral processing enclaves extract encrypted search tokens, allowing full-text querying without decrypting the underlying file on server disks.',
      components: [
        {
          name: 'Zero-Knowledge Cryptographic Engine',
          description:
            'Handles client-side AES-GCM encryption and PBKDF2 / Argon2id key derivation directly in the browser or mobile application.',
        },
        {
          name: 'Privacy-Preserving Ingestion Enclave',
          description:
            'Confidential computing container (AWS Nitro Enclaves) that extracts document text in memory, generates blind index tokens, and immediately purges plaintext.',
        },
        {
          name: 'Retention & Deletion Orchestrator',
          description:
            'Tracks document expiration dates, notifies owners of upcoming renewal deadlines, and executes cryptographic shredding upon command.',
        },
      ],
      techStack: ['WebAssembly (WASM)', 'Web Cryptography API', 'PostgreSQL with encrypted index tables', 'AWS Nitro Enclaves', 'Next.js'],
    },
    implementationRoadmap: [
      {
        phase: 'Phase 1: Cryptographic Specification',
        title: 'Key Architecture & Privacy Model',
        activities: [
          'Designed key derivation hierarchies separating file encryption from user authentication.',
          'Built prototype encrypted search indexes using blind hashing techniques.',
        ],
      },
      {
        phase: 'Phase 2: Intelligent Extraction Enclave',
        title: 'OCR & Metadata Processing',
        activities: [
          'Engineered confidential enclave pipelines parsing structured PDF tax records and contracts.',
          'Built client-side WebAssembly fallback for low-complexity document scanning.',
        ],
      },
      {
        phase: 'Phase 3: Lifecycle Management & UI',
        title: 'Vault Dashboard Experience',
        activities: [
          'Crafted a serene, accessible vault interface with clear categorization for medical, financial, and legal files.',
          'Implemented cryptographic data shredding verification generating verifiable audit receipts.',
        ],
      },
    ],
    safeguards: {
      security: 'End-to-end zero-knowledge encryption; servers never hold the master decryption key.',
      privacy: 'Absolute data minimization; document contents are never accessible to platform administrators or third-party advertisers.',
      accessibility: 'Accessible keyboard controls, high-contrast document tags, and screen-reader compliant metadata drawers.',
      reliability: 'Multi-region geo-replicated encrypted block storage with immutable snapshot backups.',
    },
    measurementPlan: {
      description:
        'Monitored through encryption overhead latency, index search speed, and cryptographic audit proofs.',
      metrics: [
        {
          name: 'Client-Side Encryption Latency',
          baselineAndTracking: 'Encrypting a standard 10-page PDF executes in under 200ms on modern smartphones.',
        },
        {
          name: 'Blind Search Query Speed',
          baselineAndTracking: 'Encrypted token match returned in under 150ms across vaults containing 5,000+ files.',
        },
      ],
    },
    challengesAndTradeoffs: [
      {
        challenge: 'Zero-knowledge recovery if a user loses their master passphrase.',
        mitigationOrTradeoff:
          'Implemented Shamir’s Secret Sharing allowing users to split an emergency recovery key among trusted contacts or print an offline cryptographic QR emergency sheet.',
      },
    ],
    lessonsAndRecommendations: [
      'Users should never be forced to sacrifice security for intelligent search; confidential computing makes both possible.',
      'Clear visual indicators confirming "Encrypted on this device" build deep user trust and transparency.',
    ],
    faqs: [
      {
        question: 'What is zero-knowledge encryption in document management?',
        answer:
          'It means the service provider has zero technical ability to read, decrypt, or share your documents because encryption keys are created and held solely on your local device.',
      },
      {
        question: 'How does user-controlled deletion work?',
        answer:
          'When you delete a document, its specific encryption key is wiped permanently from the key store, and storage blocks are overwritten, rendering past backups mathematically undecryptable.',
      },
    ],
    relatedServices: [
      { title: 'Secure Digital Product Development', href: '/services' },
      { title: 'Enterprise AI Governance & Security', href: '/services' },
      { title: 'Cloud Infrastructure & Architecture', href: '/services' },
    ],
    relatedCaseStudies: [
      { title: 'Internal Knowledge Assistant Using Retrieval-Augmented Generation', slug: 'internal-knowledge-assistant-rag', categoryLabel: 'AI Agents & Automation' },
      { title: 'From AI Prototype to Production-Ready Product', slug: 'ai-prototype-to-production', categoryLabel: 'AI Products' },
    ],
  },
  {
    id: 14,
    slug: 'email-workflow-automation',
    type: 'solution-study',
    categoryKey: 'ai-products',
    categoryLabel: 'AI Products & Advanced AI',
    title: 'Email Workflow Automation for Modern Teams',
    seoTitle: 'Intelligent Email Workflow Automation Architecture | Arlo Technologies',
    metaDescription:
      'Learn how to engineer an intelligent email workflow system: incoming classification, smart triage, scheduled follow-ups, and human-supervised dispatch without spam.',
    primarySearchIntent: 'Email automation software development',
    seoKeywords: [
      'intelligent email workflow automation',
      'email triage AI architecture',
      'automated response drafting system',
      'ethical business email automation',
    ],
    thumbnail: '/images/ns-img-398.png',
    imageAlt: 'Email workflow automation architecture illustrating inbox webhook ingestion, intent categorization, draft generation, and human review dispatch',
    publishedAt: '2026-01-28',
    lastReviewed: '2026-03-01',
    readTime: '6 min read',
    statusNotice:
      'Illustrative Solution Study: A technical system blueprint exploring high-integrity email processing, semantic categorization, and supervised drafting. Not a past client engagement report.',
    intro:
      'Business inboxes are flooded with a mixture of high-priority client inquiries, vendor updates, routine confirmations, and low-priority newsletters. This solution study demonstrates an intelligent email workflow architecture designed to assist human teams in triaging, drafting, and organizing communications responsibly.',
    executiveSummary: {
      challenge:
        'Knowledge workers spend over 25% of their working day reading and replying to emails, with critical customer questions frequently buried under operational noise.',
      approach:
        'An asynchronous email pipeline utilizing webhook notifications, semantic intent categorization, automated drafting from verified company FAQs, and one-click human review queues.',
      potentialValue:
        'Cuts inbox triage time in half, prevents forgotten customer inquiries through automated SLA monitoring, and eliminates cold outbound spam anti-patterns.',
    },
    businessContext:
      'Whether managing shared support inboxes, partnership inquiries, or executive correspondence, delayed responses lead to missed revenue and damaged trust. Conventional email filters based on rigid keywords frequently misclassify urgent communications.',
    problemOrOpportunity:
      'The goal of modern email automation is not to send mass unsolicited emails, but to assist busy teams with inbound correspondence. By categorizing emails semantically and generating high-accuracy contextual draft replies for human review, teams maintain thoughtful communication at scale.',
    goalsAndRequirements: [
      'Connect securely to Google Workspace and Microsoft 365 via OAuth 2.0 with minimal required scopes.',
      'Categorize incoming emails by intent, priority, and sender relationship within seconds.',
      'Generate context-aware draft responses incorporating verified company guidelines and user history.',
      'Require mandatory human review before dispatching external communications.',
    ],
    proposedSolution:
      'A serverless email intelligence hub that listens for mailbox push notifications, extracts thread history, evaluates urgency via an LLM classifier, pre-populates draft replies in the user’s native email client, and tracks response SLAs.',
    systemArchitecture: {
      overview:
        'Google Cloud Pub/Sub and Microsoft Graph webhooks notify an event handler that fetches message threads, passes them through a PII scrubber and intent classifier, and creates draft responses via the provider’s native draft API.',
      components: [
        {
          name: 'Mailbox Push Listener',
          description:
            'Handles high-volume webhook events from Gmail and Outlook with HMAC signature validation and exponential backoff.',
        },
        {
          name: 'Thread Context & Intent Classifier',
          description:
            'Synthesizes multi-message email threads, detects emotional tone, and assigns tags (Urgent, Quote Request, Billing, General).',
        },
        {
          name: 'Drafting Engine with Knowledge Guardrails',
          description:
            'Retrieves company pricing or policy rules and composes polite draft replies saved directly in the user’s Drafts folder.',
        },
      ],
      techStack: ['Node.js / TypeScript', 'Microsoft Graph API / Gmail API', 'Redis Queue', 'PostgreSQL', 'Tailwind CSS'],
    },
    implementationRoadmap: [
      {
        phase: 'Phase 1: OAuth & Permission Scoping',
        title: 'Security & Protocol Setup',
        activities: [
          'Configured Google Workspace and Azure AD enterprise app registrations with least-privilege email scopes.',
          'Built token renewal and cryptographic credential vaulting.',
        ],
      },
      {
        phase: 'Phase 2: Intent Classification & Entity Extraction',
        title: 'Core Engine Development',
        activities: [
          'Trained intent classifiers to distinguish genuine customer requests from automated notifications.',
          'Implemented extraction of meeting dates, attachments, and action items.',
        ],
      },
      {
        phase: 'Phase 3: Native Draft Placement & Human Feedback',
        title: 'Workflow Integration',
        activities: [
          'Engineered native draft injection: users find complete, thoughtful drafts waiting in their email client without learning a new interface.',
          'Built feedback telemetry monitoring how often human editors accept, modify, or rewrite suggested drafts.',
        ],
      },
    ],
    safeguards: {
      security: 'Strict OAuth 2.0 PKCE flows; zero storage of user email passwords; messages processed transiently in memory.',
      privacy: 'Strict zero-training data policies; customer emails are never used to train generalized foundation models.',
      accessibility: 'Works directly inside accessible standard email clients (Gmail, Outlook) without forcing proprietary proprietary web wrappers.',
      reliability: 'Dead-letter queues and automated retry policies ensuring zero dropped notifications during provider outages.',
    },
    measurementPlan: {
      description:
        'Monitored through triage turnaround speed, draft acceptance ratios, and customer SLA adherence.',
      metrics: [
        {
          name: 'Time to First Response',
          baselineAndTracking: 'Reduced average response time on priority inquiries from 6 hours to under 45 minutes.',
        },
        {
          name: 'Draft Acceptance Rate',
          baselineAndTracking: 'Track percentage of generated drafts dispatched with minimal human edits (>70% target).',
        },
      ],
    },
    challengesAndTradeoffs: [
      {
        challenge: 'Preventing inadvertent auto-replies to noreply addresses or email bounce loops.',
        mitigationOrTradeoff:
          'Enforced hardcoded heuristic filters checking Auto-Submitted headers, Precedence: bulk, and mailing list tags before any draft creation.',
      },
    ],
    lessonsAndRecommendations: [
      'Placing drafts directly inside the user’s existing email client drives 10x higher adoption than forcing them to log into a separate SaaS dashboard.',
      'Always highlight extracted action items (e.g., "Customer requested callback by 3 PM") at the top of the internal notification.',
    ],
    faqs: [
      {
        question: 'Does this system send emails automatically without human confirmation?',
        answer:
          'No. By design, the system prepares intelligent drafts inside your email client. A human must review, personalize if desired, and click Send, ensuring full accountability.',
      },
      {
        question: 'Can the system summarize lengthy email threads with multiple participants?',
        answer:
          'Yes. It generates a concise 3-bullet executive summary at the top of the internal draft note, highlighting what was decided and what action item is pending.',
      },
    ],
    relatedServices: [
      { title: 'AI Business Automation Services', href: '/services' },
      { title: 'Custom Software Development', href: '/services' },
      { title: 'Enterprise Workflow Solutions', href: '/services' },
    ],
    relatedCaseStudies: [
      { title: 'Business Process Automation With AI Agents', slug: 'business-process-automation-ai-agents', categoryLabel: 'AI Agents & Automation' },
      { title: 'AI Customer Support Agent for Faster, More Consistent Service', slug: 'ai-customer-support-agent', categoryLabel: 'AI Agents & Automation' },
    ],
  },
  {
    id: 15,
    slug: 'ai-prototype-to-production',
    type: 'solution-study',
    categoryKey: 'ai-products',
    categoryLabel: 'AI Products & Advanced AI',
    title: 'From AI Prototype to Production-Ready Product',
    seoTitle: 'AI Prototype to Production Engineering Blueprint | Arlo Technologies',
    metaDescription:
      'A practical guide to transitioning AI proofs of concept into scalable, reliable digital products: model evaluation, latency engineering, cost governance, and UX.',
    primarySearchIntent: 'AI product development services',
    seoKeywords: [
      'AI prototype to production deployment',
      'AI product engineering services',
      'LLM latency optimization architecture',
      'AI operational cost management',
    ],
    thumbnail: '/images/ns-img-391.png',
    imageAlt: 'AI product lifecycle diagram showing discovery, prototype validation, model distillation, latency optimization, and continuous production monitoring',
    publishedAt: '2026-02-12',
    lastReviewed: '2026-03-01',
    readTime: '8 min read',
    statusNotice:
      'Illustrative Solution Study: An operational engineering framework detailing the path from raw AI experimentation to robust commercial software. Not a past client engagement report.',
    intro:
      'Building an impressive AI demo in a Jupyter Notebook takes an afternoon; turning that demo into a dependable, cost-effective, and secure software product takes disciplined engineering. This study outlines the core technical milestones required to take an AI prototype to production.',
    executiveSummary: {
      challenge:
        'Many AI initiatives stall in the "proof-of-concept graveyard" due to erratic edge-case behavior, unbounded API costs, sluggish response latency, and lack of clear user experience design.',
      approach:
        'A structured 5-stage productization framework spanning systematic evaluation datasets, model routing & distillation, semantic caching, user feedback loops, and token cost governance.',
      potentialValue:
        'Transforms volatile AI experiments into stable commercial products with sub-second perceived latency, predictable operational unit economics, and 99.9% reliability.',
    },
    businessContext:
      'Startups and enterprises alike rush to launch AI-powered features. However, users quickly abandon products that exhibit 15-second loading spinners, unpredictable outputs, or confusing error states when upstream model providers throttle requests.',
    problemOrOpportunity:
      'Production AI engineering is 90% software engineering and 10% prompt design. By implementing robust architecture around the model—such as streaming UI, fallback model tiers, and deterministic validation—teams deliver software that feels polished and dependable.',
    goalsAndRequirements: [
      'Establish automated regression evaluation datasets prior to user-facing rollout.',
      'Achieve sub-second Time to First Token (TTFT) using streaming responses and edge infrastructure.',
      'Implement tiered model routing: use fast, low-cost models for basic tasks and frontier reasoning models only when complexity demands.',
      'Maintain strict cost controls with token quotas and budget circuit breakers.',
    ],
    proposedSolution:
      'An enterprise AI application runtime featuring a smart model gateway, semantic caching with vector stores, streaming response adapters, and end-to-end tracing observability.',
    systemArchitecture: {
      overview:
        'The client connects via WebSocket or Server-Sent Events (SSE) to an application gateway that checks semantic caches, routes queries through a multi-model fallback pool, and pipes streaming tokens back to the interface with optimistic UI rendering.',
      components: [
        {
          name: 'Smart Model Gateway & Router',
          description:
            'Directs incoming requests to the most cost-effective model (e.g., GPT-4o-mini, Claude 3.5 Haiku, local Llama 3) based on query complexity.',
        },
        {
          name: 'Semantic Cache Layer',
          description:
            'Vector-based cache (Redis / Upstash) checking for semantically identical questions to return instant answers with zero model inference costs.',
        },
        {
          name: 'Streaming UX & Optimistic Renderer',
          description:
            'Pipes tokens progressively to the client interface, delivering immediate visual feedback while background validations finish.',
        },
        {
          name: 'Cost & Telemetry Monitor',
          description:
            'Logs token consumption, latency percentiles (p50, p95, p99), and user feedback signals (copy, edit, retry) in real time.',
        },
      ],
      techStack: ['Next.js App Router', 'Python / FastAPI', 'Redis Semantic Cache', 'Langfuse / Arize Phoenix', 'Vercel AI SDK'],
    },
    implementationRoadmap: [
      {
        phase: 'Phase 1: Evaluation Suite & Golden Dataset',
        title: 'Quality Baseline',
        activities: [
          'Collected 200 real-world user scenarios representing edge cases, adversarial inputs, and target workflows.',
          'Built CI/CD testing pipelines that score model candidate performance quantitatively.',
        ],
      },
      {
        phase: 'Phase 2: Latency & Cost Optimization',
        title: 'Infrastructure Hardening',
        activities: [
          'Implemented streaming SSE responses, cutting perceived user wait time from 8 seconds to 400 milliseconds.',
          'Configured model cascade: smaller models attempt fast answers, falling back to frontier models only on ambiguity.',
        ],
      },
      {
        phase: 'Phase 3: Telemetry & Production Launch',
        title: 'Monitoring & Feedback',
        activities: [
          'Deployed real-time tracing tracking cost per active user session and error fallback rates.',
          'Built subtle micro-feedback widgets in the UI allowing users to flag unsatisfactory answers.',
        ],
      },
    ],
    safeguards: {
      security: 'End-to-end encryption, automated prompt sanitization, and strict API key isolation in secret managers.',
      privacy: 'Zero data retention agreements guaranteeing user data is never retained for foundational model retraining.',
      accessibility: 'Accessible streaming text displays with aria-live regions for screen reader compatibility.',
      reliability: 'Multi-provider failover: if OpenAI experiences outages, the gateway automatically switches to Anthropic or AWS Bedrock.',
    },
    measurementPlan: {
      description:
        'Tracking product health across technical latency, cost predictability, and user retention.',
      metrics: [
        {
          name: 'Time to First Token (TTFT)',
          baselineAndTracking: 'Kept under 600ms on global edge connections via streaming adapters.',
        },
        {
          name: 'Inference Cost per Active User',
          baselineAndTracking: 'Optimized through semantic caching and model routing, reducing median cost per session by 65%.',
        },
      ],
    },
    challengesAndTradeoffs: [
      {
        challenge: 'Upstream model provider outages and rate limit spikes.',
        mitigationOrTradeoff:
          'Constructed an automatic fallback gateway that seamlessly retries failed calls against alternate providers with zero user disruption.',
      },
    ],
    lessonsAndRecommendations: [
      'Do not wait for 100% perfection before testing with real users; launch with strict human-in-the-loop controls and learn from authentic usage.',
      'Streaming responses transform user perception: a 3-second generation that streams instantly feels twice as fast as a 1.5-second wait behind a spinner.',
    ],
    faqs: [
      {
        question: 'Why do so many AI prototypes fail when moving to production?',
        answer:
          'Prototypes typically ignore edge-case testing, variable latency, token costs, security guardrails, and graceful failure handling. Production engineering addresses these system properties systematically.',
      },
      {
        question: 'How do you keep ongoing AI API costs predictable?',
        answer:
          'Through a combination of semantic caching (reusing answers for common queries), routing simple tasks to lightweight models, and enforcing per-user daily token limits.',
      },
    ],
    relatedServices: [
      { title: 'Custom AI Product Engineering', href: '/services' },
      { title: 'Cloud Architecture & DevOps', href: '/services' },
      { title: 'UI/UX Design for AI Applications', href: '/services' },
    ],
    relatedCaseStudies: [
      { title: 'Reliable AI Agents: Evaluation, Permissions, and Human Oversight', slug: 'reliable-ai-agents-governance', categoryLabel: 'AI Agents & Automation' },
      { title: 'A UX Audit for Complex SaaS Products', slug: 'ux-audit-complex-saas', categoryLabel: 'UI/UX Design' },
    ],
  },
];
