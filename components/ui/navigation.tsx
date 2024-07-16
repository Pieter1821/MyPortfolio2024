"use client";
import { useState } from 'react';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import Link from 'next/link';
import { motion } from 'framer-motion';


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
        className="text-zinc transition duration-300 ease-in-out transform hover:scale-105 px-3 py-2 rounded-md hover:text-yellow-300 hover:underline focus:outline-none"
      >
        {link.label}
      </Link>
    ))
  );

  return (
    <div className="navbar-container flex justify-center bg-gray-300 bg-opacity-0  left-0 right-0 z-50 shadow-md backdrop-filter backdrop-blur-md sticky top-0">
      <nav className="px-4 py-2 w-full max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-zinc-800 hover:text-yellow-500 transition duration-300 ease-in-out transform hover:-translate-y-1 text-3xl"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              whileHover={{
                scale: 1.2,
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut'
                }
              }}
              animate={{
                rotate: isOpen ? 180 : 0,
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut'
                }
              }}
            >
              {isOpen ? <VscChromeClose className="h-8 w-8" /> : <VscMenu className="h-8 w-8" />}
            </motion.button>
          </div>
          {/* Desktop menu links */}
          <div className="hidden md:flex space-x-10">
            <NavLinks />
          </div>
        </div>
        {/* Mobile menu Links */}
        {isOpen && (
          <motion.div className="md:hidden mt-2"
          key="content"
          initial={{scale: 1}}
          animate={{scale: isOpen? 0.9 : 1}}
          exit={{scale:1}}
          transition={{duration: 0.3 , ease: 'easeInOut'}}

          
          >
            <ul className="flex flex-col items-start space-y-4">
              <NavLinks />
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
}