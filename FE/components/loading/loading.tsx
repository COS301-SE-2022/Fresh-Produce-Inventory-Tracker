/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment} from 'react';
import { Circles } from  'react-loader-spinner'
/* eslint-disable-next-line */
export interface LoadingProps {
  isOpen?: boolean;
  closeLoading?: any;
  openLoading?: any;
  title?: string;
  description?: string;
}

export function Loading(props: LoadingProps) {
  return (
      <Transition appear show={props.isOpen ? true : false} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeLoading}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  </Dialog.Title>

                  <Circles
                  height="100"
                  width="100"
                  color='red'
                  />

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  );
}

export default Loading;
