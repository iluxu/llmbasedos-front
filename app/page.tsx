import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_55%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,241,231,0.8))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div className="animate-rise">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                Agent Ops OS - MCP Native
              </div>
              <h1 className="mt-6 text-5xl md:text-7xl font-display leading-[0.95]">
                LLMBasedOS
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-slate-700 max-w-2xl">
                Build and run autonomous pipelines that move from signal to action.
              </p>
              <p className="mt-3 text-lg text-slate-500 max-w-2xl">
                Concevez et deployez des agents operationnels, du signal a l'action.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
                >
                  Request access
                </a>
                <Link
                  href="/docs"
                  className="px-6 py-3 rounded-full border border-black/10 bg-white/70 text-slate-800 font-semibold hover:bg-white transition-colors"
                >
                  Explore docs
                </Link>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                <MiniStat title="Arcs" detail="Modular MCP capabilities" sub="Modules MCP" />
                <MiniStat title="Sentinels" detail="Always-on watchers" sub="Veilleurs actifs" />
                <MiniStat title="LLM Route" detail="Multi-model orchestration" sub="Orchestration modeles" />
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/80 shadow-xl shadow-black/5 p-6 animate-drift">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>Live MCP Snapshot</span>
                <span className="text-primary-600">Online</span>
              </div>
              <div className="mt-4 space-y-3 font-mono text-sm text-slate-700">
                <p>mcp.vinted.search</p>
                <p>mcp.vinted.watch_start</p>
                <p>mcp.instagram.scrape</p>
                <p>mcp.sentinel.run</p>
                <p>mcp.llm.route</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-black/10 bg-[#f7f4ec] p-4">
                  <p className="text-slate-500 text-xs uppercase tracking-wide">Events</p>
                  <p className="text-lg font-semibold text-slate-900">Alert-first</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-[#f7f4ec] p-4">
                  <p className="text-slate-500 text-xs uppercase tracking-wide">Clients</p>
                  <p className="text-lg font-semibold text-slate-900">Flutter + API</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-slate-500">
                One gateway, many arcs. Real-time ops built on MCP and WebSockets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Platform</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
            A full stack for agent operations.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            LLMBasedOS combines arcs, sentinels, and routing into a single execution layer.
          </p>
          <p className="mt-2 text-base text-slate-500">
            Un systeme unique pour executer, superviser et enrichir vos agents.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Arcs"
            subtitle="Capacites MCP"
            description="Plug-in services: scraping, OCR, trading intel, marketplace search, and more."
          />
          <FeatureCard
            title="Sentinels"
            subtitle="Veille autonome"
            description="Persistent watchers that stream events to your apps and alert channels."
          />
          <FeatureCard
            title="LLM Route"
            subtitle="Routage multi-modeles"
            description="Dispatch tasks across models, policies, and budgets without rewiring."
          />
          <FeatureCard
            title="Event Bus"
            subtitle="Orchestration temps reel"
            description="Normalize signals, dedupe triggers, and power downstream actions."
          />
        </div>
      </section>

      <section id="capabilities" className="bg-[#f1ece2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Capabilities</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
                Live pipelines, not slideware.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We connect signals, extract data, enrich with OCR, and ship alerts to teams.
              </p>
              <p className="mt-2 text-base text-slate-500">
                De la collecte a l'alerte: scraping, OCR, routage et diffusion en continu.
              </p>

              <ul className="mt-8 space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  Vinted watcher: brand, size, price filters + instant alerts.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  Instagram stories OCR with Apify fallback and media extraction.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  Market sentinels for prediction markets and trading signals.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  Session pools, proxy controls, and compliance-friendly throttling.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/80 p-8 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Pipeline Example</div>
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                <PipelineRow label="Signal" value="New Vinted listing - Stussy - EUR 50" />
                <PipelineRow label="Arc" value="mcp.vinted.search -> watch_start" />
                <PipelineRow label="Enrich" value="OCR + price delta + seller score" />
                <PipelineRow label="Notify" value="Telegram + Flutter push + webhook" />
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-black/10 bg-[#f7f4ec] p-4">
                  <p className="text-slate-500 text-xs uppercase tracking-wide">Latency</p>
                  <p className="text-lg font-semibold text-slate-900">&lt; 30s</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-[#f7f4ec] p-4">
                  <p className="text-slate-500 text-xs uppercase tracking-wide">Delivery</p>
                  <p className="text-lg font-semibold text-slate-900">Multi-channel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="arcs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <StepCard
            step="01"
            title="Connect"
            description="Attach your arcs to the MCP gateway and verify capabilities."
            sub="Branchez vos arcs au gateway MCP."
          />
          <StepCard
            step="02"
            title="Compose"
            description="Chain arcs, add routing, and configure sentinels."
            sub="Chainez les arcs et configurez les sentinelles."
          />
          <StepCard
            step="03"
            title="Operate"
            description="Stream events to apps, dashboards, and alert channels."
            sub="Diffusez les evenements vers vos apps et alertes."
          />
        </div>
      </section>

      <section id="use-cases" className="bg-[#f1ece2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Use Cases</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              B2B and B2C workflows ready to ship.
            </h2>
            <p className="mt-3 text-base text-slate-500">
              Des cas d'usage concrets: veille marche, scraping social, alertes produit.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              title="Marketplace Arbitrage"
              subtitle="Vinted, drops, pricing intelligence"
              description="Detect the right listing before anyone else and notify instantly."
            />
            <UseCaseCard
              title="Social Intel"
              subtitle="Stories, reels, OCR"
              description="Extract text and signals from ephemeral content for analysis."
            />
            <UseCaseCard
              title="Market Signals"
              subtitle="Polymarket, trading alerts"
              description="Monitor price moves and push alerts to traders or bots."
            />
            <UseCaseCard
              title="Ops Monitoring"
              subtitle="Sentinel health and drift"
              description="Watch your own services, rotate sessions, and flag anomalies."
            />
            <UseCaseCard
              title="Agent QA"
              subtitle="Logs, audits, traces"
              description="Keep an auditable trail of what agents did and why."
            />
            <UseCaseCard
              title="Custom Clients"
              subtitle="Flutter, dashboards, webhooks"
              description="Deliver real-time updates to mobile or internal tools."
            />
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-black/10 bg-white/80 p-10 md:p-14 shadow-xl shadow-black/5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                Ready to wire your agents to the real world?
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Give us your use case. We'll design the arcs, the sentinels, and the delivery.
              </p>
              <p className="mt-2 text-base text-slate-500">
                Dites-nous votre besoin, on construit le pipeline.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@llmbasedos.com"
                className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
              >
                Contact us
              </a>
              <Link
                href="/docs"
                className="px-6 py-3 rounded-full border border-black/10 bg-[#f7f4ec] text-slate-800 font-semibold hover:bg-white transition-colors"
              >
                See docs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface MiniStatProps {
  title: string;
  detail: string;
  sub: string;
}

function MiniStat({ title, detail, sub }: MiniStatProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
      <p className="text-lg font-semibold text-slate-900">{detail}</p>
      <p className="text-sm text-slate-500">{sub}</p>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
}

function FeatureCard({ title, subtitle, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-sm uppercase tracking-wide text-slate-400 mt-1">{subtitle}</p>
      <p className="text-slate-600 mt-4">{description}</p>
    </div>
  );
}

interface PipelineRowProps {
  label: string;
  value: string;
}

function PipelineRow({ label, value }: PipelineRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-black/5 pb-3">
      <span className="text-xs uppercase tracking-wide text-slate-400">{label}</span>
      <span className="text-slate-700 text-right">{value}</span>
    </div>
  );
}

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  sub: string;
}

function StepCard({ step, title, description, sub }: StepCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{step}</div>
      <h3 className="text-2xl font-semibold text-slate-900 mt-4">{title}</h3>
      <p className="text-slate-600 mt-3">{description}</p>
      <p className="text-sm text-slate-500 mt-2">{sub}</p>
    </div>
  );
}

interface UseCaseCardProps {
  title: string;
  subtitle: string;
  description: string;
}

function UseCaseCard({ title, subtitle, description }: UseCaseCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-sm uppercase tracking-wide text-slate-400 mt-1">{subtitle}</p>
      <p className="text-slate-600 mt-4">{description}</p>
    </div>
  );
}
