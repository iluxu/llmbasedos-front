import Link from 'next/link';
import type { Metadata } from 'next';
import { TOKEN_ADDRESS, TOKEN_EXPLORER_URL, OWNER_ADDRESS, DEPLOYMENT_TX_URL } from '@/lib/chain';
import { CodeBlock } from '@/components/CodeBlock';
import { FAQ } from '@/components/FAQ';

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
              The Operating System for AI Agents
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              LLMBasedOS
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The infrastructure layer that turns any LLM into an autonomous agent
              with persistent memory, event-driven workflows, and real-world actions.
            </p>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Like Linux for AI — giving Claude hands, memory, and the ability to act over time.
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
                href="/#why-claude-code"
                className="px-8 py-4 rounded-full border-2 border-slate-200 bg-white text-slate-800 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                Why Claude Code?
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

      {/* The Problem / Solution */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                LLMs are stateless chat interfaces
              </h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Today's AI can reason brilliantly, but it can't <span className="text-white font-semibold">act persistently</span>.
                Every session starts from zero. No memory. No agency. No autonomy.
              </p>
              <p className="mt-4 text-slate-400">
                It's like having a genius friend with amnesia who can only talk but never do.
              </p>
            </div>

            <div>
              <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">The Solution</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                LLMBasedOS gives LLMs superpowers
              </h2>
              <div className="mt-6 space-y-4">
                <SuperpowerRow
                  icon="🧠"
                  title="Persistent Memory"
                  description="Vector store that survives sessions — remembers context forever"
                />
                <SuperpowerRow
                  icon="⚡"
                  title="Event-Driven Workflows"
                  description="PubSub system that triggers actions on real-world events"
                />
                <SuperpowerRow
                  icon="🌐"
                  title="Browser Control"
                  description="Full Playwright automation — click, type, screenshot, scrape"
                />
                <SuperpowerRow
                  icon="🔌"
                  title="40+ MCP Methods"
                  description="KV store, SQLite, mail, alerts, trading, and more"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Architecture</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              A middleware layer for AI agents
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              LLMBasedOS sits between your LLM and the real world, providing the primitives agents need.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 font-mono text-sm max-w-3xl mx-auto">
            <pre className="text-slate-700 overflow-x-auto">
{`┌─────────────────────────────────────────────────────────┐
│  Claude Code / GPT / Gemini / Any LLM                   │
└────────────────────────┬────────────────────────────────┘
                         │ MCP Protocol (JSON-RPC)
                         ▼
┌─────────────────────────────────────────────────────────┐
│  Gateway (auth, routing, rate-limits)                   │
└────────────────────────┬────────────────────────────────┘
                         │ Unix sockets
                         ▼
┌─────────────────────────────────────────────────────────┐
│  Arcs (microservices)                                   │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐│
│  │ memory │ │ pubsub │ │browser │ │   kv   │ │  mail  ││
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘│
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│  Infrastructure                                         │
│  Redis │ ChromaDB │ Playwright │ Ollama │ SQLite       │
└─────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
      </section>

      {/* Why Claude Code Section */}
      <section id="why-claude-code" className="py-20 bg-[#f8f6f1] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">For Claude Code</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Turn Claude into a real teammate
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Claude Code is powerful. With LLMBasedOS, it becomes operational.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ComparisonCard
              title="Without LLMBasedOS"
              items={[
                { text: '"What did we do last week?"', result: '"I don\'t know"', bad: true },
                { text: 'Waits for you to ask', result: 'Passive', bad: true },
                { text: 'Can only touch local files', result: 'Limited', bad: true },
                { text: 'Forgets everything on restart', result: 'Stateless', bad: true },
              ]}
              bad
            />
            <ComparisonCard
              title="With LLMBasedOS"
              items={[
                { text: '"What did we do last week?"', result: '"You fixed 3 bugs and deployed v2.1"', bad: false },
                { text: 'Watches for events 24/7', result: '"Hey, CI is failing!"', bad: false },
                { text: 'Browse, email, API calls', result: 'Full internet access', bad: false },
                { text: 'Remembers context forever', result: 'Persistent state', bad: false },
              ]}
              bad={false}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-700 font-medium">
              It's not a plugin. It's the difference between a <span className="text-slate-500">calculator</span> and a <span className="text-primary-600 font-bold">co-founder</span>.
            </p>
          </div>
        </div>
      </section>

      {/* MCP Integration */}
      <section id="compatibility" className="py-20 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">Native Integration</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Works with Claude Code & Codex
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              All arcs are exposed as MCP tools — no glue code, no adapters, just native capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
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

              <p className="text-slate-400 text-sm text-center">
                All 40+ methods become native tools in your AI assistant
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 border border-slate-700 p-6">
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">Available MCP Methods</div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <MethodBadge method="memory_store" />
                <MethodBadge method="memory_recall" />
                <MethodBadge method="pubsub_subscribe" />
                <MethodBadge method="pubsub_emit" />
                <MethodBadge method="browser_goto" />
                <MethodBadge method="browser_screenshot" />
                <MethodBadge method="browser_click" />
                <MethodBadge method="browser_type" />
                <MethodBadge method="kv_set" />
                <MethodBadge method="kv_get" />
                <MethodBadge method="sentinel_run" />
                <MethodBadge method="llm_route" />
                <MethodBadge method="mail_send" />
                <MethodBadge method="sqlite_query" />
                <MethodBadge method="events_publish" />
                <MethodBadge method="fs_list" />
              </div>
              <p className="mt-4 text-xs text-slate-500 text-center">+ 24 more methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Arcs */}
      <section id="capabilities" className="py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Core Arcs</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              The three pillars of agent autonomy
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Memory, Events, and Actions — everything an AI needs to operate independently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard
              icon="🧠"
              title="Memory Arc"
              subtitle="ChromaDB + Ollama"
              description="Persistent vector memory with semantic search. Store context, recall by meaning, build knowledge over time."
              methods={['memory_store', 'memory_recall', 'memory_get', 'memory_delete']}
            />
            <PillarCard
              icon="⚡"
              title="PubSub Arc"
              subtitle="Redis-backed"
              description="Event-driven workflows with subscriptions. React to signals, trigger callbacks, coordinate agents."
              methods={['pubsub_subscribe', 'pubsub_emit', 'pubsub_history', 'pubsub_list']}
            />
            <PillarCard
              icon="🌐"
              title="Browser Arc"
              subtitle="Playwright"
              description="Full browser control. Navigate, click, type, screenshot, extract data, run JavaScript."
              methods={['browser_goto', 'browser_click', 'browser_type', 'browser_screenshot']}
            />
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MiniArcCard title="KV Store" description="Redis-backed key-value" />
            <MiniArcCard title="SQLite" description="Local SQL database" />
            <MiniArcCard title="Mail" description="Send emails & alerts" />
            <MiniArcCard title="Sentinel" description="Background watchers" />
            <MiniArcCard title="LLM Router" description="Multi-model routing" />
            <MiniArcCard title="Events Bus" description="Real-time streaming" />
            <MiniArcCard title="File System" description="File operations" />
            <MiniArcCard title="+ Custom" description="Build your own arcs" />
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section id="install" className="py-20 bg-[#f8f6f1] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Up and running in 2 minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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

              <CodeBlock
                commands={[
                  'git clone https://github.com/iluxu/llmbasedos.git',
                  'cd llmbasedos',
                  'docker compose up -d',
                ]}
              />

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

              <CodeBlock
                commands={[
                  { text: '# Claude Code', isComment: true },
                  'claude mcp add llmbasedos',
                  { text: '# Codex', isComment: true },
                  'codex install llmbasedos',
                ]}
              />

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

      {/* Use Cases */}
      <section id="use-cases" className="relative py-20 bg-slate-950 text-white overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.25),transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-300 font-semibold text-sm uppercase tracking-wider mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              What you can build
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Real workflows, not demos. Production-ready from day one.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <UseCaseCard
              title="AI Developer Teammate"
              description="Claude that remembers your codebase, watches CI/CD, and proactively fixes issues."
              features={['Persistent project context', 'CI failure alerts', 'Auto-PR creation']}
            />
            <UseCaseCard
              title="Research Agent"
              description="Browse the web, extract data, store findings, and build knowledge bases autonomously."
              features={['Web scraping', 'Document memory', 'Scheduled research']}
            />
            <UseCaseCard
              title="Ops Automation"
              description="Monitor systems, react to alerts, execute runbooks, and coordinate responses."
              features={['Event subscriptions', 'Multi-agent coordination', 'Audit trails']}
            />
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-20 bg-[#f8f6f1] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Token</p>
                <h2 className="text-3xl font-display font-bold text-slate-900">
                  LLMBasedOS Token on Base
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  The LLMBasedOS token anchors alignment and long-term access primitives.
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
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Token Contract</p>
                    <p className="font-mono text-sm text-slate-700 break-all">{TOKEN_ADDRESS}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Owner Address</p>
                    <p className="font-mono text-sm text-slate-700 break-all">{OWNER_ADDRESS}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Deployment Tx</p>
                    <a
                      href={DEPLOYMENT_TX_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-primary-600 hover:text-primary-700 break-all"
                    >
                      View transaction →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ
            items={[
              {
                question: "What exactly is LLMBasedOS?",
                answer:
                  "LLMBasedOS is an infrastructure layer (like an OS kernel) that sits between LLMs and the real world. It provides persistent memory (ChromaDB), event-driven workflows (Redis PubSub), browser automation (Playwright), and 40+ other capabilities via the MCP protocol. Think of it as giving AI agents hands, memory, and the ability to act over time.",
              },
              {
                question: "Why do I need this for Claude Code?",
                answer:
                  "Claude Code is powerful but stateless — it forgets everything between sessions. LLMBasedOS gives Claude persistent memory, the ability to watch for events and act proactively, browser control to research and interact with the web, and coordination with other agents. It transforms Claude from a smart chatbot into an operational teammate.",
              },
              {
                question: "Is it hard to set up?",
                answer:
                  "No. For the full stack: 'git clone && docker compose up'. For MCP-only integration with Claude Code: 'claude mcp add llmbasedos'. That's it. All 40+ methods become native tools immediately.",
              },
              {
                question: "What's the MCP protocol?",
                answer:
                  "MCP (Model Context Protocol) is the standard for LLM tool integration, created by Anthropic. LLMBasedOS exposes all its capabilities as MCP methods, making them native tools for any MCP-compatible client like Claude Code, Codex, or custom agents.",
              },
              {
                question: "Can I extend it with custom capabilities?",
                answer:
                  "Yes. Arcs are modular Python microservices. You can create your own arc to wrap any API, database, or internal system. Just define a caps.json schema and implement the handlers. The gateway automatically discovers and routes to new arcs.",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            Ready to give your AI superpowers?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start building autonomous agents that remember, react, and act.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/iluxu/llmbasedos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-900/20"
            >
              Get Started on GitHub
            </a>
            <a
              href="mailto:hello@llmbasedos.com"
              className="px-8 py-4 rounded-full border-2 border-slate-200 bg-white text-slate-800 font-semibold hover:border-slate-300 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component helpers

function SuperpowerRow({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}

function MethodBadge({ method }: { method: string }) {
  return (
    <div className="flex items-center gap-2 py-1.5 px-2 rounded bg-slate-700/50 border border-slate-600/50">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      <span className="text-slate-300">{method}</span>
    </div>
  );
}

function ComparisonCard({ title, items, bad }: { title: string; items: { text: string; result: string; bad: boolean }[]; bad: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 ${bad ? 'border-red-200 bg-red-50' : 'border-emerald-200 bg-emerald-50'}`}>
      <h3 className={`text-xl font-semibold mb-6 ${bad ? 'text-red-800' : 'text-emerald-800'}`}>{title}</h3>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className={`text-lg ${item.bad ? 'text-red-500' : 'text-emerald-500'}`}>
              {item.bad ? '✗' : '✓'}
            </span>
            <div>
              <p className="text-slate-700 font-medium">{item.text}</p>
              <p className={`text-sm ${item.bad ? 'text-red-600' : 'text-emerald-600'}`}>{item.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PillarCard({ icon, title, subtitle, description, methods }: { icon: string; title: string; subtitle: string; description: string; methods: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-primary-600 font-medium">{subtitle}</p>
      <p className="mt-3 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {methods.map((method) => (
          <span key={method} className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-mono">
            {method}
          </span>
        ))}
      </div>
    </div>
  );
}

function MiniArcCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description, features }: { title: string; description: string; features: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
            <span className="text-primary-400">→</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
