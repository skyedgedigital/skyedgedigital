'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import ShapeU from '@/assets/clients-logo/ShapeU.png';
import ThePihu from '@/assets/clients-logo/ThePihu.png';
import SunshineWellness from '@/assets/clients-logo/Sunshine.png';
import DMTransport from '@/assets/clients-logo/DMTransport.jpeg';
import MindmapAssociates from '@/assets/clients-logo/MindmapAssociates.jpeg';
import YatraMitra from '@/assets/clients-logo/YatraMitra.jpeg';
import EM from '@/assets/clients-logo/EM.jpg';
import Sportistry from '@/assets/clients-logo/SportIstry.jpg';
import Image from 'next/image';
import ContactFormCard from '@/components/UI/ContactFormCard/ContactFormCard';

const Projects = [
  {
    id: '1',
    name: 'Shape U',
    description:
      'It is a one stop solution for a persons Fitness & Nutrition. It provides, personalized workout, diet plan, meal and water reminders,along with BMI, BMR, calories tracker and many more built in features.',
    logo: ShapeU, // You'll need to add actual logo files
    thumbnail: ShapeU,
  },
  {
    id: '2',
    name: 'The Pihu',
    description:
      'Pihu is a one of a kind hotel management website which projects the resort in an attractive yet professional way which can drive traffic to their website as well as direct new customers to them.',
    logo: ThePihu,
    thumbnail: ThePihu,
  },
  {
    id: '3',
    name: 'Sunshine Wellness',
    description:
      'An App for every individual who might suffer from any amount of stress, anxiety or any other mental diseases, Sunshine Wellness app and website provides professional counselling servies in an affordable price which would heal a person in distress and save alot of individuals suffering out there.',
    logo: SunshineWellness,
    thumbnail: SunshineWellness,
  },
  {
    id: '4',
    name: 'Mindmap Associates',
    description:
      'Mindmap is a platform that provides the right tool kit to every student. It empowers them with credible info about their career spectrum',
    logo: MindmapAssociates,
    thumbnail: MindmapAssociates,
  },
  {
    id: '5',
    name: 'Yatra Mitra',
    description: `A website where you can Experience the best of Goa with curated tours tailored for your perfect getaway. Whether you're looking for a romantic honeymoon or an exciting weekend trip, we've got you covered.`,
    logo: YatraMitra,
    thumbnail: YatraMitra,
  },

  {
    id: '6',
    name: 'DM Transport',
    description:
      'DM transport is an app which helps admin to manage all the fleet and truck drivers with management, timings, doc. scanning features',
    logo: DMTransport,
    thumbnail: DMTransport,
  },
  {
    id: '7',
    name: 'Enterprise Management',
    description:
      'It is a Project which provides an end-to-end management to the admin to manage, track, bill and view everything that is moving around within their company along with employees, fleet, billing and safety & inventory records.',
    logo: EM,
    thumbnail: EM,
  },
  {
    id: '8',
    name: 'Sportistry',
    description:
      'A website providing best in quality Sports wear and equipments, at a reasonable price.',
    logo: Sportistry,
    thumbnail: Sportistry,
  },
];

const Works = () => {
  return (
    <main className='bg-[#141414] w-full h-full min-h-screen  flex flex-col gap-8 md:gap-12 lg:gap-16'>
      <section className='hero-texts text-white flex flex-col gap-4 md:gap-6 lg:gap-8 p-4 md:p-12 lg:p-16'>
        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          className='text-3xl md:text-5xl lg:text-7xl font-urbanist font-semibold flex gap-4'
        >
          Delivering Success to Businesses
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
          see how we've transformed ideas into digital success stories. Explore
          our portfolio of websites, apps, and strategies designed to help
          businesses thrive.
        </motion.p>
      </section>
      <section className='projects w-full h-fit flex flex-col gap-4 md:gap-6 lg:gap-8 px-4 md:px-12 lg:px-16'>
        <motion.h2
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.44, 0, 0.56, 1],
            delay: 0.3,
          }}
          className='text-xl sm:text-2xl lg:text-3xl font-urbanist pb-2 border-b-primary border-b-[1px] w-fit text-white'
        >
          Our Projects
        </motion.h2>
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.44, 0, 0.56, 1],
            delay: 0.4,
          }}
          className='w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'
        >
          {Projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>
      <ContactFormCard />
    </main>
  );
};

interface Project {
  id: string;
  name: string;
  description: string;
  logo: any;
  thumbnail: any;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.44, 0, 0.56, 1],
      }}
      className='project-card flex flex-col gap-3'
    >
      <div className='w-full aspect-square relative overflow-hidden rounded-xl'>
        <Image
          className='object-cover hover:scale-105 transition-all duration-300'
          src={project.logo}
          alt={project.name}
          fill
        />
      </div>
      <h3 className='text-lg md:text-xl lg:text-2xl text-white'>
        {project.name}
      </h3>
      <p className='text-[#b8b8b8]'>{project.description}</p>
    </motion.div>
  );
};

export default Works;
