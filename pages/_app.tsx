import type { AppProps } from 'next/app';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider as Web3Provider } from '@ethersproject/providers';

import '../styles/global.css';

function getLibrary(provider: any): Web3Provider {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
export default MyApp;
