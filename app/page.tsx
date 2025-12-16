import Link from 'next/link';
import { OnchainStatsCard } from '@/components/OnchainStatsCard';
import { TOKEN_EXPLORER_URL } from '@/lib/chain';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              LLMBasedOS Token
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-4 font-medium">
              The native token for a sovereign agent operating system.
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
              Utility-first. Standard-first. Hype-last.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={TOKEN_EXPLORER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-all duration-200 shadow-lg shadow-primary-500/30"
              >
                View Contract
              </a>
              <Link
                href="/docs"
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all duration-200"
              >
                Read Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* On-chain Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <OnchainStatsCard />
      </section>

      {/* Why It Exists Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Why It Exists
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Access Rights"
            description="Token holding represents participation rights in the LLMBasedOS ecosystem. A primitive for identifying aligned participants."
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            }
          />
          <Card
            title="Execution Capacity"
            description="Planned usage thresholds for unlocking compute quotas, priority access, and capacity-based features within the operating system."
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <Card
            title="Ecosystem Alignment"
            description="Designed to align incentives for builders, operators, and users within a sovereign agent-native infrastructure."
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
        </div>
      </section>

      {/* January Liquidity Plan Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border border-white/10 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-white/5 to-transparent">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            January Liquidity Plan
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-3xl">
            Liquidity deployment is planned for January 2026. This will include pool creation,
            LP locking, contract verification, and initial distribution mechanics.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">What We Will Do</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Create liquidity pool on Base DEX</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lock LP tokens with transparent timelock</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Verify contract source code on Basescan</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Publish clear distribution policy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Public announcement with timeline</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white pt-6">What We Won&apos;t Do</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Make financial promises or price predictions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Run aggressive marketing campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Create artificial hype or urgency</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
            <p className="text-yellow-200 text-sm">
              <strong>Disclaimer:</strong> This is not financial advice. Token holding does not guarantee
              returns or future value. Do your own research.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Card({ title, description, icon }: CardProps) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 transition-all duration-200">
      <div className="text-primary-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}
