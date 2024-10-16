"use client"; // This makes the component a client component
import { NAV_LINKS2 } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Parallax from './Parallax'
import {motion, Variants} from 'framer-motion'

// Define the function with explicit types
const createIconVariants = (duration: number, offset: number): Variants => ({
  initial: { y: offset },
  animate: {
    y: [offset, -offset],
    transition: {
      duration: duration,
      ease: "linear" as const, // Type assertion to specify the exact type
      repeat: Infinity,
      repeatType: "reverse" as const, // Type assertion to specify the exact type
    },
  },
});

// You can define your duration and offset here
const duration: number = 1; // Change this to your desired duration
const offset: number = 10; // Change this to your desired offset

const Hero = () => {
  const variants = createIconVariants(duration, offset);
  const positions = [1, 20 , 37,  60, 85];

  return (
<section className='lg:w-screen overflow-hidden'>
  <div className='max-w-[1440px] mx-auto px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row lg:h-[1250px] 4xl:h-[600px]  '>
    <div className='flex flex-col items-center w-full '>
      <motion.div
              whileInView={{ opacity: 1, y:0 }}
              initial={{opacity: 0 , y: -100}}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
      >
      <Image 
        src="/krakenlogo.svg" alt="logo" width={197} height={224} className='mt-10 lg:hidden flex'
      />
      </motion.div>
      <Parallax />  
      <motion.div 
              whileInView={{ opacity: 1 , x:0 }}
              initial={{opacity: 0 , x: -100 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}

      className='mt-10 flex flex-wrap'>
        <ul className='flex flex-wrap gap-1 items-center justify-center'>
          {NAV_LINKS2.map((link) => (
            <li key={link.key} className='lg:text-[32px] text-[16px] text-[#DFFAFF] font-normal flexCenter pb-1.5 transition-all font-poppins'>
              <p>{link.label}</p>
            </li>
          ))}
        </ul>       
      </motion.div>
      <motion.div
              initial="initial"
              animate="animate"
              variants={variants}   
      >
      <div    
      className='mt-7 rounded-[8px] border-gradient h-[42px] w-[168px] text-center justify-center flex button__gradient '>
        <Link href="/Contact" passHref>
        <button className='font-inter font-semibold text-[16px] text-herocolor mt-2'>Let's Connect</button>
        </Link>
      </div>
      <div className='mt-20 rotate-90'>
        <p className='text-[24px] font-poppins font-medium text-herocolor'>{" >> "}</p>    
      </div>   
    </motion.div>
    </div>
  </div>
</section>
  )
}

export default Hero