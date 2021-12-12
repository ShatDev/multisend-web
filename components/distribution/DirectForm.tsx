/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */

import FileUpload from './FileUpload';

/* eslint-disable no-undef */
const DirectForm = ({
  tokenStandards,
  tokenStandard,
  setTokenStandard,
  selectionMethods,
  selectionMethod,
  setSelectionMethod,
  form,
  onSubmit,
}: any) => (
  <>
    <div className="flex w-full md:justify-start justify-center items-end">
      <div className="relative mr-4 w-full">
        <label
          htmlFor="hero-field"
          className="leading-7  text-blue-500 absolute text-xs -top-3.5 left-5 bg-white"
        >
          Token address
        </label>
        <input
          type="text"
          id="hero-field"
          name="hero-field"
          value={form.values.tokenAddress}
          onChange={(e) => form.func.setTokenAddress(e.target.value)}
          onBlur={(e) => form.func.setTokenAddress(e.target.value)}
          className="w-full bg-white rounded-2xl border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
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
              <li className="" onClick={() => setTokenStandard(item.name)}>
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
      This address is to Identify the collection that you want to send
    </div>
    <div className="flex w-full justify-between">
      {selectionMethod === 'CSV' ? (
        <FileUpload />
      ) : (
        <div className="relative mr-4 md:w-full lg:w-full w-2/4">
          <label
            htmlFor="hero-field"
            className="leading-7  text-blue-500 absolute text-xs -top-3.5 left-5 bg-white"
          >
            Please provide a list of recipients
          </label>
          <textarea
            id="hero-field"
            name="hero-field"
            className="w-full h-96 bg-white rounded-2xl border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={form.values.tokenDetails}
            placeholder="0x314ab97b76e39d63c78d5c86c2daf8eaa306b182 3.141592
            0x271bffabd0f79b8bd4d7a1c245b7ec5b576ea98a,2.7182
            0x141ca95b6177615fb1417cf70e930e102bf8f584=1.41421"
            onChange={(e) => form.func.setTokenDetails(e.target.value)}
            onBlur={(e) => form.func.setTokenDetails(e.target.value)}
          />
        </div>
      )}
      <div className="w-3/12 relative">
        <label
          htmlFor="hero-field"
          className="leading-7 absolute text-xs -top-3.5 left-5 bg-white text-blue-500 z-10"
        >
          Select Method
        </label>
        <div className="dropdown inline-block relative w-full">
          <button
            type="button"
            className="w-full  bg-white rounded-2xl border border-gray-300 text-gray-700 font-semibold py-3  px-5 h-16 inline-flex items-center justify-between"
          >
            <span className="mr-3 text-sm">{selectionMethod}</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            {selectionMethods.map((item: any) => (
              <li className="" onClick={() => setSelectionMethod(item.name)} key={item.name}>
                <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 w-36 block whitespace-no-wrap">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <button
      type="button"
      className="inline-flex items-center bg-blue-400 border-0 py-3 px-7 text-sm mt-6 rounded-2xl text-white"
      onClick={onSubmit}
    >
      Submit
    </button>
  </>
);

export default DirectForm;
