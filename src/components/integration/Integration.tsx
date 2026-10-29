'use client';

import { ArrowIcon } from '@/icons';
import {
  CATEGORIES,
  auditedCurrentStack,
  integrationToolsData,
} from '@/data/integrationToolsData';
import integrationBg from '@public/images/ns-img-24.png';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Integration = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Featured');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTools = useMemo(() => {
    return integrationToolsData.filter((tool) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'Featured'
          ? tool.featured
          : selectedCategory === 'All'
            ? true
            : tool.category === selectedCategory;

      // Search query filter
      const matchesSearch =
        searchQuery.trim() === '' ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="pt-[120px] pb-24 md:pb-32 lg:pb-40 xl:pt-[160px] xl:pb-48 2xl:pb-[200px]">
      <RevealAnimation delay={0.1}>
        <div className="bg-secondary relative z-0 mx-auto w-[95%] overflow-hidden rounded-4xl px-4 py-10 md:px-10 md:py-16 2xl:max-w-[1440px] 2xl:px-[80px] 2xl:py-[90px]">
          <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
            <Image src={integrationBg} alt="integration background" className="h-full w-full object-cover" />
          </div>

          <div className="mx-auto max-w-[1140px]">
            {/* Header */}
            <div className="mb-12 flex flex-col items-center gap-y-3 text-center md:mb-16">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-blur text-ns-cyan mb-3">Integrations &amp; Tech Ecosystem</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="text-accent text-heading-3 sm:text-heading-2 md:text-heading-1 mx-auto max-w-[850px] font-normal">
                  Connected Platforms. Modern Technology Stack.
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/70 max-w-[650px] text-base sm:text-lg leading-relaxed">
                  Discover the website builders, creative platforms, developer tools, AI APIs, and cloud services Arlo Technologies builds with and connects to.
                </p>
              </RevealAnimation>
            </div>

            {/* Search & Category Filter Controls */}
            <div className="mb-10 space-y-6">
              <div className="mx-auto max-w-[500px]">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tools, platforms, frameworks, or APIs..."
                    className="w-full rounded-full bg-white/10 px-5 py-3.5 pl-11 text-sm text-accent placeholder:text-accent/50 outline-none backdrop-blur-md border border-white/15 focus:border-white/40 focus:ring-1 focus:ring-white/30 transition-all"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-accent/50 pointer-events-none">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-accent/60 hover:text-accent">
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-[1000px] mx-auto">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('Featured')}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    selectedCategory === 'Featured'
                      ? 'bg-ns-green text-black font-semibold shadow-sm'
                      : 'bg-white/10 text-accent/80 hover:bg-white/20'
                  }`}>
                  Featured (24)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    selectedCategory === 'All'
                      ? 'bg-ns-green text-black font-semibold shadow-sm'
                      : 'bg-white/10 text-accent/80 hover:bg-white/20'
                  }`}>
                  All Tools ({integrationToolsData.length})
                </button>
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-ns-green text-black font-semibold shadow-sm'
                        : 'bg-white/10 text-accent/80 hover:bg-white/20'
                    }`}>
                    {category}
                  </button>
                ))}
              </div>

              {/* Status Indicator Legend */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-accent/70 pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  <strong>Live</strong>: Verified working in projects
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-cyan-400" />
                  <strong>Planned</strong>: Approved roadmap integration
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-amber-400" />
                  <strong>Potential</strong>: Under active evaluation
                </span>
              </div>
            </div>

            {/* Results Counter */}
            <div className="mb-6 flex items-center justify-between px-2 text-xs text-accent/60">
              <span>
                Showing <strong>{filteredTools.length}</strong> platform{filteredTools.length === 1 ? '' : 's'}
                {selectedCategory === 'Featured' && ' in Featured Directory'}
                {selectedCategory !== 'Featured' && selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </span>
              <span className="text-[11px] font-mono">Real Brand Assets • Direct Documentation</span>
            </div>

            {/* Tool Directory Grid */}
            {filteredTools.length === 0 ? (
              <div className="rounded-2xl bg-white/10 p-12 text-center text-accent/70">
                <p className="text-base">No tools matched your search criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Featured');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-xs text-ns-cyan underline">
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="integration-container mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTools.map((tool, index) => {
                  const statusBadgeClass =
                    tool.status === 'Live'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : tool.status === 'Planned'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30';

                  return (
                    <RevealAnimation key={tool.id} delay={0.05 * (index % 6)} instant={index <= 5}>
                      <div className="group h-full">
                        <a
                          href={tool.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit official ${tool.name} website (${tool.status} status)`}
                          className="group-hover:shadow-1 flex flex-col justify-between rounded-[20px] bg-white/12 p-5 transition-all duration-300 ease-in-out group-hover:scale-[102%] md:p-6 h-full border border-white/10 hover:border-white/30 backdrop-blur-sm">
                          <div>
                            {/* Card Header with Logo, Name & Status */}
                            <div className="flex items-start justify-between gap-3 mb-3.5">
                              <div className="flex items-center gap-3">
                                <div className="flex size-13 shrink-0 items-center justify-center rounded-xl bg-white p-2.5 transition-transform duration-300 group-hover:scale-105 shadow-sm overflow-hidden">
                                  {tool.localAssetPath ? (
                                    <Image
                                      src={tool.localAssetPath}
                                      alt={`${tool.name} logo`}
                                      width={36}
                                      height={36}
                                      className="max-h-full max-w-full object-contain"
                                    />
                                  ) : (
                                    <span className="font-bold text-secondary text-xs tracking-tight text-center leading-tight">
                                      {tool.name.slice(0, 4).toUpperCase()}
                                    </span>
                                  )}
                                </div>
                                <div>
                                  <h4 className="text-accent text-base font-semibold leading-snug group-hover:text-ns-cyan transition-colors">
                                    {tool.name}
                                  </h4>
                                  <p className="text-accent/60 text-xs font-medium">{tool.tagline}</p>
                                </div>
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide shrink-0 ${statusBadgeClass}`}>
                                {tool.status}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-accent/75 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                              {tool.description}
                            </p>
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                            <span className="text-accent/50 text-[11px] truncate max-w-[190px]">
                              {tool.category}
                            </span>
                            <div className="bg-ns-green group-hover:bg-ns-green/90 relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full transition-all duration-300 ease-in-out">
                              <ArrowIcon className="absolute size-3.5 -translate-x-6 stroke-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
                              <ArrowIcon className="absolute size-3.5 translate-x-0 stroke-black opacity-100 transition-all duration-300 ease-in-out group-hover:translate-x-6 group-hover:opacity-0" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </RevealAnimation>
                  );
                })}
              </div>
            )}

            {/* SEPARATE SECTION: Arlo's Verified Current Technology Stack */}
            <div className="mt-16 pt-14 border-t border-white/15">
              <RevealAnimation delay={0.2}>
                <div className="mb-10 text-center space-y-3">
                  <span className="badge badge-blur text-ns-cyan mb-2">Audited Repository Stack</span>
                  <h2 className="text-accent text-heading-4 sm:text-heading-3 md:text-heading-2 font-normal">
                    Technologies Built Into Arlo&apos;s Active Codebases
                  </h2>
                  <p className="text-accent/70 max-w-[650px] mx-auto text-sm sm:text-base leading-relaxed">
                    Audited directly from project repositories, package manifests, and delivered client platforms. These technologies are verified in live production use.
                  </p>
                </div>
              </RevealAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {auditedCurrentStack.map((group, groupIdx) => (
                  <RevealAnimation key={group.category} delay={0.1 * groupIdx + 0.2}>
                    <div className="rounded-2xl bg-white/10 p-6 border border-white/10 backdrop-blur-md h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-accent font-semibold text-sm sm:text-base mb-4 text-ns-cyan flex items-center gap-2">
                          <span className="size-2 rounded-full bg-ns-cyan inline-block shrink-0" />
                          {group.category}
                        </h3>
                        <ul className="space-y-4">
                          {group.technologies.map((tech) => (
                            <li key={tech.name} className="flex items-start justify-between gap-3 text-xs sm:text-sm">
                              <div className="flex items-start gap-3">
                                {tech.localAssetPath ? (
                                  <div className="size-8 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                                    <Image
                                      src={tech.localAssetPath}
                                      alt={tech.name}
                                      width={20}
                                      height={20}
                                      className="object-contain"
                                    />
                                  </div>
                                ) : (
                                  <div className="size-8 rounded-lg bg-white/20 text-accent text-[11px] font-bold flex items-center justify-center shrink-0">
                                    {tech.name.slice(0, 2).toUpperCase()}
                                  </div>
                                )}
                                <div>
                                  <a
                                    href={tech.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent font-medium hover:text-ns-cyan transition-colors inline-flex items-center gap-1">
                                    {tech.name}
                                  </a>
                                  <p className="text-accent/60 text-xs mt-0.5">{tech.role}</p>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-accent/50 text-right shrink-0 max-w-[130px] pt-0.5">
                                {tech.verificationSource}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <RevealAnimation delay={0.4}>
              <div className="mt-14 text-center">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-white btn-xl hover:btn-primary dark:btn-transparent block w-[90%] md:inline-block md:w-auto">
                  Discuss an Integration or Tech Project
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

Integration.displayName = 'Integration';
export default Integration;
