import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capabilities | LLMBasedOS',
  description: 'Operational capabilities and building blocks for LLMBasedOS arcs and sentinels.',
};

export default function UtilityPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 mb-4">
            Capabilities
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The building blocks behind arcs, sentinels, and real-time workflows
          </p>
          <p className="text-base text-slate-500 mt-2">
            Les briques pour construire des agents operationnels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <CapabilityCard
            title="Signal Capture"
            subtitle="Collecte de signaux"
            description="Scraping, API polling, webhooks, and data ingestion pipelines."
            features={[
              'Marketplace searches and saved filters',
              'Social content extraction (posts, stories, reels)',
              'Market data monitoring and alerts',
              'Custom connectors for internal APIs',
            ]}
          />
          <CapabilityCard
            title="Enrichment"
            subtitle="Enrichissement"
            description="OCR, classification, deduplication, and semantic tagging."
            features={[
              'Image OCR for stories and listings',
              'Entity tagging and scoring',
              'Noise filtering and relevance ranking',
              'Session pools and proxy governance',
            ]}
          />
          <CapabilityCard
            title="Routing"
            subtitle="Routage"
            description="LLM routing across models, budgets, and policies."
            features={[
              'Model selection per task type',
              'Budget-aware orchestration',
              'Human-in-the-loop checkpoints',
              'Context-aware retries and fallbacks',
            ]}
          />
          <CapabilityCard
            title="Delivery"
            subtitle="Diffusion"
            description="Push events to apps, dashboards, and alert channels."
            features={[
              'Flutter push notifications',
              'Slack / Telegram / webhook delivery',
              'EventBus streaming',
              'Audit logs and execution traces',
            ]}
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">Operating Principles</h3>
            <p className="text-slate-600">
              Every capability ships with guardrails: rate limits, session health, and auditability.
              We focus on dependable pipelines before adding scale.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">Bilingual by design</h3>
            <p className="text-slate-600">
              Interfaces, alerts, and dashboards are delivered in English and French by default.
              We can extend localization to any market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CapabilityCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

function CapabilityCard({ title, subtitle, description, features }: CapabilityCardProps) {
  return (
    <div className="border border-black/10 rounded-2xl p-8 bg-white/80 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
          {subtitle}
        </span>
      </div>
      <h3 className="text-2xl font-display font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-600">
            <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
