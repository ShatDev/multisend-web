import Button from '../elements/Button';
import Input from '../elements/Input';
import MultiSelect from './AsyncMultiSelect';

const networks = ['Ethereum', 'Matic', 'BSC'];

const AgainstCollection = ({ network, setNetwork }: any) => (
  <div className="px-12">
    <div className="flex-row flex justify-between">
      <div>
        <h1 className="text-base text-white">1. Choose Network</h1>
        <div className="flex-row flex py-5">
          {networks.map((item) => (
            <div className="pr-5" key={item}>
              <Button secondary active={network === item} onClick={() => setNetwork(item)}>
                {item}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow ml-16">
        <h1 className="text-base text-white">2. Which Kind of Drop you want to do? </h1>
        <div className="flex-row flex py-5">
          <div className="w-full">
            <MultiSelect />
            {/* <Input placeHolder="0x6754fb3576e87dc3b0a853be9db57e31068833d4" /> */}
            <p className="italic text-yellow-500 mt-4">
              Note: you can add more than one collection/token for filter
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5">
      <h1 className="text-base text-white">3. Choose Attribute </h1>
      <div className="my-5 flex items-center">
        <div className="flex items-center mr-4">
          <div className="text-white">Top Holders</div>
          <div className="ml-8 w-5/12">
            <Input type="number" placeHolder="input here" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-white">Top Traders</div>
          <div className="ml-8 w-5/12">
            <Input type="number" placeHolder="input here" />
          </div>
        </div>
      </div>
    </div>
    {/* {tokenAddress && (
      <div className="flex justify-center">
        <StepOneProceedButton
          address={tokenAddress}
          tokenType={tokenType}
          setIsValidAddress={setIsValidAddress}
          setStep={setStep}
        />
      </div>
    )} */}
  </div>
);

export default AgainstCollection;
