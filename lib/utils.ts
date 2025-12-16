import { clsx, type ClassValue } from 'clsx';

/**
 * Utility for merging Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
