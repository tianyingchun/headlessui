import { FC, PropsWithChildren } from 'react';
import { AbstractIntlMessages } from 'use-intl';
import { useUI } from '../../components';
import { LensMainBottomUp } from '../../components/lens-modal-bottomup';
import { CartViewSidebar } from '../cart';

export interface LayoutProps {
  /**
   * SSG/SSR page props.
   */
  pageProps: {
    /**
     * 当前locale对应的domain
     */
    domain: string;

    /**
     * 当前全局存储的i18n消息
     */
    messages?: AbstractIntlMessages;

    /**
     * other pages props will be settle in layout `_app.tsx`
     */
    commerceFeatures: Record<string, boolean>;
  };
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  const { displayCartviewSidebar, displayLensMainBottomUp, closeLensMainBottomUp, closeCartviewSidebar } =
    useUI();

  return (
    <div className="mx-auto h-full w-full">
      <main>{children}</main>
      {/* 全局上下文状态购物车侧边栏 NO SSR */}
      <CartViewSidebar open={displayCartviewSidebar} onClose={closeCartviewSidebar} />
      <LensMainBottomUp show={displayLensMainBottomUp} onClose={closeLensMainBottomUp} />
    </div>
  );
};
