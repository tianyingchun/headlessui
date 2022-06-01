/* Author: Dalibor Kundrat  https://github.com/damikun */

import { hooks } from '@wove/react';
import { FC, useState } from 'react';
import { ToastContainer, ToastContainerProps } from './toast-container';
import { Toast, ToastContextProvider, TostMessageType, Truncate } from './toast-context';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const DEFAULT_INTERVAL = 2500;

export type ToastProviderProps = {
  children: React.ReactNode;
} & ToastContainerProps;

export const ToastProvider: FC<ToastProviderProps> = ({ children, variant }) => {
  const [data, setData] = useState<Array<Toast>>([]);

  const push = hooks.useCallbackRef(
    (message: string, type: TostMessageType, lifetime?: number, truncate?: Truncate) => {
      if (message) {
        const newItem: Toast = {
          id: uuidv4(),
          message: message,
          type: type,
          lifetime: lifetime ? lifetime : DEFAULT_INTERVAL,
          truncate: truncate,
        };

        setData([...data, newItem]);
      }
    },
  );

  const pushCustom = hooks.useCallbackRef(
    (
      message: string | React.ReactNode,
      lifetime?: number,
      truncate?: Truncate,
      icon?: (...props) => JSX.Element,
    ) => {
      if (message) {
        const newItem: Toast = {
          id: uuidv4(),
          message: message,
          lifetime: lifetime ? lifetime : DEFAULT_INTERVAL,
          truncate: truncate,
          icon: icon,
          type: undefined,
        };
        setData([...data, newItem]);
      }
    },
  );

  const pushInfo = hooks.useCallbackRef((message: string, lifetime?: number, truncate?: Truncate) =>
    push(message, 'info', lifetime, truncate),
  );

  const pushError = hooks.useCallbackRef((message: string, lifetime?: number, truncate?: Truncate) =>
    push(message, 'error', lifetime, truncate),
  );

  const pushWarning = hooks.useCallbackRef((message: string, lifetime?: number, truncate?: Truncate) =>
    push(message, 'warning', lifetime, truncate),
  );

  const pushSuccess = hooks.useCallbackRef((message: string, lifetime?: number, truncate?: Truncate) =>
    push(message, 'success', lifetime, truncate),
  );

  const remove = hooks.useCallbackRef(async (id: string) => {
    const newData = data.filter((e) => e.id !== id);
    setData(newData);
  });

  const contextValue = {
    data,
    push,
    pushInfo,
    pushError,
    pushWarning,
    pushSuccess,
    pushCustom,
    remove,
  };

  return (
    <ToastContextProvider value={contextValue}>
      <ToastContainer variant={variant} />
      {children}
    </ToastContextProvider>
  );
};
