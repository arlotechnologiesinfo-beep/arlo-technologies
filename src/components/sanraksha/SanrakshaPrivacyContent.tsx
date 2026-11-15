'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import { useState } from 'react';

const sanrakshaTocItems = [
  { id: 'sec-overview', title: 'Pillars & Overview' },
  { id: 'sec-1', title: '1. Introduction' },
  { id: 'sec-2', title: '2. Our Privacy Approach' },
  { id: 'sec-3', title: '3. Information We Process' },
  { id: 'sec-4', title: '4. Permissions & Capabilities' },
  { id: 'sec-5', title: '5. How We Use Information' },
  { id: 'sec-6', title: '6. Storage & Encryption' },
  { id: 'sec-7', title: '7. Data Sharing & Disclosure' },
  { id: 'sec-8', title: '8. Third-Party Services & SDKs' },
  { id: 'sec-9', title: '9. Retention & Deletion' },
  { id: 'sec-10', title: '10. Data Security' },
  { id: 'sec-11', title: '11. Children\'s Privacy' },
  { id: 'sec-12', title: '12. Your Privacy Choices' },
  { id: 'sec-13', title: '13. Changes to This Policy' },
  { id: 'sec-14', title: '14. Contact Information' },
  { id: 'sec-15', title: '15. Legal & Regulatory' },
];

