'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import { useState } from 'react';

// 14 Features data
const featuresList = [
  {
    num: '01',
    title: 'Encrypted Document Vault',
    tag: 'Core Security',
    desc: 'Keep important documents organized in a protected local storage environment.',
    bullets: [
      'AES-256-GCM authenticated document encryption.',
      'SQLCipher encrypted database storage.',
      'Android Keystore-backed cryptographic key protection.',
      'Organized document categories with fast retrieval.',
      '100% local document lifecycle management.',
    ],
  },
  {
    num: '02',
    title: 'PIN and Biometric Protection',
    tag: 'Authentication',
    desc: 'Protect access to your document vault with multi-tier hardware authentication.',
    bullets: [
      'Configurable master PIN authentication.',
      'Supported Android biometric authentication (fingerprint & face unlock).',
      'Cryptographically salted PBKDF2 PIN verification.',
      'Progressive lockout mechanisms against brute-force attacks.',
      'Additional vault protection for high-sensitivity folders.',
    ],
  },
  {
    num: '03',
    title: 'Intelligent Document Management',
    tag: 'Organization',
    desc: 'Organize and locate documents effortlessly without manually browsing through folders.',
    bullets: [
      'Smart categorization for personal, financial, and family records.',
      'OCR-powered on-device text recognition.',
      'Full-text search (FTS) across document contents and titles.',
      'Custom metadata, labels, tags, and descriptive notes.',
      'Proactive expiry date tracking and sorting.',
    ],
  },
  {
    num: '04',
    title: 'Aadhaar Number Masking',
    tag: 'India Privacy',
    desc: 'Protect sensitive Aadhaar information when preparing documents for sharing.',
    bullets: [
      'On-device text recognition to detect 12-digit Aadhaar patterns.',
      'Mask the first 8 digits (leaving only the last 4 digits visible).',
      'Compliant with UIDAI recommendations for masked Aadhaar copies.',
      'Zero cloud transmission — runs purely on your phone’s CPU/NPU.',
    ],
  },
  {
    num: '05',
    title: 'Protected PDF Export',
    tag: 'Secure Sharing',
    desc: 'Prepare protected PDF copies of your documents whenever sharing is required.',
    bullets: [
      'Password-protected encrypted PDF exports.',
      'Optional custom watermarking (e.g. "For KYC Verification Only").',
      'User-controlled document exports with instant cleanup options.',
      'Strictly local PDF processing and assembly.',
    ],
  },
  {
    num: '06',
    title: 'Vehicle Glovebox',
    tag: 'Mobility & Travel',
    desc: 'Keep all vehicle-related documents organized and accessible in one dedicated place.',
    bullets: [
      'Registration Certificate (RC) management.',
      'Driving Licence (DL) storage and alerts.',
      'Vehicle Insurance policy copies and numbers.',
      'Pollution Under Control (PUC) certificate records.',
      'Integrated expiry and renewal deadline tracking.',
    ],
  },
  {
    num: '07',
    title: 'Family Profiles',
    tag: 'Multi-Member',
    desc: 'Organize documents for different members of your family in structured spaces.',
    bullets: [
      'Maintain separate profiles for parents, spouse, children, and dependents.',
      'Keep personal documents neatly categorized per individual.',
      'Quick profile switching within your secure master vault.',
      'All profiles stay safely within your local device database.',
    ],
  },
  {
    num: '08',
    title: 'Emergency ICE Card',
    tag: 'Safety First',
    desc: 'Make vital emergency health and contact information accessible when seconds count.',
    bullets: [
      'Primary and secondary emergency contact details.',
      'Relevant medical history and allergy notes.',
      'Blood group information, if provided.',
      'Quick-access emergency notes designed for first responders.',
    ],
  },
  {
    num: '09',
    title: 'Expiry Reminders',
    tag: 'Timely Alerts',
    desc: 'Stay informed about important renewal dates before your documents expire.',
    bullets: [
      'Locally scheduled reminders for Driving Licences, Passports, and Insurance.',
      'Customizable advance notification alerts (e.g. 30 days, 7 days before).',
      'Operates completely offline without requiring any push notification server.',
      'Clear status badges: Valid, Expiring Soon, and Expired.',
    ],
  },
  {
    num: '10',
    title: 'Beam – Nearby Sharing',
    tag: 'Local Transfer',
    desc: 'Share selected documents directly between compatible nearby devices.',
    bullets: [
      'Uses supported local Bluetooth and Wi-Fi Direct protocols.',
      'Direct peer-to-peer device transfer without intermediate cloud hops.',
      'No cloud document storage or server relay involved.',
      'Full sender and receiver approval required for every transmission.',
    ],
  },
  {
    num: '11',
    title: 'Decoy Vault',
    tag: 'Duress Defense',
    desc: 'Maintain a separate decoy vault with independent storage as an additional privacy layer.',
    bullets: [
      'Secondary PIN that opens a convincing, non-sensitive decoy space.',
      'Completely independent storage and database partitions.',
      'Protects your real document repository under coercion or duress.',
      'No digital footprint or indicator that a primary vault exists.',
    ],
  },
  {
    num: '12',
    title: 'Secure Document Deletion',
    tag: 'Data Sovereignty',
    desc: 'Remove documents you no longer need using the application’s deletion functionality.',
    bullets: [
      'Instant removal of document files from local encrypted storage.',
      'Purging of metadata and OCR full-text search indexes.',
      'No "trash bin" or shadow cloud backups retaining deleted documents.',
      'You maintain unilateral control over when data is destroyed.',
    ],
  },
  {
    num: '13',
    title: 'Home Screen Widgets',
    tag: 'Android Native',
    desc: 'Access supported Sanraksha shortcuts and vault status directly from your home screen.',
    bullets: [
      'Quick scan shortcut for rapid physical document capture.',
      'Glovebox shortcut for instant traffic police verification.',
      'Expiry overview widget highlighting upcoming deadlines.',
      'All widgets require biometric/PIN authentication to expose data.',
    ],
  },
  {
    num: '14',
    title: 'Vault Insights',
    tag: 'Analytics (Local)',
    desc: 'View useful on-device information about your collection, categories, and health.',
    bullets: [
      'Document breakdown by category and family member.',
      'Audit of missing metadata or upcoming expiries.',
      'Storage footprint and encrypted vault volume statistics.',
      '100% computed on-device with zero telemetry sent to servers.',
    ],
  },
];

