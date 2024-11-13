'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaSpinner } from 'react-icons/fa';
import { createPotentialClients } from '@/lib/actions/potentialClients/create';
import { IPotentialClients } from '@/interfaces/PotentialCLients.interface';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phoneNo: z.string().min(10, 'Phone number must be at least 10 digits'),
  projectDescription: z
    .string()
    .min(10, 'Project description must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = async (data: FormValues) => {
    setLoading(true);
    setButtonText('Loading...');
    try {
      const response = await createPotentialClients(data as IPotentialClients);
      if (response.status === 200) {
        setButtonText('Thank you');
        reset();
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTimeout(() => setButtonText('Send Message'), 5000);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
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
              <span className='text-red-500'>{errors.firstName.message}</span>
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
              <span className='text-red-500'>{errors.lastName.message}</span>
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
              {...register('phoneNo')}
              id='phone'
              type='tel'
              className='input w-full  p-3 bg-[#262626] text-white border-b-[1px] border-b-primary'
            />
            {errors.phoneNo && (
              <span className='text-red-500'>{errors.phoneNo.message}</span>
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
            className='bg-primary font-bold rounded-full text-white px-6 py-3 hover:bg-primary/90 transition-colors flex justify-center items-center'
            style={{ width: '200px' }}
            disabled={loading}
          >
            {loading ? <FaSpinner className='animate-spin' /> : buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
