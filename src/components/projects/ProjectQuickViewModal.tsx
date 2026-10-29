'use client';

import { V2ConveyorArrow } from '@/components/ui/button/LinkButton';
import { ICaseStudyItem } from '@/data/caseStudies';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface ProjectQuickViewModalProps {
  project: ICaseStudyItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectQuickViewModal({
  project,
  isOpen,
  onClose,
}: ProjectQuickViewModalProps) {
  useEffect(() => {
    if (!isOpen) {return;}

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) {return null;}

  const isClientProject = project.type === 'client-project';
  const techStack = project.systemArchitecture?.techStack || [];
  const components = project.systemArchitecture?.components || [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 animate-fadeIn"
      onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-secondary/80 dark:bg-black/85 backdrop-blur-md transition-opacity" />

      {/* Modal Dialog Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-7 shadow-2xl p-5 sm:p-7 md:p-9 space-y-6 text-secondary dark:text-accent focus:outline-none">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-stroke-3/60 dark:border-stroke-7/60">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  isClientProject
                    ? 'bg-ns-green/90 text-secondary border border-ns-green-light'
                    : 'bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20'
                }`}>
                {isClientProject && <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />}
                {isClientProject ? 'Delivered Client Website' : project.categoryLabel}
              </span>
              <span className="text-xs text-secondary/60 dark:text-accent/60">
                {project.readTime} • Published {project.publishedAt.slice(0, 4)}
              </span>
            </div>
            <h2 id="quick-view-title" className="text-heading-5 sm:text-heading-4 font-normal leading-snug">
              {project.title}
            </h2>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="shrink-0 flex items-center justify-center size-9 rounded-full bg-background-2 dark:bg-background-8 text-secondary/70 dark:text-accent/70 hover:bg-secondary hover:text-white dark:hover:bg-accent dark:hover:text-secondary transition-colors duration-200">
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Media Banner with Live Overlay */}
        <div className="relative w-full h-[240px] sm:h-[340px] rounded-2xl overflow-hidden bg-background-3 dark:bg-background-8 border border-stroke-3/70 dark:border-stroke-7/70">
          <Image
            src={project.thumbnail}
            alt={project.imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          {/* Bottom Banner Actions on Image */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 z-10">
            <span className="text-xs sm:text-sm text-white/90 font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur-md">
              Primary Focus: {project.primarySearchIntent}
            </span>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <span>Launch Live Site</span>
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Executive Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Challenge Box */}
          <div className="rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-8 p-4 sm:p-5 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-rose-500" />
              Core Challenge &amp; Scope
            </span>
            <p className="text-xs sm:text-sm text-secondary/80 dark:text-accent/80 leading-relaxed">
              {project.executiveSummary.challenge}
            </p>
          </div>

          {/* Proposed Value Box */}
          <div className="rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-8 p-4 sm:p-5 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-ns-green flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500" />
              Engineering Approach &amp; Value
            </span>
            <p className="text-xs sm:text-sm text-secondary/80 dark:text-accent/80 leading-relaxed">
              {project.executiveSummary.approach}
            </p>
          </div>
        </div>

        {/* Tech Stack Chips */}
        {techStack.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary/60 dark:text-accent/60">
              Technology Stack &amp; Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-stroke-3 dark:border-stroke-7 bg-background-2 dark:bg-background-8 px-3 py-1 text-xs font-medium text-secondary/85 dark:text-accent/85 shadow-2xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Components Highlights */}
        {components.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary/60 dark:text-accent/60">
              Architecture Blueprint
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {components.map((c, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-stroke-3/60 dark:border-stroke-7/60 bg-background-2/70 dark:bg-background-8/70 p-3 space-y-1">
                  <span className="text-xs font-semibold text-secondary dark:text-accent block">
                    {c.name}
                  </span>
                  <p className="text-[11px] text-secondary/70 dark:text-accent/70 line-clamp-2">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stroke-3/60 dark:border-stroke-7/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary/60 dark:text-accent/60 text-center sm:text-left">
            Need an enterprise solution like this tailored to your organization?
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm btn-primary inline-flex items-center justify-center gap-1.5 text-xs font-semibold shadow-sm flex-1 sm:flex-none">
                <span>Visit Live Site</span>
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            )}

            <Link
              href={`/case-study/${project.slug}`}
              onClick={onClose}
              className="group/btn-v2 has-v2-icon btn-sm btn-secondary dark:btn-accent hover:btn-primary dark:hover:btn-primary inline-flex items-center justify-center gap-1.5 text-xs font-semibold shadow-sm flex-1 sm:flex-none">
              <span>Read Deep Case Study</span>
              <V2ConveyorArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
