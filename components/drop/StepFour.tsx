/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import DropButton from './DropButton';
import { DropDetails, Slot } from '../../pages/drop';

interface StepFourProps {
  slots: Array<Slot>;
  handleUpdateSlot: (slot: Slot) => void;
}

const Element = ({
  slot,
  handleUpdateSlot,
}: {
  slot: Slot;
  handleUpdateSlot: (slot: Slot) => void;
}) => {
  const [tempData, setTempData] = useState({ status: 'pending', transactionHash: '' });

  useEffect(() => {
    setTempData({ status: slot.status, transactionHash: slot.transactionHash });
  }, [slot]);

  return (
    <div className="flex justify-center mb-4">
      <h1 className="text-base text-white pr-10">Slot {slot.id + 1}</h1>
      <div className="text-base text-white">
        -----------------------------------------------------------------
      </div>
      <div className="w-1/3">
        {tempData.status === 'success' && (
          <div className="flex justify-center">
            <h1 className="text-base text-white">transaction successful</h1>
            <h1 className="">View Hash</h1>
          </div>
        )}
        {tempData.status === 'pending' && (
          <DropButton
            {...slot}
            handleUpdateSlot={({ status, transactionHash }: any) => {
              handleUpdateSlot({ ...slot, status, transactionHash });
              setTempData({ status, transactionHash });
            }}
          />
        )}
      </div>
    </div>
  );
};

const StepFour = ({ slots, handleUpdateSlot }: StepFourProps) => (
  <div className="step-three">
    <div className="flex justify-center items-center">
      <h1 className="text-2xl text-white">Transaction Slots</h1>
    </div>
    <div className="mt-12">
      {slots.map((slot) => (
        <Element slot={slot} handleUpdateSlot={handleUpdateSlot} />
      ))}
    </div>
  </div>
);

export default StepFour;
