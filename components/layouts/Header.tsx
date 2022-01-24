/* eslint-disable jsx-a11y/anchor-is-valid */
import { ethers } from 'ethers';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { useActiveWeb3React } from '../../hooks';
import Button from '../elements/Button';
import ConnectedButton from './ConnectedButton';

function Header({ active, open, logOut, account }: any) {
  const [balance, setBalance] = useState<any>(0);
  const { library, chainId } = useActiveWeb3React();

  const getBalance = useCallback(async () => {
    const data: any = await library?.getBalance(account);
    setBalance(ethers.utils.formatEther(data?.toString()).toString());
  }, []);

  useEffect(() => {
    if (active) {
      getBalance();
    }
  }, []);

  console.log('chainId', chainId);

  const currentNetwork = (id: number | undefined) => {
    if (id === 137) {
      return {
        name: 'Polygon',
        symbol: 'MATIC',
        logo: '/images/crypto_icons/polygon_icon.png',
      };
    }
    if (id === 80001) {
      return {
        name: 'Polygon Testnet',
        symbol: 'MATIC',
        logo: '/images/crypto_icons/polygon_icon.png',
      };
    }
    if (id === 1) {
      return {
        name: 'MAINNET',
        symbol: 'ETH',
        logo: '/images/crypto_icons/cryptocurrency_eth.png',
      };
    }
    if (id === 3) {
      return {
        name: 'ROPSTEN',
        symbol: 'ETH',
        logo: '/images/crypto_icons/cryptocurrency_eth.png',
      };
    }
    return {
      name: 'MAINNET',
      symbol: 'ETH',
      logo: '/images/crypto_icons/cryptocurrency_eth.png',
    };
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/images/logo/transmit_logo.png" alt="logo" className="h-10" />
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-white text-lg">
          <a className="mr-6">Home</a>
          <a className="mr-6">Drop</a>
          <a className="mr-6">Pricing</a>
          <a className="mr-6">Tutorial</a>
          <a className="mr-6">FAQ</a>
        </nav>
        {!active && <Button onClick={open}>Connect Wallet</Button>}
        {active && (
          <ConnectedButton
            balance={balance}
            account={account}
            currentNetwork={currentNetwork(chainId)}
            logOut={logOut}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
