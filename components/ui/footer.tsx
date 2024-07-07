"use client"

import { useState , useEffect} from 'react';
import Link from "next/link";

export const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`bg-gray-200 ${isScrolled ? 'shadow-md' : ''} text-gray-800 py-4`}>
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Pieter Deane. All rights reserved.</p>
        <div className="mt-2">
          <Link href="#" className="hover:underline transition-colors duration-300">
            Back to top
          </Link>
        </div>
        
      </div> 

    </footer>
  );
};