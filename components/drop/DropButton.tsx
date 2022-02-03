/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useActiveWeb3React, useERC721Contract, useERC20Contract } from '../../hooks';
import { callWithEstimateGas } from '../../utils/estimateGas';
import config from '../../utils/config';
import Button from '../elements/Button';
import { injected } from '../../utils/connections';

interface ApproveButtonProps {
  address: string;
  tokenType: string;
  setStep: (step: number) => void;
}

const DropButton = ({ address, tokenType, setStep }: ApproveButtonProps) => {
  const { active, account, activate } = useActiveWeb3React();
  const nftContract = useERC721Contract(address);
  const erc20Contract = useERC20Contract(address);
  const [loading, setLoading] = useState(false);

  const checkERC20Approval = async () => {
    setLoading(true);
    try {
      const total = await erc20Contract.totalSupply();
      const allowance = await erc20Contract.allowance(account, config.multiSendContractAddress);
      if (allowance.toNumber() <= parseFloat(total.toString())) {
        const tx = await callWithEstimateGas(erc20Contract, 'approve', [
          config.multiSendContractAddress,
          total,
        ]);
        await tx.wait();
        setStep(2);
        setLoading(false);
      } else {
        setStep(2);
        setLoading(false);
      }
    } catch (error: any) {
      toast.error(error.message.split('\n')[0]);
      setLoading(false);
    }
  };

  const checkNFTApproval = async () => {
    setLoading(true);
    try {
      const status = await nftContract.isApprovedForAll(account, config.multiSendContractAddress);
      // console.log('status', status);
      if (!status) {
        const tx = await callWithEstimateGas(nftContract, 'setApprovalForAll', [
          config.multiSendContractAddress,
          true,
        ]);
        await tx.wait();
        setStep(2);
      } else {
        setStep(2);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message.split('\n')[0]);
      console.log('error', error);
      setLoading(false);
    }
  };
  const onHandleProceed = () => {
    if (address) {
      if (tokenType === 'ERC20') {
        checkERC20Approval();
      } else {
        checkNFTApproval();
      }
    }
  };

  return (
    <div className="flex justify-center">
      {active ? (
        <Button isLoading={loading} onClick={onHandleProceed}>
          Drop
        </Button>
      ) : (
        <Button onClick={() => activate(injected)}>Connect to metamask</Button>
      )}
    </div>
  );
};

export default DropButton;
