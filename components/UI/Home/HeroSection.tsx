'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='hero-section bg-[#fff] relative px-4 py-8 md:p-12 lg:p-16 flex flex-col justify-start items-center md:items-start gap-6 md:gap-12'>
      <div className='hero-text-contents w-full h-full flex flex-col justify-center lg:justify-start items-center md:items-start gap-4 md:gap-6'>
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold flex flex-col gap-2 md:gap-4 font-urbanist text-center md:text-left'>
          <motion.span
            initial={{ x: 60 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
          >
            Elevate your experience with
          </motion.span>
          <motion.span
            initial={{ x: 60 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
            className='text-primary'
          >
            SkyEdge Digital
          </motion.span>
        </h1>
        <motion.p
          initial={{ x: 60 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.44, 0, 0.56, 1] }}
          className='text-base md:text-lg lg:text-xl font-lexend w-full lg:w-3/5 md:w-1/2 text-center md:text-left'
        >
          We design, develop and deliver tailored websites, apps, and strategies
          that elevate your brands and engage your audience
        </motion.p>
      </div>
      <Link
        href={'/contact-us'}
        className='bg-primary font-semibold text-white rounded-full px-8 py-2 cursor-pointer'
      >
        Get Started
      </Link>
      <div className='statistics-box-container relative md:absolute md:w-fit sm:bottom-8 md:bottom-16 right-0 sm:right-8 md:right-16 flex flex-row justify-center md:justify-end items-center gap-4 text-primary  w-full'>
        <motion.span
          initial={{ scale: 0.2, opacity: 0, x: 160, y: 200 }}
          animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
          className='border-[1px] statistics-box rounded-3xl border-gray-300 flex flex-col gap-2 p-4 md:p-7 '
        >
          <h2 className='text-lg md:text-xl font-semibold'>10+</h2>
          <p className='text-sm md:text-base'>Projects</p>
        </motion.span>
        <motion.span
          initial={{ scale: 0.2, opacity: 0, x: 160, y: 200 }}
          animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className='border-[1px] statistics-box rounded-3xl border-gray-300 flex flex-col gap-2 p-4 md:p-7  text-primary'
        >
          <h2 className='text-lg md:text-xl font-semibold'>10+</h2>
          <p className='text-sm md:text-base'>Projects</p>
        </motion.span>
      </div>
    </section>
  );
};

export default HeroSection;
