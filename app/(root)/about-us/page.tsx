'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import OfficeDiscussion from '@/assets/stock-photos/office-discussion.jpg';
import { FiMinus } from 'react-icons/fi';
import Founder from '@/assets/Team-members-Image/Founder.png';
import CoFounder from '@/assets/Team-members-Image/cofounder.png';
import uiux from '@/assets/Team-members-Image/uiux.png';
import smm from '@/assets/Team-members-Image/smm.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import ReviewScroll from '@/components/UI/Reviews/ReviewScroll';
import ContactFormCard from '@/components/UI/ContactFormCard/ContactFormCard';

// const teamMembers = [
//   {
//     name: 'Madhurendra Pratap',
//     designation: 'Founder & CEO',
//     LinkedIn:
//       'https://www.linkedin.com/in/madhurendra-pratap-62118a205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
//     profile: Founder,
//   },
//   {
//     name: 'Ritobaan Roy',
//     designation: 'Co-Founder',
//     LinkedIn:
//       'https://www.linkedin.com/in/ritobaanroy5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
//     profile: CoFounder,
//   },
//   {
//     name: 'Praveen Kumar Verma',
//     designation: 'UI/UX Designer & Developer',
//     LinkedIn: 'https://www.linkedin.com/in/praveen-kumar-verma-1ba553206',
//     profile: uiux,
//   },
//   {
//     designation: 'Social Media Manager',
//     name: 'Pranav Raj Shrivastav',
//     LinkedIn:
//       'https://www.linkedin.com/in/pranav-raj-srivastav-891633240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
//     profile: smm,
//   },
// ];

