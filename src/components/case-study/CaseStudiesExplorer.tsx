'use client';

import Pagination from '@/components/shared/Pagination';
import LinkButton, { V2ConveyorArrow } from '@/components/ui/button/LinkButton';
import { caseStudyCategories, ICaseStudyItem } from '@/data/caseStudies';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';

interface CaseStudiesExplorerProps {
  initialStudies: ICaseStudyItem[];
}

const ITEMS_PER_PAGE = 9;

type ViewMode = 'grid' | 'wide';
type SortOption = 'featured' | 'client-first' | 'title';

export default function CaseStudiesExplorer({ initialStudies }: CaseStudiesExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Category Icon Mapping
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'client-projects':
        return (
          <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        );
      case 'ai-agents':
        return (
          <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'ai-products':
        return (
          <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'web-dev':
        return (
          <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'ui-ux':
        return (
          <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4 5 5 0 015-5h4a5 5 0 015 5 4 4 0 01-4 4H7zM15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'industry-solutions':
        return (
          <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      default:
        return (
          <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        );
    }
  };

  // Filtered & Sorted studies
  const filteredStudies = useMemo(() => {
    const list = initialStudies.filter((study) => {
      const matchesCategory =
        activeCategory === 'all' || study.categoryKey === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        study.title.toLowerCase().includes(q) ||
        study.executiveSummary.challenge.toLowerCase().includes(q) ||
        study.primarySearchIntent.toLowerCase().includes(q) ||
        study.seoKeywords.some((k) => k.toLowerCase().includes(q)) ||
        (study.systemArchitecture?.techStack &&
          study.systemArchitecture.techStack.some((tech) => tech.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });

    // Sorting
    return list.sort((a, b) => {
      if (sortBy === 'client-first') {
        if (a.type === 'client-project' && b.type !== 'client-project') {return -1;}
        if (a.type !== 'client-project' && b.type === 'client-project') {return 1;}
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      // default 'featured'
      return a.id - b.id;
    });
  }, [initialStudies, activeCategory, searchQuery, sortBy]);

  // Reset to page 1 when filter/search/sort changes
  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredStudies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredStudies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // GSAP animation for cards when page, category or view mode updates
  useGSAP(
    () => {
      if (!gridContainerRef.current) {return;}
      const cards = gridContainerRef.current.querySelectorAll('.project-card-animate');
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 26, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.06,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
          }
        );
      }
    },
    { dependencies: [currentPage, activeCategory, viewMode, sortBy], scope: gridContainerRef }
  );

  // Count helper
  const getCategoryCount = (key: string) => {
    if (key === 'all') {return initialStudies.length;}
    return initialStudies.filter((s) => s.categoryKey === key).length;
  };

  return (
    <div className="space-y-10">
      {/* Search, Filter Tabs & Control Bar */}
      <div className="rounded-3xl border border-stroke-3 dark:border-stroke-7 bg-white/70 dark:bg-background-6/70 p-4 sm:p-6 md:p-8 backdrop-blur-xl shadow-sm space-y-6">
        
        {/* Top Row: Search Input + View Mode & Sort Dropdown */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search bar */}
          <div className="relative flex-1 max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by tech (e.g. Next.js, LangChain), keyword, or title..."
              aria-label="Search case studies and projects"
              className="w-full rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-8 py-3 pr-10 pl-11 text-sm text-secondary dark:text-accent placeholder:text-secondary/40 dark:placeholder:text-accent/40 focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none transition-all shadow-inner"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute top-3.5 left-4 size-4 text-secondary/40 dark:text-accent/40"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                className="absolute top-3 right-4 flex items-center justify-center size-5 rounded-full bg-secondary/10 dark:bg-accent/10 hover:bg-secondary/20 dark:hover:bg-accent/20 text-secondary dark:text-accent text-xs transition-colors"
                title="Clear search">
                ✕
              </button>
            )}
          </div>

          {/* Right Controls: Sort & View Toggle */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort projects"
                className="appearance-none cursor-pointer rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-8 py-2.5 pr-8 pl-4 text-xs font-medium text-secondary dark:text-accent hover:border-secondary dark:hover:border-accent focus:outline-none transition-colors">
                <option value="featured">Featured First</option>
                <option value="client-first">Client Sites First</option>
                <option value="title">Alphabetical</option>
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-3.5 size-3 text-secondary/50 dark:text-accent/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-8 p-1">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === 'grid'
                    ? 'bg-secondary text-white dark:bg-accent dark:text-secondary shadow-sm'
                    : 'text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent'
                }`}
                title="Standard 3-Column Grid View"
                aria-label="Grid view">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('wide')}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === 'wide'
                    ? 'bg-secondary text-white dark:bg-accent dark:text-secondary shadow-sm'
                    : 'text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent'
                }`}
                title="Wide Spotlight 2-Column View"
                aria-label="Wide spotlight view">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills Slider / Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stroke-3/50 dark:border-stroke-7/50">
          {caseStudyCategories.map((cat) => {
            const isActive = activeCategory === cat.key;
            const isClientProjects = cat.key === 'client-projects';
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategoryChange(cat.key)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
                  isActive
                    ? 'bg-secondary dark:bg-accent text-white dark:text-secondary shadow-md ring-2 ring-primary-500/20'
                    : isClientProjects
                    ? 'bg-primary-500/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-300 border border-primary-500/30 hover:border-primary-500'
                    : 'bg-background-1 dark:bg-background-8 text-secondary/75 dark:text-accent/75 hover:bg-background-2 dark:hover:bg-background-7 border border-stroke-3 dark:border-stroke-7'
                }`}>
                <span className={isActive ? 'text-primary-300 dark:text-primary-600' : 'text-secondary/50 dark:text-accent/50'}>
                  {getCategoryIcon(cat.key)}
                </span>
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    isActive
                      ? 'bg-white/20 dark:bg-secondary/20 text-white dark:text-secondary'
                      : isClientProjects
                      ? 'bg-primary-500/20 text-primary-700 dark:text-primary-300'
                      : 'bg-stroke-3/80 dark:bg-stroke-7 text-secondary/60 dark:text-accent/60'
                  }`}>
                  {getCategoryCount(cat.key)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status ticker & Active query feedback */}
        <div className="flex flex-wrap items-center justify-between text-xs text-secondary/60 dark:text-accent/60 pt-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-ns-green animate-pulse" />
            <span>
              Showing <strong className="text-secondary dark:text-accent">{filteredStudies.length}</strong> of{' '}
              {initialStudies.length} production works
            </span>
            {searchQuery && (
              <span className="ml-1 rounded bg-secondary/10 dark:bg-accent/10 px-2 py-0.5">
                Keyword: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>
          {activeCategory !== 'all' && (
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className="text-primary-600 dark:text-primary-400 hover:underline">
              Clear category filter
            </button>
          )}
        </div>
      </div>

      {/* Grid / List of Case Studies */}
      {filteredStudies.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-stroke-3 dark:border-stroke-7 p-14 text-center space-y-5 bg-white/40 dark:bg-background-6/40 backdrop-blur-md">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary/5 dark:bg-accent/5 text-secondary dark:text-accent">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
            No matches found for &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="text-secondary/70 dark:text-accent/70 text-sm max-w-md mx-auto">
            Try adjusting your search query, selecting another category, or clearing filters to view all projects.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="group/btn-v2 has-v2-icon btn btn-md btn-secondary dark:btn-accent hover:btn-primary dark:hover:btn-primary inline-flex items-center justify-center gap-1.5 shadow-sm">
            <span>Reset All Filters</span>
            <V2ConveyorArrow />
          </button>
        </div>
      ) : (
        <div
          ref={gridContainerRef}
          className={`grid gap-8 items-stretch ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 lg:grid-cols-2'
          }`}>
          {currentItems.map((study) => {
            const isClientProject = study.type === 'client-project';
            const techStack = study.systemArchitecture?.techStack?.slice(0, 4) || [];

            return (
              <div
                key={study.slug}
                className="project-card-animate flex flex-col h-full">
                <article className="group h-full flex flex-col justify-between bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 rounded-[26px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/40 dark:hover:border-primary-400/40 hover:shadow-2xl hover:shadow-primary-500/10">
                  {/* Thumbnail Container */}
                  <div className={`relative w-full overflow-hidden bg-background-2 dark:bg-background-7 ${
                    viewMode === 'wide' ? 'h-[280px] sm:h-[320px]' : 'h-[240px]'
                  }`}>
                    <Link href={`/case-study/${study.slug}`} tabIndex={-1} className="block size-full">
                      <Image
                        src={study.thumbnail}
                        alt={study.imageAlt}
                        width={700}
                        height={420}
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      {/* Subtle gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                    </Link>

                    {/* Top Left: Badge Type */}
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10 pointer-events-none">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-md ${
                          isClientProject
                            ? 'bg-ns-green/95 text-secondary border border-ns-green-light font-bold'
                            : 'bg-secondary/90 dark:bg-accent/90 text-white dark:text-secondary'
                        }`}>
                        {isClientProject && (
                          <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-ping" />
                        )}
                        {isClientProject ? 'Delivered Client Website' : 'Production Solution'}
                      </span>
                    </div>

                    {/* Top Right: Corner Link for Live Site */}
                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${study.title} live website`}
                        aria-label={`Visit live website for ${study.title}`}
                        className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-background-9/95 px-3 py-1 text-xs font-medium text-secondary dark:text-accent shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-3.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                        <span>Live Site</span>
                        <svg
                          className="size-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 space-y-5">
                    <div className="space-y-3">
                      {/* Category Label & Read Time */}
                      <div className="flex items-center justify-between text-xs text-secondary/60 dark:text-accent/60">
                        <span className="font-semibold uppercase tracking-wider text-tagline-2 text-primary-600 dark:text-primary-400">
                          {study.categoryLabel}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {study.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <Link href={`/case-study/${study.slug}`} className="block group/title">
                        <h3 className="text-heading-6 sm:text-heading-5 font-normal leading-snug line-clamp-2 transition-colors duration-300 group-hover/title:text-primary-600 dark:group-hover/title:text-primary-400">
                          {study.title}
                        </h3>
                      </Link>

                      {/* Challenge Summary */}
                      <p className="text-tagline-2 text-secondary/75 dark:text-accent/75 line-clamp-3 leading-relaxed">
                        {study.executiveSummary.challenge}
                      </p>

                      {/* Tech Stack Chips */}
                      {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-stroke-3/80 dark:border-stroke-7/80 bg-background-2/80 dark:bg-background-8/80 px-2.5 py-0.5 text-[11px] font-medium text-secondary/70 dark:text-accent/70">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer: Action Buttons */}
                    <div className="pt-4 border-t border-stroke-3/60 dark:border-stroke-7/60 flex items-center justify-between gap-3">
                      <LinkButton
                        href={`/case-study/${study.slug}`}
                        className="btn-sm btn-secondary hover:btn-primary dark:btn-accent dark:hover:btn-primary text-xs shadow-sm"
                        aria-label={`Read case study: ${study.title}`}>
                        Read Case Study
                      </LinkButton>

                      {study.liveUrl ? (
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-secondary/80 dark:text-accent/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          <span>Visit Website</span>
                          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-xs text-secondary/40 dark:text-accent/40 font-mono">
                          {study.publishedAt.slice(0, 4)} • Solution
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pt-8">
          <Pagination
            totalItems={filteredStudies.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
              if (typeof window !== 'undefined') {
                const explorerSection = document.getElementById('case-studies-explorer');
                if (explorerSection) {
                  explorerSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
