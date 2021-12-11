/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const AddCollectionForm = ({
  open,
  loading,
  setOpen,
  setContractAddress,
  onSubmit,
  cancelButtonRef,
}: any) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      className="fixed z-10 inset-0 overflow-y-auto"
      initialFocus={cancelButtonRef}
      onClose={setOpen}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="w-full">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mt-2 w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900 mb-6"
                    >
                      Add Collection Contract Address
                    </Dialog.Title>
                    <div className="flex w-full md:justify-start justify-center items-end">
                      <div className="relative mr-4 w-full">
                        <label
                          htmlFor="hero-field"
                          className="leading-7  text-blue-500 absolute text-xs -top-3.5 left-5 bg-white"
                        >
                          Contract Address
                        </label>
                        <input
                          type="text"
                          id="hero-field"
                          name="hero-field"
                          className="w-full bg-white rounded-2xl border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          onChange={(e) => {
                            e.preventDefault();
                            setContractAddress(e.target.value);
                          }}
                        />
                      </div>
                      <div className="w-3/12 relative">
                        <label
                          htmlFor="hero-field"
                          className="leading-7 absolute text-xs -top-3.5 left-5 bg-white text-blue-500 z-10"
                        >
                          Network
                        </label>
                        <div className="dropdown inline-block relative w-full">
                          <button
                            type="button"
                            className="w-full bg-white rounded-2xl border border-gray-300 text-gray-700 font-semibold py-3  px-5 h-16 inline-flex items-center justify-between"
                          >
                            <span className="mr-3 text-sm">Ethereum</span>
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => onSubmit()}
                disabled={loading}
              >
                {loading ? 'Submitting' : 'Submit'}
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setOpen(false)}
                ref={cancelButtonRef}
              >
                Cancel
              </button>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
);

export default AddCollectionForm;
