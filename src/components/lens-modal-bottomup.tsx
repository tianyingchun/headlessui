import { FC, useCallback } from 'react';
import { Content } from './content';
import { Sidebar } from './sidebar/sidebar';

type LensMainBottomUpProps = {
  show: boolean;
  onClose: () => void;
};

export const LensMainBottomUp: FC<LensMainBottomUpProps> = ({ show, onClose }) => {
  const handleClose = useCallback(() => {
    // ISSUE: execute twice.
    console.log('onclose...');
    onClose();
  }, []);

  return (
    <Sidebar
      open={show}
      staticMode={false}
      onClose={handleClose}
      direction="bottomUp"
      className="top-12"
      headClassName="py-4 pt-0 pt-4"
    >
      <div className="flex h-full w-full flex-col pt-12 sm:px-4">
        <div className="flex flex-1 overflow-hidden py-2">
          <div className="h-full w-full justify-center sm:flex">
            {/* for pc */}
            <div className="h-full flex-1 overflow-y-auto overflow-x-hidden scroll-smooth px-2 sm:max-w-3xl">
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-2 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => handleClose()}
              >
                Open New
              </button>
              <Content />
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};
