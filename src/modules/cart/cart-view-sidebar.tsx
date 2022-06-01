import { hooks } from '@wove/react';
import { FC } from 'react';
import { useUI } from '../../components';
import { Content } from '../../components/content';
import { Sidebar } from '../../components/sidebar';

export type CartViewSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export const CartViewSidebar: FC<CartViewSidebarProps> = ({ open, onClose }) => {
  const { closeCartviewSidebar, openLensMainBottomUp } = useUI();

  const closeCart = hooks.useCallbackRef(() => {
    // 1. close cart view
    closeCartviewSidebar();

    // 2. open bottomup
    openLensMainBottomUp({});
  });
  return (
    <Sidebar direction="fromRight" className={'sm:max-w-lg lg:max-w-xl'} open={open} onClose={onClose}>
      <div className="flex h-full w-full flex-col pt-12">
        <div className="w-full flex-1 overflow-hidden py-2">
          <div className="h-full w-full flex-1 overflow-y-auto overflow-x-hidden scroll-smooth bg-gray-100 px-2">
            <div className="space-y-3 p-2">
              <button className="cursor-pointer border-2 px-2 text-indigo-700" onClick={closeCart}>
                Open Bottom up
              </button>
              <Content />
            </div>
          </div>
          <div className="p-2">
            <button>checkout</button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};
