'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Logo from '@/public/assets/Logo-Black.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
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
        <Link href={'/'} className='text-xl font-bold '>
          <Image src={Logo} width={150} alt='skyedge digital logo' />
        </Link>
        <button className='text-3xl md:hidden py-1 px-3' onClick={toggleMenu}>
          ☰
        </button>
        <div className='hidden md:flex items-center space-x-4'>
          <Link
            href='/'
            className={`hover:text-gray-600 transition-colors ${
              pathname === '/' ? 'text-primary' : 'text-black'
            }`}
          >
            Home
          </Link>
          <Link
            href='/works'
            className={`hover:text-gray-600 transition-colors ${
              pathname === '/works' ? 'text-primary' : 'text-black'
            }`}
          >
            Works
          </Link>
          <Link
            href='/about-us'
            className={`hover:text-gray-600 transition-colors ${
              pathname === '/about-us' ? 'text-primary' : 'text-black'
            }`}
          >
            About Us
          </Link>
          <Link
            href='/contact-us'
            className={`hover:text-gray-600 transition-colors ${
              pathname === '/contact-us' ? 'text-primary' : 'text-black'
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } z-50`}
      >
        <div className='px-6 py-4 flex justify-between items-center'>
          <div className='text-xl font-bold'>
            <Image src={Logo} width={150} alt='skyedge digital logo' />
          </div>
          <button className='text-2xl' onClick={toggleMenu}>
            ✕
          </button>
        </div>
        <div className='flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8 text-xl'>
          <a
            href='/'
            className={`hover:text-gray-600 transition-colors ${
              pathname === '/' ? 'text-primary' : 'text-black'
            }`}
          >
            Home
          </a>
          <a
            href='/works'
            className={`hover:text-gray-600 transition-colors ${
              pathname === '/works' ? 'text-primary' : 'text-black'
            }`}
          >
            Works
          </a>
          <a
            href='/about-us'
            className={`hover:text-gray-600 transition-colors ${
              pathname === '/about-us' ? 'text-primary' : 'text-black'
            }`}
          >
            About Us
          </a>
          <a
            href='/contact-us'
            className={`hover:text-gray-600 transition-colors ${
              pathname === '/contact-us' ? 'text-primary' : 'text-black'
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