const AboutUs = () => {
  const stockPhotoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stockPhotoRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);

  const trainOneRef = useRef(null);
  const { scrollYProgress: trainScrollProgress } = useScroll({
    target: trainOneRef,
    offset: ['start end', 'end start'],
  });

  const trainOneX = useTransform(trainScrollProgress, [0, 1], [0, -3000]);

  const trainTwoRef = useRef(null);
  const { scrollYProgress: trainTwoScrollProgress } = useScroll({
    target: trainTwoRef,
    offset: ['start end', 'end start'],
  });

  const trainTwoX = useTransform(trainTwoScrollProgress, [0, 1], [0, 3000]);
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

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className='bg-[#141414] w-full h-full min-h-screen  flex flex-col gap-8 md:gap-12 lg:gap-16 overflow-hidden'
    >
      <section className='hero-texts text-white flex flex-col gap-4 md:gap-6 lg:gap-8 p-4 md:p-12 lg:p-16  '>
        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          className='text-3xl md:text-5xl lg:text-7xl font-urbanist font-semibold flex gap-4'
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.44, 0, 0.56, 1],
            delay: 0.2,
          }}
          className='text-base md:text-lg lg:text-xl font-lexend'
        >
          At SkyEdge Digitals, we delivers custom digital solutions that help
          businesses thrive. From websites and apps to product management and
          social media strategies, our team of skilled professionals combines
          creativity and technology to drive results. Our expert team works
          closely with you to bring your vision to life, whether you're
          launching a startup or growing an established brand.
        </motion.p>
        <motion.p
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.44, 0, 0.56, 1],
            delay: 0.2,
          }}
          className='text-base md:text-lg lg:text-xl font-lexend'
        >
          Founded in 2023, We started with a simple mission to empower
          businesses by turning their digital ideas into reality. What began as
          a small team of passionate developers has grown into a full-fledged
          digital powerhouse, serving clients across the globe. Our journey has
          been one of innovation, dedication, and relentless pursuit of
          excellence.
        </motion.p>
      </section>
      <section className='photo-gallery '>
        <motion.div
          ref={stockPhotoRef}
          className='w-full h-full stock-photo'
          style={{ opacity, scale }}
        >
          <Image
            src={OfficeDiscussion}
            className='aspect-[2/1] object-cover rounded-2xl'
            alt='about-us'
          />
        </motion.div>
      </section>
      <section className='our-expertise lg:my-12 flex flex-col py-8 gap-16'>
        <div className='train-container flex flex-col gap-8'>
          <motion.div
            ref={trainOneRef}
            className='train-one flex gap-16 justify-start'
            style={{ x: trainOneX }}
            transition={{ ease: 'linear' }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <div className='flex justify-center items-center gap-16'>
                <span
                  key={index}
                  className='capitalize font-semibold text-white text-5xl md:text-6xl lg:text-8xl text-nowrap'
                >
                  our expertise
                </span>
                <div className='h-6 w-6 md:h-7 md:w-7 lg:w-8 lg:h-8 bg-primary'></div>
              </div>
            ))}
          </motion.div>
          <motion.div
            ref={trainTwoRef}
            className='train-two flex gap-16 justify-end'
            style={{ x: trainTwoX }}
            transition={{ ease: 'linear' }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <div className='flex justify-center items-center gap-16'>
                <span
                  key={index}
                  className='capitalize font-semibold text-white text-5xl md:text-6xl lg:text-8xl text-nowrap'
                >
                  our expertise
                </span>
                <div className='h-6 w-6 md:h-7 md:w-7 lg:w-8 lg:h-8 bg-primary'></div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className='expertise-list flex flex-col gap-6 justify-center items-center'>
          {[
            'Web Development',
            'Mobile App Development',
            'Product Management',
            'Social Media Management',
          ].map((text, index) => (
            <motion.a
              href='/contact-us'
              key={index}
              variants={listItemVariants}
              initial='hidden'
              whileInView='visible'
              whileHover={{
                scale: 1.1,
                rotateX: 8,
                rotateY: -3,
                rotateZ: -1,
                transition: {
                  type: 'spring',
                  duration: 0.65,
                  bounce: 0.45,
                },
              }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              className='flex items-center gap-2 justify-start cursor-none'
            >
              <FiMinus className='text-primary' />
              <p className='text-xl md:text-4xl lg:text-5xl text-[#dbdbdb]'>
                {text}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Custom Cursor */}
      <motion.div
        className='fixed pointer-events-none z-50 flex items-center justify-center'
        animate={{
          x: cursorPosition.x - 75,
          y: cursorPosition.y - 75,
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className='bg-primary text-white px-4 py-2 rounded-full whitespace-nowrap'>
          Start a project
        </div>
      </motion.div>

      <section className='our-team flex flex-col gap-8 bg-white p-4 py-12 md:p-12 lg:p-16 '>
        <div className='flex flex-col md:grid md:grid-cols-3  gap-8'>
          <div className='flex flex-col justify-center items-center col-span-2 gap-8'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-3xl md:text-5xl lg:text-7xl text-center font-urbanist font-semibold '>
                Meet Our Team
              </h2>
              <p className='text-center font-light text-base md:text-lg lg:text-xl font-lexend text-[#787878]'>
                Meet our passionate and talented team of digital experts
                dedicated to bringing your vision to life. With a blend of
                creativity, technical prowess, and strategic thinking, we
                design, develop, and deliver exceptional digital solutions.
              </p>
            </div>
            <div className='flex gap-8 justify-center items-center'>
              <div className='flex flex-col gap-2'>
                <h4 className='text-primary font-urbanist font-semibold'>
                  10+ Projects
                </h4>
                <p className='font-red-hat-display  text-[#787878]'>
                  Crafting your Idea to engaging digital realities
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-primary font-urbanist font-semibold'>
                  20+ Team Size
                </h4>
                <p className='font-red-hat-display text-[#787878]'>
                  Bringing your vision to life with a team of experts
                </p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.44, 0, 0.56, 1],
            }}
            className='group relative col-span-1 rounded-lg overflow-hidden'
          >
            <Image
              src={Founder}
              alt='team'
              className='hover:scale-105 transition-all h-full object-cover'
            />
            <div className='absolute  bg-white rounded-2xl bottom-2 left-2 p-3'>
              <h3 className='text-primary text-xs md:text-sm lg:text-base font-urbanist'>
                Founder
              </h3>
              <p className='font-lexend text-sm md:text-base lg:text-lg font-semibold'>
                Madhurendra Pratap
              </p>
            </div>
            <div className=' md:opacity-0 md:group-hover:opacity-100 transition-all social-media flex justify-center items-center gap-2 p-2 rounded-lg bg-white absolute right-2 top-2'>
              <Link href=''>
                <FaInstagram className='w-[32px] h-[32px] text-[#E1306C]' />
              </Link>
              <Link href='https://www.linkedin.com/in/madhurendra-pratap-62118a205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                <FaLinkedin className='w-[32px] h-[32px] text-[#0077B5]' />
              </Link>
              <Link href='' className='hidden'>
                <FaFacebookSquare className='w-[32px] h-[32px] text-[#1877F2] ' />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className='flex flex-col md:grid grid-cols-3 gap-8'>
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.44, 0, 0.56, 1],
            }}
            className='group relative rounded-lg overflow-hidden'
          >
            <Image
              src={CoFounder}
              alt='team'
              className='group-hover:scale-105 transition-all h-full object-cover'
            />
            <div className='absolute  bg-white rounded-2xl bottom-2 left-2 p-3'>
              <h3 className='text-primary text-xs md:text-sm lg:text-base font-urbanist'>
                Co-Founder
              </h3>
              <p className='font-lexend text-sm md:text-base lg:text-lg font-semibold'>
                Ritobaan Roy
              </p>
            </div>
            <div className=' md:opacity-0 md:group-hover:opacity-100 transition-all social-media flex justify-center items-center gap-2 p-2 rounded-lg bg-white absolute right-2 top-2'>
              <Link href=''>
                <FaInstagram className='w-[32px] h-[32px] text-[#E1306C]' />
              </Link>
              <Link href='https://www.linkedin.com/in/ritobaanroy5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                <FaLinkedin className='w-[32px] h-[32px] text-[#0077B5]' />
              </Link>
              <Link href='' className='hidden'>
                <FaFacebookSquare className='w-[32px] h-[32px] text-[#1877F2]' />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.44, 0, 0.56, 1],
            }}
            className='group relative rounded-lg overflow-hidden'
          >
            <Image
              src={uiux}
              alt='team'
              className='hover:scale-105 transition-all h-full object-cover'
            />
            <div className='absolute  bg-white rounded-2xl bottom-2 left-2 p-3'>
              <h3 className='text-primary text-xs md:text-sm lg:text-base font-urbanist'>
                UI/UX Designer & Developer
              </h3>
              <p className='font-lexend text-sm md:text-base lg:text-lg font-semibold'>
                Praveen Kumar Verma
              </p>
            </div>
            <div className=' md:opacity-0 md:group-hover:opacity-100 transition-all social-media flex justify-center items-center gap-2 p-2 rounded-lg bg-white absolute right-2 top-2'>
              {/* <Link href=''>
                <FaInstagram className='w-[32px] h-[32px] text-[#E1306C]' />
              </Link> */}
              <Link href='https://www.linkedin.com/in/praveen-kumar-verma-1ba553206'>
                <FaLinkedin className='w-[32px] h-[32px] text-[#0077B5]' />
              </Link>
              {/* <Link href='' className='hidden'>
                <FaFacebookSquare className='w-[32px] h-[32px] text-[#1877F2]' />
              </Link> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.44, 0, 0.56, 1],
            }}
            className='group relative rounded-lg overflow-hidden'
          >
            <Image
              src={smm}
              alt='team'
              className='hover:scale-105 transition-all h-full object-cover'
            />
            <div className='absolute  bg-white rounded-2xl bottom-2 left-2 p-3'>
              <h3 className='text-primary text-xs md:text-sm lg:text-base font-urbanist'>
                Social Media Manager
              </h3>
              <p className='font-lexend text-sm md:text-base lg:text-lg font-semibold'>
                Pranav Raj Shrivastav
              </p>
            </div>
            <div className=' md:opacity-0 md:group-hover:opacity-100 transition-all social-media flex justify-center items-center gap-2 p-2 rounded-lg bg-white absolute right-2 top-2'>
              <Link href=''>
                <FaInstagram className='w-[32px] h-[32px] text-[#E1306C]' />
              </Link>
              <Link href='https://www.linkedin.com/in/pranav-raj-srivastav-891633240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                <FaLinkedin className='w-[32px] h-[32px] text-[#0077B5]' />
              </Link>
              <Link href='' className='hidden'>
                <FaFacebookSquare className='w-[32px] h-[32px] text-[#1877F2]' />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <ReviewScroll />
      <ContactFormCard />
    </main>
  );
};

export default AboutUs;
