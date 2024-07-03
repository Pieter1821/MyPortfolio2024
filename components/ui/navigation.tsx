"use client";
import { useState } from 'react';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import Link from 'next/link';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavLinks = () => (
    links.map((link, index) => (
      <Link
        key={index}
        href={link.to}
        className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-3 px-3 py-2 rounded-md hover:border-b-2 hover:border-yellow-500"
      >
        {link.label}
      </Link>
    ))
  );
  
  return (
    <div className="navbar-container flex justify-center bg-gray-800 bg-opacity-80 fixed top-0 left-0 right-0 z-50">
      <nav className="px-4 py-2 w-full max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-3 text-3xl hover:border-1 hover:border-yellow-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <VscChromeClose className="h-8 w-8 hover:border-yellow-500" /> : <VscMenu className="h-8 w-8 hover:border-yellow-500" />}
            </button>
          </div>
          {/* Desktop menu links */}
          <div className="hidden md:flex  space-x-20">
            <NavLinks />
       
          </div>
        </div>
        {/* Mobile menu links */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col items-start space-y-4">
              <NavLinks />
            
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
