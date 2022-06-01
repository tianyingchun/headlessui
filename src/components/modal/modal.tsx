import { twMerge } from 'tailwind-merge';
import { Dialog, Transition } from '@headlessui/react';
import { hooks } from '@wove/react';
import { FC, Fragment } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';

export type ModalProps = {
  open?: boolean;
  className?: string;
  /**
   * @default `px-4`
   */
  outerClassName?: string;
  /**
   * @default `py-4 pt-0`
   */
  headClassName?: string;
  HeadTitle?: (() => JSX.Element | null) | null;
  onClose: () => void;
  children?: any;
  staticMode?: boolean;
  hideClose?: boolean;
};
/**
 * The default className
 * @param props.className `p-6 max-w-md overflow-hidden rounded-xl bg-white`
 * @returns
 */
export const Modal: FC<ModalProps> = ({
  children,
  HeadTitle,
  open,
  className = 'p-6 max-w-md overflow-hidden rounded-xl bg-white',
  outerClassName = 'px-4',
  headClassName = 'py-4 pt-0',
  onClose,
  hideClose,
  staticMode,
}) => {
  const handleClose = hooks.useCallbackRef(() => {
    // 通常情况下有Transition, 不需要配置open属性,否则动画会失效, 应该是Dialog的BUG, 但是不配置open, 内容区域外的空间, 会导致onClose执行2次
    // FIXME: https://github.com/tailwindlabs/headlessui/issues/1520
    if (open) {
      onClose();
    }
  });
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        // 通常情况下有Transition, 不需要配置open属性,否则动画会失效, 应该是Dialog的BUG, 但是不配置open, 内容区域外的空间, 会导致onClose执行2次
        open={open}
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={staticMode ? () => null : handleClose}
        static={staticMode}
      >
        <div className={twMerge('min-h-screen text-center', outerClassName)}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={twMerge(
                'relative my-8 inline-block w-full transform  border border-gray-200  text-left align-middle shadow-xl transition-all',
                className,
              )}
            >
              <div className={twMerge('relative z-20 w-full bg-white pr-8', headClassName)}>
                {HeadTitle ? <HeadTitle /> : <div className="flex shrink-0 items-center">KZFOO</div>}

                {/* 按钮放到下面, 可以让FocusTrap能找到合适的focus item */}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className={twMerge(
                    'absolute right-0 -top-0.5 text-gray-500 outline-none transition duration-150 ease-in-out hover:text-gray-800 focus:outline-none',
                    hideClose ? 'hidden' : '',
                  )}
                >
                  <XCircleIcon className="h-6 w-6" />
                </button>
              </div>
              {children}
              {/* 为了让`Modal`自带的FocusTrap能始终有一个focusable的元素, 不报错 */}
              <button className="sr-only h-0 w-0" />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
