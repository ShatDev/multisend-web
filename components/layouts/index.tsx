/* eslint-disable react/require-default-props */
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

function Layout({ isDrop = false, children }: { isDrop?: boolean; children: ReactNode }) {
  const { account, active, activate, error, deactivate } =
    useWeb3React<ethers.providers.Web3Provider>();

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  useEffect(() => {
    if (error) {
      toast.error(getErrorMessage(error));
    }
  }, [error]);

  return (
    <div style={isDrop ? { backgroundImage: `url('/images/dropBackground.png)` } : {}}>
      <Header
        account={account}
        active={active}
        connect={() => activate(injected)}
        logOut={() => deactivate()}
      />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
