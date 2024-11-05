'use client';

import React from 'react';
import Image from 'next/image';
import ShapePM from '@/assets/Shapes/ShapePM.png';
import RotatedShapeRight from '@/assets/Shapes/RotatedShapeRight.png';
import { FiMinus } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductManagement = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'center center'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [400, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const listItemVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
      },
    },
  };

  return (
    <div className='text-white p-4 sm:p-8 lg:p-16 flex flex-col gap-8 lg:gap-16 '>
      <div className='web-development-section relative flex flex-col lg:flex-row-reverse justify-between  md:gap-16 lg:gap-32 items-center min-h-[80vh]'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[45px] lg:h-[45px] flex justify-center items-center text-primary'>
          <p className='text-white z-10 text-2xl sm:text-2xl lg:text-3xl'>4</p>
          <span className='rotate absolute left-0 right-0 top-0 bottom-0 bg-primary animate-spin-slow'></span>
        </div>

        <div className='service-description flex-1 flex flex-col gap-6 sm:gap-8 lg:gap-12 mt-12 lg:mt-0'>
          <motion.div
            ref={targetRef}
            className='topic-and-description flex flex-col gap-5 sm:gap-8 lg:gap-10'
            style={{ x, opacity, scale }}
          >
            <h3 className='text-xl sm:text-2xl lg:text-3xl border-b-primary border-b-[1px] w-fit'>
              Product Management
            </h3>
            <p className='text-sm sm:text-lg lg:text-2xl text-[#cecece]'>
              We provide comprehensive product management services to help you
              turn ideas into successful products. With expertise in market
              research, user experience, and agile methodologies, we help you
              create a clear product roadmap, prioritize features, deliver
              products that exceed customer expectations.
            </p>
          </motion.div>

          <div className='lists flex flex-col gap-1'>
            {[
              'Product Strategy Development',
              'Product Roadmap Planning',
              'Market Research & Analysis',
              'Product Prototyping',
              'User Testing & Feedback',
            ].map((text, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                initial='hidden'
                whileInView='visible'
                className='flex items-center gap-2 justify-start'
              >
                <FiMinus className='text-primary' />
                <p className='text-[14px] md:text-lg lg:text-xl text-[#dbdbdb]'>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className='images flex-1 relative w-full  h-[250px] sm:w-[450px] sm:h-[300px] lg:w-[600px] lg:h-[350px] mt-8 lg:mt-0 '>
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.44, 0, 0.56, 1],
            }}
            className='absolute top-0 left-0 bottom-0 right-0 '
          >
            <Image
              className='shape'
              src={RotatedShapeRight}
              alt='web development'
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.44, 0, 0.56, 1],
            }}
            className='absolute top-0 left-0 bottom-0 right-0 '
          >
            <Image
              className='rotated-shape'
              src={ShapePM}
              alt='web development'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
