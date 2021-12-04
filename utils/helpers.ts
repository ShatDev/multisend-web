/* eslint-disable no-unused-vars */
import { parseUnits } from 'ethers/lib/utils';

export const minifyAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4, address.length)}`;

// eslint-disable-next-line no-shadow
export enum GAS_PRICE {
  Default = '5',
  Fast = '6',
  Instant = '7',
  Testnet = '10',
}

export const GAS_PRICE_GWEI = {
  default: parseUnits(GAS_PRICE.Default, 'gwei').toString(),
  fast: parseUnits(GAS_PRICE.Fast, 'gwei').toString(),
  instant: parseUnits(GAS_PRICE.Instant, 'gwei').toString(),
  testnet: parseUnits(GAS_PRICE.Testnet, 'gwei').toString(),
};
