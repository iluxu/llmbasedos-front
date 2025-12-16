import { OnchainStatsCard } from '@/components/OnchainStatsCard';
import { AddressBadge } from '@/components/AddressBadge';
import { TOKEN_ADDRESS, OWNER_ADDRESS, CHAIN, TOKEN_EXPLORER_URL } from '@/lib/chain';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Token Details | LLMBasedOS Token',
  description: 'Complete on-chain details, security profile, and technical specifications for the LLMBasedOS Token on Base mainnet.',
};

export default function TokenPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Token Details
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Complete on-chain reference for the LLMBasedOS Token
          </p>
        </div>

        {/* On-chain Stats */}
        <div className="mb-12">
          <OnchainStatsCard />
        </div>

        {/* Contract Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Contract Details</h2>
          <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <AddressBadge address={TOKEN_ADDRESS} label="Token Contract" />
              </div>
              <div>
                <AddressBadge address={OWNER_ADDRESS} label="Owner Address" />
              </div>
              <div className="md:col-span-2">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-white/50 uppercase tracking-wide font-medium">
                    Network
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-white">{CHAIN.name}</span>
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/50 text-primary-400 text-xs font-medium">
                      Chain ID: {CHAIN.id}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <a
                  href={TOKEN_EXPLORER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <span>View on Basescan</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Security Profile */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Security Profile</h2>
          <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
            <div className="space-y-6">
              <SecurityItem
                title="ERC20 Standard"
                description="Built using OpenZeppelin ERC20 implementation, the industry standard for token contracts."
                status="verified"
              />
              <SecurityItem
                title="No Transfer Taxes"
                description="Standard ERC20 transfer mechanism with no hidden fees or taxes on transactions."
                status="verified"
              />
              <SecurityItem
                title="No Rebasing"
                description="Fixed supply model. Token balance does not change automatically based on external factors."
                status="verified"
              />
              <SecurityItem
                title="Minimal Contract"
                description="Clean, straightforward implementation without complex mechanics or hidden functions."
                status="verified"
              />
              <SecurityItem
                title="Source Code Verification"
                description="Contract source code verification on Basescan is planned for January 2026."
                status="planned"
              />
            </div>
          </div>
        </section>

        {/* Supply Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Supply Information</h2>
          <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Total Supply</h3>
                <p className="text-white/70 mb-2">
                  The token has a fixed total supply of 1 trillion (1,000,000,000,000) tokens.
                </p>
                <div className="font-mono text-sm text-white/60 bg-white/5 p-3 rounded-lg">
                  Raw: 1000000000000000000000000000000 (1e30)
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Decimals</h3>
                <p className="text-white/70">
                  The token uses 18 decimals, which is the standard for most ERC20 tokens.
                  This means the smallest unit is 0.000000000000000001 tokens.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Distribution</h3>
                <p className="text-white/70">
                  Distribution mechanics and allocation details will be published before liquidity
                  deployment in January 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Note */}
        <div className="p-6 rounded-xl bg-primary-500/10 border border-primary-500/30">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Technical Note
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            All data displayed on this page is read directly from the blockchain using public RPC endpoints.
            No wallet connection is required. Data is refreshed every 60 seconds to ensure accuracy.
          </p>
        </div>
      </div>
    </div>
  );
}

interface SecurityItemProps {
  title: string;
  description: string;
  status: 'verified' | 'planned';
}

function SecurityItem({ title, description, status }: SecurityItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        {status === 'verified' ? (
          <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
}
