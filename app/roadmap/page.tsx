import { Timeline } from '@/components/Timeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmap | LLMBasedOS',
  description: 'Roadmap and milestones for LLMBasedOS agent operations platform.',
};

export default function RoadmapPage() {
  const timelineItems = [
    {
      period: 'Now',
      title: 'Core Operations Layer',
      description:
        'MCP gateway, arc runtime, sentinel orchestration, and initial market/social pipelines.',
      status: 'completed' as const,
    },
    {
      period: 'Next',
      title: 'Policy & Governance',
      description:
        'Session governance, rate limiting profiles, audit trails, and compliance toolkits.',
      status: 'current' as const,
    },
    {
      period: 'H1 2026',
      title: 'Arc SDK + Marketplace',
      description:
        'Developer SDK, reusable arc templates, and controlled distribution workflows.',
      status: 'upcoming' as const,
    },
    {
      period: 'H2 2026',
      title: 'Enterprise Observability',
      description:
        'Multi-tenant dashboards, alert routing, SLA monitoring, and incident response tooling.',
      status: 'upcoming' as const,
    },
    {
      period: 'Beyond',
      title: 'Agent-to-Agent Networks',
      description:
        'Inter-agent messaging, shared memory layers, and collaborative workflows.',
      status: 'upcoming' as const,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 mb-4">
            Roadmap
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Direction for the LLMBasedOS platform and ecosystem
          </p>
          <p className="text-base text-slate-500 mt-2">
            Feuille de route produit et deploiement
          </p>
        </div>

        <div className="mb-16">
          <Timeline items={timelineItems} />
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-slate-900 mb-8 text-center">
            Delivery Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PrincipleCard
              title="Operational First"
              description="Every milestone is tied to real-world operational workflows and measurable impact."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              }
            />
            <PrincipleCard
              title="Measured Rollouts"
              description="We ship in controlled phases with monitoring, feedback loops, and rollback paths."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
            />
            <PrincipleCard
              title="Transparent Updates"
              description="Every change is documented with clear scopes and operational impact notes."
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
            />
          </div>
        </section>

        <div className="p-8 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,244,236,0.9))] border border-black/10">
          <h3 className="text-lg font-display font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Roadmap Disclaimer
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            This roadmap is directional and subject to change based on technical requirements, partner feedback, and compliance review.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            We share the plan, but we prioritize stability and safe delivery over speed.
          </p>
        </div>
      </div>
    </div>
  );
}

interface PrincipleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function PrincipleCard({ title, description, icon }: PrincipleCardProps) {
  return (
    <div className="p-6 rounded-xl border border-black/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,244,236,0.9))] shadow-sm">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
