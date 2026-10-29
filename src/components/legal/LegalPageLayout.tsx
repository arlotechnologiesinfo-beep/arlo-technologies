'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface TableOfContentItem {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  badge: string;
  description: string;
  effectiveDate: string;
  lastUpdated: string;
  toc: TableOfContentItem[];
  children: ReactNode;
}

const legalNavLinks = [
  { href: '/terms-conditions', label: 'Terms of Use' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/refund-policy', label: 'Refund & Cancellation' },
  { href: '/legal', label: 'Legal Hub & Grievances' },
];

const LegalPageLayout = ({
  title,
  badge,
  description,
  effectiveDate,
  lastUpdated,
  toc,
  children,
}: LegalPageLayoutProps) => {
  const pathname = usePathname();
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
    <div className="pt-32 pb-20 sm:pt-36 md:pt-40 lg:pt-44">
      <div className="main-container">
        {/* Header Hero */}
        <div className="mx-auto max-w-4xl text-center space-y-4 mb-10 md:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan uppercase tracking-wider text-xs font-mono">{badge}</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal tracking-tight">{title}</h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.35}>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-secondary/60 dark:text-accent/60 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Effective: {effectiveDate}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7">
                Last Updated: {lastUpdated}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7">
                Jurisdiction: India
              </span>
            </div>
          </RevealAnimation>

          {/* Quick Legal Navigation Tabs */}
          <RevealAnimation delay={0.4}>
            <div className="pt-6">
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7">
                {legalNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-primary-500 text-white shadow-xs'
                          : 'text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent hover:bg-background-1 dark:hover:bg-background-7'
                      }`}>
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Content Body with Sticky TOC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <RevealAnimation delay={0.2}>
              <div className="rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-6 shadow-sm space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary dark:text-accent mb-1">
                    Table of Contents
                  </h3>
                  <p className="text-xs text-secondary/60 dark:text-accent/60">
                    Quickly jump to any section of this document.
                  </p>
                </div>

                <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {toc.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2 text-xs sm:text-sm text-secondary/70 dark:text-accent/70 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 px-2 rounded-lg hover:bg-background-2 dark:hover:bg-background-8 transition-colors">
                      <span className="font-mono text-secondary/40 dark:text-accent/40 text-[11px] mt-0.5">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="leading-snug">{item.title}</span>
                    </a>
                  ))}
                </nav>

                {/* Actions: Print & Share */}
                <div className="pt-4 border-t border-stroke-3 dark:border-stroke-7 flex items-center justify-between gap-3 text-xs">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 text-secondary/70 dark:text-accent/70 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <span>{copied ? '✓ Link Copied' : '🔗 Copy Document Link'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 text-secondary/70 dark:text-accent/70 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <span>🖨️ Print / PDF</span>
                  </button>
                </div>

                {/* Statutory Contact Box */}
                <div className="p-4 rounded-2xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7 text-xs space-y-2">
                  <p className="font-semibold text-secondary dark:text-accent">Official Grievance Officer</p>
                  <p className="text-secondary/70 dark:text-accent/70">
                    Arlo Technologies India
                    <br />
                    H No. 11, 13-746, Road No. 5, Dwarka Nagar, Kothapet, Hyderabad, Telangana 500102
                  </p>
                  <a
                    href="mailto:contact@arlotechnologies.in"
                    className="text-primary-600 dark:text-primary-400 font-medium block hover:underline">
                    contact@arlotechnologies.in
                  </a>
                </div>
              </div>
            </RevealAnimation>
          </aside>

          {/* Main Legal Content */}
          <main className="lg:col-span-8 space-y-8">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
