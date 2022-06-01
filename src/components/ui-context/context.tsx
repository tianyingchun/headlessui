import { createCtx } from '@wove/react';
import { FC, PropsWithChildren, useMemo, useReducer } from 'react';
import { ID, VMOrderLine } from '../../types';
import { ModalProps } from '../modal';
import { ToastContainerProps } from './toast/toast-container';
import { ToastProvider } from './toast/toast-provider';
type LensMainBottomUpOption = {
  orderLine?: VMOrderLine;
  collectionId?: ID;
};

type CtxState = {
  /**
   * 是否显示移动端左侧的顶部菜单栏
   */
  displayMobileMenuSidebar: boolean;
  displayCartviewSidebar: boolean;
  displaySearchModal: boolean;
  displayModal: boolean;
  displayCouponModal: boolean;
  displayQuickSupportModal: boolean;

  // 镜片流程
  displayLensMainBottomUp: boolean;
  lensMainOption?: LensMainBottomUpOption;

  // 当前货币总类
  modalView: CTX_MODAL_VIEWS;
  modalViewProps: CtxModalViewProps;
  modalOverrideProps: CtxModalOverrideProps;

  // Toast 容器级配置
  toastContainerProps: ToastContainerProps;
};

/**
 * 特定的modalView 对应的Props属性.
 */
type CtxModalViewProps = {
  onTaskFinished?: () => void;
  [index: string]: unknown;
};

export type CTX_MODAL_VIEWS = 'SIGNUP_VIEW' | 'LOGIN_VIEW' | 'FORGOT_VIEW' | 'TRYMEON_VIEW';

/**
 * 弹窗自身组件的props
 */
type CtxModalOverrideProps = Partial<ModalProps>;

export type CtxStateSetter = {
  openMobileMenuSidebar: () => void;
  closeMobileMenuSidebar: () => void;

  openSearchModal: () => void;
  closeSearchModal: () => void;

  openLensMainBottomUp: (lensMainOption: LensMainBottomUpOption) => void;
  closeLensMainBottomUp: () => void;

  openCartviewSidebar: () => void;
  closeCartviewSidebar: () => void;
  toggleCartviewSidebar: () => void;

  openQuickSupportModal: () => void;
  closeQuickSupportModal: () => void;

  openCouponModal: () => void;
  closeCouponModal: () => void;

  openModal: () => void;
  closeModal: () => void;

  // tailwindui, <Modal>组件因为focus原因全局同一层级只能存在一个, 所以提供一个closeAll来一键关闭所有
  closeAllModal: () => void;

  setToastContainerProps: (toastContainerProps: ToastContainerProps) => void;

  setModalView: (
    modalView: CTX_MODAL_VIEWS,
    // 弹窗内部的视图组件的props
    modalViewProps?: CtxModalViewProps,
    // 弹窗自身组件的props
    modalOverrideProps?: CtxModalOverrideProps,
  ) => void;
};

type CtxAction =
  | {
      type: 'OPEN_MOBILE_MENU_SIDEBAR';
    }
  | {
      type: 'CLOSE_MOBILE_MENU_SIDEBAR';
    }
  | {
      type: 'OPEN_SEARCH_MODAL';
    }
  | {
      type: 'CLOSE_SEARCH_MODAL';
    }
  | {
      type: 'OPEN_COUPON_MODAL';
    }
  | {
      type: 'CLOSE_COUPON_MODAL';
    }
  | {
      type: 'OPEN_QUICK_SUPPORT_MODAL';
    }
  | {
      type: 'CLOSE_QUICK_SUPPORT_MODAL';
    }
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
    }
  | {
      type: 'SET_TOAST_CONTAINER_PROPS';
      toastContainerProps: ToastContainerProps;
    }
  | {
      type: 'OPEN_MODAL';
    }
  | {
      type: 'CLOSE_MODAL';
    }
  | {
      type: 'CLOSE_ALL_MODAL';
    }
  | {
      type: 'SET_CURRENCY_CODE';
    }
  | {
      type: 'SET_MODAL_VIEW';
      modalView: CTX_MODAL_VIEWS;
      modalViewProps?: CtxModalViewProps;
      modalOverrideProps?: CtxModalOverrideProps;
    };

type AppCtx = CtxState & CtxStateSetter;

