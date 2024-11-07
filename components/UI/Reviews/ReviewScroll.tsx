'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShapeU from '@/assets/clients-logo/ShapeU.png';
import SunshineWellness from '@/assets/clients-logo/Sunshine.png';
import DMTransport from '@/assets/clients-logo/DMTransport.jpeg';
import MindmapAssociates from '@/assets/clients-logo/MindmapAssociates.jpeg';

import Profile from '@/assets/profile.png';

const reviews = [
  {
    id: 1,
    review: `SkyEdge Digital Transformed Our Business and Management! We approached SkyEdge Digital for app development, and they truly exceeded our expectations. The team's professionalism and attention to detail helped us create a stunning app that perfectly`,
    reviewBy: {
      name: 'Owner - DM Transport',
      image: DMTransport,
    },
    reviewTo: DMTransport,
  },
  {
    id: 2,
    review: `A True Partner in Business Growth. SkyEdge Digital has been instrumental in scaling our business through their digital marketing and consultation services. Their innovative strategies helped us reach new audiences and increase our revenue within just a few months. Their commitment to our growth was truly impressive. Highly recommend their services!`,
    reviewBy: {
      name: 'Owner - Sunshine Wellness',
      image: SunshineWellness,
    },
    reviewTo: SunshineWellness,
  },
  {
    id: 1,
    review: `Exceptional Service with Remarkable Results.I couldn't be happier with the app development services from SkyEdge Digital! They delivered a user-friendly, sleek app that has received fantastic feedback from our customers.The entire process was smooth, and the team was always available for support. Thank you, SkyEdge, for your dedication and expertise!`,
    reviewBy: {
      name: 'Owner - Shape U',
      image: ShapeU,
    },
    reviewTo: ShapeU,
  },
  {
    id: 1,
    review: `Professional, Reliable, and Creative Working with SkyEdge Digital was a game-changer for our brand. Their creativity and professionalism in handling our social media campaigns led to increased brand visibility and customer engagement. We appreciate their ability to listen to our needs and deliver beyond our expectations!`,
    reviewBy: {
      name: 'Owner - Mindmap Associates',
      image: MindmapAssociates,
    },
    reviewTo: MindmapAssociates,
  },
];
const ReviewScroll = () => {
  return (
    <section className='text-center justify-center items-center flex  flex-col gap-14 lg:gap-[5rem]  py-12 md:py-14 lg:py-16'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white font-redhat'>
          What our <span className='text-primary'>Clients</span> say
        </h2>
        <p className='text-sm md:text-base lg:text-lg text-[#808080] font-redhat'>
          We are proud to have worked with some of the most innovative and
          forward-thinking brands in the world.
        </p>
      </div>

      <div className='relative w-full  flex gap-2 px-2 group'>
        <div className='flex gap-12 animate-scroll group-hover:[animation-play-state:paused] '>
          {reviews.map((review) => (
            <div
              key={review.id}
              className='flex flex-col justify-between  gap-4 md:gap-6 lg:gap-8 items-center mx-4 w-[80vw]  md:w-[40vw]'
            >
              <p className=' font-lexend font-light w-full text-sm md:text-base lg:text-xl text-[#c0c0c0] '>
                {review.review}
              </p>
              <div className='flex items-center justify-center gap-2'>
                <div className='relative flex items-center justify-center w-fit h-fit  rounded-full'>
                  <Image
                    src={review.reviewTo}
                    alt={review.reviewBy.name}
                    width={60}
                    height={60}
                    className='object-contain absolute -left-8 rounded-full'
                  />
                  <Image
                    src={Profile}
                    alt={review.reviewBy.name}
                    width={60}
                    height={60}
                    className='object-contain rounded-full z-10'
                  />
                </div>
                <p className=' font-red-hat-display text-primary'>
                  {review.reviewBy.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex gap-12 animate-scroll group-hover:[animation-play-state:paused] '>
          {reviews.map((review) => (
            <div
              key={review.id}
              className='flex flex-col justify-between gap-8 items-center mx-4 w-[80vw]  md:w-[40vw]'
            >
              <p className=' font-lexend font-light w-full text-sm md:text-base lg:text-xl text-[#c0c0c0] '>
                {review.review}
              </p>
              <div className='flex items-center justify-center gap-2'>
                <div className='relative flex items-center justify-center w-fit h-fit  rounded-full'>
                  <Image
                    src={review.reviewTo}
                    alt={review.reviewBy.name}
                    width={60}
                    height={60}
                    className='object-contain absolute -left-8 rounded-full'
                  />
                  <Image
                    src={Profile}
                    alt={review.reviewBy.name}
                    width={60}
                    height={60}
                    className='object-contain rounded-full z-10'
                  />
                </div>
                <p className=' font-red-hat-display text-primary'>
                  {review.reviewBy.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewScroll;
