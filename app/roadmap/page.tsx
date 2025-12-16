import { Timeline } from '@/components/Timeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmap | LLMBasedOS Token',
  description: 'Development roadmap and timeline for the LLMBasedOS Token ecosystem.',
};

export default function RoadmapPage() {
  const timelineItems = [
    {
      period: 'Now',
      title: 'Foundation',
      description:
        'Token deployed on Base mainnet. Official website launched with on-chain data integration. Documentation published.',
      status: 'completed' as const,
    },
    {
      period: 'January 2026',
      title: 'Liquidity & Distribution',
      description:
        'Deploy liquidity pool on Base DEX. Lock LP tokens with transparent timelock. Verify contract source code on Basescan. Publish distribution mechanics and initial allocation details.',
      status: 'current' as const,
    },
    {
      period: 'Q1 2026',
      title: 'Utility v1: Access & Recognition',
      description:
        'Launch token-gating mechanisms for early access features. Enable preview builds access for token holders. Establish token-gated community channels and resources.',
      status: 'upcoming' as const,
    },
    {
      period: 'Q2 2026',
      title: 'Arc Marketplace Integration',
      description:
        'Integrate token into Arc discovery and distribution mechanisms. Enable Arc licensing with token settlement. Launch Arc developer incentives program.',
      status: 'upcoming' as const,
    },
    {
      period: 'Q3-Q4 2026',
      title: 'Capacity & Quotas',
      description:
        'Implement tiered capacity system based on holding thresholds. Deploy compute quota allocations. Enable priority queue mechanics for resource-intensive operations.',
      status: 'upcoming' as const,
    },
    {
      period: '2027+',
      title: 'Advanced Primitives',
      description:
        'Launch attestation and reputation systems. Implement usage receipt settlements. Deploy advanced marketplace mechanics. Expand ecosystem economics.',
      status: 'upcoming' as const,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Roadmap
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Vision and trajectory for the LLMBasedOS Token ecosystem
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <Timeline items={timelineItems} />
        </div>

        {/* Key Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Development Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PrincipleCard
              title="Utility-First"
              description="Every feature serves a clear purpose within the LLMBasedOS ecosystem. No feature exists purely for speculation."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              }
            />
            <PrincipleCard
              title="Progressive Rollout"
              description="Features are deployed incrementally, allowing for testing, feedback, and iteration before expanding scope."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
            />
            <PrincipleCard
              title="Transparent Communication"
              description="Plans are shared openly. Changes are communicated clearly. No promises, only current status and intended direction."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
            />
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-8 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
          <h3 className="text-lg font-semibold text-yellow-200 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Roadmap Disclaimer
          </h3>
          <p className="text-yellow-200/80 text-sm leading-relaxed mb-3">
            This roadmap is directional and subject to change. Timelines are estimates based on current planning
            and may shift due to technical requirements, ecosystem feedback, or unforeseen circumstances.
          </p>
          <p className="text-yellow-200/80 text-sm leading-relaxed">
            No guarantees are made about feature delivery or timeline adherence. Development priorities may change
            to better serve the ecosystem and maintain quality standards.
          </p>
        </div>
      </div>
    </div>
  );
}

interface PrincipleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function PrincipleCard({ title, description, icon }: PrincipleCardProps) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
      <div className="text-primary-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}
