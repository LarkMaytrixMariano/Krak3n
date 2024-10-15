"use client"; // This makes the component a client component
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
const WebDesign = () => {
  const variants = createIconVariants(duration, offset);


  return (
    <section className='relative lg:px-20 flexCenter flex-col items-center justify-center 4xl:pt-[18%] pt-[15%] lg:pt-[1%]' id="WebDesign" >
      <div className='z-[0] absolute left-0 right-0 top-0 lg:mt-[-40%] mt-[-30%] md:mt-[-25%] 4xl:mt-[-20%]  pointer-events-none'>
        <img
          src="/bghero.svg"
          className="bg-cover h-full w-full pointer-events-none"
          style={{ width: '100vw', height: 'auto' }} // Ensures full width
        />
      </div>
      <div className='lg:absolute z-30 hidden lg:block pointer-events-none'>
        <Image
          src="/bubblesBg2.svg" alt="bubbles" width={1440} height={1440}
          className='mt-[20%] ml-[5%]'
        />
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='lg:hidden z-30 absolute'>
        <Image
          src="/bubblesMobile.svg" alt="bubbles" width={1440} height={1440}
          className='mt-[-45%] ml-[5%]'
        />
      </motion.div>
      <div className='items-center justify-center max-container'>
        <div className=' relative flex flex-col items-center justify-center lg:items-end lg:justify-end gap-12 mt-10'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2 className='font-black text-[120px] text-center lg:text-[384px] web-gradient w-full lg:w-auto'>WEB</h2>
            <p className='absolute left-1/2 transform -translate-x-1/2 font-black text-[57px] text-center z-10 text-white lg:text-[152px] w-full lg:w-auto lg:left-auto lg:right-0 lg:transform-none lg:text-right lg:top-[calc(47%+50px)] top-[calc(25%+50px)]'>
              DESIGNS
            </p>
            <Image
              src="/laptop_1.png"
              alt="laptop"
              width={390}
              height={418}
              className='absolute z-20 top-[calc(47%+50px)] left-[calc(4%+10px)] lg:top-[calc(40%+80px)] lg:left-[calc(-30%+10px)] lg:w-[600px] lg:h-[500px] lg:rotate-[20deg]'
            />
          </motion.div>

          <div className="z-[-1] w-[35%] h-[30%] left-[calc(15%+10px)] top-[calc(58%+50px)] white__gradient lg:absolute" />
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className='items-center justify-center pt-[40%] lg:pt-[0.5%]'>
          <div className='flex items-center justify-center lg:justify-end lg:items-end'>
            <p className='font-normal text-[16px] lg:text-[24px] text-white text-center leading-8 lg:leading-[50px] px-4 lg:text-end lg:w-[50%] w-[100%] pt-[20px]'>
              We don’t just design, we craft digital
              experiences that are interactive, and visually
              stunning. Your website is your digital
              storefront, and first impressions matter. We'll
              help you make a splash with a website that's
              as unique as your brand.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          className='flex flex-1 items-center lg:justify-end mt-[25px] justify-center m-4'>
          <Link href='/WebDesign' className='z-50'>
            <button className='text-end flex justify-end items-end btn-white btn-shadow'>
              <p className='text-end flex justify-end items-end '>Sea more Samples</p>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WebDesign