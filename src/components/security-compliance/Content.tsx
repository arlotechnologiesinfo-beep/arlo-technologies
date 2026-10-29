'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import { CheckIcon } from '@/icons';
import Link from 'next/link';

type ControlStatus = 'verified' | 'product-dependent' | 'practice' | 'planned';

interface SecuritySection {
  id: string;
  title: string;
  subtitle: string;
  status: ControlStatus;
  statusLabel: string;
  summary: string;
  details: string[];
  note?: string;
}

const statusBadgeClasses: Record<ControlStatus, string> = {
  verified:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
  'product-dependent':
    'bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border-sky-300 dark:border-sky-800',
  practice:
    'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-800',
  planned:
    'bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-300 dark:border-purple-800',
};

const securitySections: SecuritySection[] = [
  {
    id: 'security-by-design',
    title: '1. Security by Design & Architecture',
    subtitle: 'Considering system integrity and attack surfaces before writing code.',
    status: 'practice',
    statusLabel: 'Intended Engineering Practice',
    summary:
      'We treat security as a foundational architectural consideration during initial discovery and technical scoping, rather than an afterthought applied at launch.',
    details: [
      'Scoping & Threat Modeling: Identifying sensitive data flows, integration touchpoints, and potential vulnerability vectors during project architecture phases.',
      'Separation of Concerns: Isolating public client interfaces, application logic, and administrative backends to prevent unauthorized cross-system access.',
      'Surface Minimization: Removing superfluous third-party dependencies, unused API endpoints, and unnecessary background services to maintain a tight security footprint.',
      'Resilient Default Settings: Choosing secure-by-default configurations across cloud hosting, web server headers, and database connections.',
    ],
    note: 'Engineering practices are tailored to the architectural scope and tech stack selected for each custom client engagement or product build.',
  },
  {
    id: 'data-handling',
    title: '2. Data Handling & Data Ownership',
    subtitle: 'Strict minimization and client sovereignty over business assets.',
    status: 'verified',
    statusLabel: 'Verified Implemented Control',
    summary:
      'Arlo Technologies operates under a strict principle of data minimization: we collect and process only the information essential to deliver our services.',
    details: [
      'Client Ownership: Clients retain 100% intellectual property and legal ownership of their customer data, files, and proprietary application assets.',
      'Data Minimization on Web Assets: Our public website captures only minimal inquiry data (name, email, and message context) submitted via protected contact forms.',
      'Tenant & Workspace Segregation: Client datasets and application records are partitioned logically and isolated across separate schemas, databases, or project workspaces.',
      'Purpose-Limited Processing: Data submitted for specific integrations or processing pipelines is never repurposed, resold, or rented to third-party data brokers.',
    ],
    note: 'For operational data collected by our public website (such as cookies and server logs), review our full Privacy Policy.',
  },
  {
    id: 'access-control',
    title: '3. Access Control & Identity Management',
    subtitle: 'Principle of least privilege across systems and environments.',
    status: 'verified',
    statusLabel: 'Verified Implemented Control',
    summary:
      'Internal access to production infrastructure, code repositories, and administrative tools is strictly restricted according to role and verified identity.',
    details: [
      'Principle of Least Privilege (PoLP): Team members and development processes are granted only the minimum permissions necessary to complete their specific responsibilities.',
      'Multi-Factor Authentication (MFA): Mandatory hardware key or TOTP-based MFA enforced across all internal code repositories (GitHub), hosting providers, and cloud management consoles.',
      'Scoped Service Credentials: API keys, webhook secrets, and database credentials are differentiated by environment (development, staging, production) with granular permissions.',
      'Role-Based Application Access (RBAC): When building client solutions, we design and implement granular permission roles (e.g., Administrator, Editor, Viewer) to prevent unauthorized internal actions.',
    ],
    note: 'Client-specific role-based access models and enterprise SSO integrations depend on the chosen product tier or deployment environment.',
  },
  {
    id: 'encryption',
    title: '4. Encryption & Data Transport Standards',
    subtitle: 'Standardized cryptographic protocols across modern networks.',
    status: 'product-dependent',
    statusLabel: 'Product-Dependent Control',
    summary:
      'We utilize modern, industry-standard cryptographic protocols for data in transit and configure managed cloud storage services for encryption at rest.',
    details: [
      'Data in Transit (TLS 1.2 / TLS 1.3): Enforced HTTPS transport encryption across all public web endpoints, APIs, and client portals per modern IETF RFC standards.',
      'Encryption at Rest: For production applications, we leverage underlying enterprise cloud databases and storage tiers (such as AWS KMS, Supabase, Cloudflare, or Google Cloud) supporting AES-256 encryption at rest.',
      'No Proprietary Cryptography: We do not attempt to write custom cryptographic algorithms; we rely exclusively on thoroughly audited, standard cryptographic primitives and libraries.',
      'Transparent E2EE Distinction: We do not claim proprietary End-to-End Encryption (E2EE) for standard collaborative web applications, as messages and records transition through authorized server-side processing queues.',
    ],
    note: 'Specific storage encryption parameters and key management configurations are determined by the client’s cloud host and deployment architecture.',
  },
  {
    id: 'responsible-ai',
    title: '5. Responsible AI & Model Integration',
    subtitle: 'Ethical, bounded AI implementations with zero-training guarantees.',
    status: 'practice',
    statusLabel: 'Intended Engineering Practice',
    summary:
      'When integrating generative AI and automated workflows, we establish strict technical guardrails to protect privacy and prevent unintended data leakage.',
    details: [
      'Commercial Non-Training Agreements: We configure integrations using commercial enterprise API tiers (e.g., OpenAI API, Google Cloud Vertex / Gemini API) with contractual terms stipulating customer inputs and outputs are not used for foundation model training.',
      'Prompt Boundary Defenses: System prompts and conversational workflows are architected with input sanitization and delimiter guards to mitigate prompt injection risks.',
      'Data Flow Scoping: Only the contextual parameters necessary to fulfill an automated query are passed to third-party model inference endpoints.',
      'Human-in-the-Loop Oversight: For high-consequence business actions (such as automated transactions, mass broadcasts, or legal drafting), we design human review and approval gates.',
    ],
    note: 'AI model parameters, data retention windows, and regional processing locations depend on the underlying model provider selected for each implementation.',
  },
  {
    id: 'secure-development',
    title: '6. Secure Development Lifecycle (SDLC)',
    subtitle: 'Automated type checking, code review, and secret isolation.',
    status: 'verified',
    statusLabel: 'Verified Implemented Control',
    summary:
      'Our software engineering workflow enforces automated quality checks, static code analysis, and strict credential hygiene throughout the development cycle.',
    details: [
      'Strict TypeScript Typing: Full compile-time static type checking prevents common runtime exceptions, null-pointer vulnerabilities, and logic flaws.',
      'Automated Linting & Formatting: Consistent code quality and security rule enforcement using ESLint (with Next.js security configurations) and Prettier.',
      'Secret Hygiene & Zero-Commit Policy: Sensitive environment variables, database strings, and API secrets are isolated in protected environment files and never checked into source control or bundled in client-side code.',
      'Dependency Vulnerability Audits: Package dependencies are locked via lockfiles (`package-lock.json`) and monitored for known Common Vulnerabilities and Exposures (CVEs).',
    ],
    note: 'Custom client codebases undergo code reviews prior to staging and production deployments.',
  },
  {
    id: 'third-party',
    title: '7. Third-Party Integrations & Sub-processors',
    subtitle: 'Vetted infrastructure and validated service partnerships.',
    status: 'product-dependent',
    statusLabel: 'Product-Dependent Control',
    summary:
      'We partner with reputable cloud infrastructure, hosting, and developer tooling providers rather than running unverified self-hosted infrastructure.',
    details: [
      'Infrastructure Partners: Our web platforms and application backends are deployed on established providers (such as Vercel, Cloudflare, AWS, and Supabase) that maintain independent SOC 2 Type II and ISO/IEC 27001 certifications.',
      'Webhook Signature Verification: Inbound and outbound webhook integrations (e.g., payment gateways, messaging webhooks) are validated using cryptographic HMAC signatures where supported.',
      'Sub-processor Transparency: Clients are informed of the specific cloud hosting, database, and API providers utilized in their software architecture.',
      'Provider SLA & Continuity: Selecting vendors with proven multi-region redundancy, high availability, and transparent uptime incident reporting.',
    ],
    note: 'The list of third-party sub-processors varies depending on the specific product or custom architecture deployed for your organization.',
  },
  {
    id: 'incident-response',
    title: '8. Incident Response & Vulnerability Disclosure',
    subtitle: 'Structured triage, investigation, and responsible disclosure.',
    status: 'practice',
    statusLabel: 'Intended Engineering Practice',
    summary:
      'We maintain an active internal process for triaging potential software defects, investigating security reports, and communicating transparently.',
    details: [
      'Coordinated Vulnerability Disclosure (CVD): We welcome security researchers, partners, and users to report potential security issues directly via our dedicated disclosure channel.',
      'Triage & Assessment: Technical reports are evaluated promptly by engineering leads to determine severity, affected systems, and mitigation requirements.',
      'Rapid Patch Deployment: Confirmed vulnerabilities in our active codebases are patched, reviewed, and deployed following regression testing.',
      'Transparent Notification: In the event of a verified security incident affecting customer data, we commit to notifying impacted stakeholders without undue delay in accordance with applicable legal requirements.',
    ],
    note: 'To report a vulnerability or technical concern, contact our engineering team via security@arlotechnologies.com or our contact form.',
  },
  {
    id: 'compliance',
    title: '9. Privacy, Compliance & Legal Distinctions',
    subtitle: 'Aligned with regulatory frameworks without exaggerated claims.',
    status: 'planned',
    statusLabel: 'Planned Capability / Roadmap',
    summary:
      'We build architectures that help clients meet regulatory requirements, while maintaining clear boundaries regarding formal corporate certifications.',
    details: [
      'Regulatory Alignment: Engineering workflows and data architectures designed in alignment with the EU General Data Protection Regulation (GDPR) and India’s Digital Personal Data Protection Act (DPDPA 2023).',
      'Honest Certification Disclosure: Arlo Technologies does not currently hold formal corporate SOC 2 Type II or ISO 27001 certifications as an independent entity (our cloud hosting partners do). Independent external audits remain on our enterprise product roadmap.',
      'No Deceptive Badges: We deliberately do not display unearned compliance badges, fake security scores, or exaggerated guarantees of 100% security.',
      'Technical Controls vs. Legal Warranties: Statements on this page describe our engineering practices, controls, and technical architecture; they do not constitute a legal warranty or contractual guarantee.',
    ],
    note: 'For formal contractual data processing agreements (DPAs) or enterprise service level agreements (SLAs), contact our commercial team.',
  },
];

