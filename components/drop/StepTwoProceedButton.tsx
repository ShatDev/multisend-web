/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ethers } from 'ethers';
import {
  useActiveWeb3React,
  useERC20Contract,
  useERC721Contract,
  useERC1155Contract,
} from '../../hooks';
import Button from '../elements/Button';
import { injected } from '../../utils/connections';
import { getERC1155OwnersOfToken, getERC721OwnersOfToken } from '../../utils/contractHelpers';

interface StepOneProceedButtonProps {
  tokenType: string;
  tokenAddress: string;
  setStep: (step: number) => void;
}

const StepOneProceedButton = ({ tokenType, tokenAddress, setStep }: StepOneProceedButtonProps) => {
  const erc721Contract = useERC721Contract(tokenAddress);
  const erc1155Contract = useERC1155Contract(tokenAddress);
  const erc20Contract = useERC20Contract(tokenAddress);
  const { active, activate, account } = useActiveWeb3React();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const handleERC721Validation = async (values: string[]) => {
    const data = await getERC721OwnersOfToken(values, erc721Contract);
    const notAOwner = data.filter((item: any) => item.owner !== account);
    if (notAOwner.length > 0) {
      return false;
    }
    return true;
  };

  const handleERC1155Validation = async (values: string[]) => {
    const data = await getERC1155OwnersOfToken(values, erc1155Contract, account || '');
    console.log(data);
  };

  const handleERC20Validation = async (values: string) => {
    const data = await erc20Contract.balance(account);
    console.log(data.toString());
  };

  const onHandleProceed = async () => {
    setLoading(true);
    setError(null);
    try {
      if (tokenType === 'ERC721') {
        await handleERC721Validation(['1', '2']);
        setLoading(false);
      }
      if (tokenType === 'ERC1155') {
        await handleERC1155Validation(['1', '2']);
        setLoading(false);
      }
      if (tokenType === 'ERC20') {
        await handleERC20Validation('100');
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  if (error && error.length > 0) {
    return <div className="text-red-500 font-semibold">{error}</div>;
  }

  return (
    <div className="flex justify-center">
      {active ? (
        <Button isLoading={loading} onClick={onHandleProceed}>
          Proceed
        </Button>
      ) : (
        <Button onClick={() => activate(injected)}>Connect to metamask</Button>
      )}
    </div>
  );
};

export default StepOneProceedButton;