// Document categories
const categoriesData = [
  {
    title: 'Identity',
    icon: '🪪',
    items: ['Aadhaar Card', 'PAN Card', 'Voter ID', 'Passport', 'Driving Licence'],
  },
  {
    title: 'Banking & Finance',
    icon: '💳',
    items: ['Bank-related documents', 'Financial records', 'Account-related documents', 'Tax filings (ITR)'],
  },
  {
    title: 'Vehicle Glovebox',
    icon: '🚗',
    items: ['Registration Certificate (RC)', 'Vehicle Insurance', 'Pollution Certificate (PUC)', 'Driving Licence'],
  },
  {
    title: 'Education',
    icon: '🎓',
    items: ['Educational Certificates', 'Academic Records', 'Degree / Diplomas', 'Mark Sheets'],
  },
  {
    title: 'Health & Medical',
    icon: '🏥',
    items: ['Health Insurance', 'Medical Records', 'Prescriptions', 'Emergency Information (ICE)'],
  },
  {
    title: 'Work & Personal',
    icon: '💼',
    items: ['Employment Documents', 'Offer Letters & Payslips', 'Professional Certificates', 'Personal Records'],
  },
];

// 10 FAQs
const faqs = [
  {
    q: '1. What is Sanraksha?',
    a: 'Sanraksha is an offline-first Android document management application developed by Arlo Technologies. It helps users securely store, organize, and manage personal and family documents locally on their devices with military-grade encryption.',
  },
  {
    q: '2. Does Sanraksha upload my documents to the cloud?',
    a: 'No. Sanraksha is architected without cloud-based document storage. Documents and database records are stored exclusively in the application’s local encrypted storage on your phone.',
  },
  {
    q: '3. Does the application require registration?',
    a: 'No. Sanraksha does not require you to create an account, register an email address, or sign in with a phone number. You set up your local master PIN and start using the vault immediately.',
  },
  {
    q: '4. Can I use Sanraksha without the internet?',
    a: 'Yes. The application is completely offline by design. Sanraksha’s Android manifest is configured without the INTERNET permission, ensuring the app cannot make outbound network requests.',
  },
  {
    q: '5. Can I store Aadhaar and PAN cards?',
    a: 'Yes. You can scan or import and organize your identity documents within your personal vault. Sanraksha also includes an intelligent Aadhaar masking tool to hide the first 8 digits before sharing. Note that Sanraksha is an independent application and is not affiliated with UIDAI or any government authority.',
  },
  {
    q: '6. Can I protect documents with a password when exporting?',
    a: 'Yes. Sanraksha supports exporting documents as password-protected PDFs with optional custom watermarks (e.g., "For KYC Verification Only") so you can share copies securely.',
  },
  {
    q: '7. Can I manage vehicle documents?',
    a: 'Yes. Sanraksha includes a dedicated Vehicle Glovebox to store and track your Registration Certificate (RC), Driving Licence, Insurance policies, and Pollution Under Control (PUC) certificates, along with expiry reminders.',
  },
  {
    q: '8. Can I manage family documents?',
    a: 'Yes. With Family Profiles, you can create separate, structured spaces for different family members (e.g. spouse, children, parents) within your single master vault.',
  },
  {
    q: '9. Can I share documents with other devices?',
    a: 'Yes. You can export password-protected PDFs or use Beam, a local peer-to-peer transfer feature that communicates directly with nearby devices over Wi-Fi Direct or Bluetooth without using cloud servers.',
  },
  {
    q: '10. Is Sanraksha free?',
    a: 'Sanraksha is intended to be offered as a free, privacy-first application by Arlo Technologies, without advertisements or paid tracking.',
  },
];