const productSecurityItems = [
  {
    product: 'Sampark AI',
    focus: 'Conversational AI, Messaging & Automation Data Flows',
    badge: 'Messaging Architecture',
    points: [
      'Webhook Authentication: Incoming messaging events (e.g., WhatsApp Cloud API or web chat webhooks) are validated against secret tokens and payload signatures.',
      'Payload Isolation: User inputs and conversation sessions are segregated by client workspace, preventing cross-tenant context leaks.',
      'Ephemeral Processing: Automation workflows are configured to avoid persistent caching of raw customer messages when not required for historical logging.',
      'Provider API Boundaries: Outbound AI model inference calls utilize enterprise endpoints that do not retain input data for model training.',
    ],
  },
  {
    product: 'Samvad',
    focus: 'Real-Time Communication & Messaging Security',
    badge: 'Communication Security',
    points: [
      'Transport Protocol Security: WebSocket and HTTPS communication channels are secured with modern TLS encryption.',
      'Token-Based Session Invalidation: Real-time sessions utilize short-lived authenticated tokens with automatic expiration upon logout or privilege changes.',
      'Tenant Conversation Scoping: Messaging rooms, conversation history, and user directories are strictly scoped to verified workspace memberships.',
      'Rate Limiting & Abuse Prevention: API and WebSocket endpoints incorporate connection and rate limits to defend against connection floods.',
    ],
  },
  {
    product: 'Sandesh',
    focus: 'Email Delivery & Recipient Data Management',
    badge: 'Email & Recipient Privacy',
    points: [
      'Recipient List Segregation: Subscriber databases and campaign recipient lists are partitioned strictly by organization account.',
      'Authentication Standards Support: We assist clients in configuring industry-standard email authentication (SPF, DKIM, and DMARC) on sending domains.',
      'Suppression & Unsubscribe Handling: Native honoring of opt-out requests and suppression lists to maintain compliance with anti-spam regulations (CAN-SPAM, GDPR).',
      'Credential Isolation: SMTP and transactional mail API keys are stored in encrypted environment vaults and restricted to designated sending profiles.',
    ],
  },
  {
    product: 'DocuSafe',
    focus: 'Document Access, Storage & File Management',
    badge: 'Document Integrity',
    points: [
      'Time-Limited Signed URLs: Documents stored in cloud object storage are accessed exclusively via temporary pre-signed URLs, preventing direct public bucket exposure.',
      'Granular Role-Based Permissions: Document operations (upload, preview, download, delete) are verified against user roles before generating access tokens.',
      'Storage-Level Encryption: File attachments and document archives are stored in managed object buckets configured with server-side encryption (AES-256).',
      'Audit Metadata: Document access and update actions are timestamped to maintain an internal operational trail of document lifecycle events.',
    ],
  },
];

