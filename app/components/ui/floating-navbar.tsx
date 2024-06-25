"use client"


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { navItems, navItem } from './navItems';

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-xl font-bold text-gray-800">Logo</span>
              </Link>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.link}>
                    <span className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile menu toggle button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link key={item.name} href={item.link}>
              <span className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default FloatingNavbar;