export default function SanrakshaPrivacyContent() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="pt-28 pb-20 sm:pt-36 md:pt-40 lg:pt-44">
      <div className="main-container px-4 sm:px-6">
        {/* Header Hero */}
        <div className="mx-auto max-w-4xl text-center space-y-4 mb-10 md:mb-14">
          <RevealAnimation delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              SANRAKSHA &bull; OFFICIAL PRIVACY POLICY
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal tracking-tight text-secondary dark:text-accent">
              Sanraksha Privacy Policy
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-2xl mx-auto leading-relaxed">
              Complete privacy policy and data governance disclosures for <strong>Sanraksha – Secure Document Vault</strong>, an offline-first Android application developed by Arlo Technologies.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.35}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-secondary/70 dark:text-accent/70 pt-2 font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Last Updated: 13 November 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7">
                Developer: Arlo Technologies
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7">
                Jurisdiction: India &bull; DPDP Act, 2023
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 text-primary-600 dark:text-primary-400">
                Format: Public HTML Webpage
              </span>
            </div>
          </RevealAnimation>

          {/* Quick Breadcrumbs / Navigation */}
          <RevealAnimation delay={0.4}>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              <Link
                href="/sanraksha"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-background-2 dark:bg-background-8 text-secondary dark:text-accent hover:border-primary-500 border border-stroke-3 dark:border-stroke-7 transition-all">
                &larr; Back to Sanraksha Product Vault
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-background-2 dark:bg-background-8 text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent border border-stroke-3 dark:border-stroke-7 transition-all">
                Arlo Master Privacy Policy
              </Link>
            </div>
          </RevealAnimation>
        </div>

        {/* 3 Core Pillars Highlight Box */}
        <RevealAnimation delay={0.45}>
          <div id="sec-overview" className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-background-1 to-background-2 dark:from-emerald-950/30 dark:via-background-6 dark:to-background-7 border-2 border-emerald-500/30 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-mono text-xs font-semibold uppercase tracking-wider">
                Core Architectural Commitments
              </span>
              <span className="text-xs text-secondary/60 dark:text-accent/60 font-mono">
                Google Play Data Safety &bull; DPDP India
              </span>
            </div>
            <h2 className="text-heading-6 sm:text-heading-5 font-normal text-secondary dark:text-accent">
              Our 3 Fundamental Privacy Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-background-7/80 border border-emerald-500/20">
                <div className="size-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center mb-2 text-sm">
                  1
                </div>
                <h3 className="font-semibold text-secondary dark:text-accent text-sm mb-1">Local Storage Only</h3>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Documents are stored strictly locally on the user&apos;s device. No cloud document servers, no remote uploads, and no server database.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-background-7/80 border border-emerald-500/20">
                <div className="size-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center mb-2 text-sm">
                  2
                </div>
                <h3 className="font-semibold text-secondary dark:text-accent text-sm mb-1">Hardware-Backed Security</h3>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  AES-256-GCM file encryption, SQLCipher database, and Android Keystore protection guard your vault against unauthorized extraction.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-background-7/80 border border-emerald-500/20">
                <div className="size-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center mb-2 text-sm">
                  3
                </div>
                <h3 className="font-semibold text-secondary dark:text-accent text-sm mb-1">Absolute User Control</h3>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Users retain complete sovereignty over document storage, watermarked exports, nearby transfers, and instant permanent deletion.
                </p>
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* Main Content Layout with Sticky TOC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Sticky Left TOC Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <div className="p-5 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-stroke-3 dark:border-stroke-7">
                  <span className="text-tagline-2 font-semibold text-secondary dark:text-accent">Table of Contents</span>
                  <span className="text-xs font-mono text-secondary/50 dark:text-accent/50">15 Sections</span>
                </div>
                <nav className="max-h-[60vh] overflow-y-auto space-y-1 text-xs pr-1">
                  {sanrakshaTocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-3 py-1.5 rounded-lg text-secondary/70 dark:text-accent/70 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-background-1 dark:hover:bg-background-7 transition-colors">
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Utility actions */}
              <div className="p-4 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 flex items-center justify-between gap-3 text-xs">
                <button
                  onClick={handleCopyLink}
                  type="button"
                  className="flex items-center gap-1.5 text-secondary/80 dark:text-accent/80 hover:text-primary-600 font-medium">
                  {copied ? '✓ Link Copied' : '🔗 Copy Policy URL'}
                </button>
                <button
                  onClick={handlePrint}
                  type="button"
                  className="flex items-center gap-1.5 text-secondary/80 dark:text-accent/80 hover:text-primary-600 font-medium">
                  🖨️ Print Policy
                </button>
              </div>

              {/* Metadata Card */}
              <div className="p-5 rounded-2xl bg-secondary/5 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7 space-y-2 text-xs">
                <div className="font-semibold text-secondary dark:text-accent">Official Registry</div>
                <div className="text-secondary/70 dark:text-accent/70">
                  <strong>App:</strong> Sanraksha – Secure Document Vault
                </div>
                <div className="text-secondary/70 dark:text-accent/70">
                  <strong>Developer:</strong> Arlo Technologies
                </div>
                <div className="text-secondary/70 dark:text-accent/70">
                  <strong>Official URL:</strong>{' '}
                  <span className="font-mono break-all text-primary-600 dark:text-primary-400">
                    https://arlotechnologies.in/sanraksha/privacy-policy
                  </span>
                </div>
                <div className="text-secondary/70 dark:text-accent/70">
                  <strong>Contact:</strong>{' '}
                  <a href="mailto:hello@arlotechnologies.in" className="underline text-primary-600 dark:text-primary-400">
                    hello@arlotechnologies.in
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Legal Text */}
          <main className="lg:col-span-8 space-y-8">
            {/* Section 1 */}
            <section
              id="sec-1"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  01
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  1. Introduction
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Arlo Technologies (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information.
              </p>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                <strong>Sanraksha</strong> is an offline-first document management and security application designed to help individuals and families securely store, organize, and manage important documents on their Android devices.
              </p>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                This Privacy Policy explains how Sanraksha accesses, processes, stores, protects, and handles information when you use the application.
              </p>
              <div className="p-4 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 font-medium text-secondary dark:text-accent text-sm">
                Our primary design principle is simple: <strong>your personal documents should remain under your control.</strong>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="sec-2"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  02
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  2. Our Privacy Approach
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Sanraksha is designed from the ground up with a <strong>local-first privacy architecture</strong>:
              </p>
              <ul className="space-y-2 text-tagline-2 text-secondary/80 dark:text-accent/80 list-disc pl-5">
                <li><strong>Documents are stored locally</strong> on your device.</li>
                <li><strong>Document contents are encrypted</strong> before storage.</li>
                <li><strong>The application does not require account registration</strong> or cloud logins.</li>
                <li><strong>The application does not provide cloud-based document storage</strong> or sync to Arlo servers.</li>
                <li><strong>The application does not include advertising</strong> networks or programmatic ad SDKs.</li>
                <li><strong>The application does not use analytics or tracking services</strong>, provided no such SDKs are added to the production build.</li>
                <li><strong>The application is designed to operate without an internet connection.</strong></li>
              </ul>
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs leading-relaxed">
                <strong>Android Manifest Verification:</strong> Sanraksha&apos;s Android application manifest is intentionally designed <em>without</em> the <code className="font-mono">android.permission.INTERNET</code> permission. This prevents the application itself from making conventional outbound internet connections. Nearby device sharing uses supported local wireless communication mechanisms (such as Bluetooth and Wi-Fi Direct) and is entirely distinct from cloud uploading.
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="sec-3"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  03
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  3. Information We Process
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Sanraksha may process the following information locally, depending on the features you choose to use.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                  <h3 className="font-semibold text-secondary dark:text-accent text-sm">3.1 Personal Documents</h3>
                  <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                    You may import or scan documents such as: Aadhaar cards, PAN cards, Voter ID cards, Passports, Driving licences, Vehicle registration certificates (RC), Insurance policies, Educational certificates, Financial records, and other personal/family records. These documents are stored exclusively within the application&apos;s encrypted local storage.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                  <h3 className="font-semibold text-secondary dark:text-accent text-sm">3.2 Document Information</h3>
                  <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                    When adding a document, you may provide metadata such as: Document title, Document category, Document identification number, Expiry date, Notes and descriptions, and Associated family profile. This information is used solely to organize and manage your documents.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                  <h3 className="font-semibold text-secondary dark:text-accent text-sm">3.3 OCR and Extracted Text</h3>
                  <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                    Sanraksha uses on-device text recognition to identify document content and support document search and Aadhaar masking. Recognized text is processed locally and may be stored in the encrypted database to support search functionality. OCR processing is not intended to upload document contents to any external AI or cloud-processing service.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                  <h3 className="font-semibold text-secondary dark:text-accent text-sm">3.4 Family Profile Information</h3>
                  <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                    If you use family profiles, you may enter information to organize documents for different family members. Family profile information remains completely within the application&apos;s local storage.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                  <h3 className="font-semibold text-secondary dark:text-accent text-sm">3.5 Emergency Information (ICE Card)</h3>
                  <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                    The Emergency ICE Card allows you to enter emergency contact details, medical information, blood group, relevant health notes, and other emergency details you choose to provide. This information is stored locally and is intended to assist during emergency situations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 space-y-2">
                  <h3 className="font-semibold text-secondary dark:text-accent text-sm">3.6 Authentication Information</h3>
                  <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                    Sanraksha may process PIN authentication data, salted PIN verification hashes, authentication-related security settings, lockout counters, and decoy vault authentication information. PIN verification information is protected using the application&apos;s security mechanisms. Biometric authentication relies on Android&apos;s supported biometric authentication framework; Sanraksha does not directly collect or store your fingerprint or facial biometric templates.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="sec-4"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  04
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  4. Camera, Files and Device Permissions
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Sanraksha requests access to device capabilities solely when required for specific, user-initiated functionality:
              </p>
              <div className="space-y-3 pt-1">
                <div className="border-l-2 border-primary-500 pl-4 py-1">
                  <h4 className="font-semibold text-secondary dark:text-accent text-sm">Camera Access</h4>
                  <p className="text-xs text-secondary/70 dark:text-accent/70">
                    Camera access is used when you choose to scan physical documents. Captured documents are processed and stored locally after encryption.
                  </p>
                </div>
                <div className="border-l-2 border-primary-500 pl-4 py-1">
                  <h4 className="font-semibold text-secondary dark:text-accent text-sm">File and Media Access</h4>
                  <p className="text-xs text-secondary/70 dark:text-accent/70">
                    You may select existing PDF files and images through Android&apos;s supported system file selection mechanisms. Only files you choose to import are processed by the application.
                  </p>
                </div>
                <div className="border-l-2 border-primary-500 pl-4 py-1">
                  <h4 className="font-semibold text-secondary dark:text-accent text-sm">Biometric Authentication</h4>
                  <p className="text-xs text-secondary/70 dark:text-accent/70">
                    Biometric authentication is used to verify your identity before granting access to protected application functionality. Biometric data remains strictly managed by Android&apos;s system security infrastructure (BiometricPrompt).
                  </p>
                </div>
                <div className="border-l-2 border-primary-500 pl-4 py-1">
                  <h4 className="font-semibold text-secondary dark:text-accent text-sm">Notifications</h4>
                  <p className="text-xs text-secondary/70 dark:text-accent/70">
                    Notifications may be used for locally scheduled document expiry reminders and renewal alerts without connecting to a push server.
                  </p>
                </div>
                <div className="border-l-2 border-primary-500 pl-4 py-1">
                  <h4 className="font-semibold text-secondary dark:text-accent text-sm">Nearby Device Communication</h4>
                  <p className="text-xs text-secondary/70 dark:text-accent/70">
                    The Beam feature may use supported Bluetooth, Wi-Fi, and nearby-device communication capabilities to transfer documents directly between compatible devices.
                  </p>
                </div>
              </div>
              <p className="text-xs text-secondary/60 dark:text-accent/60 italic pt-1">
                These permissions and capabilities are used exclusively for user-requested functionality, never for advertising, analytics, or behavioral tracking.
              </p>
            </section>

            {/* Section 5 */}
            <section
              id="sec-5"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  05
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  5. How We Use Information
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Information processed by Sanraksha is used exclusively for the following purposes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-secondary/80 dark:text-accent/80">
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Securely storing documents.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Organizing documents into categories.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Authenticating access to the vault.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Searching documents using OCR &amp; FTS.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Identifying and masking Aadhaar numbers.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Generating password-protected PDF exports.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Managing document expiry dates.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Scheduling local notifications.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Maintaining family document profiles.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Providing emergency ICE card features.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Enabling user-initiated nearby sharing.
                </div>
                <div className="p-3 rounded-xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Maintaining application security.
                </div>
              </div>
              <p className="text-tagline-2 font-medium text-emerald-600 dark:text-emerald-400 pt-2">
                We do not use your personal documents for advertising, profiling, or selling personal information.
              </p>
            </section>

            {/* Section 6 */}
            <section
              id="sec-6"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  06
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  6. Local Storage and Encryption
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Sanraksha implements military-grade cryptography and device-local storage to maintain document privacy:
              </p>
              <ul className="space-y-2 text-tagline-2 text-secondary/80 dark:text-accent/80 list-disc pl-5">
                <li><strong>AES-256-GCM encryption</strong> for all imported and scanned document files.</li>
                <li><strong>SQLCipher encrypted database storage</strong> protecting all document metadata, categories, notes, and index entries.</li>
                <li><strong>Android Keystore-backed cryptographic key protection</strong> ensuring encryption keys never leave hardware security modules (TEE / StrongBox).</li>
                <li><strong>Salted PBKDF2-based PIN verification</strong> protecting against brute-force attacks.</li>
                <li><strong>Biometric authentication</strong> via official Android-supported APIs.</li>
                <li><strong>Backup restrictions:</strong> The application is designed to exclude its private data from Android cloud backup and device-to-device backup mechanisms (<code className="font-mono text-xs">allowBackup=&quot;false&quot;</code>).</li>
              </ul>
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs leading-relaxed">
                <strong>Security Disclaimer:</strong> No digital security system can guarantee absolute protection against every possible threat, including compromised devices, operating-system vulnerabilities, physical unauthorized access, or device malware.
              </div>
            </section>

            {/* Section 7 */}
            <section
              id="sec-7"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  07
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  7. Data Sharing and Disclosure
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Arlo Technologies does not operate a cloud server for storing Sanraksha documents. We do not sell, rent, or commercially distribute your personal documents. Your information is not routinely transmitted to Arlo Technologies or external advertising and analytics providers.
              </p>
              <div className="space-y-3 pt-2">
                <h3 className="font-semibold text-secondary dark:text-accent text-sm">User-Initiated Sharing</h3>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  Sanraksha may allow you to: Export protected PDF documents, save document copies outside the application, share selected documents using Android sharing functionality, or transfer documents through the Beam nearby-sharing feature. When you initiate these actions, the selected document leaves the application&apos;s private storage. You are responsible for selecting trusted recipients and protecting exported copies.
                </p>
                <h3 className="font-semibold text-secondary dark:text-accent text-sm">Legal Requirements</h3>
                <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">
                  We may disclose information if disclosure is required by applicable law or a valid legal order. However, because Sanraksha is designed for local-only document storage, Arlo Technologies generally does not possess or hold custody of users&apos; locally stored document contents.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section
              id="sec-8"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  08
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  8. Third-Party Services and SDKs
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Sanraksha is architected to minimize external service dependencies. The application uses native Android platform capabilities and bundled on-device processing technologies for its core functionality.
              </p>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                We do not intend to integrate:
              </p>
              <ul className="space-y-1.5 text-xs text-secondary/80 dark:text-accent/80 list-disc pl-5">
                <li>Advertising networks or monetization trackers</li>
                <li>Third-party analytics or behavioral tracking platforms</li>
                <li>Cloud document storage or remote sync backends</li>
                <li>Remote AI document processing or third-party cloud OCR services</li>
                <li>External document tracking services</li>
              </ul>
              <p className="text-xs text-secondary/60 dark:text-accent/60 pt-2">
                Any future third-party SDK integration or change in data processing practices will be rigorously reviewed and reflected in this Privacy Policy prior to deployment.
              </p>
            </section>

            {/* Section 9 */}
            <section
              id="sec-9"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  09
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  9. Data Retention and Deletion
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Your documents remain in the application&apos;s local storage until you delete them or remove the application data. You can manage your stored information through the application:
              </p>
              <ul className="space-y-1.5 text-xs text-secondary/80 dark:text-accent/80 list-disc pl-5">
                <li>Delete individual documents from the vault.</li>
                <li>Remove family profile information.</li>
                <li>Delete locally stored vault contents.</li>
                <li>Remove exported document copies separately from your device file manager.</li>
                <li>Uninstall Sanraksha to remove all application data through Android.</li>
              </ul>
              <div className="p-4 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 text-xs text-secondary/70 dark:text-accent/70 space-y-1.5">
                <p><strong>Please note:</strong></p>
                <p>&bull; Deleting a document from Sanraksha does not automatically delete copies previously exported elsewhere.</p>
                <p>&bull; Files shared with another device or person are outside our control.</p>
                <p>&bull; Secure deletion features cannot guarantee forensic erasure on all modern flash-storage devices due to wear-leveling controllers.</p>
                <p>&bull; Uninstalling the application may make locally stored documents and hardware encryption keys permanently unavailable. We strongly recommend exporting any documents you need to retain before uninstalling the application.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section
              id="sec-10"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  10
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  10. Data Security
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                We implement comprehensive security measures designed to protect locally stored information: AES-256-GCM encryption, biometric and PIN authentication controls, protected key management via Android Keystore, backup restrictions, and Android sandboxing.
              </p>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                To maximize document security, users should also:
              </p>
              <ul className="space-y-1.5 text-xs text-secondary/80 dark:text-accent/80 list-disc pl-5">
                <li>Keep their Android operating system and security patches updated.</li>
                <li>Use a strong device lock (PIN, password, or biometric).</li>
                <li>Avoid sharing their Sanraksha vault PIN with others.</li>
                <li>Install applications only from trusted sources such as Google Play.</li>
                <li>Avoid using compromised or rooted devices for sensitive documents.</li>
                <li>Maintain secure offline copies of critical records where necessary.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section
              id="sec-11"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  11
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  11. Children&apos;s Privacy
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Sanraksha is a general-purpose document management application and is not specifically directed at children under the age of 18. The application does not intentionally collect personal data online from children. Parents or legal guardians should supervise the use of the application by minors and ensure that personal and family documents are handled responsibly.
              </p>
            </section>

            {/* Section 12 */}
            <section
              id="sec-12"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  12
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  12. Your Privacy Choices
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                You maintain absolute sovereignty and choice over the information you enter into Sanraksha:
              </p>
              <ul className="space-y-1.5 text-xs text-secondary/80 dark:text-accent/80 list-disc pl-5">
                <li>Which documents to import or scan.</li>
                <li>Which metadata and notes to store.</li>
                <li>Whether to enable or disable on-device OCR features.</li>
                <li>Whether to create family profiles.</li>
                <li>Whether to enable biometric authentication or PIN security.</li>
                <li>Whether to export, watermark, or share documents.</li>
                <li>When to permanently delete locally stored records.</li>
              </ul>
              <p className="text-xs text-secondary/60 dark:text-accent/60 pt-1">
                The application does not require users to create an online account or register personal details to access features.
              </p>
            </section>

            {/* Section 13 */}
            <section
              id="sec-13"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  13
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  13. Changes to This Privacy Policy
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                We may update this Privacy Policy when application functionality, security mechanisms, legal requirements, or data-processing practices change. Updated versions will be published on our official website at{' '}
                <a href="https://arlotechnologies.in/sanraksha/privacy-policy" className="underline text-primary-600 dark:text-primary-400 font-mono">
                  https://arlotechnologies.in/sanraksha/privacy-policy
                </a>
                . The latest revision date will always be prominently displayed at the beginning of the policy. We encourage users to review this page periodically.
              </p>
            </section>

            {/* Section 14 */}
            <section
              id="sec-14"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  14
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  14. Contact Information
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                For privacy-related questions, inquiries, concerns, or regulatory requests, please contact:
              </p>
              <div className="p-5 rounded-2xl bg-background-1 dark:bg-background-7 border border-stroke-3 dark:border-stroke-7 text-xs space-y-2">
                <div className="font-semibold text-secondary dark:text-accent text-sm">Arlo Technologies</div>
                <div className="text-secondary/80 dark:text-accent/80">Product: Sanraksha – Secure Document Vault</div>
                <div className="text-secondary/80 dark:text-accent/80">
                  Website:{' '}
                  <a href="https://arlotechnologies.in" className="underline text-primary-600 dark:text-primary-400">
                    https://arlotechnologies.in
                  </a>
                </div>
                <div className="text-secondary/80 dark:text-accent/80">
                  Email:{' '}
                  <a href="mailto:hello@arlotechnologies.in" className="underline text-primary-600 dark:text-primary-400 font-mono">
                    hello@arlotechnologies.in
                  </a>
                </div>
                <div className="text-secondary/80 dark:text-accent/80">
                  Subject Line: <code className="bg-background-2 dark:bg-background-8 px-2 py-0.5 rounded font-mono">Sanraksha Privacy Inquiry</code>
                </div>
              </div>
            </section>

            {/* Section 15 */}
            <section
              id="sec-15"
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                  15
                </span>
                <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                  15. Legal and Regulatory Information
                </h2>
              </div>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                Sanraksha is developed with rigorous privacy and data protection principles at its foundation. We aim to align our data handling practices with applicable privacy and data protection legislation, including India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>DPDP Rules, 2025</strong>, as their provisions take effect.
              </p>
              <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
                This policy describes the intended privacy architecture and must be read alongside the application&apos;s actual technical implementation and applicable legal requirements.
              </p>
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-primary-500/10 border border-emerald-500/20 text-center space-y-2">
                <p className="font-semibold text-secondary dark:text-accent text-sm tracking-wide">
                  Sanraksha – Your documents. Your phone. Nobody else.
                </p>
                <p className="text-xs text-secondary/70 dark:text-accent/70">
                  Developed with care by <strong>Arlo Technologies</strong> &bull; Made in India.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
