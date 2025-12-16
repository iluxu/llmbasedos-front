import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { TopNav } from '@/components/TopNav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'LLMBasedOS Token | Native Token for Sovereign Agent Operating System',
  description: 'The native token for a sovereign agent operating system. Utility-first, standard-first, hype-last. Built on Base mainnet.',
  keywords: ['LLMBasedOS', 'token', 'cryptocurrency', 'Base', 'blockchain', 'agent', 'AI'],
  authors: [{ name: 'LLMBasedOS' }],
  openGraph: {
    title: 'LLMBasedOS Token',
    description: 'The native token for a sovereign agent operating system.',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'LLMBasedOS Token',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLMBasedOS Token',
    description: 'The native token for a sovereign agent operating system.',
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'LLMBasedOS Token',
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