export default function SanrakshaLanding() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 md:pt-44 lg:pt-48 bg-gradient-to-b from-background-1 via-background-2 to-background-3 dark:from-background-9 dark:via-background-8 dark:to-background-7 border-b border-stroke-3 dark:border-stroke-7">
        <div className="main-container px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <RevealAnimation delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-mono font-medium">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                OFFICIAL PRODUCT &bull; SECURE DOCUMENT VAULT
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 sm:text-heading-1 lg:text-[68px] font-normal tracking-tight text-secondary dark:text-accent leading-none">
                SANRAKSHA
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.25}>
              <p className="text-heading-6 sm:text-heading-4 font-normal text-emerald-600 dark:text-emerald-400">
                Your Documents. Your Phone. Nobody Else.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 sm:text-heading-6 text-secondary/80 dark:text-accent/80 font-normal max-w-2xl mx-auto leading-relaxed">
                A private, offline-first document vault designed to help individuals and families securely store, organize, and manage their important documents.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.35}>
              <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 max-w-2xl mx-auto leading-relaxed">
                Sanraksha brings identity documents, financial records, vehicle papers, insurance policies, and personal records together in one protected environment on your Android device.
              </p>
            </RevealAnimation>

            {/* Badges */}
            <RevealAnimation delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-secondary/70 dark:text-accent/70 font-mono pt-2">
                <span className="px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7">
                  🛡️ No Cloud Storage
                </span>
                <span className="px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7">
                  🚫 Zero Advertising
                </span>
                <span className="px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7">
                  👤 No Account Required
                </span>
                <span className="px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 text-primary-600 dark:text-primary-400">
                  🇮🇳 Made in India
                </span>
              </div>
            </RevealAnimation>

            {/* CTA Buttons */}
            <RevealAnimation delay={0.45}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="#download"
                  className="btn btn-primary px-8 py-3.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                  <span>📱 Download for Android</span>
                </a>
                <a
                  href="#features"
                  className="btn btn-secondary dark:btn-accent px-8 py-3.5 rounded-full text-sm font-semibold border border-stroke-3 dark:border-stroke-7 hover:border-primary-500 transition-all flex items-center gap-2">
                  <span>Explore Features</span>
                </a>
                <Link
                  href="/sanraksha/privacy-policy"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-sm font-medium text-secondary/80 dark:text-accent/80 hover:text-emerald-500 transition-colors">
                  <span>Official Privacy Policy &rarr;</span>
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW / DIGITAL VAULT */}
      <section className="py-20 sm:py-28 bg-white dark:bg-background-6">
        <div className="main-container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan uppercase tracking-wider text-xs font-mono">
                Your Digital Document Vault
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-2 font-normal text-secondary dark:text-accent">
                Your important documents deserve more than ordinary file storage.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/70 dark:text-accent/70 leading-relaxed max-w-3xl mx-auto">
                Sanraksha is designed to make document management simple, organized, and privacy-focused. Whether you are managing personal identification, vehicle records, educational certificates, or family documents, Sanraksha provides a centralized place to keep everything organized. Built around local storage and encryption, Sanraksha gives you control over how your documents are stored, accessed, and shared.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* 3. WHY SANRAKSHA? */}
      <section className="py-20 sm:py-28 bg-background-2 dark:bg-background-7 border-t border-b border-stroke-3 dark:border-stroke-7">
        <div className="main-container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green uppercase tracking-wider text-xs font-mono">Core Value</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-2 font-normal text-secondary dark:text-accent">
                Why Sanraksha?
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/70 dark:text-accent/70">
                Four guiding principles designed for privacy-conscious individuals and families.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RevealAnimation delay={0.1}>
              <div className="p-6 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs h-full space-y-3">
                <div className="size-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl">
                  🔒
                </div>
                <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">Privacy Comes First</h3>
                <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Your documents are designed to remain on your device. Sanraksha does not provide cloud-based document storage or remote backups.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="p-6 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs h-full space-y-3">
                <div className="size-12 rounded-2xl bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center text-2xl">
                  🛡️
                </div>
                <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">Security by Design</h3>
                <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Document encryption, encrypted database storage, and Android Keystore-backed cryptographic protection help safeguard your information.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <div className="p-6 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs h-full space-y-3">
                <div className="size-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">Designed for Everyday Use</h3>
                <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Manage identity documents, vehicle records, insurance policies, and other important files from one fast, offline application.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="p-6 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs h-full space-y-3">
                <div className="size-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-2xl">
                  👨‍👩‍👧‍👦
                </div>
                <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">Built for Families</h3>
                <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Organize documents using separate family profiles and maintain a structured personal document collection in one master vault.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* 4. FEATURES AND CAPABILITIES (14 items) */}
      <section id="features" className="py-20 sm:py-28 bg-white dark:bg-background-6">
        <div className="main-container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan uppercase tracking-wider text-xs font-mono">14 Native Modules</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-2 font-normal text-secondary dark:text-accent">
                Features &amp; Capabilities
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/70 dark:text-accent/70">
                Engineered for maximum resilience, convenience, and absolute confidentiality on Android.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((feat) => (
              <RevealAnimation key={feat.num} delay={0.1}>
                <div className="p-6 sm:p-7 rounded-3xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 shadow-xs h-full flex flex-col justify-between space-y-4 hover:border-primary-500/40 transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="size-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                        {feat.num}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-secondary/60 dark:text-accent/60 px-2.5 py-0.5 rounded-full bg-background-2 dark:bg-background-8">
                        {feat.tag}
                      </span>
                    </div>
                    <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">{feat.title}</h3>
                    <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">{feat.desc}</p>
                  </div>
                  <ul className="space-y-1.5 pt-2 border-t border-stroke-3 dark:border-stroke-7 text-xs text-secondary/80 dark:text-accent/80">
                    {feat.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold shrink-0">&bull;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DESIGNED FOR YOUR EVERYDAY DOCUMENTS */}
      <section className="py-20 sm:py-28 bg-background-2 dark:bg-background-8 border-t border-b border-stroke-3 dark:border-stroke-7">
        <div className="main-container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green uppercase tracking-wider text-xs font-mono">Comprehensive Scope</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-2 font-normal text-secondary dark:text-accent">
                Designed for Your Everyday Documents
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/70 dark:text-accent/70">
                Sanraksha is tailored for the essential paperwork of modern Indian life.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categoriesData.map((cat, idx) => (
              <RevealAnimation key={cat.title} delay={0.1 + idx * 0.05}>
                <div className="p-6 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-heading-6 font-normal text-secondary dark:text-accent">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-secondary/70 dark:text-accent/70">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRIVACY ARCHITECTURE */}
      <section className="py-20 sm:py-28 bg-white dark:bg-background-6">
        <div className="main-container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-14">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan uppercase tracking-wider text-xs font-mono">
                  Privacy Architecture
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-4 sm:text-heading-2 font-normal text-secondary dark:text-accent">
                  Your Data Stays Under Your Control
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-1 text-secondary/70 dark:text-accent/70 max-w-2xl mx-auto">
                  Sanraksha follows a local-first approach to document management.
                </p>
              </RevealAnimation>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                <div className="font-semibold text-secondary dark:text-accent text-sm flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> No Cloud Document Storage
                </div>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Your documents are stored locally rather than being uploaded to an Arlo Technologies document server.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                <div className="font-semibold text-secondary dark:text-accent text-sm flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> No Advertising
                </div>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Sanraksha is designed completely without commercial advertising networks or tracking SDKs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                <div className="font-semibold text-secondary dark:text-accent text-sm flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> No Mandatory Account
                </div>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Use the application immediately without creating an online account, phone login, or KYC verification.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                <div className="font-semibold text-secondary dark:text-accent text-sm flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> On-Device Processing
                </div>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  OCR, full-text search, and document recognition operate locally using bundled on-device processing technologies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                <div className="font-semibold text-secondary dark:text-accent text-sm flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Hardware-Backed Encrypted Storage
                </div>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  AES-256-GCM file encryption and SQLCipher database records are protected by hardware keys inside the Android Keystore.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                <div className="font-semibold text-secondary dark:text-accent text-sm flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Strict Backup Restrictions
                </div>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Application backup settings are configured with <code className="font-mono text-[11px]">allowBackup=&quot;false&quot;</code> to prevent unauthorized cloud extraction.
                </p>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
              <h3 className="text-heading-6 font-normal text-emerald-700 dark:text-emerald-300">
                Offline by Design: No Android INTERNET Permission
              </h3>
              <p className="text-xs sm:text-sm text-secondary/80 dark:text-accent/80 max-w-xl mx-auto leading-relaxed">
                The application&apos;s release manifest omits the <code className="font-mono font-bold">android.permission.INTERNET</code> permission. Your phone literally cannot leak your documents to an external server.
              </p>
              <p className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 pt-1">
                Your documents remain yours. Your privacy remains a priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIMPLE 5-STEP EXPERIENCE */}
      <section className="py-20 sm:py-28 bg-background-2 dark:bg-background-7 border-t border-b border-stroke-3 dark:border-stroke-7">
        <div className="main-container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan uppercase tracking-wider text-xs font-mono">User Workflow</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-2 font-normal text-secondary dark:text-accent">
                A Simple Document Management Experience
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/70 dark:text-accent/70">
                How Sanraksha fits effortlessly into your daily routine.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Open Your Vault',
                desc: 'Access Sanraksha securely using your configured PIN or biometric authentication.',
              },
              {
                step: '02',
                title: 'Add Documents',
                desc: 'Scan physical documents with your camera or import existing PDF and image files.',
              },
              {
                step: '03',
                title: 'Organize Everything',
                desc: 'Add document titles, select categories, assign family profiles, and enter expiry dates.',
              },
              {
                step: '04',
                title: 'Access When Needed',
                desc: 'Search, view, mask Aadhaar, or export protected password PDFs whenever required.',
              },
              {
                step: '05',
                title: 'Stay Updated',
                desc: 'Receive local reminders before important certificates or insurance policies expire.',
              },
            ].map((s, idx) => (
              <RevealAnimation key={s.step} delay={0.1 + idx * 0.08}>
                <div className="p-6 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-3 h-full">
                  <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                    {s.step}
                  </span>
                  <h3 className="font-semibold text-secondary dark:text-accent text-sm">{s.title}</h3>
                  <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">{s.desc}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BUILT FOR INDIA CALLOUT */}
      <section className="py-16 bg-white dark:bg-background-6">
        <div className="main-container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-background-1 to-primary-500/10 dark:from-emerald-950/30 dark:via-background-7 dark:to-primary-950/30 border border-emerald-500/30 text-center space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
              Built for India &bull; Designed for Privacy
            </span>
            <h2 className="text-heading-5 sm:text-heading-3 font-normal text-secondary dark:text-accent">
              Engineered with Indian Families in Mind
            </h2>
            <p className="text-tagline-2 sm:text-tagline-1 text-secondary/70 dark:text-accent/70 max-w-2xl mx-auto leading-relaxed">
              From Aadhaar cards and PAN cards to vehicle Glovebox papers and health insurance policies, Sanraksha provides a practical, respectful way to organize critical personal documents. We believe privacy should be built into the foundation of digital products.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-28 bg-background-2 dark:bg-background-8 border-t border-b border-stroke-3 dark:border-stroke-7">
        <div className="main-container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan uppercase tracking-wider text-xs font-mono">FAQ</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 sm:text-heading-2 font-normal text-secondary dark:text-accent">
                Frequently Asked Questions
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-secondary/70 dark:text-accent/70">
                Clear answers regarding Sanraksha architecture, security, and usage.
              </p>
            </RevealAnimation>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 overflow-hidden transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    type="button"
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-medium text-secondary dark:text-accent text-sm sm:text-base focus:outline-none">
                    <span>{faq.q}</span>
                    <span className="text-secondary/50 dark:text-accent/50 text-xl font-mono shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-secondary/70 dark:text-accent/70 leading-relaxed border-t border-stroke-3 dark:border-stroke-7">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. DOWNLOAD CTA SECTION */}
      <section id="download" className="py-20 sm:py-28 bg-white dark:bg-background-6">
        <div className="main-container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 p-8 sm:p-14 rounded-3xl bg-secondary dark:bg-background-8 text-white relative overflow-hidden shadow-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs">
              Take Control of Your Documents
            </div>
            <h2 className="text-heading-4 sm:text-heading-2 font-normal text-white">
              Download Sanraksha
            </h2>
            <p className="text-heading-6 text-emerald-400 font-normal">
              Sanraksha – Your Documents. Your Phone. Nobody Else.
            </p>
            <p className="text-tagline-2 text-white/70 max-w-xl mx-auto leading-relaxed">
              Organize your important documents. Protect your personal information. Keep your digital records under your absolute control.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-8 py-3.5 rounded-full text-sm font-semibold shadow-md flex items-center gap-2">
                <span>📱 Download for Android (Google Play)</span>
              </a>
              <Link
                href="/sanraksha/privacy-policy"
                className="btn px-8 py-3.5 rounded-full text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20">
                <span>Read Full Privacy Policy</span>
              </Link>
            </div>
            <p className="text-[11px] text-white/50 pt-2 font-mono">
              Designed for Android 10+ &bull; Free &bull; Made in India
            </p>
          </div>
        </div>
      </section>

      {/* 11. ABOUT DEVELOPER & IMPORTANT DISCLAIMER */}
      <section className="py-16 bg-background-2 dark:bg-background-7 border-t border-stroke-3 dark:border-stroke-7">
        <div className="main-container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8 text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
            <div className="p-6 rounded-2xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 space-y-2">
              <h3 className="font-semibold text-secondary dark:text-accent text-sm">About the Developer</h3>
              <p>
                <strong>Sanraksha</strong> is developed by <strong>Arlo Technologies</strong>, an Indian technology company focused on building purposeful digital products, modern software systems, and privacy-conscious software experiences.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 font-mono">
                <span>
                  Website:{' '}
                  <a href="https://arlotechnologies.in" className="underline text-primary-600 dark:text-primary-400">
                    https://arlotechnologies.in
                  </a>
                </span>
                <span>
                  Email:{' '}
                  <a href="mailto:hello@arlotechnologies.in" className="underline text-primary-600 dark:text-primary-400">
                    hello@arlotechnologies.in
                  </a>
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 space-y-2">
              <h3 className="font-semibold text-secondary dark:text-accent text-sm">Important Information &amp; Disclaimer</h3>
              <p>
                Sanraksha is an independent document management application and is <strong>not affiliated with, endorsed by, or operated by UIDAI, the Government of India, banks, insurance providers, or other government organizations.</strong>
              </p>
              <p>
                Users are solely responsible for maintaining appropriate physical copies and official backups of important records. Sanraksha does not replace official government document services or legally issued original documents.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-[11px] text-secondary/60 dark:text-accent/60">
                <Link href="/sanraksha/privacy-policy" className="underline hover:text-primary-600">
                  Privacy Policy (/sanraksha/privacy-policy)
                </Link>
                <span>&bull;</span>
                <Link href="/terms-conditions" className="underline hover:text-primary-600">
                  Terms and Conditions
                </Link>
                <span>&bull;</span>
                <span>&copy; {new Date().getFullYear()} Arlo Technologies. All rights reserved. Made in India.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
