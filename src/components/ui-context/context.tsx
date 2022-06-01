import { createCtx } from '@wove/react';
import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { ID, VMOrderLine } from '../../types';
import { ToastContainerProps } from './toast/toast-container';
import { ToastProvider } from './toast/toast-provider';

type LensMainBottomUpOption = {
  orderLine?: VMOrderLine;
  collectionId?: ID;
};

type CtxState = {
  displayCartviewSidebar: boolean;

  displayLensMainBottomUp: boolean;
  lensMainOption?: LensMainBottomUpOption;

  // Toast
  toastContainerProps: ToastContainerProps;
};

export type CtxStateSetter = {
  openLensMainBottomUp: (lensMainOption: LensMainBottomUpOption) => void;
  closeLensMainBottomUp: () => void;

  openCartviewSidebar: () => void;
  closeCartviewSidebar: () => void;
  toggleCartviewSidebar: () => void;
};

type CtxAction =
  | {
      type: 'OPEN_LENS_PROCESS_MODAL';
      lensMainOption: LensMainBottomUpOption;
    }
  | {
      type: 'CLOSE_LENS_PROCESS_MODAL';
    }
  | {
      type: 'OPEN_CARTVIEW_SIDEBAR';
    }
  | {
      type: 'CLOSE_CARTVIEW_SIDEBAR';
    };

type AppCtx = CtxState & CtxStateSetter;

const initialState: CtxState = {
  displayLensMainBottomUp: false,
  lensMainOption: {},
  displayCartviewSidebar: false,
  toastContainerProps: { variant: 'top_right' },
};

export const [useUI, AppProvider] = createCtx<AppCtx>('UIContext');

function uiReducer(state: CtxState, action: CtxAction): CtxState {
  switch (action.type) {
    case 'OPEN_LENS_PROCESS_MODAL': {
      return {
        ...state,
        displayLensMainBottomUp: true,
        lensMainOption: action.lensMainOption,
      };
    }
    case 'CLOSE_LENS_PROCESS_MODAL': {
      return {
        ...state,
        displayLensMainBottomUp: false,
      };
    }
    case 'OPEN_CARTVIEW_SIDEBAR': {
      return {
        ...state,
        displayCartviewSidebar: true,
      };
    }
    case 'CLOSE_CARTVIEW_SIDEBAR': {
      return {
        ...state,
        displayCartviewSidebar: false,
      };
    }
  }
}

export const UIProvider: FC<PropsWithChildren<{}>> = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const stateSetter: CtxStateSetter = useMemo(
    () => ({
      openLensMainBottomUp: (lensMainOption: LensMainBottomUpOption) =>
        dispatch({
          type: 'OPEN_LENS_PROCESS_MODAL',
          lensMainOption,
        }),
      closeLensMainBottomUp: () => dispatch({ type: 'CLOSE_LENS_PROCESS_MODAL' }),

      openCartviewSidebar: () => dispatch({ type: 'OPEN_CARTVIEW_SIDEBAR' }),
      closeCartviewSidebar: () => dispatch({ type: 'CLOSE_CARTVIEW_SIDEBAR' }),
      toggleCartviewSidebar: () =>
        state.displayCartviewSidebar
          ? dispatch({ type: 'CLOSE_CARTVIEW_SIDEBAR' })
          : dispatch({ type: 'OPEN_CARTVIEW_SIDEBAR' }),
    }),

    [state.displayCartviewSidebar],
  );

  const value = useMemo(
    () => ({
      ...state,
      ...stateSetter,
    }),
    [state, stateSetter],
  );
  return (
    <AppProvider value={value} {...props}>
      <ToastProvider variant={value.toastContainerProps.variant}>{props.children}</ToastProvider>
    </AppProvider>
  );
};

export const UiContext: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <UIProvider>{children}</UIProvider>;
};
