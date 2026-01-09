'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CodeLine {
  text: string;
  isComment?: boolean;
}

interface CodeBlockProps {
  commands: (string | CodeLine)[];
  className?: string;
  variant?: 'dark' | 'light';
}

export function CodeBlock({ commands, className, variant = 'dark' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Filter out comments for copying, normalize to strings
  const commandsOnly = commands
    .map((cmd) => (typeof cmd === 'string' ? cmd : cmd.isComment ? null : cmd.text))
    .filter((cmd): cmd is string => cmd !== null);

  const copyText = commandsOnly.join('\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={cn('relative group', className)}>
      <div
        className={cn(
          'rounded-xl p-5 font-mono text-sm space-y-2',
          variant === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-950 text-slate-100'
        )}
      >
        {commands.map((cmd, i) => {
          const isComment = typeof cmd === 'object' && cmd.isComment;
          const text = typeof cmd === 'string' ? cmd : cmd.text;

          if (isComment) {
            return (
              <p key={i} className="text-slate-500">
                {text}
              </p>
            );
          }

          return (
            <p key={i}>
              <span className="text-slate-500">$</span> {text}
            </p>
          );
        })}
      </div>
      <button
        onClick={handleCopy}
        className={cn(
          'absolute top-3 right-3 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200',
          'opacity-0 group-hover:opacity-100',
          'bg-white/10 hover:bg-white/20 border border-white/10',
          'text-white/80 hover:text-white',
          copied && 'opacity-100 bg-green-500/20 border-green-500/50 text-green-400'
        )}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
