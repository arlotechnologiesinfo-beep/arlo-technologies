'use client';

import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { XIcon } from '@/icons';

const ShareLink = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: 'x' | 'linkedin' | 'copy') => {
    if (typeof window === 'undefined') {
      return;
    }
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title || 'Arlo Technologies Insights');

    if (platform === 'x') {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'noopener,noreferrer');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <RevealAnimation delay={0.2}>
      <div className="mx-auto mt-[70px] max-w-[950px] space-y-4">
        <h5 className="text-heading-6">Share this article</h5>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => handleShare('x')}
            type="button"
            className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:text-white"
            aria-label="Share on X">
            <span className="size-3.5 fill-current">
              <XIcon />
            </span>
            <span>Share on X</span>
          </button>

          <button
            onClick={() => handleShare('linkedin')}
            type="button"
            className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-primary-500 hover:border-primary-500 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:text-white"
            aria-label="Share on LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.0007 1C6.35854 1 3.07729 3.19375 1.6851 6.55469C0.292911 9.91562 1.06166 13.7875 3.6351 16.3609C6.20854 18.9344 10.0804 19.7031 13.4413 18.3109C16.807 16.9234 19.0007 13.6422 19.0007 10C19.0007 5.03125 14.9695 1 10.0007 1ZM7.3851 14.7391H5.42104V8.41094H7.3851V14.7391ZM6.40072 7.54844C5.93666 7.54844 5.51947 7.27187 5.34135 6.84531C5.16322 6.41875 5.25697 5.92656 5.5851 5.59844C5.90854 5.27031 6.40072 5.17188 6.82729 5.34531C7.25385 5.51875 7.5351 5.93594 7.53979 6.39531C7.53979 7.03281 7.03354 7.54375 6.40072 7.54844ZM14.7398 14.7391H12.7757V11.6594C12.7757 10.9234 12.7617 9.98594 11.7538 9.98594C10.746 9.98594 10.5679 10.7828 10.5679 11.6078V14.7391H8.61322V8.41094H10.4976V9.27344H10.5257C10.7882 8.77656 11.4257 8.25156 12.382 8.25156C14.3695 8.25156 14.7351 9.55937 14.7351 11.2609V14.7391H14.7398Z" />
            </svg>
            <span>Share on LinkedIn</span>
          </button>

          <button
            onClick={() => handleShare('copy')}
            type="button"
            className="group/social-link border-secondary/10 dark:border-stroke-7 hover:bg-emerald-500 hover:border-emerald-500 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:text-white"
            aria-label="Copy link">
            <span>{copied ? '✓ Copied!' : '🔗 Copy Link'}</span>
          </button>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default ShareLink;
