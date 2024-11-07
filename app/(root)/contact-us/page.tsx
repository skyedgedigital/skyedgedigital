'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/UI/Forms/ContactForm';

const page = () => {
  return (
    <main className='bg-[#141414] w-full h-full min-h-screen  flex flex-col gap-8 md:gap-12 lg:gap-16 p-4 md:p-12 lg:p-16'>
      <section className='hero-texts text-white flex flex-col gap-4 md:gap-6 lg:gap-8 '>
        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          className='text-3xl md:text-5xl lg:text-7xl font-urbanist font-semibold flex gap-4'
        >
          Let's talk
        </motion.h1>
        <motion.p
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.44, 0, 0.56, 1],
            delay: 0.2,
          }}
          className='text-base md:text-lg lg:text-2xl font-lexend'
        >
          We collaborate with ambitious brands, whether you’re a dynamic
          start-up or an established organization. Reach out to us, and
          together, we’ll create something exceptional.
        </motion.p>
      </section>
      <section className='contact-form'>
        <ContactForm />
      </section>
    </main>
  );
};

export default page;
