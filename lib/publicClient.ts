import { createPublicClient, http, fallback } from 'viem';
import { CHAIN } from './chain';

// RPC endpoints with fallback support
const RPC_URLS = [
  process.env.NEXT_PUBLIC_BASE_RPC_1 || 'https://mainnet.base.org',
  process.env.NEXT_PUBLIC_BASE_RPC_2 || 'https://base.publicnode.com',
  process.env.NEXT_PUBLIC_BASE_RPC_3,
].filter(Boolean) as string[];

// Create transports with fallback
const transports = RPC_URLS.map((url) => http(url));

// Public client for on-chain reads
export const publicClient = createPublicClient({
  chain: CHAIN,
  transport: fallback(transports),
  batch: {
    multicall: true,
  },
});
