'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { ICaseStudyItem } from '@/data/caseStudies';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CaseStudyArticleProps {
  study: ICaseStudyItem;
}

const CaseStudyArticle = ({ study }: CaseStudyArticleProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isClientProject = study.type === 'client-project';

  return (
    <article className="pt-28 pb-16 sm:pt-32 md:pt-36 lg:pt-40 lg:pb-24">
      {/* Top Header / Breadcrumb & Titles */}
      <header className="main-container mb-12 lg:mb-16">
        <div className="max-w-[920px] mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-secondary/60 dark:text-accent/60 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-study" className="hover:text-primary transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-secondary/80 dark:text-accent/80">{study.categoryLabel}</span>
          </nav>

          {/* Badges and Read Time */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isClientProject
                  ? 'bg-primary text-secondary font-bold'
                  : 'bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent border border-stroke-3 dark:border-stroke-7'
              }`}>
              {isClientProject ? 'Delivered Client Project' : 'Solution Study'}
            </span>
            <span className="badge badge-cyan !normal-case text-xs">{study.categoryLabel}</span>
            <span className="text-xs text-secondary/60 dark:text-accent/60">• {study.readTime}</span>
            <span className="text-xs text-secondary/60 dark:text-accent/60">• Updated {study.lastReviewed}</span>
          </div>

          {/* Main H1 Title */}
          <RevealAnimation delay={0.1}>
            <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal leading-tight">
              {study.title}
            </h1>
          </RevealAnimation>

          {/* Lead Intro */}
          <RevealAnimation delay={0.2}>
            <p className="text-lg sm:text-xl text-secondary/80 dark:text-accent/80 leading-relaxed font-normal">
              {study.intro}
            </p>
          </RevealAnimation>

          {/* Status / Transparency Notice Pill */}
          <div className="rounded-xl border border-stroke-3 dark:border-stroke-7 bg-background-2 dark:bg-background-6 p-4 text-xs leading-relaxed text-secondary/80 dark:text-accent/80 flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 shrink-0 mt-0.5 text-primary"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
            <p>{study.statusNotice}</p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="main-container mb-16 lg:mb-20">
        <RevealAnimation delay={0.3}>
          <figure className="max-w-[1100px] mx-auto overflow-hidden rounded-[24px] border border-stroke-3 dark:border-stroke-7 shadow-lg bg-background-2 dark:bg-background-6">
            <Image
              src={study.thumbnail}
              alt={study.imageAlt}
              width={1200}
              height={700}
              priority
              className="size-full object-cover max-h-[600px]"
            />
            {study.liveUrl && (
              <div className="p-4 bg-background-1 dark:bg-background-7 flex items-center justify-between border-t border-stroke-3 dark:border-stroke-7">
                <span className="text-xs text-secondary/70 dark:text-accent/70">
                  Verified Production Deployment: {study.liveUrl}
                </span>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary hover:btn-secondary dark:hover:btn-accent inline-flex items-center gap-1.5 text-xs">
                  <span>Visit Live Website</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-3.5">
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            )}
          </figure>
        </RevealAnimation>
      </div>

      {/* Main Narrative Body */}
      <div className="main-container">
        <div className="max-w-[880px] mx-auto space-y-16">
          {/* Executive Summary Card */}
          <section className="bg-background-2 dark:bg-background-6 rounded-[24px] p-8 sm:p-10 border border-stroke-3 dark:border-stroke-7 space-y-6">
            <div className="space-y-1">
              <span className="badge badge-green !normal-case text-xs">Overview</span>
              <h2 className="text-heading-4 font-normal">Executive Summary</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2 bg-background-1 dark:bg-background-5 p-5 rounded-2xl border border-stroke-3 dark:border-stroke-7">
                <h3 className="text-sm font-semibold text-secondary dark:text-accent uppercase tracking-wider">
                  The Challenge
                </h3>
                <p className="text-sm text-secondary/80 dark:text-accent/80 leading-relaxed">
                  {study.executiveSummary.challenge}
                </p>
              </div>
              <div className="space-y-2 bg-background-1 dark:bg-background-5 p-5 rounded-2xl border border-stroke-3 dark:border-stroke-7">
                <h3 className="text-sm font-semibold text-secondary dark:text-accent uppercase tracking-wider">
                  The Approach
                </h3>
                <p className="text-sm text-secondary/80 dark:text-accent/80 leading-relaxed">
                  {study.executiveSummary.approach}
                </p>
              </div>
              <div className="space-y-2 bg-background-1 dark:bg-background-5 p-5 rounded-2xl border border-stroke-3 dark:border-stroke-7">
                <h3 className="text-sm font-semibold text-secondary dark:text-accent uppercase tracking-wider">
                  Potential Value
                </h3>
                <p className="text-sm text-secondary/80 dark:text-accent/80 leading-relaxed">
                  {study.executiveSummary.potentialValue}
                </p>
              </div>
            </div>
          </section>

          {/* Business Context & Problem / Opportunity */}
          <section className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-heading-4 sm:text-heading-3 font-normal">Business Context</h2>
              <p className="text-base sm:text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                {study.businessContext}
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <h3 className="text-heading-5 sm:text-heading-4 font-normal">The Problem or Opportunity</h3>
              <p className="text-base sm:text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                {study.problemOrOpportunity}
              </p>
            </div>
          </section>

          {/* Goals & Requirements */}
          <section className="space-y-6">
            <h2 className="text-heading-4 sm:text-heading-3 font-normal">Goals &amp; Practical Requirements</h2>
            <ul className="grid grid-cols-1 gap-4">
              {study.goalsAndRequirements.map((goal, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 bg-background-2 dark:bg-background-6 p-4 rounded-xl border border-stroke-3 dark:border-stroke-7">
                  <span className="bg-primary/20 text-primary dark:bg-primary/30 size-6 shrink-0 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-base text-secondary/90 dark:text-accent/90 leading-relaxed">
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Proposed Solution & Architecture */}
          <section className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-heading-4 sm:text-heading-3 font-normal">
                {isClientProject ? 'Delivered Solution' : 'Proposed Solution'} &amp; Architecture
              </h2>
              <p className="text-base sm:text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                {study.proposedSolution}
              </p>
              <p className="text-base text-secondary/70 dark:text-accent/70 leading-relaxed pt-2">
                {study.systemArchitecture.overview}
              </p>
            </div>

            {/* Architecture Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.systemArchitecture.components.map((comp, idx) => (
                <div
                  key={idx}
                  className="bg-background-2 dark:bg-background-6 p-6 rounded-2xl border border-stroke-3 dark:border-stroke-7 space-y-2.5">
                  <h4 className="text-heading-6 font-medium text-secondary dark:text-accent">
                    {comp.name}
                  </h4>
                  <p className="text-sm text-secondary/75 dark:text-accent/75 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-secondary/60 dark:text-accent/60 uppercase tracking-wider mb-3">
                Core Technology Stack &amp; Standards
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.systemArchitecture.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-background-2 dark:bg-background-6 px-3.5 py-1.5 text-xs font-medium text-secondary dark:text-accent border border-stroke-3 dark:border-stroke-7">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Roadmap */}
          <section className="space-y-6">
            <h2 className="text-heading-4 sm:text-heading-3 font-normal">Implementation Roadmap</h2>
            <div className="space-y-4">
              {study.implementationRoadmap.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-background-1 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="badge badge-yellow text-xs">{step.phase}</span>
                    <h3 className="text-heading-6 font-normal">{step.title}</h3>
                  </div>
                  <ul className="space-y-2 pl-4 list-disc marker:text-primary text-sm text-secondary/80 dark:text-accent/80 leading-relaxed">
                    {step.activities.map((act, actIdx) => (
                      <li key={actIdx}>{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Safeguards: Security, Privacy, Accessibility & Reliability */}
          <section className="bg-background-2 dark:bg-background-6 rounded-[24px] p-8 sm:p-10 border border-stroke-3 dark:border-stroke-7 space-y-6">
            <h2 className="text-heading-4 font-normal">Security, Privacy &amp; Reliability Safeguards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-secondary dark:text-accent font-semibold text-sm">
                  <span className="size-2 rounded-full bg-primary" />
                  <h3>Security &amp; Containment</h3>
                </div>
                <p className="text-sm text-secondary/80 dark:text-accent/80 leading-relaxed pl-4">
                  {study.safeguards.security}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-secondary dark:text-accent font-semibold text-sm">
                  <span className="size-2 rounded-full bg-primary" />
                  <h3>Data Privacy &amp; Retention</h3>
                </div>
                <p className="text-sm text-secondary/80 dark:text-accent/80 leading-relaxed pl-4">
                  {study.safeguards.privacy}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-secondary dark:text-accent font-semibold text-sm">
                  <span className="size-2 rounded-full bg-primary" />
                  <h3>Accessibility &amp; Inclusion</h3>
                </div>
                <p className="text-sm text-secondary/80 dark:text-accent/80 leading-relaxed pl-4">
                  {study.safeguards.accessibility}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-secondary dark:text-accent font-semibold text-sm">
                  <span className="size-2 rounded-full bg-primary" />
                  <h3>Reliability &amp; Availability</h3>
                </div>
                <p className="text-sm text-secondary/80 dark:text-accent/80 leading-relaxed pl-4">
                  {study.safeguards.reliability}
                </p>
              </div>
            </div>
          </section>

          {/* Measurement Plan */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-heading-4 sm:text-heading-3 font-normal">Measurement &amp; Validation Plan</h2>
              <p className="text-base text-secondary/80 dark:text-accent/80 leading-relaxed">
                {study.measurementPlan.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.measurementPlan.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-background-1 dark:bg-background-6 p-6 rounded-2xl border border-stroke-3 dark:border-stroke-7 space-y-2">
                  <h3 className="text-heading-6 font-medium text-secondary dark:text-accent">
                    {metric.name}
                  </h3>
                  <p className="text-sm text-secondary/75 dark:text-accent/75 leading-relaxed">
                    {metric.baselineAndTracking}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Trade-offs */}
          <section className="space-y-6">
            <h2 className="text-heading-4 sm:text-heading-3 font-normal">Challenges &amp; Architectural Trade-offs</h2>
            <div className="space-y-4">
              {study.challengesAndTradeoffs.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-background-2 dark:bg-background-6 rounded-2xl p-6 border border-stroke-3 dark:border-stroke-7 space-y-2">
                  <h3 className="text-base font-semibold text-secondary dark:text-accent">
                    Challenge: {item.challenge}
                  </h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80 leading-relaxed">
                    <span className="font-medium text-primary">Trade-off / Resolution:</span>{' '}
                    {item.mitigationOrTradeoff}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Lessons & Transferable Insights */}
          <section className="space-y-6">
            <h2 className="text-heading-4 sm:text-heading-3 font-normal">Lessons &amp; Recommendations</h2>
            <ul className="space-y-3">
              {study.lessonsAndRecommendations.map((lesson, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-background-1 dark:bg-background-6 p-4 rounded-xl border border-stroke-3 dark:border-stroke-7 text-sm text-secondary/85 dark:text-accent/85 leading-relaxed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 text-primary shrink-0 mt-0.5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Frequently Asked Questions */}
          <section className="space-y-6">
            <h2 className="text-heading-4 sm:text-heading-3 font-normal">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {study.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-6 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none">
                      <span className="font-medium text-base text-secondary dark:text-accent">
                        {faq.question}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`size-5 text-secondary/60 dark:text-accent/60 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}>
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-secondary/75 dark:text-accent/75 leading-relaxed border-t border-stroke-3/50 dark:border-stroke-7/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related Services */}
          <section className="pt-6 border-t border-stroke-3 dark:border-stroke-7 space-y-4">
            <h3 className="text-xs font-semibold text-secondary/60 dark:text-accent/60 uppercase tracking-wider">
              Related Arlo Technologies Services
            </h3>
            <div className="flex flex-wrap gap-3">
              {study.relatedServices.map((srv, idx) => (
                <Link
                  key={idx}
                  href={srv.href}
                  className="rounded-full bg-background-2 dark:bg-background-6 px-4 py-2 text-sm font-medium text-secondary dark:text-accent border border-stroke-3 dark:border-stroke-7 hover:border-secondary dark:hover:border-accent transition-colors">
                  {srv.title} →
                </Link>
              ))}
            </div>
          </section>

          {/* Related Case Studies */}
          <section className="space-y-6 pt-4">
            <h3 className="text-heading-5 font-normal">Related Case Studies &amp; Architectural Blueprints</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.relatedCaseStudies.map((rel, idx) => (
                <Link
                  key={idx}
                  href={`/case-study/${rel.slug}`}
                  className="group block p-5 rounded-2xl bg-background-2 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 hover:border-secondary dark:hover:border-accent transition-all space-y-2">
                  <span className="text-xs text-primary font-medium">{rel.categoryLabel}</span>
                  <h4 className="text-sm font-medium text-secondary dark:text-accent group-hover:text-primary transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>
          </section>

          {/* Final Call To Action */}
          <section className="rounded-[28px] bg-secondary dark:bg-background-8 text-white p-8 sm:p-12 text-center space-y-6 shadow-xl">
            <span className="badge badge-yellow text-xs">Let&apos;s Build Together</span>
            <div className="space-y-3 max-w-[600px] mx-auto">
              <h2 className="text-heading-4 sm:text-heading-3 font-normal text-white">
                Have a Similar Challenge? Let&apos;s Explore the Right Solution.
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Whether you are engineering an AI agent workflow, modernizing software architecture, or developing a high-converting digital presence, Arlo Technologies can help turn your technical vision into reality.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-pair-left btn-md w-full sm:w-auto">
                Talk to Arlo Technologies
              </LinkButton>
              <LinkButton
                href="/case-study"
                className="btn btn-pair-right btn-md w-full sm:w-auto">
                Browse All Case Studies
              </LinkButton>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

CaseStudyArticle.displayName = 'CaseStudyArticle';
export default CaseStudyArticle;
