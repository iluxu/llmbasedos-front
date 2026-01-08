import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { TOKEN_ADDRESS, TOKEN_EXPLORER_URL } from '@/lib/chain';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,241,231,0.9))]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 mb-8">
              MCP-Native Agent Runtime
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              LLMBasedOS
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The local-first OS runtime for autonomous agents.
              Build pipelines that move from signal to action.
            </p>
            <p className="mt-3 text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
              Le runtime local-first pour des agents autonomes. Des signaux aux actions, en production.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/iluxu/llmbasedos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-900/20"
              >
                Get Started
              </a>
              <a
                href="/#use-cases"
                className="px-8 py-4 rounded-full border-2 border-slate-200 bg-white text-slate-800 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                See Use Cases
              </a>
              <Link
                href="/docs"
                className="px-8 py-4 rounded-full border-2 border-slate-200 bg-white text-slate-800 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible With Section - MAIN HIGHLIGHT */}
      <section id="compatibility" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">Works With Your Tools</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Compatible with Codex & Claude Code
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wide text-slate-500">
              Compatible avec Codex et Claude Code
            </p>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Use LLMBasedOS as a Skill in your favorite AI coding assistants.
              All MCP arcs are accessible directly from your terminal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Install Commands */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">OpenAI Codex</h3>
                    <p className="text-sm text-slate-400">Install as a Skill</p>
                  </div>
                </div>
                <div className="bg-slate-950 rounded-xl p-4 font-mono text-sm">
                  <span className="text-slate-500">$</span>{' '}
                  <span className="text-emerald-400">codex install</span>{' '}
                  <span className="text-white">llmbasedos</span>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">◇</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Claude Code</h3>
                    <p className="text-sm text-slate-400">MCP Integration</p>
                  </div>
                </div>
                <div className="bg-slate-950 rounded-xl p-4 font-mono text-sm">
                  <span className="text-slate-500">$</span>{' '}
                  <span className="text-emerald-400">claude mcp add</span>{' '}
                  <span className="text-white">llmbasedos</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm text-center">
                All arcs become available as tools in your AI assistant
              </p>
            </div>

            {/* Demo GIF */}
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <Image
                src="/demo_mcp.gif"
                alt="LLMBasedOS MCP Integration Demo"
                width={800}
                height={500}
                className="w-full"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is LLMBasedOS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">What is it?</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              An OS for your AI agents
            </h2>
            <p className="mt-3 text-sm uppercase tracking-wide text-slate-500">
              Un OS pour orchestrer vos agents IA
            </p>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              LLMBasedOS is a local-first runtime that lets you build, deploy, and operate
              autonomous agent pipelines. Connect to real-world data sources, process signals,
              and take action—all through MCP.
            </p>

              <div className="mt-8 space-y-4">
                <FeatureRow
                  title="Arcs"
                  description="Modular MCP capabilities: scraping, OCR, search, alerts"
                />
                <FeatureRow
                  title="Sentinels"
                  description="Always-on watchers that stream events in real-time"
                />
                <FeatureRow
                  title="LLM Route"
                  description="Multi-model orchestration across providers"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">Live MCP Methods</div>
              <div className="space-y-3 font-mono text-sm">
                <MethodRow method="mcp.listCapabilities" />
                <MethodRow method="mcp.vinted.search" />
                <MethodRow method="mcp.vinted.watch_start" />
                <MethodRow method="mcp.instagram.scrape" />
                <MethodRow method="mcp.sentinel.run" />
                <MethodRow method="mcp.llm.route" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section id="install" className="py-20 bg-[#f8f6f1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Up and running in minutes
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wide text-slate-500">
              Installation rapide en quelques minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full Install */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Full Stack</h3>
                  <p className="text-sm text-slate-500">Docker + all services</p>
                </div>
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-mono text-sm space-y-2">
                <p><span className="text-slate-500">$</span> git clone https://github.com/iluxu/llmbasedos.git</p>
                <p><span className="text-slate-500">$</span> cd llmbasedos</p>
                <p><span className="text-slate-500">$</span> docker compose up -d</p>
              </div>

              <a
                href="https://github.com/iluxu/llmbasedos"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                View on GitHub
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* MCP Only */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">MCP Only</h3>
                  <p className="text-sm text-slate-500">For Claude Code / Codex</p>
                </div>
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-mono text-sm space-y-2">
                <p><span className="text-slate-500"># Codex</span></p>
                <p><span className="text-slate-500">$</span> codex install llmbasedos</p>
                <p className="pt-2"><span className="text-slate-500"># Claude Code</span></p>
                <p><span className="text-slate-500">$</span> claude mcp add llmbasedos</p>
              </div>

              <Link
                href="/docs"
                className="mt-6 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                Read the docs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Real pipelines, not demos
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wide text-slate-500">
              Pipelines reels, pas des demos
            </p>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Production-ready arcs for marketplace arbitrage, social intel, and market signals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CapabilityCard
              title="Vinted Watcher"
              description="Real-time marketplace monitoring with brand, size, and price filters. Instant alerts on new listings."
              tags={['Marketplace', 'Alerts']}
            />
            <CapabilityCard
              title="Instagram Scraper"
              description="Stories and reels extraction with OCR. Apify fallback for reliability."
              tags={['Social', 'OCR']}
            />
            <CapabilityCard
              title="Market Signals"
              description="Monitor prediction markets and trading signals. Push alerts to traders or bots."
              tags={['Trading', 'Signals']}
            />
            <CapabilityCard
              title="LLM Router"
              description="Dispatch tasks across models, policies, and budgets without rewiring."
              tags={['Multi-model', 'Routing']}
            />
            <CapabilityCard
              title="Event Bus"
              description="Normalize signals, dedupe triggers, and power downstream actions."
              tags={['Events', 'Real-time']}
            />
            <CapabilityCard
              title="Custom Arcs"
              description="Wrap your internal data sources or third-party APIs into MCP arcs."
              tags={['Custom', 'API']}
            />
          </div>

          {/* MCP Capabilities Screenshot */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 shadow-xl max-w-3xl mx-auto">
            <Image
              src="/vinted_mcp_capabilities.png"
              alt="Vinted MCP Capabilities"
              width={1200}
              height={700}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="relative py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.25),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(15,23,42,0.98))]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Case studies, not just features
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wide text-slate-400">
              Etudes de cas et scenarios composites
            </p>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Composite scenarios built from active pipeline designs. Swap in your goals and data sources.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <CaseStudyCard
              title="Marketplace Arbitrage Desk"
              subtitle="Resale / arbitrage"
              description="Track saved searches, score listings, and route alerts to operators."
              signals={[
                'mcp.vinted.watch_start + filters',
                'OCR + brand tagging',
                'Slack / Telegram delivery',
              ]}
              outcome="Goal: first-to-alert within minutes of a new listing."
            />
            <CaseStudyCard
              title="Brand Safety Watch"
              subtitle="Social intelligence"
              description="Monitor stories and reels, classify risk, and retain audit trails."
              signals={[
                'mcp.instagram.scrape + OCR',
                'Risk scoring + dedupe',
                'EventBus + compliance logs',
              ]}
              outcome="Goal: same-day escalation with traceable evidence."
            />
            <CaseStudyCard
              title="Market Signals Ops"
              subtitle="Trading intelligence"
              description="Normalize prediction market data and trigger downstream actions."
              signals={[
                'Market polling + alerts',
                'Signal normalization',
                'Webhook routing',
              ]}
              outcome="Goal: consistent signal quality with fewer false positives."
            />
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-wide text-slate-400 mb-3">Customer proof</p>
              <p className="text-lg font-semibold text-white">
                "Integrating your solution has dramatically improved our operational efficiency,
                helping us reduce false positives by 35% within the first quarter."
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="font-semibold text-white">Alex Johnson</span>
                <span className="text-slate-500">Director of Operations</span>
                <span className="text-slate-500">Tech Inno Solutions</span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-wide text-primary-300">-35% false positives</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-wide text-slate-400 mb-3">Customer proof</p>
              <p className="text-lg font-semibold text-white">
                "Implementer votre solution a ete un jeu d'enfant, et les resultats parlent d'eux-memes.
                Nous avons constate une augmentation de 40% dans l'efficacite de notre traitement des donnees."
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="font-semibold text-white">Emma Roberts</span>
                <span className="text-slate-500">Chief Technology Officer</span>
                <span className="text-slate-500">Global DataCorp</span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-wide text-primary-300">+40% data processing efficiency</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="px-7 py-3 rounded-full bg-primary-500 text-slate-900 font-semibold hover:bg-primary-400 transition-colors"
            >
              Plan a Pilot
            </a>
            <Link
              href="/docs"
              className="px-7 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-white/40 transition-colors"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-20 bg-[#f8f6f1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Token</p>
                <h2 className="text-3xl font-display font-bold text-slate-900">
                  LLMBasedOS Token on Base
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  The token anchors long-term alignment and future access primitives.
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Le token ancre l'alignement long terme et les futurs acces.
                </p>
                <a
                  href={TOKEN_EXPLORER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                >
                  View on Basescan
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="rounded-xl bg-slate-50 p-6 border border-slate-200">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Contract Address</p>
                    <p className="font-mono text-sm text-slate-700 break-all">{TOKEN_ADDRESS}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Network</p>
                    <p className="font-semibold text-slate-900">Base</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            Ready to wire your agents to the real world?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us your use case. We'll design the arcs, sentinels, and delivery.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Decrivez votre cas d'usage. Nous concevons les arcs, sentinels et la diffusion.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@llmbasedos.com"
              className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-900/20"
            >
              Book a demo
            </a>
            <a
              href="https://github.com/iluxu/llmbasedos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-slate-200 bg-white text-slate-800 font-semibold hover:border-slate-300 transition-all"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}

function MethodRow({ method }: { method: string }) {
  return (
    <div className="flex items-center gap-3 py-2 px-3 rounded-lg bg-slate-50 border border-slate-100">
      <div className="w-2 h-2 rounded-full bg-emerald-500" />
      <span className="text-slate-700">{method}</span>
    </div>
  );
}

function CapabilityCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function CaseStudyCard({
  title,
  subtitle,
  description,
  signals,
  outcome,
}: {
  title: string;
  subtitle: string;
  description: string;
  signals: string[];
  outcome: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
      <p className="text-xs uppercase tracking-wide text-slate-400">{subtitle}</p>
      <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {signals.map((signal) => (
          <li key={signal} className="flex items-start gap-2">
            <span className="text-primary-300 mt-0.5">-</span>
            <span>{signal}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">Outcome target</p>
      <p className="text-sm text-white">{outcome}</p>
    </div>
  );
}
