import React from 'react';
import WebDevelopmentSection from './WebDevelopment';
import ProductManagement from './ProductDevelopment';
import SocialMediaManagement from './SocialMediaManagement';
import AppDevelopment from './AppDevelopment';

const ServicesSection = () => {
  return (
    <section className='text-white p-4 sm:p-8 lg:p-16 flex flex-col gap-8 lg:gap-16'>
      <div className='heading'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold font-lexend border-b-primary border-b-[1px] w-fit'>
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
