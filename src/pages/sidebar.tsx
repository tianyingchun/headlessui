import { classNames } from '@dimjs/utils';
import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment, useCallback } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';

interface SidebarProps {
  open?: boolean;
  className?: string;
  headClassName?: string;
  HeadTitle?: (() => JSX.Element | null) | null;
  direction?: 'fromLeft' | 'fromRight' | 'bottomUp' | 'topdown';
  onClose: () => void;
  children?: any;
  staticMode?: boolean;
}

export const Sidebar: FC<SidebarProps> = ({
  children,
  open,
  className = 'sm:max-w-lg lg:max-w-xl',
  headClassName = 'py-4',
  onClose,
  HeadTitle,
  staticMode,
  direction = 'fromLeft',
}) => {
  className =
    className ||
    (direction !== 'bottomUp' && direction !== 'topdown' ? 'sm:max-w-sm md:max-w-md lg:max-w-lg' : '');

  const sidebarRoot = classNames(className, {
    'relative flex-1 flex flex-col h-full w-full bg-white focus:outline-none max-w-xs shadow-xl':
      direction === 'fromLeft',
    'fixed z-40 inset-0 w-full bg-white inset-y-0 left-auto right-0 max-w-xs shadow-xl':
      direction === 'fromRight',
    'fixed z-40 inset-0 top-0 w-full bg-white shadow-xl': direction === 'bottomUp',
    'fixed z-40 inset-0 bottom-0 w-full bg-white shadow-xl': direction === 'topdown',
  });

  const animationOverlay = {
    enter: 'transition-opacity ease-linear duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition-opacity ease-linear duration-300',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  };

  const animationContent =
    direction === 'fromLeft'
      ? {
          enter: 'transition ease-in-out duration-300 transform',
          enterFrom: '-translate-x-full',
          enterTo: 'translate-x-0',
          leave: 'transition ease-in-out duration-300 transform',
          leaveFrom: 'translate-x-0',
          leaveTo: '-translate-x-full',
        }
      : direction === 'fromRight'
      ? {
          enter: 'transition ease-in-out duration-300',
          enterFrom: 'transform translate-x-full scale-100 opacity-100',
          enterTo: 'transform translate-x-0 scale-100 opacity-100',
          leave: 'transition ease-in-out duration-300',
          leaveFrom: 'transform translate-x-0 scale-100 opacity-100',
          leaveTo: 'transform translate-x-full scale-100 opacity-100',
        }
      : direction === 'bottomUp'
      ? {
          enter: 'transition ease-in-out duration-300 transform',
          enterFrom: 'translate-y-full',
          enterTo: 'translate-y-0',
          leave: 'transition ease-in-out duration-300 transform',
          leaveFrom: 'translate-y-0',
          leaveTo: 'translate-y-full',
        }
      : {
          // topdown
          enter: 'transition ease-in-out duration-300 transform',
          enterFrom: '-translate-y-full',
          enterTo: 'translate-y-0',
          leave: 'transition ease-in-out duration-300 transform',
          leaveFrom: 'translate-y-0',
          leaveTo: '-translate-y-full',
        };

  const handleClose = useCallback(() => {
    if (open) {
      onClose();
    }
  }, []);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={staticMode ? () => null : handleClose}
        static={staticMode}
      >
        <Transition.Child as={Fragment} {...animationOverlay}>
          <div className="absolute inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child as={Fragment} {...animationContent}>
          <Dialog.Panel className={sidebarRoot}>
            {children}
            <div className={classNames('absolute top-0 z-20 w-full bg-white', headClassName)}>
              {HeadTitle ? <HeadTitle /> : 'LOGO'}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-0 top-4 z-50 px-4 text-gray-400 outline-none transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
