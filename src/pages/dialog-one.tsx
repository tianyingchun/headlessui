import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment, useCallback, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { DialogTwo } from './dialog-two';

type DialogOneProps = {
  show: boolean;
  onClose: () => void;
};

export const DialogOne: FC<DialogOneProps> = ({ show, onClose }) => {
  const handleClose = useCallback(() => {
    // ISSUE: execute twice.
    console.log('onclose...');
    onClose();
  }, []);

  const [open2, setOpen2] = useState(false);

  return (
    <Transition show={show} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-40 flex" onClose={handleClose}>
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
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
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

            <form className="mt-4 h-80 bg-gray-400 text-center">
              <h3>Dialog One</h3>
              <button
                className="cursor-pointer border-2 px-2 text-indigo-700"
                onClick={() => {
                  setOpen2(true);
                }}
              >
                Open Dialog Two
              </button>
              <DialogTwo
                show={open2}
                onClose={() => {
                  setOpen2(false);
                }}
              />
            </form>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
