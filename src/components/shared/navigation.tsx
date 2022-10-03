import Link from "next/link";
import React from "react";
import RocketIcon from "../../assets/rocket.svg";
import { Typography } from "./typography";

export interface Props {}

/**
 * An Navigation React Component.
 * @author Jane Will
 * @version 0.1
 */
export const Navigation: React.FC<Props> = () => {
  return (
    <div className="relative z-40">
      <div className="px-4 sm:px-6">
        <div className=" flex justify-between items-center  border-gray-100 py-6  md:space-x-10">
          <div className="flex justify-start items-center gap-12">
            <Link href="/">
              <a className="flex items-center">
                <RocketIcon className="h-12 w-auto sm:h-12" alt="site" />
                <Typography variant="logo" className="ml-2">
                  Test Page
                </Typography>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
