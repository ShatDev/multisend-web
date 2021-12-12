import { useState, useEffect } from 'react';
import { dropRight } from 'lodash';
import {
  minifyAddress,
  splitERC721Token,
  splitERC1125Token,
  splitERC20Token,
} from '../../utils/helpers';

const Summary = ({ tokenStandard, tokenDetails, owners, selectedOption }: any) => {
  const [summery, setSummery] = useState([]);

  useEffect(() => {
    if (selectedOption === 1) {
      if (tokenStandard === 'ERC721') {
        const recipients: any = dropRight(
          owners.map((item: any) => item.address),
          owners.length - 3,
        );
        setSummery(
          recipients.map((item: any, index: any) => ({ address: item, tokenId: `${index}` })),
        );
      }
    } else {
      if (tokenStandard === 'ERC721') {
        const { address, tokenId } = splitERC721Token(tokenDetails);
        setSummery(
          address.map((item: any, index: any) => ({ address: item, tokenId: tokenId[index] })),
        );
      }
      if (tokenStandard === 'ERC1125') {
        const { address, tokenId, amount } = splitERC1125Token(tokenDetails);
        setSummery(
          address.map((item: any, index: any) => ({
            address: item,
            tokenId: tokenId[index],
            amount: amount[index],
          })),
        );
      }
      if (tokenStandard === 'ERC20') {
        const { address, amount } = splitERC20Token(tokenDetails);
        setSummery(
          address.map((item: any, index: any) => ({
            address: item,
            amount: amount[index],
          })),
        );
      }
    }
  }, [tokenStandard, tokenDetails, owners, selectedOption]);

  return (
    <div className="border-dashed border-2 border-yellow-500 lg:w-2/6 md:w-1/2 bg-yellow-100 rounded-2xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 min-h-screen max-h-screen overflow-scroll">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Summary</h2>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-900 text-xl font-medium title-font mb-5">Address</h2>
        <div className=" text-gray-400 mb-5">Token Id</div>
      </div>

      {summery.map((item: any) => (
        <div className="flex items-center justify-between mb-4">
          <div className=" text-black">{minifyAddress(item.address, 10)}</div>
          <div className=" text-gray-400">{item.tokenId}</div>
        </div>
      ))}
      {/* <div className="flex items-center justify-between mb-3">
      <div className=" text-black text-xl font-bold">Balance</div>
      <div className=" text-gray-400 text-xl">5</div>
    </div>
    <div className="flex items-center justify-between mb-3">
      <div className=" text-black text-xl font-bold">Remaining</div>
      <div className=" text-gray-400 text-xl">5</div>
    </div> */}
    </div>
  );
};

export default Summary;
