/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';
import { useState } from 'react';
import { DropDetails } from '../../pages/drop';
import Button from '../elements/Button';
import Dropzone from '../elements/Dropzone';
import TextArea from '../elements/TextArea';

interface StepTwoProps {
  tokenType: string;
  dropType: string;
  dropInputValue: string;
  dropDetails: DropDetails;
  setDropInputValue: (value: string) => void;
  setDropDetails: (value: DropDetails) => void;
  goBack: () => void;
}

const StepOne = ({
  tokenType,
  dropType,
  dropInputValue,
  dropDetails,
  setDropInputValue,
  setDropDetails,
  goBack,
}: StepTwoProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isManual, setIsManual] = useState(false);
  const [csvData, setCsvData] = useState();

  const onHandleProceed = () => {
    if (tokenType === 'ERC20') {
      setDropDetails({
        recipientAddress: [],
        tokenId: [],
        amount: [],
      });
    }
    if (tokenType === 'ERC721') {
      setDropDetails({
        recipientAddress: [],
        tokenId: [],
        amount: [],
      });
    }
    if (tokenType === 'ERC1155') {
      setDropDetails({
        recipientAddress: [],
        tokenId: [],
        amount: [],
      });
    }
  };

  return (
    <div>
      <div className="flex-row flex justify-between pb-10">
        <div className="text-base text-white inline items-center cursor-pointer" onClick={goBack}>
          back
        </div>
        <h1 className="text-base text-white">2 step to complete </h1>
      </div>
      <div className="px-12">
        <div className="flex-row flex justify-between">
          <h1 className="text-base text-white">4. Please provide recipients </h1>
          <a
            className="text-base text-white font-semibold cursor-pointer gradient_text"
            onClick={() => setIsManual(!isManual)}
          >
            {isManual ? 'import csv' : 'input manually'}
          </a>
        </div>
        {isManual ? (
          <div className="mt-2">
            <TextArea
              rows={10}
              placeholder="0x314ab97b76e39d63c78d5c86c2daf8eaa306b182,1
            0x314ab97b76e39d63c78d5c86c2daf8eaa306b182,2
            0x314ab97b76e39d63c78d5c86c2daf8eaa306b182,5
            0x314ab97b76e39d63c78d5c86c2daf8eaa306b182,3"
              value={dropInputValue}
              onChange={(e: any) => setDropInputValue(e.target.value)}
            />
          </div>
        ) : (
          <Dropzone onChange={(data) => setCsvData(data)} />
        )}

        {!isManual && (
          <a
            className="text-white py-2 text-sm cursor-pointer"
            href="/images/erc20.csv"
            target="_blank"
          >
            Show Example CSV
          </a>
        )}
        <div className="flex justify-center mt-10">
          <Button isLoading={isLoading} onClick={onHandleProceed}>
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
