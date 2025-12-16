import { FAQ } from '@/components/FAQ';
import { ReferenceItem } from '@/components/ReferenceItem';
import { TOKEN_ADDRESS, CHAIN_ID, TOKEN_EXPLORER_URL } from '@/lib/chain';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation | LLMBasedOS Token',
  description: 'Technical documentation, integration guides, and FAQs for the LLMBasedOS Token.',
};

export default function DocsPage() {
  const faqItems = [
    {
      question: 'Is this financial advice?',
      answer: 'No. This website provides technical information about a token. It is not financial advice, investment recommendation, or a solicitation to purchase. Always do your own research.',
    },
    {
      question: 'Where is the liquidity?',
      answer: 'Liquidity deployment is planned for January 2026. No liquidity pool exists currently. We do not recommend attempting to purchase tokens until liquidity is properly deployed and announced.',
    },
    {
      question: 'Can I buy the token now?',
      answer: 'Not recommended. Without liquidity, there is no safe way to trade the token. Wait for the official liquidity announcement in January 2026.',
    },
    {
      question: 'Which blockchain is the token on?',
      answer: 'The token is deployed on Base mainnet (Chain ID: 8453). Base is an Ethereum L2 built by Coinbase, offering low fees and fast transactions.',
    },
    {
      question: 'Is the contract audited?',
      answer: 'Not yet. The contract uses OpenZeppelin standard ERC20 implementation. Source code verification on Basescan is planned for January 2026. Independent audits may be conducted based on ecosystem development.',
    },
    {
      question: 'What wallet should I use?',
      answer: 'Any wallet that supports Base network works: MetaMask, Rabby, Coinbase Wallet, Rainbow, etc. Make sure to add the Base network first.',
    },
    {
      question: 'How do I add the token to my wallet?',
      answer: 'Add Base network to your wallet, then add custom token with contract address 0xC1f85EBfC85d09EBEDbd55b2865092944F362cB5. The token details will load automatically.',
    },
    {
      question: 'Who controls the token?',
      answer: 'The owner address is publicly visible on-chain. Contract functions and permissions can be verified on Basescan once source code is verified.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Documentation
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Technical guides and integration information
          </p>
        </div>

        {/* Quick Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Quick Reference</h2>
          <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
            <div className="grid md:grid-cols-2 gap-6">
              <ReferenceItem label="Contract Address" value={TOKEN_ADDRESS} copyable />
              <ReferenceItem label="Chain" value="Base Mainnet" />
              <ReferenceItem label="Chain ID" value={CHAIN_ID.toString()} />
              <ReferenceItem label="Decimals" value="18" />
              <ReferenceItem label="Total Supply" value="1,000,000,000,000 (1T)" />
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

        {/* Add to Wallet */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Add Token to Wallet</h2>
          <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">MetaMask / Rabby</h3>
                <ol className="space-y-3 text-white/70 list-decimal list-inside">
                  <li>Ensure you have Base network added to your wallet</li>
                  <li>Click &quot;Import tokens&quot; or &quot;Add custom token&quot;</li>
                  <li>Paste contract address: <code className="text-primary-400 font-mono text-sm">{TOKEN_ADDRESS}</code></li>
                  <li>Token symbol and decimals should auto-populate</li>
                  <li>Confirm and add</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using Cast (CLI)</h3>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-white/90 space-y-2">
                  <p># Get token name</p>
                  <code className="block">cast call {TOKEN_ADDRESS} &quot;name()(string)&quot; --rpc-url https://mainnet.base.org</code>

                  <p className="pt-4"># Get token symbol</p>
                  <code className="block">cast call {TOKEN_ADDRESS} &quot;symbol()(string)&quot; --rpc-url https://mainnet.base.org</code>

                  <p className="pt-4"># Get total supply</p>
                  <code className="block">cast call {TOKEN_ADDRESS} &quot;totalSupply()(uint256)&quot; --rpc-url https://mainnet.base.org</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contract ABI */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Minimal ERC20 ABI</h2>
          <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-white/70 mb-4">
              Basic read functions for integrating with the token contract:
            </p>
            <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm text-white/90">
{`[
  {
    "inputs": [],
    "name": "name",
    "outputs": [{"type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{"type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
]`}
            </pre>
          </div>
        </section>

        {/* Security Notes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Security Notes</h2>
          <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Always verify the contract address before interacting</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Use official links from this website or verified social channels</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Never share your private keys or seed phrases</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Be cautious of phishing attempts and fake tokens</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Source code verification pending - review code before large transactions</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        {/* Links */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Official Links</h2>
          <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
            <div className="grid md:grid-cols-2 gap-4">
              <ExternalLink
                href={TOKEN_EXPLORER_URL}
                label="Basescan"
                description="View contract on block explorer"
              />
              <ExternalLink
                href="https://github.com/llmbasedos"
                label="GitHub"
                description="Source code and repositories"
              />
              <ExternalLink
                href="https://x.com/llmbasedos"
                label="X (Twitter)"
                description="Official announcements"
              />
              <ExternalLink
                href="https://base.org"
                label="Base Network"
                description="Learn about Base L2"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ExternalLink({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-white group-hover:text-primary-400 transition-colors">
          {label}
        </span>
        <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <p className="text-sm text-white/60">{description}</p>
    </a>
  );
}
