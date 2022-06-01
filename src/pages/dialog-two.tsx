import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment, useCallback } from 'react';
import { XIcon } from '@heroicons/react/outline';

type DialogTwoProps = {
  show: boolean;
  onClose: () => void;
};

export const DialogTwo: FC<DialogTwoProps> = ({ show, onClose }) => {
  const handleClose = useCallback(() => {
    // ISSUE: execute twice.
    console.log('onclose dialog two ...');
    onClose();
  }, []);
  return (
    <Transition show={show} as={Fragment}>
      <Dialog as="div" open={show} className="fixed inset-0 z-40 flex" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
        >
          <Dialog.Panel className="fixed inset-0 top-10 z-40 w-full bg-white shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 outline-none"
                onClick={handleClose}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4 h-80 bg-gray-400 text-center">Dialog Two</div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
