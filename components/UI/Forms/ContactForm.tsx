'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  projectDescription: z
    .string()
    .min(10, 'Project description must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section id='contact-section' className='p-4 bg-[#090909] md:p-8 lg:p-16'>
      <motion.div
        ref={containerRef}
        style={{ y, scale }}
        className=' bg-[#141414] rounded-3xl md:rounded-4xl lg:rounded-[64px] flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-14 p-4 md:p-10 lg:p-12'
      >
        <div className='flex w-full lg:w-2/5 flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-white text-3xl md:text-4xl text-center lg:text-left lg:text-5xl font-urbanist font-light'>
              Join the brands surging ahead with us
            </h2>
            <p className='text-[#808080] text-base text-center lg:text-left md:text-lg lg:text-xl font-red-hat-display'>
              We collaborate with ambitious brands, whether you&apos;re a
              dynamic start-up or an established organization. Reach out to us,
              and together, we&apos;ll create something exceptional.
            </p>
          </div>
          <div className='flex flex-col md:flex-row lg:flex-col items-center justify-center lg:items-start lg:justify-start gap-3 md:gap-10 lg:gap-2 text-white font-red-hat-display font-light'>
            <span className='send flex items-center gap-2'>
              <MdEmail className='text-white text-xl' />
              <p className='text-base md:text-lg lg:text-xl text-[#9c9c9c] '>
                madhurendra.pratap@skyedgedigital.in
              </p>
            </span>
            <span className='phone flex items-center gap-2'>
              <BsTelephoneFill className='text-white text-xl ' />
              <p className='text-base md:text-lg lg:text-xl text-[#9c9c9c] '>
                +91 7320-0039-09
              </p>
            </span>
          </div>
        </div>
        <div className='flex w-full lg:w-3/5 flex-col gap-6'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-red-hat-display font-bold text-center lg:text-left'>
            <span className='text-white text-5xl'>Get in Touch</span>
            <span className='text-primary text-5xl'>.</span>
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6 md:gap-8 lg:gap-10 justify-start items-center font-red-hat-display'
          >
            <div className='w-full flex md:flex-row flex-col gap-6'>
              <div className='flex-1 flex flex-col gap-1'>
                <label
                  htmlFor='firstName'
                  className='text-base text-[#8f8f8f] capitalize'
                >
                  First Name
                </label>
                <input
                  {...register('firstName')}
                  id='firstName'
                  className='input w-full  p-3 bg-[#262626] text-white border-b-[1px] border-b-primary'
                />
                {errors.firstName && (
                  <span className='text-red-500'>
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <label
                  htmlFor='lastName'
                  className='text-base text-[#8f8f8f] capitalize'
                >
                  Last Name
                </label>
                <input
                  {...register('lastName')}
                  id='lastName'
                  className='input w-full  p-3 bg-[#262626] text-white border-b-[1px] border-b-primary'
                />
                {errors.lastName && (
                  <span className='text-red-500'>
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className='w-full flex md:flex-row flex-col gap-6'>
              <div className='flex-1 flex flex-col gap-1'>
                <label
                  htmlFor='email'
                  className='text-base text-[#8f8f8f] capitalize'
                >
                  Email
                </label>
                <input
                  {...register('email')}
                  id='email'
                  type='email'
                  className='input w-full  p-3 bg-[#262626] text-white border-b-[1px] border-b-primary'
                />
                {errors.email && (
                  <span className='text-red-500'>{errors.email.message}</span>
                )}
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <label
                  htmlFor='phone'
                  className='text-base text-[#8f8f8f] capitalize'
                >
                  Phone
                </label>
                <input
                  {...register('phone')}
                  id='phone'
                  type='tel'
                  className='input w-full  p-3 bg-[#262626] text-white border-b-[1px] border-b-primary'
                />
                {errors.phone && (
                  <span className='text-red-500'>{errors.phone.message}</span>
                )}
              </div>
            </div>

            <div className='w-full flex flex-col gap-1'>
              <label
                htmlFor='projectDescription'
                className='text-base text-[#8f8f8f] capitalize'
              >
                Tell us about your project
              </label>
              <textarea
                {...register('projectDescription')}
                id='projectDescription'
                rows={4}
                className='input w-full  p-3 bg-[#262626] text-white border-b-[1px] border-b-primary'
              />
              {errors.projectDescription && (
                <span className='text-red-500'>
                  {errors.projectDescription.message}
                </span>
              )}
            </div>
            <div className='w-full flex justify-center lg:justify-end items-center'>
              <button
                type='submit'
                className='bg-primary font-bold rounded-full text-white px-6 py-3  hover:bg-primary/90 transition-colors'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
