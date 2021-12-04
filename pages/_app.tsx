import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider as Web3Provider } from '@ethersproject/providers';
import theme from '../theme';

function getLibrary(provider: any): Web3Provider {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ReactProvider>
  );
}
export default MyApp;
