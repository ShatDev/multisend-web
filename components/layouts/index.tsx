import { ReactNode, useEffect } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

import { toast } from 'react-hot-toast';
import Header from './Header';
import {
  useEagerConnect,
  useInactiveListener,
  getErrorMessage,
  injected,
} from '../../utils/connections';

function Layout({ children }: { children: ReactNode }) {
  const { active, activate, error } = useWeb3React<ethers.providers.Web3Provider>();

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  useEffect(() => {
    if (error) {
      toast.error(getErrorMessage(error));
    }
  }, [error]);

  return (
    <div>
      <Header active={active} connect={() => activate(injected)} />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
