/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layouts';
import Summary from '../components/distribution/Summary';
import DirectForm from '../components/distribution/DirectForm';
import CollectionForm from '../components/distribution/CollectionForm';
import { useMultiSendContract } from '../hooks/useContract';
import config from '../utils/config';

const options = [
  { id: 0, name: 'Direct' },
  { id: 1, name: 'Against Collection' },
  { id: 2, name: 'Crosschain' },
];

const tokenStandards = [
  { id: 0, name: 'ERC721' },
  { id: 1, name: 'ERC1155' },
  { id: 1, name: 'ERC20' },
];

const selectionMethods = [
  { id: 0, name: 'Manual' },
  { id: 1, name: 'CSV' },
];
const Distribution: NextPage = () => {
  const contract = useMultiSendContract(config.multiSendContractAddress);

  const [selectedOption, setSelectedOption] = useState<number>(options[0].id);
  const [tokenStandard, setTokenStandard] = useState<string | undefined>(tokenStandards[0].name);
  const [selectionMethod, setSelectionMethod] = useState<string | undefined>(
    selectionMethods[0].name,
  );

  const [tokenAddress, setTokenAddress] = useState<string>('');
  const [tokenDetails, setTokenDetails] = useState<string>('');

  const form = {
    values: { tokenAddress, tokenDetails },
    func: { setTokenAddress, setTokenDetails },
  };

  const sendTokens = () => {};
  const sendItems = () => {};

  const onSubmit = () => {
    console.log(tokenAddress, tokenDetails, selectedOption, tokenStandard, selectionMethod);
  };

  return (
    <Layout>
      <Head>
        <title>Multi Send</title>
        <meta name="description" content="Start Distribution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-12 mx-auto flex flex-wrap min-h-screen">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 bg-white rounded-2xl p-10 min-h-screen">
            <h1 className="title-font font-bold text-4xl text-gray-900">
              Let’s start the Distribution
            </h1>
            <p className="leading-relaxed mt-4 mb-14">Choose the way you want to do the drop!</p>
            <div className="flex items-center mb-10">
              {options.map((item: any) => (
                <div className="flex items-center mr-6">
                  <button
                    type="button"
                    className={`border-4 ${
                      selectedOption === item.id ? 'bg-yellow-500' : 'bg-white'
                    } border-yellow-300  rounded-full w-8 h-8 focus:outline-none mr-3`}
                    onClick={() => setSelectedOption(item.id)}
                  />
                  <div className="text-black font-semibold text-lg">{item.name}</div>
                </div>
              ))}
            </div>
            {selectedOption === 0 ? (
              <DirectForm
                tokenStandards={tokenStandards}
                tokenStandard={tokenStandard}
                setTokenStandard={setTokenStandard}
                selectionMethods={selectionMethods}
                selectionMethod={selectionMethod}
                setSelectionMethod={setSelectionMethod}
                form={form}
                onSubmit={onSubmit}
              />
            ) : (
              <CollectionForm
                options={options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                selectionMethods={selectionMethods}
                selectionMethod={selectionMethod}
                setSelectionMethod={setSelectionMethod}
                setTokenStandard={setTokenStandard}
                tokenStandard={tokenStandard}
                tokenStandards={tokenStandards}
                onSubmit={onSubmit}
              />
            )}
          </div>
          <Summary />
        </div>
      </section>
    </Layout>
  );
};

export default Distribution;
