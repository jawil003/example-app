import Link from "next/link";
import React from "react";
import RocketIcon from "../../assets/rocket.svg";

export interface Props {}

/**
 * An Navigation React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Navigation: React.FC<Props> = () => {
  return (
    <div className="relative bg-white z-40">
      <div className="px-4 sm:px-6">
        <div className=" flex justify-between items-center  border-gray-100 py-6  md:space-x-10">
          <div className="flex justify-start items-center gap-12">
            <Link href="/">
              <a className="flex items-center">
                <RocketIcon className="h-12 w-auto sm:h-12" alt="site" />
                <span className="text-navy-600 ml-2 text-2xl font-bold">
                  Test Page
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
