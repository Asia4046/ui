"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ModeToggle } from "./ui/theme-button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // fix css for light theme
    <>
      {/* Desktop */}
      <nav className=" fixed top-4 left-1/2 -translate-x-1/2 rounded-2xl antialiased w-[95%] max-w-[1800px] mx-auto px-4 backdrop-saturate-50 bg-black/90 backdrop-blur-2xl shadow-gray-400 shadow-md dark:bg-white/100 dark:shadow-amber-100 animate-navbar max-sm:hidden">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl w-auto">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center dark:hidden">
                <Image src="/vercel.svg" height={20} width={20} alt="logo" />
              </div>
              <div className="shrink-0 items-center hidden dark:block my-[10px]">
                <Image src="/image.png" height={20} width={20} alt="logo" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
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
              <div className="ml-auto flex items-center px-0.5">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 rounded-xl w-[90%] max-w-[1200px] px-4 py-2 backdrop-saturate-50 bg-black/90 backdrop-blur-2xl shadow-2xl border border-white/10 dark:bg-white/90 dark:shadow-lg animate-navbar sm:hidden">
        <div className="flex justify-between items-center">
          <div className="flex shrink-0 items-center dark:hidden">
            <Image src="/vercel.svg" height={20} width={20} alt="logo" />
          </div>
          <div className="shrink-0 items-center hidden dark:block my-[10px]">
            <Image src="/image.png" height={20} width={20} alt="logo" />
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-white dark:text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* Modern Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 dark:bg-white/95 flex items-center justify-center"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div className="absolute top-6 right-6 flex space-x-4 items-center">
            <ModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-white dark:text-black focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="text-center space-y-8">
            <a
              href="#"
              onClick={toggleMobileMenu}
              className="block text-4xl font-bold text-white dark:text-black opacity-0 transform translate-y-4 transition-all duration-300 ease-out hover:text-gray-300 dark:hover:text-gray-700"
              style={{
                animationName: "fadeInUp",
                animationDuration: "0.5s",
                animationFillMode: "forwards",
                animationDelay: "0.1s",
              }}
            >
              Dashboard
            </a>
            <a
              href="#"
              onClick={toggleMobileMenu}
              className="block text-4xl font-bold text-white dark:text-black opacity-0 transform translate-y-4 transition-all duration-300 ease-out hover:text-gray-300 dark:hover:text-gray-700"
              style={{
                animationName: "fadeInUp",
                animationDuration: "0.5s",
                animationFillMode: "forwards",
                animationDelay: "0.2s",
              }}
            >
              Upload
            </a>
            <a
              href="#"
              onClick={toggleMobileMenu}
              className="block text-4xl font-bold text-white dark:text-black opacity-0 transform translate-y-4 transition-all duration-300 ease-out hover:text-gray-300 dark:hover:text-gray-700"
              style={{
                animationName: "fadeInUp",
                animationDuration: "0.5s",
                animationFillMode: "forwards",
                animationDelay: "0.3s",
              }}
            >
              Explore
            </a>
            <a
              href="#"
              onClick={toggleMobileMenu}
              className="block text-4xl font-bold text-white dark:text-black opacity-0 transform translate-y-4 transition-all duration-300 ease-out hover:text-gray-300 dark:hover:text-gray-700"
              style={{
                animationName: "fadeInUp",
                animationDuration: "0.5s",
                animationFillMode: "forwards",
                animationDelay: "0.4s",
              }}
            >
              Settings
            </a>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
