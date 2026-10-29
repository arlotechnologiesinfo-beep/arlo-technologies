'use client';

import React, { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, slug }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/blog/${slug}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const handleNativeShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator
        .share({
          title,
          url: `${window.location.origin}/blog/${slug}`,
        })
        .catch(() => {});
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-background-3 dark:bg-background-7 text-secondary dark:text-accent border border-stroke-3 dark:border-stroke-7 hover:border-secondary dark:hover:border-accent transition-colors cursor-pointer">
        <span>🔗</span>
        <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
      </button>

      <button
        onClick={handleNativeShare}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-background-3 dark:bg-background-7 text-secondary dark:text-accent border border-stroke-3 dark:border-stroke-7 hover:border-secondary dark:hover:border-accent transition-colors cursor-pointer">
        <span>📤</span>
        <span>Share Article</span>
      </button>
    </div>
  );
};

export default ShareButtons;
