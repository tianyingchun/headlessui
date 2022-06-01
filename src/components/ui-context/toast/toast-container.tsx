import { twMerge } from 'tailwind-merge';
import { hooks } from '@wove/react';
import { FC } from 'react';
import { useToastCtx } from './toast-context';
import { ToastMessage } from './toast-message';

const VARIANTS = {
  top_left: {
    style: 'top-0 left-0',
  },
  top_right: {
    style: 'top-0 right-0',
  },
  bottom_right: {
    style: 'bottom-0 right-0',
  },
  bottom_left: {
    style: 'bottom-0 left-0',
  },
  top_middle: {
    style: 'top-0 left-1/2 -translate-x-1/2 transform',
  },
  bottom_middle: {
    style: 'bottom-0 left-1/2 -translate-x-1/2 transform',
  },
  undefined: {
    style: 'top-0 right-0',
  },
};

export type ToastContainerProps = {
  variant?: keyof typeof VARIANTS;
};

export const ToastContainer: FC<ToastContainerProps> = ({ variant = 'top_right' }) => {
  const context = useToastCtx();

  const varItem = VARIANTS[variant] || VARIANTS.top_right;

  const handleRemove = hooks.useCallbackRef((id: string) => {
    context?.remove(id);
  });

  return (
    <div
      className={twMerge(
        varItem.style,
        'z-100 fixed w-full md:max-w-sm',
        'pointer-events-none max-h-screen overflow-hidden p-4 md:p-4',
      )}
    >
      <div className={'fade pointer-events-none mr-8 w-full flex-1  flex-col justify-end'}>
        {context?.data.map((toast) => {
          return (
            <div
              key={toast.id}
              className={twMerge(
                'flex w-full py-1',
                'pointer-events-auto transform transition-all duration-300',
              )}
            >
              <ToastMessage
                id={toast.id}
                message={toast.message}
                type={toast.type}
                header={toast.header}
                icon={toast.icon}
                truncate={toast.truncate}
                onRemove={handleRemove}
                lifetime={toast.lifetime}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
