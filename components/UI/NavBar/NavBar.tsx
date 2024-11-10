'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Logo from '@/assets/Logo-Black.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main NavBar */}
      <nav
        className={`${
          isScrolled ? 'fixed' : 'relative'
        } top-0 left-0 w-full bg-white shadow-md px-6 py-2 flex justify-between items-center z-50`}
      >
        <div className='text-xl font-bold '>
          <Image src={Logo} width={150} alt='skyedge digital logo' />
        </div>
        <button className='text-2xl' onClick={toggleMenu}>
          ☰
        </button>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } z-50`}
      >
        <div className='px-6 py-4 flex justify-between items-center'>
          <div className='text-xl font-bold'>LOGO</div>
          <button className='text-2xl' onClick={toggleMenu}>
            ✕
          </button>
        </div>
        <div className='flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8 text-xl'>
          <a href='/' className='hover:text-gray-600 transition-colors'>
            Home
          </a>
          <a href='/works' className='hover:text-gray-600 transition-colors'>
            Works
          </a>
          <a href='/about-us' className='hover:text-gray-600 transition-colors'>
            About Us
          </a>
          <a
            href='/contact-us'
            className='hover:text-gray-600 transition-colors'
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
