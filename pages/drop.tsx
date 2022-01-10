/* eslint-disable jsx-a11y/role-has-required-aria-props */
import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import StepOne from '../components/drop/StepOne';

import Layout from '../components/layouts';
// import OverviewTable from '../components/home/OverviewTable';

const Home: NextPage = () => {
  const [step, setStep] = useState(1);

  const [tokenType, setTokenType] = useState('ERC20');
  const [dropType, setDropType] = useState('DIRECT');
  const [tokenAddress, setTokenAddress] = useState<string | null>(null);

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
      </div>
    </Layout>
  );
};

export default Home;
