/**
 * Marketing Metrics Dashboard Generator
 *
 * Fetches on-chain and social metrics to create weekly reports
 */

import { createPublicClient, http, formatUnits } from 'viem';
import { base } from 'viem/chains';

// Configuration
const TOKEN_ADDRESS = '0xC1f85EBfC85d09EBEDbd55b2865092944F362cB5' as const;
const ERC20_ABI = [
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

// Initialize client
const publicClient = createPublicClient({
  chain: base,
  transport: http('https://mainnet.base.org'),
});

interface TokenMetrics {
  totalSupply: string;
  holders: number;
  transfers24h: number;
  uniqueAddresses: number;
}

interface SocialMetrics {
  twitter: {
    followers: number;
    engagement: number;
    impressions: number;
  };
  discord: {
    members: number;
    activeMembers: number;
    messages24h: number;
  };
}

interface WeeklyReport {
  date: string;
  onChain: TokenMetrics;
  social: SocialMetrics;
  growth: {
    holdersChange: string;
    followersChange: string;
    engagementChange: string;
  };
}

/**
 * Fetch on-chain token metrics
 */
async function getOnChainMetrics(): Promise<Partial<TokenMetrics>> {
  try {
    const totalSupply = await publicClient.readContract({
      address: TOKEN_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'totalSupply',
    });

    return {
      totalSupply: formatUnits(totalSupply, 18),
    };
  } catch (error) {
    console.error('Error fetching on-chain metrics:', error);
    return {};
  }
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(report: Partial<WeeklyReport>): string {
  const date = new Date().toISOString().split('T')[0];

  return `# Weekly Marketing Report - ${date}

## On-Chain Metrics

- **Total Supply**: ${report.onChain?.totalSupply || 'N/A'} tokens
- **Holders**: ${report.onChain?.holders || 'TBD'}
- **24h Transfers**: ${report.onChain?.transfers24h || 'TBD'}

## Social Metrics

### Twitter/X
- **Followers**: ${report.social?.twitter.followers || 'TBD'}
- **Engagement Rate**: ${report.social?.twitter.engagement || 'TBD'}%
- **Weekly Impressions**: ${report.social?.twitter.impressions || 'TBD'}

### Discord
- **Total Members**: ${report.social?.discord.members || 'TBD'}
- **Active Members**: ${report.social?.discord.activeMembers || 'TBD'}
- **Daily Messages**: ${report.social?.discord.messages24h || 'TBD'}

## Growth vs Last Week

- **Holder Growth**: ${report.growth?.holdersChange || 'TBD'}
- **Follower Growth**: ${report.growth?.followersChange || 'TBD'}
- **Engagement Change**: ${report.growth?.engagementChange || 'TBD'}

## Key Actions This Week

- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

## Content Performance

Top performing tweet: [Link]
- Impressions: X
- Engagements: X
- Link clicks: X

## Next Week Plan

1. [Action item 1]
2. [Action item 2]
3. [Action item 3]

---

*Generated on ${date}*
`;
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 Fetching metrics...\n');

  const onChainMetrics = await getOnChainMetrics();

  const report: Partial<WeeklyReport> = {
    date: new Date().toISOString().split('T')[0],
    onChain: {
      totalSupply: onChainMetrics.totalSupply || '0',
      holders: 0, // TODO: Fetch from Basescan API
      transfers24h: 0, // TODO: Fetch from Basescan API
      uniqueAddresses: 0,
    },
    social: {
      twitter: {
        followers: 0, // TODO: Manual input or Twitter API
        engagement: 0,
        impressions: 0,
      },
      discord: {
        members: 0, // TODO: Discord API
        activeMembers: 0,
        messages24h: 0,
      },
    },
    growth: {
      holdersChange: 'TBD',
      followersChange: 'TBD',
      engagementChange: 'TBD',
    },
  };

  const markdown = generateMarkdownReport(report);

  console.log(markdown);
  console.log('\n✅ Report generated!');
  console.log('\n📝 Next steps:');
  console.log('1. Fill in social metrics manually');
  console.log('2. Compare with last week\'s report');
  console.log('3. Share with team');
}

main().catch(console.error);

export { getOnChainMetrics, generateMarkdownReport };
