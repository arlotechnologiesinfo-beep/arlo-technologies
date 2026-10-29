'use client';

import React, { useEffect, useState } from 'react';
import { ArticleHeading } from '../types/blog';

interface TableOfContentsProps {
  headings: ArticleHeading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -60% 0%' },
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) {observer.observe(el);}
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {return null;}

  return (
    <aside className="rounded-2xl bg-white dark:bg-background-6 p-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4">
      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-secondary/70 dark:text-accent/70">
        Table of Contents
      </h3>
      <nav className="space-y-2 text-sm max-h-[450px] overflow-y-auto pr-1">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`block transition-colors py-1 ${
                h.level === 3 ? 'pl-4 text-xs' : 'text-sm font-medium'
              } ${
                isActive
                  ? 'text-secondary dark:text-accent font-semibold underline underline-offset-4'
                  : 'text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent'
              }`}>
              {h.text}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default TableOfContents;
