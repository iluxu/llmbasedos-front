# LLMBasedOS Token Official Website

The official website for the LLMBasedOS Token, deployed on Base mainnet. Built with Next.js, TypeScript, Tailwind CSS, and viem for on-chain data integration.

## Overview

This website provides comprehensive information about the LLMBasedOS Token:
- Real-time on-chain data (no wallet connection required)
- Token details and security profile
- Utility roadmap and planned features
- Technical documentation and integration guides
- Transparent communication about liquidity and distribution plans

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Blockchain**: viem for Ethereum/Base interaction
- **Fonts**: Geist Sans & Geist Mono
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd llmbasedos-front
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure RPC endpoints:
```bash
cp .env.example .env.local
# Edit .env.local with your preferred RPC endpoints
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Environment Variables (Optional)

The site works out of the box with public RPC endpoints. For better reliability, you can configure custom RPC endpoints:

```bash
NEXT_PUBLIC_BASE_RPC_1=https://mainnet.base.org
NEXT_PUBLIC_BASE_RPC_2=https://base.publicnode.com
NEXT_PUBLIC_BASE_RPC_3=your-custom-rpc-url
```

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── token/             # Token details page
│   ├── utility/           # Utility explanation page
│   ├── roadmap/           # Roadmap timeline page
│   ├── docs/              # Documentation page
│   ├── layout.tsx         # Root layout with nav/footer
│   ├── globals.css        # Global styles
│   ├── robots.ts          # SEO robots config
│   ├── sitemap.ts         # Sitemap generation
│   ├── icon.svg           # Favicon
│   └── opengraph-image.tsx # OG image generation
├── components/            # React components
│   ├── TopNav.tsx         # Navigation bar
│   ├── Footer.tsx         # Site footer
│   ├── OnchainStatsCard.tsx # Live blockchain data
│   ├── CopyButton.tsx     # Copy to clipboard
│   ├── AddressBadge.tsx   # Address display with link
│   ├── Timeline.tsx       # Roadmap timeline
│   └── FAQ.tsx            # FAQ accordion
├── lib/                   # Utilities and config
│   ├── chain.ts           # Chain config and addresses
│   ├── publicClient.ts    # viem client with RPC fallback
│   ├── erc20.ts           # ERC20 ABI
│   ├── format.ts          # Number and address formatters
│   └── utils.ts           # General utilities
└── public/                # Static assets
```

## Token Information

- **Contract Address**: `0xC1f85EBfC85d09EBEDbd55b2865092944F362cB5`
- **Network**: Base Mainnet (Chain ID: 8453)
- **Deployment TX**: `0x7cf70d11395280fbdbb5f8c2145e2640ed581e6ecd9b56a39c7de5f416a514f4`
- **Deployment Block**: 39546911
- **Total Supply**: 1,000,000,000,000 (1 trillion tokens)
- **Decimals**: 18

## Features

### On-Chain Data Integration
- Reads token data directly from Base blockchain
- No wallet connection required
- Automatic fallback between multiple RPC endpoints
- Data refreshes every 60 seconds
- Displays: name, symbol, decimals, total supply, contract details

### SEO Optimized
- Dynamic metadata generation
- Automatic sitemap generation
- OpenGraph images for social sharing
- Structured data for search engines
- Mobile-first responsive design

### Performance
- Static generation where possible
- Optimized images and fonts
- Minimal JavaScript bundle
- Fast page loads with Next.js App Router

## Deployment

### Cloudflare Pages

**Quick deployment** (3 steps):
1. Push your code to GitHub
2. Connect repository in Cloudflare Pages dashboard
3. Deploy with these settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node version: **18**

**Detailed instructions**: See [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md)

Benefits:
- ✅ Global CDN with 300+ edge locations
- ✅ Automatic HTTPS and DDoS protection
- ✅ Free tier with generous limits
- ✅ Excellent performance for crypto users worldwide

### Vercel

**Alternative option** (also excellent):
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy (no configuration needed)
4. (Optional) Add custom domain

The site is configured for zero-config deployment on Vercel.

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Fly.io
- Self-hosted with Docker

## Update Instructions

### Updating Token Information

Token details are centralized in `lib/chain.ts`. Update this file to change:
- Contract address
- Owner address
- Deployment transaction
- Block number
- Chain configuration

### Updating Content

- **Home page**: Edit `app/page.tsx`
- **Token page**: Edit `app/token/page.tsx`
- **Utility page**: Edit `app/utility/page.tsx`
- **Roadmap**: Edit `app/roadmap/page.tsx`
- **Documentation**: Edit `app/docs/page.tsx`

### Updating Styles

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes

## Design Philosophy

This website follows these principles:
- **Credibility over hype**: Clear, honest communication
- **Utility-first**: Focus on real functionality, not speculation
- **Transparency**: Open about plans, limitations, and timelines
- **Professional**: Dark, minimal, premium design
- **Accessible**: Works without wallet, fast loading, mobile-friendly

## Contributing

This is the official website for the LLMBasedOS Token. For questions, issues, or suggestions:
- Open an issue on GitHub
- Contact via official channels (X, Discord)

## License

[Add your license here]

## Links

- **Website**: https://llmbasedos.com
- **Basescan**: https://basescan.org/address/0xC1f85EBfC85d09EBEDbd55b2865092944F362cB5
- **GitHub**: https://github.com/llmbasedos
- **X (Twitter)**: https://x.com/llmbasedos

---

**Disclaimer**: This website provides information about a token. It is not financial advice. Do your own research.
