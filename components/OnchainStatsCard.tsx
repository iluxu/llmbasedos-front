'use client';

import { useEffect, useState } from 'react';
import { publicClient } from '@/lib/publicClient';
import { TOKEN_ADDRESS, CHAIN, DEPLOYMENT_TX, DEPLOYMENT_BLOCK } from '@/lib/chain';
import { ERC20_ABI } from '@/lib/erc20';
import { formatSupply, formatExactSupply, shortenAddress } from '@/lib/format';
import { AddressBadge } from './AddressBadge';
import { CopyButton } from './CopyButton';

interface TokenData {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: bigint;
}

export function OnchainStatsCard() {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTokenData() {
      try {
        setLoading(true);
        setError(null);

        const [name, symbol, decimals, totalSupply] = await Promise.all([
          publicClient.readContract({
            address: TOKEN_ADDRESS,
            abi: ERC20_ABI,
            functionName: 'name',
          }),
          publicClient.readContract({
            address: TOKEN_ADDRESS,
            abi: ERC20_ABI,
            functionName: 'symbol',
          }),
          publicClient.readContract({
            address: TOKEN_ADDRESS,
            abi: ERC20_ABI,
            functionName: 'decimals',
          }),
          publicClient.readContract({
            address: TOKEN_ADDRESS,
            abi: ERC20_ABI,
            functionName: 'totalSupply',
          }),
        ]);

        setTokenData({
          name: name as string,
          symbol: symbol as string,
          decimals: decimals as number,
          totalSupply: totalSupply as bigint,
        });
      } catch (err) {
        console.error('Failed to fetch token data:', err);
        setError('Failed to load on-chain data');
        // Set fallback data
        setTokenData({
          name: 'LLMBasedOS Token',
          symbol: 'LOADING',
          decimals: 18,
          totalSupply: BigInt('1000000000000000000000000000000'),
        });
      } finally {
        setLoading(false);
      }
    }

    fetchTokenData();
    // Refresh every 60 seconds
    const interval = setInterval(fetchTokenData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white/50"></div>
        </div>
      </div>
    );
  }

  if (!tokenData) {
    return (
      <div className="border border-red-500/20 rounded-2xl p-8 bg-red-500/5">
        <p className="text-red-400 text-center">
          {error || 'Failed to load token data'}
        </p>
      </div>
    );
  }

  const formattedSupply = formatSupply(tokenData.totalSupply, tokenData.decimals);
  const exactSupply = formatExactSupply(tokenData.totalSupply, tokenData.decimals);

  return (
    <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Live On-Chain Data</h3>
        <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-medium">
          Deployed on Base Mainnet
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatItem label="Token Name" value={tokenData.name} />
        <StatItem label="Symbol" value={tokenData.symbol} />
        <StatItem label="Chain" value={CHAIN.name} />
        <StatItem label="Decimals" value={tokenData.decimals.toString()} />

        <div className="md:col-span-2">
          <StatItem
            label="Total Supply"
            value={formattedSupply}
            subtitle={`Exact: ${exactSupply} tokens`}
          />
        </div>

        <div className="md:col-span-2 pt-4 border-t border-white/10">
          <AddressBadge address={TOKEN_ADDRESS} label="Contract Address" />
          <div className="mt-3">
            <CopyButton text={TOKEN_ADDRESS} label="Copy Address" className="w-full" />
          </div>
        </div>

        <div className="md:col-span-2 pt-4 border-t border-white/10">
          <div className="flex flex-col gap-3">
            <StatItem
              label="Deployment Transaction"
              value={shortenAddress(DEPLOYMENT_TX, 8)}
            />
            <StatItem
              label="Deployment Block"
              value={DEPLOYMENT_BLOCK.toLocaleString()}
            />
            <a
              href={`https://basescan.org/tx/${DEPLOYMENT_TX}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center gap-1"
            >
              View on Basescan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatItem({
  label,
  value,
  subtitle,
}: {
  label: string;
  value: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-white/50 uppercase tracking-wide font-medium">
        {label}
      </span>
      <span className="text-lg font-semibold text-white">{value}</span>
      {subtitle && (
        <span className="text-xs text-white/40 font-mono">{subtitle}</span>
      )}
    </div>
  );
}
