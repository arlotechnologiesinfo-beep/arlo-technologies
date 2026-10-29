'use client';

import Pagination from '@/components/shared/Pagination';
import LinkButton, { V2ConveyorArrow } from '@/components/ui/button/LinkButton';
import { caseStudyCategories, ICaseStudyItem } from '@/data/caseStudies';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import ProjectQuickViewModal from './ProjectQuickViewModal';

interface ProjectsExplorerProps {
  initialProjects: ICaseStudyItem[];
}

type ViewLayout = 'bento' | 'studio' | 'matrix';
type SortOption = 'featured' | 'client-first' | 'title' | 'read-time';

const POPULAR_TECHS = [
  'All Technologies',
  'Next.js',
  'React',
  'TypeScript',
  'Python',
  'Tailwind CSS',
  'LangChain',
  'Node.js',
  'AI / LLM',
  'PostgreSQL',
];

const ITEMS_PER_PAGE = 9;

export default function ProjectsExplorer({ initialProjects }: ProjectsExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string>('All Technologies');
  const [onlyLiveSites, setOnlyLiveSites] = useState<boolean>(false);
  const [viewLayout, setViewLayout] = useState<ViewLayout>('bento');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Quick View Modal State
  const [selectedProject, setSelectedProject] = useState<ICaseStudyItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  // Filter & Sort Logic
  const filteredProjects = useMemo(() => {
    const list = initialProjects.filter((project) => {
      // Category Filter
      const matchesCategory =
        activeCategory === 'all' || project.categoryKey === activeCategory;

      // Live Sites Only Filter
      const matchesLiveOnly = !onlyLiveSites || Boolean(project.liveUrl);

      // Tech Stack Filter
      const techLower = selectedTech.toLowerCase();
      const matchesTech =
        selectedTech === 'All Technologies' ||
        (project.systemArchitecture?.techStack &&
          project.systemArchitecture.techStack.some((t) =>
            t.toLowerCase().includes(techLower)
          ));

      // Search Query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.executiveSummary.challenge.toLowerCase().includes(q) ||
        project.primarySearchIntent.toLowerCase().includes(q) ||
        project.seoKeywords.some((k) => k.toLowerCase().includes(q)) ||
        (project.systemArchitecture?.techStack &&
          project.systemArchitecture.techStack.some((tech) =>
            tech.toLowerCase().includes(q)
          ));

      return matchesCategory && matchesLiveOnly && matchesTech && matchesSearch;
    });

    // Sorting
    return list.sort((a, b) => {
      if (sortBy === 'client-first') {
        if (a.type === 'client-project' && b.type !== 'client-project') return -1;
        if (a.type !== 'client-project' && b.type === 'client-project') return 1;
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'read-time') {
        const timeA = parseInt(a.readTime) || 0;
        const timeB = parseInt(b.readTime) || 0;
        return timeB - timeA;
      }
      // default: 'featured'
      return a.id - b.id;
    });
  }, [initialProjects, activeCategory, onlyLiveSites, selectedTech, searchQuery, sortBy]);

  // Handlers
  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleTechChange = (tech: string) => {
    setSelectedTech(tech);
    setCurrentPage(1);
  };

  const openQuickView = (project: ICaseStudyItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeQuickView = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // GSAP animation on layout/category/page change
  useGSAP(
    () => {
      if (!gridContainerRef.current) return;
      const cards = gridContainerRef.current.querySelectorAll('.project-grid-item');
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.05,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
          }
        );
      }
    },
    { dependencies: [currentPage, activeCategory, viewLayout, sortBy, selectedTech, onlyLiveSites], scope: gridContainerRef }
  );

  const getCategoryCount = (key: string) => {
    if (key === 'all') return initialProjects.length;
    return initialProjects.filter((p) => p.categoryKey === key).length;
  };

  return (
    <div className="space-y-10">
      {/* Interactive Filter & Control Dashboard */}
      <div className="rounded-3xl border border-stroke-3 dark:border-stroke-7 bg-white/70 dark:bg-background-6/70 p-5 sm:p-7 md:p-8 backdrop-blur-xl shadow-lg space-y-6">
        
        {/* Top Control Bar: Search + Quick Toggle + Sort + Layout Modes */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search bar */}
          <div className="relative flex-1 max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search 36+ projects by technology, client, or keyword..."
              aria-label="Search all projects"
              className="w-full rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-8 py-3.5 pr-10 pl-11 text-sm text-secondary dark:text-accent placeholder:text-secondary/40 dark:placeholder:text-accent/40 focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none transition-all shadow-inner"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute top-4 left-4 size-4 text-secondary/40 dark:text-accent/40"
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
                className="absolute top-3.5 right-4 flex items-center justify-center size-5 rounded-full bg-secondary/10 dark:bg-accent/10 hover:bg-secondary/20 dark:hover:bg-accent/20 text-secondary dark:text-accent text-xs transition-colors"
                title="Clear search">
                ✕
              </button>
            )}
          </div>

          {/* Right Toolbar: Live Sites Toggle, Sort & Layout Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Live Sites Only Switch */}
            <button
              type="button"
              onClick={() => {
                setOnlyLiveSites(!onlyLiveSites);
                setCurrentPage(1);
              }}
              className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold transition-all border ${
                onlyLiveSites
                  ? 'bg-ns-green/20 text-emerald-800 dark:text-ns-green border-ns-green shadow-xs'
                  : 'bg-background-1 dark:bg-background-8 text-secondary/70 dark:text-accent/70 border-stroke-3 dark:border-stroke-7 hover:border-secondary dark:hover:border-accent'
              }`}>
              <span className={`size-2 rounded-full ${onlyLiveSites ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
              <span>Live Sites Only</span>
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort projects"
                className="appearance-none cursor-pointer rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-8 py-2.5 pr-8 pl-4 text-xs font-medium text-secondary dark:text-accent hover:border-secondary dark:hover:border-accent focus:outline-none transition-colors">
                <option value="featured">Featured Work</option>
                <option value="client-first">Client Sites First</option>
                <option value="title">Alphabetical (A-Z)</option>
                <option value="read-time">Deepest Architecture</option>
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-3.5 size-3 text-secondary/50 dark:text-accent/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Layout Mode Switcher */}
            <div className="flex items-center rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-8 p-1">
              <button
                type="button"
                onClick={() => setViewLayout('bento')}
                className={`p-1.5 rounded-full transition-all ${
                  viewLayout === 'bento'
                    ? 'bg-secondary text-white dark:bg-accent dark:text-secondary shadow-sm'
                    : 'text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent'
                }`}
                title="Alternating 1 + 2 Layout (1 Full Rectangle + 2 Columns)"
                aria-label="Alternating 1 and 2 Grid view">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6zM4 16a1 1 0 011-1h6a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setViewLayout('studio')}
                className={`p-1.5 rounded-full transition-all ${
                  viewLayout === 'studio'
                    ? 'bg-secondary text-white dark:bg-accent dark:text-secondary shadow-sm'
                    : 'text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent'
                }`}
                title="Studio 3-Column Grid"
                aria-label="Studio 3-Column view">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setViewLayout('matrix')}
                className={`p-1.5 rounded-full transition-all ${
                  viewLayout === 'matrix'
                    ? 'bg-secondary text-white dark:bg-accent dark:text-secondary shadow-sm'
                    : 'text-secondary/60 dark:text-accent/60 hover:text-secondary dark:hover:text-accent'
                }`}
                title="Matrix Compact Visual Grid"
                aria-label="Matrix Compact view">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h4v4H3V4zm7 0h4v4h-4V4zm7 0h4v4h-4V4zM3 10h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4zM3 16h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills Navigation */}
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
                <span>{cat.label === 'All Studies' ? 'All Projects' : cat.label}</span>
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

        {/* Popular Tech Filter Strip */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/50 dark:text-accent/50 mr-1">
            Filter by Tech:
          </span>
          {POPULAR_TECHS.map((tech) => {
            const isTechActive = selectedTech === tech;
            return (
              <button
                key={tech}
                type="button"
                onClick={() => handleTechChange(tech)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  isTechActive
                    ? 'bg-primary-500 text-white shadow-xs'
                    : 'bg-background-2 dark:bg-background-8 text-secondary/70 dark:text-accent/70 hover:bg-stroke-3 dark:hover:bg-stroke-7'
                }`}>
                {tech}
              </button>
            );
          })}
        </div>

        {/* Status Ticker & Filter Feedback */}
        <div className="flex flex-wrap items-center justify-between text-xs text-secondary/60 dark:text-accent/60 pt-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-ns-green animate-pulse" />
            <span>
              Displaying <strong className="text-secondary dark:text-accent">{filteredProjects.length}</strong> of{' '}
              {initialProjects.length} production projects
            </span>
            {searchQuery && (
              <span className="ml-1 rounded bg-secondary/10 dark:bg-accent/10 px-2 py-0.5">
                Query: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
            {selectedTech !== 'All Technologies' && (
              <span className="rounded bg-primary-500/15 text-primary-600 dark:text-primary-400 px-2 py-0.5">
                Tech: {selectedTech}
              </span>
            )}
          </div>
          {(activeCategory !== 'all' || searchQuery || selectedTech !== 'All Technologies' || onlyLiveSites) && (
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedTech('All Technologies');
                setOnlyLiveSites(false);
                setCurrentPage(1);
              }}
              className="text-primary-600 dark:text-primary-400 hover:underline">
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* Grid View Rendering */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-stroke-3 dark:border-stroke-7 p-14 text-center space-y-5 bg-white/40 dark:bg-background-6/40 backdrop-blur-md">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary/5 dark:bg-accent/5 text-secondary dark:text-accent">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
            No projects matched your criteria
          </h3>
          <p className="text-secondary/70 dark:text-accent/70 text-sm max-w-md mx-auto">
            Try adjusting your search query, switching technology filters, or toggling off the &ldquo;Live Sites Only&rdquo; filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
              setSelectedTech('All Technologies');
              setOnlyLiveSites(false);
            }}
            className="group/btn-v2 has-v2-icon btn btn-md btn-secondary dark:btn-accent hover:btn-primary dark:hover:btn-primary inline-flex items-center justify-center gap-1.5 shadow-sm">
            <span>Clear Filters &amp; View All</span>
            <V2ConveyorArrow />
          </button>
        </div>
      ) : (
        <div
          ref={gridContainerRef}
          className={`grid gap-8 items-stretch ${
            viewLayout === 'bento'
              ? 'grid-cols-1 lg:grid-cols-12'
              : viewLayout === 'studio'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}>
          {currentItems.map((project, index) => {
            const isClientProject = project.type === 'client-project';
            const techStack = project.systemArchitecture?.techStack?.slice(0, 5) || [];
            const architectureComponents = project.systemArchitecture?.components?.slice(0, 3) || [];
            
            // 1 Full Rectangle Width, then 2 per column rhythm
            const isFullWidth = viewLayout === 'bento' && index % 3 === 0;
            const isOrphan = viewLayout === 'bento' && index % 3 === 1 && index === currentItems.length - 1;
            const colSpanClass =
              viewLayout === 'bento'
                ? isFullWidth || isOrphan
                  ? 'col-span-1 lg:col-span-12'
                  : 'col-span-1 lg:col-span-6'
                : 'col-span-1';

            // --- FULL RECTANGLE WIDTH CARD (index % 3 === 0) ---
            if (isFullWidth || isOrphan) {
              return (
                <div
                  key={project.slug}
                  className={`project-grid-item flex flex-col h-full ${colSpanClass}`}>
                  <article className="group relative h-full flex flex-col justify-between bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 bg-gradient-to-br from-white via-white to-primary-50/30 dark:from-background-6 dark:via-background-6 dark:to-primary-950/20">
                    
                    {/* Full-width Panoramic Thumbnail Banner */}
                    <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] xl:h-[520px] overflow-hidden bg-background-2 dark:bg-background-7">
                      <Link href={`/case-study/${project.slug}`} tabIndex={-1} className="block size-full">
                        <Image
                          src={project.thumbnail}
                          alt={project.imageAlt}
                          width={1400}
                          height={720}
                          priority={index === 0}
                          unoptimized
                          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/35 opacity-65 transition-opacity duration-300 group-hover:opacity-45" />
                      </Link>

                      {/* Top Left: Category Badge & Client Status */}
                      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex flex-wrap items-center gap-2 z-10 pointer-events-none">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md shadow-md ${
                            isClientProject
                              ? 'bg-ns-green text-secondary border border-ns-green-light font-bold'
                              : 'bg-secondary/90 dark:bg-accent/90 text-white dark:text-secondary'
                          }`}>
                          {isClientProject && <span className="size-2 rounded-full bg-emerald-600 animate-ping" />}
                          {isClientProject ? 'Delivered Client Website' : project.categoryLabel}
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white/90">
                          Featured Architecture
                        </span>
                      </div>

                      {/* Top Right: Live URL Link Button */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Visit ${project.title} live website`}
                          aria-label={`Visit live site for ${project.title}`}
                          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 flex items-center gap-2 rounded-full bg-white/95 dark:bg-background-9/95 px-4 py-2 text-xs font-semibold text-secondary dark:text-accent shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white">
                          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Visit Live Website</span>
                          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </a>
                      )}

                      {/* Bottom Media Bar: Primary Focus & Quick View Trigger */}
                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex flex-wrap items-center justify-between gap-3 z-10">
                        <span className="text-xs sm:text-sm text-white/90 font-medium px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md">
                          Domain: {project.primarySearchIntent}
                        </span>

                        <button
                          type="button"
                          onClick={() => openQuickView(project)}
                          className="flex items-center gap-2 rounded-full bg-secondary/85 hover:bg-secondary dark:bg-accent/85 dark:hover:bg-accent text-white dark:text-secondary px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105">
                          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>Quick Specs Preview</span>
                        </button>
                      </div>
                    </div>

                    {/* Full-width 2-Column Responsive Content Strip */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                      {/* Left: Project Header, Headline, & Challenge */}
                      <div className="space-y-4 lg:max-w-[58%]">
                        <div className="flex items-center gap-3 text-xs text-secondary/60 dark:text-accent/60">
                          <span className="font-semibold uppercase tracking-wider text-tagline-2 text-primary-600 dark:text-primary-400">
                            {project.categoryLabel}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 font-medium">
                            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {project.readTime}
                          </span>
                        </div>

                        <Link href={`/case-study/${project.slug}`} className="block group/title">
                          <h3 className="text-heading-5 sm:text-heading-4 md:text-heading-3 font-normal leading-snug transition-colors duration-300 group-hover/title:text-primary-600 dark:group-hover/title:text-primary-400">
                            {project.title}
                          </h3>
                        </Link>

                        <p className="text-sm sm:text-base text-secondary/75 dark:text-accent/75 leading-relaxed line-clamp-3">
                          {project.executiveSummary.challenge}
                        </p>

                        {/* Core Architecture Components Strip */}
                        {architectureComponents.length > 0 && (
                          <div className="pt-2 flex flex-wrap gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary/50 dark:text-accent/50 self-center mr-1">
                              Blueprint:
                            </span>
                            {architectureComponents.map((comp, ci) => (
                              <span
                                key={ci}
                                className="rounded-md border border-stroke-3/70 dark:border-stroke-7/70 bg-background-2/70 dark:bg-background-8/70 px-2.5 py-1 text-xs text-secondary/80 dark:text-accent/80 font-medium">
                                {comp.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: Tech Stack Pills & Actions */}
                      <div className="lg:max-w-[38%] w-full flex flex-col justify-between space-y-5 lg:border-l lg:border-stroke-3/60 dark:lg:border-stroke-7/60 lg:pl-8">
                        <div className="space-y-2.5">
                          <span className="text-xs font-semibold uppercase tracking-wider text-secondary/60 dark:text-accent/60 block">
                            Production Technology Stack
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {techStack.map((tech) => (
                              <button
                                key={tech}
                                type="button"
                                onClick={() => handleTechChange(tech)}
                                title={`Filter projects by ${tech}`}
                                className="rounded-lg border border-stroke-3 dark:border-stroke-7 bg-background-2 dark:bg-background-8 px-3 py-1 text-xs font-medium text-secondary/80 dark:text-accent/80 hover:border-primary-500 hover:text-primary-600 transition-colors">
                                {tech}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Full-width Card Action Buttons */}
                        <div className="pt-4 border-t border-stroke-3/60 dark:border-stroke-7/60 flex flex-wrap items-center gap-3">
                          <LinkButton
                            href={`/case-study/${project.slug}`}
                            className="btn btn-primary btn-md shadow-md text-xs sm:text-sm"
                            aria-label={`Read in-depth case study: ${project.title}`}>
                            <span>Read Deep Case Study</span>
                            <V2ConveyorArrow />
                          </LinkButton>

                          <button
                            type="button"
                            onClick={() => openQuickView(project)}
                            className="btn btn-white dark:btn-transparent border border-stroke-3 dark:border-stroke-7 hover:border-secondary dark:hover:border-accent btn-md text-xs sm:text-sm">
                            Quick Specs
                          </button>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-secondary/80 dark:text-accent/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2 px-1">
                              <span>Live Site</span>
                              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            }

            // --- 2 PER COLUMN CARDS (index % 3 === 1 or 2, or studio/matrix layout) ---
            return (
              <div
                key={project.slug}
                className={`project-grid-item flex flex-col h-full ${colSpanClass}`}>
                <article className="group relative h-full flex flex-col justify-between bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 rounded-[26px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10">
                  
                  {/* Card Thumbnail / Media Container */}
                  <div
                    className={`relative w-full overflow-hidden bg-background-2 dark:bg-background-7 ${
                      viewLayout === 'matrix'
                        ? 'h-[190px]'
                        : 'h-[250px] sm:h-[290px] lg:h-[310px]'
                    }`}>
                    <Link href={`/case-study/${project.slug}`} tabIndex={-1} className="block size-full">
                      <Image
                        src={project.thumbnail}
                        alt={project.imageAlt}
                        width={750}
                        height={460}
                        unoptimized
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25 opacity-70 transition-opacity duration-300 group-hover:opacity-45" />
                    </Link>

                    {/* Top Left: Category or Client Badge */}
                    <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-1.5 z-10 pointer-events-none">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-md ${
                          isClientProject
                            ? 'bg-ns-green/95 text-secondary border border-ns-green-light font-bold'
                            : 'bg-secondary/90 dark:bg-accent/90 text-white dark:text-secondary'
                        }`}>
                        {isClientProject && <span className="size-1.5 rounded-full bg-emerald-600 animate-ping" />}
                        {isClientProject ? 'Live Client Site' : project.categoryLabel}
                      </span>
                    </div>

                    {/* Top Right: Live URL Link Button */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${project.title} live website`}
                        aria-label={`Visit live site for ${project.title}`}
                        className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-background-9/95 px-3 py-1 text-xs font-medium text-secondary dark:text-accent shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live Site</span>
                        <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    )}

                    {/* Hover Overlay Quick View Trigger Button */}
                    <button
                      type="button"
                      onClick={() => openQuickView(project)}
                      className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-secondary/80 hover:bg-secondary dark:bg-accent/80 dark:hover:bg-accent text-white dark:text-secondary px-3 py-1 text-xs font-medium shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100">
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Quick View</span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className={`flex flex-1 flex-col justify-between space-y-4 ${
                    viewLayout === 'matrix' ? 'p-4 sm:p-5' : 'p-6 sm:p-7'
                  }`}>
                    <div className="space-y-3">
                      {/* Meta header */}
                      <div className="flex items-center justify-between text-xs text-secondary/60 dark:text-accent/60">
                        <span className="font-semibold uppercase tracking-wider text-tagline-2 text-primary-600 dark:text-primary-400">
                          {project.categoryLabel}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {project.readTime}
                        </span>
                      </div>

                      {/* Project Title */}
                      <Link href={`/case-study/${project.slug}`} className="block group/title">
                        <h3 className={`font-normal leading-snug line-clamp-2 transition-colors duration-300 group-hover/title:text-primary-600 dark:group-hover/title:text-primary-400 ${
                          viewLayout === 'matrix'
                            ? 'text-base font-medium'
                            : 'text-heading-6 sm:text-heading-5'
                        }`}>
                          {project.title}
                        </h3>
                      </Link>

                      {/* Executive Challenge / Snippet */}
                      <p className={`text-tagline-2 text-secondary/75 dark:text-accent/75 leading-relaxed ${
                        viewLayout === 'matrix' ? 'line-clamp-2 text-xs' : 'line-clamp-3'
                      }`}>
                        {project.executiveSummary.challenge}
                      </p>

                      {/* Tech Stack Chips */}
                      {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {techStack.map((tech) => (
                            <button
                              key={tech}
                              type="button"
                              onClick={() => handleTechChange(tech)}
                              title={`Filter by ${tech}`}
                              className="rounded-md border border-stroke-3/80 dark:border-stroke-7/80 bg-background-2/80 dark:bg-background-8/80 px-2.5 py-0.5 text-[11px] font-medium text-secondary/70 dark:text-accent/70 hover:border-primary-500 hover:text-primary-600 transition-colors">
                              {tech}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-4 border-t border-stroke-3/60 dark:border-stroke-7/60 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <LinkButton
                          href={`/case-study/${project.slug}`}
                          className="btn-sm btn-secondary hover:btn-primary dark:btn-accent dark:hover:btn-primary text-xs shadow-sm"
                          aria-label={`Read case study: ${project.title}`}>
                          Case Study
                        </LinkButton>

                        <button
                          type="button"
                          onClick={() => openQuickView(project)}
                          className="btn-sm btn-white dark:btn-transparent border border-stroke-3 dark:border-stroke-7 hover:border-secondary dark:hover:border-accent text-xs"
                          title="Open quick specifications preview">
                          Preview
                        </button>
                      </div>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-secondary/80 dark:text-accent/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          <span>Live Site</span>
                          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-xs text-secondary/40 dark:text-accent/40 font-mono">
                          {project.publishedAt.slice(0, 4)} • Solution
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
            totalItems={filteredProjects.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
              if (typeof window !== 'undefined') {
                const explorerSection = document.getElementById('projects-explorer-grid');
                if (explorerSection) {
                  explorerSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }
              }
            }}
          />
        </div>
      )}

      {/* Interactive Quick View Modal */}
      <ProjectQuickViewModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeQuickView}
      />
    </div>
  );
}
