import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShapeU from '@/assets/clients-logo/ShapeU.png';
import ThePihu from '@/assets/clients-logo/ThePihu.png';
import SunshineWellness from '@/assets/clients-logo/Sunshine.png';
import DMTransport from '@/assets/clients-logo/DMTransport.jpeg';
import MindmapAssociates from '@/assets/clients-logo/MindmapAssociates.jpeg';

const BrandScroll = () => {
  const brands = [
    { id: 1, image: ShapeU, alt: 'Shape You' },
    { id: 2, image: ThePihu, alt: 'The Pihu' },
    { id: 3, image: SunshineWellness, alt: 'Sunshine Wellness' },
    { id: 4, image: DMTransport, alt: 'DM Transport' },
    { id: 5, image: MindmapAssociates, alt: 'Mindmap Associates' },
  ];

  return (
    <section className=' w-full container mx-auto text-center justify-center items-center flex flex-col gap-12 py-8'>
      <h2 className='text-3xl font-bold text-white font-lexend'>
        Trusted by Brands
      </h2>

      {/* Updated scrolling container */}
      <div className='relative w-full '>
        <div className='flex w-[200%] '>
          <div className='flex w-1/2 justify-around animate-scroll'>
            {brands.map((brand) => (
              <div key={brand.id} className='flex-shrink-0 mx-4 '>
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  width={100}
                  height={100}
                  className='object-contain hidden md:block rounded-full'
                />
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  width={50}
                  height={50}
                  className='object-contain md:hidden rounded-full'
                />
              </div>
            ))}
          </div>
          {/* Second set of brands */}
          <div className='flex w-1/2 justify-around animate-scroll'>
            {brands.map((brand) => (
              <div key={`${brand.id}-clone`} className='flex-shrink-0 mx-4'>
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  width={100}
                  height={100}
                  className='object-contain hidden md:block rounded-full'
                />
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  width={50}
                  height={50}
                  className='object-contain md:hidden rounded-full'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href='/works'
        className=' w-fit font-semibold rounded-full px-8 py-2 text-primary border-[1px] border-primary'
      >
        See Our Works
      </Link>
    </section>
  );
};

export default BrandScroll;