const securityFaqs = [
  {
    id: 'faq-1',
    question: 'Does Arlo Technologies have SOC 2 or ISO 27001 certifications?',
    answer:
      'Arlo Technologies does not currently hold independent corporate SOC 2 Type II or ISO/IEC 27001 certifications. However, the foundational cloud infrastructure we deploy on (including Vercel, Supabase, Cloudflare, and AWS) maintains accredited SOC 2 and ISO certifications. Formal independent third-party audits for Arlo Technologies products are part of our planned enterprise roadmap.',
  },
  {
    id: 'faq-2',
    question: 'Who owns our data when we use an Arlo product or custom solution?',
    answer:
      'You retain 100% intellectual property, legal ownership, and commercial control of all customer data, business records, and uploaded assets. Arlo Technologies processes data strictly as a service provider to deliver functionality requested by your organization.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer End-to-End Encryption (E2EE)?',
    answer:
      'We enforce modern Transport Layer Security (TLS 1.2 / TLS 1.3) for all data in transit across public networks, and configure industry-standard encryption at rest (AES-256) on underlying database services. We do not claim proprietary End-to-End Encryption (E2EE) for standard multi-user web applications, because messages and documents must be processed server-side for indexing, business logic, and integrations.',
  },
  {
    id: 'faq-4',
    question: 'Are our prompts or customer data used to train AI models?',
    answer:
      'No. When we implement generative AI solutions (including Sampark AI and custom agent integrations), we utilize commercial enterprise API tiers with contractual commitments confirming that customer prompts and outputs are not used for model training or fine-tuning by foundation model providers.',
  },
  {
    id: 'faq-5',
    question: 'Where is our data physically stored and hosted?',
    answer:
      'Hosting location depends on the project architecture and client configuration. For custom projects and enterprise tiers, clients can select preferred geographical regions (such as EU-West, US-East, or India-Central) via our supported cloud infrastructure partners.',
  },
  {
    id: 'faq-6',
    question: 'Can our organization perform penetration testing on custom applications built by Arlo?',
    answer:
      'Yes. For dedicated custom client applications, we support client-sponsored penetration testing under a mutually agreed testing window, scope, and authorization agreement to prevent disruptions to shared staging services.',
  },
  {
    id: 'faq-7',
    question: 'How do you handle dependency vulnerabilities and third-party software risks?',
    answer:
      'We use strict lockfiles (package-lock.json), automated vulnerability scanning tools, and routine dependency auditing during our continuous development lifecycle to track and patch vulnerable packages before they reach production.',
  },
  {
    id: 'faq-8',
    question: 'How can our security team report a vulnerability or technical concern?',
    answer:
      'We encourage responsible disclosure. Please send a detailed technical summary including reproduction steps to security@arlotechnologies.com or submit an inquiry through our Contact Us page. Our engineering team will review, triage, and acknowledge your report promptly.',
  },
];

