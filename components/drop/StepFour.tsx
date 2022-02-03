import ApproveButton from './ApproveButton';
import DropButton from './DropButton';

const StepFour = () => (
  <div className="step-three">
    <div className="flex justify-center items-center">
      <h1 className="text-2xl text-white">Transaction Slots</h1>
    </div>
    <div className="mt-12">
      <div className="flex justify-center mb-4">
        <h1 className="text-base text-white pr-10">Slot 1</h1>
        <div className="text-base text-white">
          -----------------------------------------------------------------
        </div>
        <div className="w-1/3">
          <DropButton
            address="0xefB13CB15E267779bCD97C7D4771DA51FeaBcd27"
            tokenType="ERC721"
            setStep={() => null}
          />
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <h1 className="text-base text-white pr-10">Slot 1</h1>
        <div className="text-base text-white">
          -----------------------------------------------------------------
        </div>
        <div className="w-1/3">
          <DropButton
            address="0xefB13CB15E267779bCD97C7D4771DA51FeaBcd27"
            tokenType="ERC721"
            setStep={() => null}
          />
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <h1 className="text-base text-white pr-10">Slot 1</h1>
        <div className="text-base text-white">
          -----------------------------------------------------------------
        </div>
        <div className="w-1/3">
          <DropButton
            address="0xefB13CB15E267779bCD97C7D4771DA51FeaBcd27"
            tokenType="ERC721"
            setStep={() => null}
          />
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <h1 className="text-base text-white pr-10">Slot 1</h1>
        <div className="text-base text-white">
          -----------------------------------------------------------------
        </div>
        <div className="w-1/3">
          <DropButton
            address="0xefB13CB15E267779bCD97C7D4771DA51FeaBcd27"
            tokenType="ERC721"
            setStep={() => null}
          />
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-10">
      <ApproveButton
        address="0xefB13CB15E267779bCD97C7D4771DA51FeaBcd27"
        tokenType="ERC721"
        setStep={() => null}
      />
    </div>
  </div>
);

export default StepFour;
