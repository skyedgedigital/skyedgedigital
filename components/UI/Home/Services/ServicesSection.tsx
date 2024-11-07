import React from 'react';
import WebDevelopmentSection from './WebDevelopment';
import ProductManagement from './ProductDevelopment';
import SocialMediaManagement from './SocialMediaManagement';
import AppDevelopment from './AppDevelopment';

const ServicesSection = () => {
  return (
    <section className='text-white bg-[#090909] p-8 md:p-12 lg:p-16 flex flex-col gap-8 lg:gap-16 relative  overflow-hidden'>
      <div className='heading top-14 z-10 py-4 flex justify-center lg:justify-start items-center'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold font-urbanist pb-2 border-b-primary border-b-[1px] w-fit'>
          Our services
        </h2>
      </div>
      <WebDevelopmentSection />
      <AppDevelopment />
      <SocialMediaManagement />
      <ProductManagement />
    </section>
  );
};

export default ServicesSection;
