import { twMerge } from 'tailwind-merge';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationIcon, XIcon } from '@heroicons/react/outline';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { hooks } from '@wove/react';
import { FC } from 'react';
import { Toast, Truncate } from './toast-context';

const VARIANTS = {
  info: {
    base: 'bg-white border-indigo-500',
    iconStyle: 'text-indigo-500 ',
    icon: InformationCircleIcon,
    name: 'info',
  },

  error: {
    base: 'bg-white border-red-500 ',
    iconStyle: 'text-red-500 ',
    icon: ExclamationCircleIcon,
    name: 'error',
  },

  warning: {
    base: 'bg-white border-yellow-500',
    iconStyle: 'text-yellow-500 ',
    icon: ExclamationIcon,
    name: 'warning',
  },

  success: {
    base: 'bg-white border-green-500',
    iconStyle: 'text-green-500 ',
    icon: CheckCircleIcon,
    name: 'success',
  },
};

export type ToastMessageProps = {
  id: string;
  lifetime?: number;
  variant?: keyof typeof VARIANTS | undefined;
  onRemove?: (id: string) => void;
  truncate?: Truncate;
} & Toast;

export const ToastMessage: FC<ToastMessageProps> = ({
  id,
  header,
  message,
  lifetime,
  onRemove,
  truncate = 'line-clamp-1',
  icon,
  type,
}) => {
  const variant = type
    ? VARIANTS[type]
    : {
        base: 'bg-white border-gray-600 ',
        iconStyle: '',
        icon: icon,
        name: header,
      };

  hooks.useTimeout(() => {
    if (onRemove) {
      onRemove(id);
    }
  }, lifetime);

  return (
    <div
      className={twMerge(
        'visible flex w-full flex-row shadow-lg',
        'cursor-pointer rounded-md border-l-4 duration-100',
        'transform transition-all hover:scale-105',
        variant.base,
        type && 'max-h-40',
      )}
    >
      <div className="flex w-full flex-row flex-nowrap p-2">
        {variant.icon && (
          <div className={twMerge('mx-2 flex h-8 w-8 items-center', 'mx-auto select-none text-xl')}>
            <variant.icon className={twMerge('mx-auto', variant.iconStyle)} />
          </div>
        )}

        <div className="flex w-full flex-col flex-nowrap px-1">
          <div className="my-auto flex select-none font-bold">{variant.name}</div>
          <div
            className={twMerge(
              'my-auto -mt-0.5 flex break-all',
              'text-sm text-gray-600',
              typeof message === 'string' && truncate,
            )}
          >
            {message}
          </div>
        </div>
        <div
          onClick={() => onRemove && onRemove(id)}
          className={twMerge('mx-auto mr-2 h-6 w-6 items-center', 'text-center text-lg leading-none')}
        >
          <XIcon
            className={twMerge(
              'mx-auto my-auto h-full text-center text-gray-600',
              'transform cursor-pointer hover:scale-105 ',
            )}
          />
        </div>
      </div>
    </div>
  );
};
