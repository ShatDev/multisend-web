/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useRef } from 'react';
import { gql, useMutation } from '@apollo/client';
import toast from 'react-hot-toast';

import AutoSuggest from './AutoSuggest';
import AddCollectionForm from './AddCollectionForm';
import Suggestion from './Suggestion';
import apolloClient from '../../utils/apolloClient';
import DropNFTButton from './DropNFTButton';

const collectionsQuery = gql`
  query {
    collections {
      id
      name
      image
      contractAddress
      owners {
        address
        amount
      }
    }
  }
`;

const createCollectionMutation = gql`
  mutation createCollection($contractAddress: String!, $network: Network!) {
    createCollection(contractAddress: $contractAddress, network: $network) {
      id
      name
      contractAddress
      owners {
        address
        amount
      }
    }
  }
`;

const CollectionForm = ({
  tokenStandards,
  tokenStandard,
  setTokenStandard,
  form,
  loading: submitLoading,
  onSubmit,
}: any) => {
  const [open, setOpen] = useState(false);
  const [contractAddress, setContractAddress] = useState<string | null>(null);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cancelButtonRef = useRef(null);

  const [createCollection, { loading: loading2 }] = useMutation(createCollectionMutation, {
    onCompleted: () => {
      toast.success('Submission successful!');
    },
  });

  const fetchCollections = async (e: any) => {
    setSearchQuery(e.target.value);
    setLoading(true);
    apolloClient.query({ query: collectionsQuery, variables: {} }).then(({ data }) => {
      setCollections(data.collections);
      setLoading(false);
    });
  };

  const suggestions = collections
    .map((item: any, index: any) => ({
      name: item.name,
      id: index,
      image: item.image,
      contractAddress: item.contractAddress,
      owners: item.owners,
    }))
    .concat({ name: 'custom', id: null, image: null, contractAddress: null, owners: null });

  const handleCreateCollection = async () => {
    await createCollection({ variables: { contractAddress, network: 'ETHEREUM' } });
    setOpen(false);
  };

  return (
    <>
      {open && (
        <AddCollectionForm
          open={open}
          setOpen={setOpen}
          loading={loading2}
          cancelButtonRef={cancelButtonRef}
          setContractAddress={(value: string) => setContractAddress(value)}
          onSubmit={handleCreateCollection}
        />
      )}
      <div className="flex w-full md:justify-start justify-center items-end">
        <AutoSuggest
          value={searchQuery}
          loading={loading}
          suggestions={suggestions}
          renderSuggestion={(item: any) => {
            if (item.name === 'custom') {
              return (
                <div className=" bg-yellow-100 py-3 px-5">
                  <button
                    type="button"
                    className="bg-blue-500 px-3 py-2 rounded-xl text-white"
                    onClick={() => setOpen(true)}
                  >
                    Add new collection
                  </button>
                </div>
              );
            }
            return (
              <Suggestion
                item={item}
                onClick={() => {
                  form.func.setOwners(item.owners);
                  setSearchQuery(item.name);
                }}
              />
            );
          }}
          onChange={(e: any) => fetchCollections(e)}
        />
        <div className="w-3/12 relative">
          <label
            htmlFor="hero-field"
            className="leading-7 absolute text-xs -top-3.5 left-5 bg-white text-blue-500 z-10"
          >
            Select Standard
          </label>
          <div className="dropdown inline-block relative w-full">
            <button
              type="button"
              className="w-full bg-white rounded-2xl border border-gray-300 text-gray-700 font-semibold py-3  px-5 h-16 inline-flex items-center justify-between"
            >
              <span className="mr-3 text-sm">{tokenStandard}</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
              {tokenStandards.map((item: any) => (
                <li className="" onClick={() => setTokenStandard(item.name)} key={item.name}>
                  <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 w-36 block whitespace-no-wrap">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-400 mt-4 ml-7 mb-16">
        This is the address of the collection you want to drop against
      </div>

      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 w-full">
          <label
            htmlFor="hero-field"
            className="leading-7  text-blue-500 absolute text-xs -top-3.5 left-5 bg-white"
          >
            Token Address
          </label>
          <input
            type="text"
            id="hero-field"
            name="hero-field"
            value={form.values.tokenAddress}
            onChange={(e: any) => form.func.setTokenAddress(e.target.value)}
            className="w-full bg-white rounded-2xl border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="w-3/12 relative" />
      </div>
      <div className="text-sm text-gray-400 mt-4 ml-7 mb-16">
        This is the address of the collection of your address
      </div>
      <div className="w-full">
        <h1 className="title-font font-bold text-4xl text-gray-900">Choose the Attributes</h1>
        <p className="leading-relaxed mt-4 mb-8">Choose the way you want to do the drop!</p>
        <div className="flex">
          <div className="relative mr-4 w-1/4">
            <label
              htmlFor="hero-field"
              className="leading-7  text-blue-500 absolute text-xs -top-3.5 left-5 bg-white"
            >
              Top Holders
            </label>
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-white rounded-2xl border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
              disabled
            />
          </div>
          <div className="relative mr-4 w-1/4">
            <label
              htmlFor="hero-field"
              className="leading-7  text-blue-500 absolute text-xs -top-3.5 left-5 bg-white"
            >
              Top Traders
            </label>
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-white rounded-2xl border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
              disabled
            />
          </div>
          <div className="relative mr-4 w-1/4">
            <label
              htmlFor="hero-field"
              className="leading-7  text-blue-500 absolute text-xs -top-3.5 left-5 bg-white"
            >
              Total Address
            </label>
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-white rounded-2xl border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
              disabled
            />
          </div>
        </div>
      </div>

      {form.values.tokenAddress && form.values.owners.length !== 0 && (
        <DropNFTButton
          loading={submitLoading}
          tokenAddress={form.values.tokenAddress}
          onSubmit={onSubmit}
          disabled={false}
        >
          Submit
        </DropNFTButton>
      )}
    </>
  );
};

export default CollectionForm;
