import React, { PropsWithChildren } from "react";

export interface Props {
  navigation: React.ReactElement;
}

/**
 * An Header React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Header: React.FC<PropsWithChildren<Props>> = ({
  children,
  navigation,
}) => {
  return (
    <header className="relative overflow-hidden min-h-screen flex flex-col">
      {navigation}
      <div className="flex-1 flex xl:flex-row relative px-4 pb-4 sm:px-6 sm:pb-6">
        {children}
      </div>
    </header>
  );
};
