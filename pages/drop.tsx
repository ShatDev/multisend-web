/* eslint-disable jsx-a11y/role-has-required-aria-props */
import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { chunk, forEach } from 'lodash';
import StepOne from '../components/drop/StepOne';
import StepTwo from '../components/drop/StepTwo';

import Layout from '../components/layouts';
import StepThree from '../components/drop/StepThree';
import StepFour from '../components/drop/StepFour';
// import OverviewTable from '../components/home/OverviewTable';

export interface DropDetails {
  recipientAddress: string[];
  tokenId?: string[];
  amount: string[];
}

export interface Slot {
  id: number;
  tokenAddress: string;
  isChargeable: boolean;
  tokenType: string;
  address: string[];
  tokenId: string[];
  amount: string[];
  status: string;
  transactionHash: string;
}

const Home: NextPage = () => {
  const [step, setStep] = useState(1);
  const [tokenType, setTokenType] = useState('ERC20');
  const [dropType, setDropType] = useState('DIRECT');
  const [tokenAddress, setTokenAddress] = useState<string | null>(null);
  const [dropDetails, setDropDetails] = useState<DropDetails>({
    recipientAddress: [],
    tokenId: [],
    amount: [],
  });
  const [dropInputValue, setDropInputValue] = useState('');
  const [slots, setSlots] = useState<Array<Slot>>([]);

  const onHandleStepThree = () => {
    const totalAddress = dropDetails.recipientAddress.length;
    const address = chunk(dropDetails.recipientAddress, Math.ceil(totalAddress / 2));
    const tokenIds = chunk(dropDetails.tokenId, Math.ceil(totalAddress / 2));
    const quantities = chunk(dropDetails.amount, Math.ceil(totalAddress / 2));
    const newSlots: Array<Slot> = [];
    forEach(address, (item: any, index: number) => {
      newSlots.push({
        id: index,
        tokenAddress: tokenAddress || '',
        isChargeable: dropType !== 'DIRECT',
        tokenType,
        address: item,
        tokenId: tokenIds[index],
        amount: quantities[index],
        status: 'pending',
        transactionHash: '',
      });
    });
    setSlots(newSlots);
    setStep(step + 1);
  };

  const handleUpdateSlot = (slot: Slot) => {
    const index = slots.findIndex((obj: any) => obj.id === slot.id);
    slots[index] = slot;
  };

  return (
    <Layout isDrop>
      <Head>
        <title>Multi Send</title>
        <meta name="description" content="Market overview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-10 border-4 drop_container h-2/4 mt-28 border-primary">
        {step === 1 && (
          <StepOne
            tokenType={tokenType}
            dropType={dropType}
            setTokenType={setTokenType}
            setDropType={setDropType}
            tokenAddress={tokenAddress}
            setTokenAddress={setTokenAddress}
            setStep={setStep}
          />
        )}
        {step === 2 && (
          <StepTwo
            tokenAddress={tokenAddress || ''}
            tokenType={tokenType}
            dropType={dropType}
            dropInputValue={dropInputValue}
            dropDetails={dropDetails}
            setDropInputValue={setDropInputValue}
            setDropDetails={setDropDetails}
            goBack={() => setStep(step - 1)}
            setStep={setStep}
          />
        )}
        {step === 3 && (
          <StepThree
            tokenAddress={tokenAddress || ''}
            tokenType={tokenType}
            dropDetails={dropDetails}
            setStep={setStep}
            dropType={dropType}
            onHandleStepThree={onHandleStepThree}
          />
        )}
        {step === 4 && <StepFour slots={slots} handleUpdateSlot={handleUpdateSlot} />}
      </div>
    </Layout>
  );
};

export default Home;
