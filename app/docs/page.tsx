import { FAQ } from '@/components/FAQ';
import { ReferenceItem } from '@/components/ReferenceItem';
import type { Metadata } from 'next';

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
      question: 'Is it bilingual?',
      answer: 'Yes. We ship English + French experiences and can localize further per deployment.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 mb-4">
            Documentation
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Integration guides for arcs, sentinels, and MCP workflows
          </p>
          <p className="text-base text-slate-500 mt-2">
            Guides d'integration pour arcs, sentinelles et workflows MCP
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-6">Quick Reference</h2>
          <div className="border border-black/10 rounded-2xl p-8 bg-white/80 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <ReferenceItem label="Gateway" value="MCP WebSocket (private)" />
              <ReferenceItem label="Runtime" value="Docker + Supervisor" />
              <ReferenceItem label="Clients" value="Flutter - Webhooks - Dashboards" />
              <ReferenceItem label="Events" value="EventBus + push alerts" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-6">Core MCP Methods</h2>
          <div className="border border-black/10 rounded-2xl p-8 bg-white/80 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Capability Surface</h3>
                <ul className="space-y-3 text-slate-600 list-disc list-inside">
                  <li>mcp.listCapabilities</li>
                  <li>mcp.sentinel.list - mcp.sentinel.run</li>
                  <li>mcp.instagram.scrape</li>
                  <li>mcp.vinted.search - mcp.vinted.watch_start</li>
                  <li>mcp.llm.route</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Workflow Example</h3>
                <div className="bg-[#f7f4ec] rounded-lg p-4 font-mono text-sm text-slate-700 space-y-2 border border-black/10">
                  <p># List capabilities</p>
                  <code className="block">mcp.listCapabilities []</code>

                  <p className="pt-4"># Start a sentinel</p>
                  <code className="block">{'mcp.sentinel.run ["vinted_watch", {}]'}</code>

                  <p className="pt-4"># Scrape and OCR</p>
                  <code className="block">{'mcp.instagram.scrape [{"target":"user","mode":"story"}]'}</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-6">Security Notes</h2>
          <div className="border border-black/10 rounded-2xl p-8 bg-white/80 shadow-sm">
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
                <span>We keep audit trails for every execution and outgoing alert.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>We coordinate with your legal/compliance requirements before deployment.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>We respect public availability and avoid abusive scraping patterns.</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-6">FAQ</h2>
          <FAQ items={faqItems} />
        </section>
      </div>
    </div>
  );
}
