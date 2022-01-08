import { minifyAddress } from '../../utils/helpers';

const ConnectedButton = ({ balance, account, logOut }: any) => (
  <div className="flex">
    <div className="flex btn_border_primary hover_btn border-2  text-white">
      <div className="flex items-center justify-center btn_bg_primary px-4 py-2 text-black">
        {balance} MATIC{' '}
      </div>
      <div className="flex items-center justify-center text-white px-4 py-2">
        {minifyAddress(account, 6)}
      </div>
    </div>
    <button
      type="button"
      className="text-red-500 ml-3 special_btn px-3 h-12 font-semibold"
      onClick={logOut}
    >
      Logout
    </button>
  </div>
);

export default ConnectedButton;
