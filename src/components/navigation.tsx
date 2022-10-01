import Link from "next/link";
import React from "react";
import RocketIcon from "../assets/rocket.svg";

export interface Props {}

/**
 * An Navigation React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
export const Navigation: React.FC<Props> = () => {
  return (
    <div className="relative bg-white z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className=" flex justify-between items-center  border-gray-100 py-6  md:space-x-10">
          <div className="flex justify-start items-center gap-12">
            <Link href="/">
              <a className="flex items-center">
                <RocketIcon className="h-12 w-auto sm:h-12" alt="site" />
                <span className="text-navy-600 ml-2 text-2xl font-bold">
                  Tail-Kit
                </span>
              </a>
            </Link>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                <button
                  type="button"
                  className="group bg-white rounded-md text-gray-800 inline-flex items-center text-base font-normal hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 text-xl"
                >
                  <span>Components</span>
                  <svg
                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </nav>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy-500"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
