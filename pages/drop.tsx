/* eslint-disable jsx-a11y/role-has-required-aria-props */
import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import StepOne from '../components/drop/StepOne';
import StepTwo from '../components/drop/StepTwo';

import Layout from '../components/layouts';
// import OverviewTable from '../components/home/OverviewTable';

export interface DropDetails {
  recipientAddress: string[];
  tokenId?: string[];
  amount: string[];
}

const Home: NextPage = () => {
  const [step, setStep] = useState(2);
  const [tokenType, setTokenType] = useState('ERC20');
  const [dropType, setDropType] = useState('DIRECT');
  const [tokenAddress, setTokenAddress] = useState<string | null>(null);
  const [dropDetails, setDropDetails] = useState<DropDetails>({
    recipientAddress: [],
    tokenId: [],
    amount: [],
  });

  const [dropInputValue, setDropInputValue] = useState('');

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
            tokenType={tokenType}
            dropType={dropType}
            dropInputValue={dropInputValue}
            dropDetails={dropDetails}
            setDropInputValue={setDropInputValue}
            setDropDetails={setDropDetails}
            goBack={() => setStep(step - 1)}
          />
        )}
      </div>
    </Layout>
  );
};

export default Home;
