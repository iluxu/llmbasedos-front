'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Install', href: '/#install' },
  { label: 'Platform', href: '/token' },
  { label: 'Capabilities', href: '/utility' },
  { label: 'Use Cases', href: '/#use-cases' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Docs', href: '/docs' },
];

export function TopNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f1e7]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">LB</span>
            </div>
            <span className="font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
              LLMBasedOS
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                {item.label}
              </Link>
            ))}
            <span className="text-xs uppercase tracking-wide text-slate-400 border border-slate-300/60 rounded-full px-3 py-1">
              EN / FR
            </span>
            <a
              href="https://github.com/iluxu/llmbasedos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="/#contact"
              className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Book a demo
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block py-2 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/iluxu/llmbasedos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-full border border-black/10 bg-white text-slate-800 text-sm font-semibold"
            >
              GitHub
            </a>
            <a
              href="/#contact"
              className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold"
            >
              Book a demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