const initialState: CtxState = {
  displayMobileMenuSidebar: false,
  displaySearchModal: false,
  displayLensMainBottomUp: false,
  displayCouponModal: false,
  displayQuickSupportModal: false,
  lensMainOption: {},
  displayCartviewSidebar: false,
  displayModal: false,
  modalView: 'LOGIN_VIEW',
  modalViewProps: {},
  modalOverrideProps: {},
  toastContainerProps: { variant: 'top_right' },
};

export const [useUI, AppProvider] = createCtx<AppCtx>('UIContext');

function uiReducer(state: CtxState, action: CtxAction): CtxState {
  switch (action.type) {
    case 'OPEN_MOBILE_MENU_SIDEBAR': {
      return {
        ...state,
        displayMobileMenuSidebar: true,
      };
    }
    case 'CLOSE_MOBILE_MENU_SIDEBAR': {
      return {
        ...state,
        displayMobileMenuSidebar: false,
      };
    }
    case 'OPEN_SEARCH_MODAL': {
      return {
        ...state,
        displaySearchModal: true,
      };
    }
    case 'CLOSE_SEARCH_MODAL': {
      return {
        ...state,
        displaySearchModal: false,
      };
    }
    case 'OPEN_COUPON_MODAL': {
      return {
        ...state,
        displayCouponModal: true,
      };
    }
    case 'OPEN_QUICK_SUPPORT_MODAL': {
      return {
        ...state,
        displayQuickSupportModal: true,
      };
    }
    case 'CLOSE_QUICK_SUPPORT_MODAL': {
      return {
        ...state,
        displayQuickSupportModal: false,
      };
    }
    case 'CLOSE_COUPON_MODAL': {
      return {
        ...state,
        displayCouponModal: false,
      };
    }
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
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      };
    }
    case 'CLOSE_ALL_MODAL': {
      return {
        ...state,
        displayModal: false,
        displayCartviewSidebar: false,
        displayCouponModal: false,
        displayLensMainBottomUp: false,
        displayMobileMenuSidebar: false,
        displaySearchModal: false,
      };
    }

    case 'SET_TOAST_CONTAINER_PROPS': {
      return {
        ...state,
        toastContainerProps: action.toastContainerProps,
      };
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.modalView,
        modalViewProps: action.modalViewProps || {},
        modalOverrideProps: action.modalOverrideProps || {},
      };
    }
  }
}

export const UIProvider: FC<PropsWithChildren<{}>> = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const stateSetter: CtxStateSetter = useMemo(
    () => ({
      openMobileMenuSidebar: () => dispatch({ type: 'OPEN_MOBILE_MENU_SIDEBAR' }),
      closeMobileMenuSidebar: () => dispatch({ type: 'CLOSE_MOBILE_MENU_SIDEBAR' }),

      openSearchModal: () => dispatch({ type: 'OPEN_SEARCH_MODAL' }),
      closeSearchModal: () => dispatch({ type: 'CLOSE_SEARCH_MODAL' }),

      openQuickSupportModal: () => dispatch({ type: 'OPEN_QUICK_SUPPORT_MODAL' }),
      closeQuickSupportModal: () => dispatch({ type: 'CLOSE_QUICK_SUPPORT_MODAL' }),

      openCouponModal: () => dispatch({ type: 'OPEN_COUPON_MODAL' }),
      closeCouponModal: () => dispatch({ type: 'CLOSE_COUPON_MODAL' }),

      closeAllModal: () => dispatch({ type: 'CLOSE_ALL_MODAL' }),

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

      openModal: () => dispatch({ type: 'OPEN_MODAL' }),
      closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),

      setToastContainerProps: (toastContainerProps: ToastContainerProps) =>
        dispatch({ type: 'SET_TOAST_CONTAINER_PROPS', toastContainerProps: toastContainerProps }),

      setModalView: (modalView: CTX_MODAL_VIEWS, modalViewProps, modalOverrideProps) =>
        dispatch({ type: 'SET_MODAL_VIEW', modalView, modalViewProps, modalOverrideProps }),
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
  return (
    <UIProvider>
      {/* <ThemeProvider defaultTheme="light">{children}</ThemeProvider> */}
      {children}
    </UIProvider>
  );
};
