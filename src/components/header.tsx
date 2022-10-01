import React, { PropsWithChildren } from "react";

export interface Props {}

/**
 * An Header React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="relative bg-white overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
          {children}
        </div>
      </div>
    </header>
  );
};
