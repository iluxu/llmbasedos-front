import { base } from 'viem/chains';

// Token contract details
export const TOKEN_ADDRESS = '0xC1f85EBfC85d09EBEDbd55b2865092944F362cB5' as const;
export const OWNER_ADDRESS = '0x6296585f5D80564D0c7e241306d9c19D8cc85F9D' as const;
export const DEPLOYMENT_TX = '0x7cf70d11395280fbdbb5f8c2145e2640ed581e6ecd9b56a39c7de5f416a514f4' as const;
export const DEPLOYMENT_BLOCK = 39546911n;

// Chain configuration
export const CHAIN = base;
export const CHAIN_ID = base.id; // 8453

// Explorer links
export const getExplorerUrl = (type: 'address' | 'tx', hash: string) => {
  const baseUrl = 'https://basescan.org';
  return `${baseUrl}/${type}/${hash}`;
};

export const TOKEN_EXPLORER_URL = getExplorerUrl('address', TOKEN_ADDRESS);
export const DEPLOYMENT_TX_URL = getExplorerUrl('tx', DEPLOYMENT_TX);
