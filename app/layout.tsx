import type { Metadata } from 'next';
import { Space_Grotesk, Fraunces, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { TopNav } from '@/components/TopNav';
import { Footer } from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const ibmMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm-mono',
});

export const metadata: Metadata = {
  title: 'LLMBasedOS | Agent Ops Operating System',
  description: 'LLMBasedOS builds agent operations: MCP arcs, sentinels, and workflows that turn signals into actions.',
  keywords: ['LLMBasedOS', 'agent OS', 'MCP', 'sentinels', 'arcs', 'automation', 'AI', 'ops'],
  authors: [{ name: 'LLMBasedOS' }],
  openGraph: {
    title: 'LLMBasedOS',
    description: 'Agent ops OS for MCP arcs, sentinels, and real-world workflows.',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'LLMBasedOS',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLMBasedOS',
    description: 'Agent ops OS for MCP arcs, sentinels, and real-world workflows.',
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'LLMBasedOS',
    }],
  },
  metadataBase: new URL('https://llmbasedos.com'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable} ${ibmMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
