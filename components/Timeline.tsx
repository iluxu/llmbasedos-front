import { cn } from '@/lib/utils';

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  status?: 'completed' | 'current' | 'upcoming';
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/30 to-transparent" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              'relative grid md:grid-cols-2 gap-8 items-center',
              index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
            )}
          >
            {/* Timeline dot */}
            <div
              className={cn(
                'absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4',
                'transform -translate-x-1/2 md:-translate-x-1/2',
                item.status === 'completed' && 'bg-green-500 border-green-500/30',
                item.status === 'current' && 'bg-primary-500 border-primary-500/30 animate-pulse',
                item.status === 'upcoming' && 'bg-white/20 border-white/10'
              )}
            />

            {/* Content */}
            <div
              className={cn(
                'pl-8 md:pl-0',
                index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
              )}
            >
              <div
                className={cn(
                  'p-6 rounded-xl border',
                  'bg-gradient-to-br from-white/5 to-transparent',
                  item.status === 'current'
                    ? 'border-primary-500/30'
                    : 'border-white/10'
                )}
              >
                <span className="text-sm font-semibold text-primary-400 uppercase tracking-wide">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
