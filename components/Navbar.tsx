import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ui/theme-button";

const Navbar = () => {
  return (
    // fix css for light theme
    <nav className="rounded-md antialiased w-[94rem] mx-[16px] my-[16px] backdrop-saturate-50 bg-black/90 backdrop-blur-2xl shadow-gray-400 shadow-md dark:bg-white/100 dark:shadow-amber-50">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center dark:hidden">
              <Image src="/vercel.svg" height={20} width={20} alt="logo" />
            </div>
            <div className="shrink-0 items-center hidden dark:block my-[10px]">
              <Image src="/image.png" height={20} width={20} alt="logo"/>
            </div>
            <div className="hiddel sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white dark:text-gray-950 dark:hover:bg-gray-200"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  Upload
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  Explore
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  Settings
                </a>
              </div>
            </div>
            <div className="mx-255 flex px-0.5">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
