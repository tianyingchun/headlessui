import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export function Nested({ onClose, open, level = 0 }) {
  const [showChild, setShowChild] = useState(false);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="fixed inset-0 z-10">
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 opacity-25" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel
            className="fixed left-12 top-24 z-10 w-96 bg-white p-4"
            style={{
              transform: `translate(calc(50px * ${level}), calc(50px * ${level}))`,
            }}
          >
            <p>Level: {level}</p>
            <div className="space-x-4">
              <button className="rounded bg-gray-200 px-2 py-1" onClick={() => setShowChild(true)}>
                Open (1)
              </button>
              <button className="rounded bg-gray-200 px-2 py-1" onClick={() => setShowChild(true)}>
                Open (2)
              </button>
              <button className="rounded bg-gray-200 px-2 py-1" onClick={() => setShowChild(true)}>
                Open (3)
              </button>
              <button className="rounded bg-gray-200 px-2 py-1" onClick={onClose}>
                关闭
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
        <Nested open={showChild} onClose={() => setShowChild(false)} level={level + 1} />
      </Dialog>
    </Transition>
  );
}
