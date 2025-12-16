import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Token Utility | LLMBasedOS Token',
  description: 'Planned utility and use cases for the LLMBasedOS Token. Progressive, realistic, utility-first approach.',
};

export default function UtilityPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Token Utility
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Progressive utility design for sustainable ecosystem growth
          </p>
        </div>

        {/* Utility Introduction */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Token utility is designed to evolve progressively as the LLMBasedOS ecosystem matures.
              Each phase builds on the previous, adding depth without complexity.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              All utility plans are subject to change based on ecosystem development and community feedback.
              No guarantees are made about timing or implementation.
            </p>
          </div>
        </div>

        {/* Utility Phases */}
        <div className="space-y-12">
          <PhaseCard
            phase="Phase 0"
            title="Foundation"
            status="current"
            description="Establishing the token's existence and identity on Base mainnet."
            features={[
              'On-chain presence and verifiable existence',
              'Transparent smart contract deployment',
              'Auditable transaction history',
              'Open standard ERC20 implementation',
            ]}
          />

          <PhaseCard
            phase="Phase 1"
            title="Access & Recognition"
            status="planned"
            timeframe="Q1 2026"
            description="Token gating for early features, builds, and community participation."
            features={[
              'Early access to LLMBasedOS preview builds',
              'Priority access to new Arc releases',
              'Token-gated Discord channels and resources',
              'Early notification of ecosystem updates',
            ]}
          />

          <PhaseCard
            phase="Phase 2"
            title="Capacity & Quotas"
            status="planned"
            timeframe="Q2 2026"
            description="Capacity-based utility tied to holding thresholds."
            features={[
              'Tiered compute quota allocations',
              'Priority queue access for resource-intensive operations',
              'Extended session limits and persistence',
              'Enhanced API rate limits',
            ]}
          />

          <PhaseCard
            phase="Phase 3"
            title="Ecosystem Economics"
            status="future"
            timeframe="2026+"
            description="Deeper integration into LLMBasedOS marketplace and licensing mechanics."
            features={[
              'Arc marketplace transactions',
              'License acquisition and management',
              'Usage receipt settlements',
              'Reputation and attestation primitives',
            ]}
          />
        </div>

        {/* Important Notes */}
        <div className="mt-16 space-y-4">
          <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
            <h3 className="text-lg font-semibold text-yellow-200 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important Disclaimer
            </h3>
            <p className="text-yellow-200/80 text-sm leading-relaxed">
              Utility plans are directional and subject to change. Implementation timelines are estimates.
              Token utility does not constitute a promise of financial returns or guaranteed value.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-primary-500/10 border border-primary-500/30">
            <h3 className="text-lg font-semibold text-white mb-3">Design Philosophy</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Utility is designed to be earned, not extracted. Holding thresholds unlock access and capacity,
              but value comes from participation in a functional operating system, not speculation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PhaseCardProps {
  phase: string;
  title: string;
  status: 'current' | 'planned' | 'future';
  timeframe?: string;
  description: string;
  features: string[];
}

function PhaseCard({ phase, title, status, timeframe, description, features }: PhaseCardProps) {
  const statusColors = {
    current: 'bg-green-500/20 border-green-500/50 text-green-400',
    planned: 'bg-primary-500/20 border-primary-500/50 text-primary-400',
    future: 'bg-white/10 border-white/30 text-white/60',
  };

  return (
    <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-sm font-semibold text-primary-400 uppercase tracking-wide">
          {phase}
        </span>
        <span className={`px-3 py-1 rounded-full border text-xs font-medium uppercase tracking-wide ${statusColors[status]}`}>
          {status}
        </span>
        {timeframe && (
          <span className="text-sm text-white/50">
            {timeframe}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed mb-6">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-white/80">
            <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
