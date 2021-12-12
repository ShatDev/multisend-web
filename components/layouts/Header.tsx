/* eslint-disable jsx-a11y/anchor-is-valid */
import { ethers } from 'ethers';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { useActiveWeb3React } from '../../hooks';
import { minifyAddress } from '../../utils/helpers';

function Header({ active, connect, logOut, account }: any) {
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

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/images/logo/logo.png" alt="logo" height={32} width={32} />
            <span className="ml-3 text-xl">Multi Send</span>
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {active && (
            <div className="flex items-center mr-7 hover:text-gray-900">
              <img src="/images/choose_network.png" className="mr-2" alt="choose network" />
              <div className="text-sm font-semibold text-black">
                {chainId === 137 ? 'Polygon Mainnet' : 'Polygon Testnet'}
              </div>
            </div>
          )}
        </nav>
        {!active && (
          <button
            type="button"
            className="inline-flex items-center bg-blue-400 border-0 py-3 px-3 text-sm mt-4 md:mt-0 rounded-2xl text-white"
            onClick={connect}
          >
            Connect Wallet
          </button>
        )}
        {active && (
          <div className="flex">
            <div className="h-12 text-white font-medium flex justify-center items-center mb-4 md:mb-0 special_btn ml-4">
              <div className="inline-flex items-center justify-center h-full bg-white rounded-l-md px-3 text-black">
                {balance} MATIC{' '}
              </div>
              <div className="flex items-center justify-center h-full bg-yellow-200 rounded-r-md px-3 text-black">
                {minifyAddress(account, 6)}
              </div>
            </div>
            <button
              type="button"
              className="text-red-500 ml-3 special_btn px-3 h-12 font-semibold"
              onClick={logOut}
            >
              Logout
            </button>
          </div>
        )}

        {/* <a href="www.google.com" className="flex items-center hover:text-gray-900 ml-7">
          <img src="/images/profile_icon.png" alt="Profile network" className="h-14 w-14" />
        </a> */}
      </div>
    </header>
  );
}

export default Header;
