import { createCtx } from '@wove/react';
import { ReactNode } from 'react';

export type TostMessageType = 'info' | 'success' | 'warning' | 'error';

export type Truncate = 'line-clamp-1' | 'line-clamp-2' | 'line-clamp-3' | 'line-clamp-4';

export type Toast = {
  id: string;
  type?: TostMessageType;
  icon?: (...props) => JSX.Element;
  header?: string;
  truncate?: Truncate;
  lifetime: number;
  message: string | ReactNode;
};

export type ToastContextType = {
  data: Array<Toast>;
  pushError(message: string, lifetime?: number, truncate?: Truncate): void;
  pushWarning(message: string, lifetime?: number, truncate?: Truncate): void;
  pushSuccess(message: string, lifetime?: number, truncate?: Truncate): void;
  pushInfo(message: string, lifetime?: number, truncate?: Truncate): void;
  push(message: string, type: TostMessageType, lifetime?: number, truncate?: Truncate): void;
  pushCustom(message: string | ReactNode, lifetime: number, truncate?: Truncate, icon?: ReactNode): void;
  remove(id: string): void;
};

const [useToastCtx, ToastContextProvider] = createCtx<ToastContextType>('ToastContext');

export { useToastCtx, ToastContextProvider };