const Content = () => {
  return (
    <section className="xl:pb-28 lg:pb-20 pb-16 pt-10 sm:pt-14">
      <div className="main-container">
        <div className="flex items-start lg:flex-row flex-col lg:gap-x-10 gap-y-10 max-w-[1240px] mx-auto w-full">
          {/* Sticky Left Navigation Rail */}
          <aside className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-28 space-y-6">
            <RevealAnimation delay={0.1}>
              <div className="rounded-2xl bg-white dark:bg-background-5 p-5 sm:p-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary/70 dark:text-accent/70">
                  Page Sections
                </h3>
                <nav className="flex flex-col space-y-2 text-sm">
                  <a
                    href="#security-by-design"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    1. Security by Design
                  </a>
                  <a
                    href="#data-handling"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    2. Data Handling &amp; Ownership
                  </a>
                  <a
                    href="#access-control"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    3. Access Control &amp; Identity
                  </a>
                  <a
                    href="#encryption"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    4. Encryption Standards
                  </a>
                  <a
                    href="#responsible-ai"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    5. Responsible AI
                  </a>
                  <a
                    href="#secure-development"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    6. Secure Development (SDLC)
                  </a>
                  <a
                    href="#third-party"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    7. Third-Party Integrations
                  </a>
                  <a
                    href="#incident-response"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    8. Incident Response &amp; CVD
                  </a>
                  <a
                    href="#compliance"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    9. Privacy &amp; Compliance
                  </a>
                  <a
                    href="#product-security"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    10. Product Security Highlights
                  </a>
                  <a
                    href="#security-faqs"
                    className="text-secondary/80 dark:text-accent/80 hover:text-secondary dark:hover:text-accent transition-colors py-1">
                    11. Frequently Asked Questions
                  </a>
                </nav>
              </div>
            </RevealAnimation>

            {/* Classification Guide Card */}
            <RevealAnimation delay={0.15}>
              <div className="rounded-2xl bg-white dark:bg-background-5 p-5 sm:p-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary/70 dark:text-accent/70">
                  Control Status Guide
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-secondary dark:text-accent">Verified Implemented:</strong> Active control
                      verified in production.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-2 rounded-full bg-sky-500 mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-secondary dark:text-accent">Product-Dependent:</strong> Configured per
                      tier, host, or feature.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-2 rounded-full bg-amber-500 mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-secondary dark:text-accent">Engineering Practice:</strong> Standard team
                      workflow and policy.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="size-2 rounded-full bg-purple-500 mt-1 shrink-0"></span>
                    <div>
                      <strong className="text-secondary dark:text-accent">Planned Capability:</strong> On our technical
                      roadmap.
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {/* Quick Policy & Contact Links */}
            <RevealAnimation delay={0.2}>
              <div className="rounded-2xl bg-white dark:bg-background-5 p-5 sm:p-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary/70 dark:text-accent/70">
                  Related Policies
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-secondary dark:text-accent hover:underline flex items-center justify-between">
                      <span>Privacy Policy</span>
                      <span className="text-xs text-secondary/60 dark:text-accent/60">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gdpr"
                      className="text-secondary dark:text-accent hover:underline flex items-center justify-between">
                      <span>GDPR Commitment</span>
                      <span className="text-xs text-secondary/60 dark:text-accent/60">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-conditions"
                      className="text-secondary dark:text-accent hover:underline flex items-center justify-between">
                      <span>Terms &amp; Conditions</span>
                      <span className="text-xs text-secondary/60 dark:text-accent/60">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-secondary dark:text-accent hover:underline flex items-center justify-between">
                      <span>Security Contact</span>
                      <span className="text-xs text-secondary/60 dark:text-accent/60">→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-14 min-w-0">
            {/* Core Sections 1 to 9 */}
            {securitySections.map((section, index) => {
              const delay = 0.1 + (index % 4) * 0.05;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 rounded-2xl bg-white dark:bg-background-5 p-6 sm:p-8 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-5">
                  <RevealAnimation delay={delay}>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stroke-3 dark:border-stroke-7 pb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusBadgeClasses[section.status]}`}>
                        <span className="size-1.5 rounded-full bg-current"></span>
                        {section.statusLabel}
                      </span>
                      <span className="text-xs font-mono text-secondary/60 dark:text-accent/60">
                        Section {index + 1} of 11
                      </span>
                    </div>
                  </RevealAnimation>

                  <RevealAnimation delay={delay + 0.05}>
                    <div className="space-y-1">
                      <h2 className="text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent">
                        {section.title}
                      </h2>
                      <p className="text-secondary/70 dark:text-accent/70 text-base font-medium">
                        {section.subtitle}
                      </p>
                    </div>
                  </RevealAnimation>

                  <RevealAnimation delay={delay + 0.1}>
                    <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base leading-relaxed">
                      {section.summary}
                    </p>
                  </RevealAnimation>

                  <RevealAnimation delay={delay + 0.15}>
                    <ul className="space-y-3 pt-2">
                      {section.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-3">
                          <span className="size-5 rounded-full bg-secondary dark:bg-accent shrink-0 flex items-center justify-center mt-0.5">
                            <CheckIcon className="fill-accent dark:fill-secondary" />
                          </span>
                          <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base leading-relaxed">
                            {detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </RevealAnimation>

                  {section.note && (
                    <RevealAnimation delay={delay + 0.2}>
                      <div className="p-3.5 rounded-xl bg-background-3 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 text-xs sm:text-sm text-secondary/70 dark:text-accent/70">
                        <strong className="text-secondary dark:text-accent font-medium">Clarification: </strong>
                        {section.note}
                      </div>
                    </RevealAnimation>
                  )}
                </section>
              );
            })}

            {/* Section 10: Product-Specific Security Considerations */}
            <section
              id="product-security"
              className="scroll-mt-32 rounded-2xl bg-white dark:bg-background-5 p-6 sm:p-8 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-6">
              <RevealAnimation delay={0.1}>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stroke-3 dark:border-stroke-7 pb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border-sky-300 dark:border-sky-800">
                    <span className="size-1.5 rounded-full bg-sky-500"></span>
                    Product-Dependent Architecture
                  </span>
                  <span className="text-xs font-mono text-secondary/60 dark:text-accent/60">Section 10 of 11</span>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.15}>
                <div className="space-y-2">
                  <h2 className="text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent">
                    10. Product-Specific Security Considerations
                  </h2>
                  <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base leading-relaxed">
                    Security architectures vary by product use-case. Here is how data flow and access control are
                    tailored for our dedicated applications:
                  </p>
                </div>
              </RevealAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {productSecurityItems.map((prod, pIndex) => (
                  <RevealAnimation key={prod.product} delay={0.2 + pIndex * 0.05}>
                    <div className="h-full rounded-xl bg-background-3 dark:bg-background-6 p-5 sm:p-6 border border-stroke-3 dark:border-stroke-7 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-heading-6 font-semibold text-secondary dark:text-accent">
                            {prod.product}
                          </h3>
                          <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent">
                            {prod.badge}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-secondary/70 dark:text-accent/70">
                          {prod.focus}
                        </p>
                        <ul className="space-y-2.5 pt-2">
                          {prod.points.map((pt, ptIndex) => (
                            <li key={ptIndex} className="flex items-start gap-2 text-xs sm:text-sm text-secondary/80 dark:text-accent/80">
                              <span className="size-4 rounded-full bg-secondary dark:bg-accent shrink-0 flex items-center justify-center mt-0.5">
                                <CheckIcon className="fill-accent dark:fill-secondary scale-75" />
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </section>

            {/* Section 11: Security & Compliance FAQs */}
            <section
              id="security-faqs"
              className="scroll-mt-32 rounded-2xl bg-white dark:bg-background-5 p-6 sm:p-8 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-6">
              <RevealAnimation delay={0.1}>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stroke-3 dark:border-stroke-7 pb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-800">
                    <span className="size-1.5 rounded-full bg-amber-500"></span>
                    Verified Clarity &amp; Transparency
                  </span>
                  <span className="text-xs font-mono text-secondary/60 dark:text-accent/60">Section 11 of 11</span>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.15}>
                <div className="space-y-2">
                  <h2 className="text-heading-5 sm:text-heading-4 font-normal text-secondary dark:text-accent">
                    11. Frequently Asked Questions
                  </h2>
                  <p className="text-secondary/80 dark:text-accent/80 text-sm sm:text-base leading-relaxed">
                    Direct answers to the most common questions our clients and security teams ask about our
                    standards, data handling, and certifications.
                  </p>
                </div>
              </RevealAnimation>

              <div className="pt-2">
                <Accordion defaultValue="faq-1" className="space-y-4">
                  {securityFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="rounded-xl bg-background-3 dark:bg-background-6 p-5 border border-stroke-3 dark:border-stroke-7">
                      <AccordionTrigger
                        value={faq.id}
                        className="flex items-center justify-between w-full text-heading-6 font-normal text-left text-secondary dark:text-accent cursor-pointer">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        value={faq.id}
                        className="text-secondary/70 dark:text-accent/70 pt-3 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Final Call to Action */}
            <section
              id="contact"
              className="scroll-mt-32 rounded-2xl bg-secondary dark:bg-background-8 text-white p-6 sm:p-10 border border-stroke-3 dark:border-stroke-7 shadow-md space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan !normal-case">Security Engagement</span>
              </RevealAnimation>
              <RevealAnimation delay={0.15}>
                <h3 className="text-heading-5 sm:text-heading-4 font-normal text-white">
                  Have Specific Security Requirements or Questions?
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-[700px]">
                  Whether you are planning an enterprise deployment, assessing third-party risk, or need a technical
                  walkthrough of our architecture for your compliance review, our engineering team is here to support
                  you with clear, transparent answers.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.25}>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-pair-left btn-md w-full sm:w-auto">
                    Contact Our Engineering Team
                  </LinkButton>
                  <LinkButton
                    href="/privacy-policy"
                    className="btn btn-pair-right btn-md w-full sm:w-auto">
                    Review Privacy Policy
                  </LinkButton>
                </div>
              </RevealAnimation>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
