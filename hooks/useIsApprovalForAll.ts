import { useState, useEffect, useCallback } from 'react';
import config from '../utils/config';
import useActiveWeb3React from './useActiveWeb3React';
import { useERC721Contract } from './useContract';

const useIsApprovalForAll = (address: string) => {
  const { account } = useActiveWeb3React();
  const contract = useERC721Contract(address);
  const [loading, setLoading] = useState<boolean>(false);
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const checkFunc = useCallback(
    async (accountValue: string) => {
      setLoading(true);
      try {
        const status = await contract.isApprovedForAll(
          accountValue,
          config.contractAddress.lendingContractAddress,
        );
        setIsApproved(status);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [contract],
  );

  useEffect(() => {
    if (account) {
      checkFunc(account);
    }
  }, [checkFunc, account]);

  const checkAgain = () => {
    setTimeout(() => {
      // @ts-ignore
      checkFunc(account);
    }, 1000);
  };

  return { isApproved, loading, checkApproval: checkAgain };
};

export default useIsApprovalForAll;
