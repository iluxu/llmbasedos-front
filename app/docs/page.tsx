import { FAQ } from '@/components/FAQ';
import { ReferenceItem } from '@/components/ReferenceItem';
import { TOKEN_ADDRESS, OWNER_ADDRESS, TOKEN_EXPLORER_URL, DEPLOYMENT_TX_URL } from '@/lib/chain';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Documentation | LLMBasedOS',
  description: 'Integration guides, MCP reference, and operational notes for LLMBasedOS.',
};

export default function DocsPage() {
  const faqItems = [
    {
      question: 'What is an Arc?',
      answer: 'An Arc is a modular MCP capability (scraping, OCR, routing, alerting) that can be attached to the gateway and composed into workflows.',
    },
    {
      question: 'What is a Sentinel?',
      answer: 'A Sentinel is a long-running watcher that monitors signals and emits events to your apps, dashboards, or alert channels.',
    },
    {
      question: 'Do you support custom integrations?',
      answer: 'Yes. We can wrap your internal data sources or third-party APIs into MCP arcs and connect them to your existing tooling.',
    },
    {
      question: 'How do you handle compliance?',
      answer: 'We enforce rate limits, respect public availability, and configure sessions/proxies based on client requirements. We prioritize safe, compliant usage.',
    },
    {
      question: 'Can I use LLMBasedOS with Claude Code or Codex?',
      answer: 'Yes! LLMBasedOS is fully compatible with both Claude Code and OpenAI Codex. Install it as a Skill and all MCP arcs become available as tools in your AI assistant.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Documentation
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to integrate LLMBasedOS with your workflow
          </p>
        </div>

        {/* Codex & Claude Code Integration - MAIN SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Codex & Claude Code Integration</h2>
          <div className="border border-slate-200 rounded-2xl p-8 bg-white shadow-lg">
            <p className="text-lg text-slate-600 mb-8">
              LLMBasedOS works as a Skill in both OpenAI Codex and Claude Code.
              Install it once and get access to all MCP arcs directly in your terminal.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Codex Install */}
              <div className="rounded-xl bg-slate-900 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">OpenAI Codex</h3>
                    <p className="text-sm text-slate-400">Install as a Skill</p>
                  </div>
                </div>
                <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm">
                  <span className="text-slate-500">$</span>{' '}
                  <span className="text-emerald-400">codex install</span>{' '}
                  <span className="text-white">llmbasedos</span>
                </div>
              </div>

              {/* Claude Code Install */}
              <div className="rounded-xl bg-slate-900 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold">◇</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Claude Code</h3>
                    <p className="text-sm text-slate-400">MCP Integration</p>
                  </div>
                </div>
                <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm">
                  <span className="text-slate-500">$</span>{' '}
                  <span className="text-emerald-400">claude mcp add</span>{' '}
                  <span className="text-white">llmbasedos</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200">
              <Image
                src="/demo_mcp.gif"
                alt="LLMBasedOS MCP Integration Demo"
                width={800}
                height={400}
                className="w-full"
                unoptimized
              />
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary-50 border border-primary-100">
              <p className="text-primary-800 text-sm">
                <strong>What happens after install:</strong> All MCP arcs (vinted.search, instagram.scrape, sentinel.run, etc.)
                become available as tools in your AI assistant. You can call them directly from your conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Quick Reference</h2>
          <div className="border border-slate-200 rounded-2xl p-8 bg-white shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <ReferenceItem label="Gateway" value="MCP WebSocket (private)" />
              <ReferenceItem label="Runtime" value="Docker + Supervisor" />
              <ReferenceItem label="Clients" value="Flutter - Webhooks - Dashboards" />
              <ReferenceItem label="Events" value="EventBus + push alerts" />
              <ReferenceItem label="GitHub Repo" value="https://github.com/iluxu/llmbasedos" />
            </div>
          </div>
        </section>

        {/* Full Stack Install */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Full Stack Install</h2>
          <div className="border border-slate-200 rounded-2xl p-8 bg-white shadow-sm">
            <p className="text-slate-600 text-lg mb-6">
              For running the complete LLMBasedOS stack locally or on a server.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-xl p-6 font-mono text-sm space-y-2">
              <p><span className="text-slate-500">$</span> git clone https://github.com/iluxu/llmbasedos.git</p>
              <p><span className="text-slate-500">$</span> cd llmbasedos</p>
              <p><span className="text-slate-500">$</span> docker compose up -d</p>
              <p><span className="text-slate-500">$</span> scripts/luca-shell.sh</p>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">What's included</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• MCP WebSocket gateway</li>
                  <li>• All built-in arcs (Vinted, Instagram, etc.)</li>
                  <li>• EventBus for real-time alerts</li>
                  <li>• Supervisor for process management</li>
                </ul>
              </div>
              <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Requirements</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Docker & Docker Compose</li>
                  <li>• 2GB+ RAM recommended</li>
                  <li>• Linux, macOS, or WSL2</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/iluxu/llmbasedos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                View on GitHub
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* MCP Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">MCP Methods</h2>
          <div className="border border-slate-200 rounded-2xl p-8 bg-white shadow-sm">
            <p className="text-slate-600 mb-6">
              These methods are available when you connect to the MCP gateway or install as a Skill.
            </p>

            <div className="space-y-4">
              <MethodDoc
                method="mcp.listCapabilities"
                description="List all available arcs and their methods"
              />
              <MethodDoc
                method="mcp.vinted.search"
                description="One-shot search on Vinted using search_url or filters"
              />
              <MethodDoc
                method="mcp.vinted.watch_start"
                description="Start a polling watcher that publishes events to EventBus"
              />
              <MethodDoc
                method="mcp.vinted.watch_stop"
                description="Stop a watcher by ID"
              />
              <MethodDoc
                method="mcp.vinted.list_watches"
                description="List all active watchers"
              />
              <MethodDoc
                method="mcp.instagram.scrape"
                description="Scrape Instagram stories/reels with OCR extraction"
              />
              <MethodDoc
                method="mcp.sentinel.run"
                description="Start a sentinel for continuous monitoring"
              />
              <MethodDoc
                method="mcp.llm.route"
                description="Route a prompt to the optimal LLM based on task type"
              />
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border border-slate-200">
              <Image
                src="/vinted_mcp_capabilities.png"
                alt="Vinted MCP Capabilities"
                width={800}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Token */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Token</h2>
          <div className="border border-slate-200 rounded-2xl p-8 bg-white shadow-sm">
            <p className="text-slate-600 mb-6">
              The LLMBasedOS token anchors alignment and long-term access primitives.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ReferenceItem label="Token Contract" value={TOKEN_ADDRESS} copyable />
              <ReferenceItem label="Owner Address" value={OWNER_ADDRESS} copyable />
              <ReferenceItem label="Deployment Tx" value={DEPLOYMENT_TX_URL} />
              <ReferenceItem label="Explorer" value={TOKEN_EXPLORER_URL} />
            </div>
            <a
              href={TOKEN_EXPLORER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors text-sm font-semibold mt-6"
            >
              View on Basescan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Security */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Security</h2>
          <div className="border border-slate-200 rounded-2xl p-8 bg-white shadow-sm">
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Rate limits, session rotation, and proxy policies are configured per client.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Audit trails for every execution and outgoing alert.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Compliance coordination before deployment.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Respects public availability and avoids abusive patterns.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">FAQ</h2>
          <FAQ items={faqItems} />
        </section>
      </div>
    </div>
  );
}

function MethodDoc({ method, description }: { method: string; description: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
      <div>
        <code className="font-mono text-sm font-semibold text-slate-900">{method}</code>
        <p className="text-slate-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
