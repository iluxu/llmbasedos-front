import type { Metadata } from 'next';
import { TOKEN_ADDRESS, OWNER_ADDRESS, TOKEN_EXPLORER_URL } from '@/lib/chain';

export const metadata: Metadata = {
  title: 'Platform | LLMBasedOS',
  description: 'Architecture and operating model for the LLMBasedOS agent ops platform.',
};

export default function TokenPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 mb-4">
            Platform Overview
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The operating system layer that powers arcs, sentinels, and agent workflows
          </p>
          <p className="text-base text-slate-500 mt-2">
            Architecture et modele d'exploitation LLMBasedOS
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-6">Core Building Blocks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <BlockCard
              title="MCP Gateway"
              subtitle="Orchestration"
              description="Central routing layer that exposes capabilities and manages sessions."
            />
            <BlockCard
              title="Arc Runtime"
              subtitle="Capacites"
              description="Containerized services for scraping, OCR, data enrichment, and execution."
            />
            <BlockCard
              title="Sentinel Engine"
              subtitle="Veille"
              description="Always-on watchers that emit events and trigger actions."
            />
            <BlockCard
              title="Client Layer"
              subtitle="Delivery"
              description="Flutter apps, dashboards, and webhook endpoints for real-time delivery."
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-6">Operational Guardrails</h2>
          <div className="border border-black/10 rounded-2xl p-8 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,244,236,0.9))] shadow-sm">
            <div className="space-y-6">
              <GuardrailItem
                title="Session Governance"
                description="Encrypted session storage, health checks, and rotation logic to stay resilient."
              />
              <GuardrailItem
                title="Rate Limiting"
                description="Throttling profiles tuned per target and per client requirement."
              />
              <GuardrailItem
                title="Audit Trails"
                description="Every action, alert, and data mutation is logged for traceability."
              />
              <GuardrailItem
                title="Compliance Review"
                description="Usage policies are defined with clients before deployment goes live."
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-6">Deployment Modes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ModeCard title="Local" description="Single-node Docker stack for prototyping and demos." />
            <ModeCard title="Hybrid" description="Gateway + client apps with isolated arc runtimes." />
            <ModeCard title="Enterprise" description="Multi-tenant clusters with observability and policy layers." />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-6">Token Reference</h2>
          <div className="border border-black/10 rounded-2xl p-8 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,244,236,0.9))] shadow-sm">
            <p className="text-slate-600 mb-6">
              On-chain details for the LLMBasedOS token on Base mainnet.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <TokenLine label="Token Contract" value={TOKEN_ADDRESS} />
              <TokenLine label="Owner Address" value={OWNER_ADDRESS} />
            </div>
            <a
              href={TOKEN_EXPLORER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors text-sm font-semibold mt-6"
            >
              View on Basescan
              <span className="text-xs">(external)</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

interface BlockCardProps {
  title: string;
  subtitle: string;
  description: string;
}

function BlockCard({ title, subtitle, description }: BlockCardProps) {
  return (
    <div className="border border-black/10 rounded-2xl p-8 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,244,236,0.9))] shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-400">{subtitle}</p>
      <h3 className="text-2xl font-semibold text-slate-900 mt-3 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

interface GuardrailItemProps {
  title: string;
  description: string;
}

function GuardrailItem({ title, description }: GuardrailItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}

interface ModeCardProps {
  title: string;
  description: string;
}

function ModeCard({ title, description }: ModeCardProps) {
  return (
    <div className="border border-black/10 rounded-2xl p-6 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,244,236,0.9))] shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

interface TokenLineProps {
  label: string;
  value: string;
}

function TokenLine({ label, value }: TokenLineProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="font-mono text-xs text-slate-700 break-all">{value}</p>
    </div>
  );
}
