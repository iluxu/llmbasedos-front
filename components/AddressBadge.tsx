'use client';

import { shortenAddress } from '@/lib/format';
import { getExplorerUrl } from '@/lib/chain';
import { cn } from '@/lib/utils';

interface AddressBadgeProps {
  address: string;
  label?: string;
  className?: string;
  showFull?: boolean;
}

export function AddressBadge({
  address,
  label,
  className,
  showFull = false
}: AddressBadgeProps) {
  const explorerUrl = getExplorerUrl('address', address);
  const displayAddress = showFull ? address : shortenAddress(address);

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <span className="text-xs text-white/50 uppercase tracking-wide font-medium">
          {label}
        </span>
      )}
      <a
        href={explorerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'font-mono text-sm px-3 py-2 rounded-lg',
          'bg-white/5 border border-white/10',
          'hover:bg-white/10 hover:border-white/20',
          'transition-all duration-200',
          'inline-flex items-center gap-2 group w-fit'
        )}
      >
        <span className="text-white/90 group-hover:text-white">
          {displayAddress}
        </span>
        <svg
          className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
}
