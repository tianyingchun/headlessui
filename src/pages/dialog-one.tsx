import { FC, useCallback } from 'react';
import { Content } from './content';
import { Sidebar } from './sidebar';

type DialogOneProps = {
  show: boolean;
  onClose: () => void;
};

export const DialogOne: FC<DialogOneProps> = ({ show, onClose }) => {
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
              <Content />
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};
