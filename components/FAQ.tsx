'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-black/10 rounded-xl bg-white/70 overflow-hidden shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
          >
            <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
            <svg
              className={cn(
                'w-5 h-5 text-slate-400 transition-transform flex-shrink-0',
                openIndex === index && 'transform rotate-180'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-slate-600 leading-relaxed border-t border-black/10 pt-4">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
