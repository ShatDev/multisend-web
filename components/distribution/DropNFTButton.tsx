import { useState } from 'react';
import toast from 'react-hot-toast';
import { useERC721Contract, useIsApprovalForAll } from '../../hooks';
import { callWithEstimateGas } from '../../utils/estimateGas';
import config from '../../utils/config';

const DropNFTButton = ({ loading: submitLoading, tokenAddress, disabled, onSubmit }: any) => {
  const { isApproved, loading, checkApproval } = useIsApprovalForAll(tokenAddress);
  const contract = useERC721Contract(tokenAddress);
  const [approvalLoading, setApprovalLoading] = useState(false);

  const approvalAction = async () => {
    setApprovalLoading(true);
    try {
      const tx = await callWithEstimateGas(contract, 'setApprovalForAll', [
        config.multiSendContractAddress,
        true,
      ]);
      await tx.wait();

      checkApproval(tokenAddress);
      setApprovalLoading(false);
    } catch (error: any) {
      setApprovalLoading(false);
      toast.error(error.message);
    }
  };

  if (isApproved) {
    return (
      <button
        type="button"
        className={`inline-flex items-center bg-blue-400 border-0 py-3 px-7 text-sm mt-6 rounded-2xl text-white ${
          submitLoading && 'animate-pulse'
        }`}
        onClick={onSubmit}
      >
        {submitLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        Drop
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center bg-blue-400 border-0 py-3 px-7 text-sm mt-6 rounded-2xl text-white ${
        (loading || approvalLoading) && 'animate-pulse'
      }`}
      onClick={approvalAction}
      disabled={loading || disabled}
    >
      {approvalLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      Approve
    </button>
  );
};

export default DropNFTButton;
