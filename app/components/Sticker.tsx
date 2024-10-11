"use client"; // This makes the component a client component
import { PEOPLE_URL } from '@/constants'
import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link';


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
const offset: number = 5; // Change this to your desired offset
const Sticker = () => {

  const variants = createIconVariants(duration, offset);

  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px] lg:pt-[400px] pt-[150px] ' id="Stickers">
      <div className='relative flex flex-col items-center justify-center lg:items-start lg:justify-start gap-12'>
        <div className='lg:hidden z-30 absolute pointer-events-none'>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/stickerBg.svg" alt="bubbles" width={1440} height={1440}
              className='mb-[125%] ml-[15%] mt-[-20%]'
            />
          </motion.div>
        </div>
        <div className="absolute z-[-1] w-[20%] h-[30%] left-[calc(70%+10px)] top-[calc(50%+50px)] white__gradient" />
        <div className='lg:absolute z-30 hidden lg:block pointer-events-none '>
          <Image
            src="/stickerBg2.svg" alt="bubbles" width={1440} height={1440}
            className='mt-[2%] ml-[5%]'
          />
        </div>
        <motion.h2 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1.5 }}
        className='font-black text-[90px] text-center lg:text-[360px] web-gradient w-full lg:w-auto'>MEMES</motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className='flex flex-col-reverse mt-[-20%] lg:flex lg:flex-col lg:mt-0'
        >
          <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          className='flex items-center lg:justify-start justify-center z-50  lg:mt-[-10%] mt-[5%] ml-4'>
          <Link href='/Stickers' className='z-1000'>
            <button className='text-start flex justify-start items-start btn-white btn-shadow z-50'>
              <p className='text-end flex justify-end items-end'>Sea more Samples</p>
            </button>
          </Link>
        </motion.div>
            <motion.div 
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1.5 }}
          className='items-center justify-center  lg:pt-[0.5%] lg:items-start lg:text-start'>
            <div
              className='flex items-start justify-start lg:justify-start lg:items-start'>
              <p className='font-normal text-[16px] lg:text-[24px] text-white text-center leading-8 lg:leading-[50px] px-4 lg:text-start lg:w-[50%] w-[100%] mt-10'>
                We design unique stickers that reflect your unique taste. Our stickers are fun, engaging, and humorous— they're sure to spark conversation and lighten the mood. We believe that stickers have the power to bring people together, and we're here to help you create a sticker collection that perfectly captures the spirit of your community.
              </p>
            </div>
            </motion.div>
          <div className='grid grid-cols-2'>
            {/* Left Side: Grid of images */}
            <div className='grid grid-cols-2 lg:flex lg:flex-nowrap lg:mt-[5%]  mt-[15%]'>
              {PEOPLE_URL.map((url) => (
                <Image
                  className='rounded-full lg:h-[218px] lg:w-[218px]'
                  src={url}
                  key={url}
                  alt="people"
                  width={94}
                  height={94}
                />
              ))}
            </div>
            {/* Right Side: Leader sticker */}
            <div className='absolute top-[calc(-10%+10px)] lg:top-[calc(-50%+40px)] left-[calc(30%+10px)] lg:left-[calc(50%+10px)]'>
              <Image
                src="/stickerleader.svg"
                alt="mainsticker"
                height={333}
                width={333}
                className='lg:h-[856px] lg:w-[856px]'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sticker