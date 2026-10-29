import { cn } from '@/utils/cn';
import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
  insideSpan?: boolean;
  showIcon?: boolean;
}

export const V2ConveyorArrow = ({ className }: { className?: string }) => (
  <div className={cn('relative overflow-hidden size-5 shrink-0 inline-flex items-center justify-center pointer-events-none ml-0.5', className)}>
    {/* Slide-in arrow from left */}
    <span className="group-hover/btn-v2:translate-x-0.5 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out size-5 flex items-center justify-center btn-v2-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-3.5 fill-current">
        <path d="M11 5H13V7H11V5Z" />
        <path d="M5 5H7V7H5V5Z" />
        <path d="M14 8H16V10H14V8Z" />
        <path d="M8 8H10V10H8V8Z" />
        <path d="M17 11H19V13H17V11Z" />
        <path d="M11 11H13V13H11V11Z" />
        <path d="M14 14H16V16H14V14Z" />
        <path d="M8 14H10V16H8V14Z" />
        <path d="M11 17H13V19H11V17Z" />
        <path d="M5 17H7V19H5V17Z" />
      </svg>
    </span>
    {/* Slide-out arrow to right */}
    <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-1 transition-transform duration-300 ease-in-out size-5 flex items-center justify-center btn-v2-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-3.5 fill-current">
        <path d="M11 5H13V7H11V5Z" />
        <path d="M5 5H7V7H5V5Z" />
        <path d="M14 8H16V10H14V8Z" />
        <path d="M8 8H10V10H8V8Z" />
        <path d="M17 11H19V13H17V11Z" />
        <path d="M11 11H13V13H11V11Z" />
        <path d="M14 14H16V16H14V14Z" />
        <path d="M8 14H10V16H8V14Z" />
        <path d="M11 17H13V19H11V17Z" />
        <path d="M5 17H7V19H5V17Z" />
      </svg>
    </span>
  </div>
);

const LinkButton = ({
  children,
  href,
  className,
  insideSpan = true,
  showIcon = true,
  ...props
}: LinkButtonProps) => {
  const hasColor = className && /btn-(primary|secondary|white|accent|dark|black|light|gray|green|ash|transparent)/.test(className);

  return (
    <Link
      href={href}
      className={cn(
        'group/btn-v2 has-v2-icon inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:scale-102',
        !hasColor && 'btn-primary',
        className,
      )}
      {...props}>
      {insideSpan ? (
        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
          {children}
        </span>
      ) : (
        children
      )}
      {showIcon && <V2ConveyorArrow />}
    </Link>
  );
};

LinkButton.displayName = 'LinkButton';
export default LinkButton;
