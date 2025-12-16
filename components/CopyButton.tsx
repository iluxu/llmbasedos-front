'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label = 'Copy', className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition-all duration-200',
        'bg-white/5 hover:bg-white/10 border border-white/10',
        'text-sm text-white/90 hover:text-white',
        copied && 'bg-green-500/20 border-green-500/50 text-green-400',
        className
      )}
    >
      {copied ? 'Copied!' : label}
    </button>
  );
}
