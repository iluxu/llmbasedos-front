import type { Metadata } from 'next';
import Script from 'next/script';
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
    url: 'https://llmbasedos.com',
    siteName: 'LLMBasedOS',
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
    site: '@llmbasedos',
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

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LLMBasedOS',
  url: 'https://llmbasedos.com',
  logo: 'https://llmbasedos.com/og-image.svg',
  sameAs: ['https://github.com/iluxu/llmbasedos', 'https://x.com/llmbasedos'],
};

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'LLMBasedOS',
  url: 'https://llmbasedos.com',
  inLanguage: ['en', 'fr'],
  publisher: {
    '@type': 'Organization',
    name: 'LLMBasedOS',
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
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
