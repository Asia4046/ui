"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ModeToggle } from "./ui/theme-button";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuRendered, setIsMenuRendered] = useState(false);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMenuRendered(false);
      setTimeout(() => setIsMobileMenuOpen(false), 500);
    } else {
      setIsMobileMenuOpen(true);
      setTimeout(() => setIsMenuRendered(true), 50);
    }
  };

  const navItems = [
    { name: 'Dashboard', href: '#' },
    { name: 'Upload', href: '#' },
    { name: 'Explore', href: '#' },
    { name: 'Settings', href: '#' }
  ];


  return (
    // fix css for light theme
    <>
      {/* Desktop */}
      <nav className="border-2 border-[#F2D7D9] fixed top-4 left-1/2 -translate-x-1/2 rounded-2xl antialiased w-[95%] max-w-[1800px] z-50 mx-auto px-4 backdrop-saturate-50 bg-black/90 backdrop-blur-2xl shadow-gray-400 shadow-md dark:bg-zinc-800 dark:shadow-white animate-navbar max-sm:hidden">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl w-auto">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 py-4 items-center">
                <Image src="/vercel.svg" height={20} width={20} alt="logo" />
              </div>
             
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex py-4 space-x-4">
                
                  <a
                    href="#"
                    className="rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-[#F2D7D9]  dark:hover:bg-zinc-600"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#F2D7D9] hover:bg-gray-700 hover:text-white  dark:hover:bg-zinc-600"
                  >
                    Upload
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#F2D7D9] hover:bg-gray-700 hover:text-white  dark:hover:bg-zinc-600"
                  >
                    Explore
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#F2D7D9] hover:bg-gray-700 hover:text-white  dark:hover:bg-zinc-600"
                  >
                    Settings
                  </a>
                </div>
              </div>
              <div className="ml-auto flex items-center -mx-10">
              <a href="/signin"><Button className="hover:bg-gray-700  hover:cursor-pointer dark:text-black text-[#F2D7D9] border-[#F2D7D9] dark:bg-[#F2D7D9] border dark:border-black  dark:hover:bg-[#D3CEDF] mr-2">Signin</Button></a>
              <a href="/signup"><Button className="hover:bg-gray-700  hover:cursor-pointer dark:text-black text-[#F2D7D9] border-[#F2D7D9] dark:bg-[#F2D7D9] border dark:border-black dark:hover:bg-[#D3CEDF] mr-5">Signup</Button></a>
             <div className="flex items-center">
              <ModeToggle  />
              </div>
              </div>
           
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className=" z-[60] fixed top-4 left-1/2 -translate-x-1/2 rounded-xl w-[90%] max-w-[1200px] px-4 py-2 bg-black/90 shadow-sm border-2 border-[#F2D7D9] dark:bg-zinc-800 dark:shadow-lg animate-navbar sm:hidden">
        <div className="flex justify-between items-center">
          <div className="flex shrink-0 items-center">
            <Image src="/vercel.svg" height={20} width={20} alt="logo" />
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <button 
              onClick={toggleMobileMenu}
              className="text-[#F2D7D9] focus:outline-none"
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

         {/* Modern Mobile Menu Overlay */}
         <div 
        className={`fixed inset-0 z-50 bg-black/95 dark:bg-zinc-600 transform transition-all duration-500 ease-in-out 
        ${isMobileMenuOpen 
          ? 'opacity-100 scale-100 pointer-events-auto' 
          : 'opacity-0 scale-110 pointer-events-none'}`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          transformOrigin: 'center center'
        }}
      >
        {isMobileMenuOpen && (
          <>
            <div className="absolute top-6 right-6 flex space-x-4 items-center">
              <ModeToggle />
              <button 
                onClick={toggleMobileMenu}
                className="text-white dark:text-[#F2D7D9] focus:outline-none transform transition-transform duration-300 hover:scale-110"
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

            <div className="flex flex-col justify-center items-center h-full space-y-8 px-6">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className={`text-4xl font-bold text-[#F2D7D9] 
                    transition-all duration-500 ease-out 
                    transform 
                    hover:scale-105 hover:tracking-wider hover:drop-shadow-lg
                    ${isMenuRendered 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                    }`}
                  style={{
                    transitionDelay: `${0.1 * (index + 1)}s`
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
      </>
  );
};

export default Navbar;
