import { formatUnits } from 'viem';

/**
 * Format token supply to human-readable format
 */
export function formatSupply(rawSupply: bigint, decimals: number): string {
  const value = formatUnits(rawSupply, decimals);
  const numValue = parseFloat(value);

  // Format to trillion (T) if value is >= 1T
  if (numValue >= 1_000_000_000_000) {
    return `${(numValue / 1_000_000_000_000).toFixed(1)}T`;
  }

  // Format to billion (B) if value is >= 1B
  if (numValue >= 1_000_000_000) {
    return `${(numValue / 1_000_000_000).toFixed(1)}B`;
  }

  // Format to million (M) if value is >= 1M
  if (numValue >= 1_000_000) {
    return `${(numValue / 1_000_000).toFixed(1)}M`;
  }

  return numValue.toLocaleString();
}

/**
 * Shorten an Ethereum address
 */
export function shortenAddress(address: string, chars = 4): string {
  if (!address) return '';
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

/**
 * Format raw supply to exact number with commas
 */
export function formatExactSupply(rawSupply: bigint, decimals: number): string {
  const value = formatUnits(rawSupply, decimals);
  const numValue = parseFloat(value);
  return numValue.toLocaleString('en-US', { maximumFractionDigits: 0 });
}
