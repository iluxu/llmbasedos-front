'use client';

interface ReferenceItemProps {
  label: string;
  value: string;
  copyable?: boolean;
}

export function ReferenceItem({ label, value, copyable }: ReferenceItemProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-white/50 uppercase tracking-wide font-medium">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-white font-mono text-sm">{value}</span>
        {copyable && (
          <button
            onClick={handleCopy}
            className="text-white/40 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
