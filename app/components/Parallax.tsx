"use client"; // This makes the component a client component

import Image from 'next/image'
import React from 'react'
import {motion, Variants} from 'framer-motion'

const Parallax = () => {
  return (
    <div className='lg:flex lg:flex-col xl:flex-row items-center justify-center hidden mb-5'>
        <motion.h1 
                      whileInView={{ opacity: 1, y:0 }}
                      initial={{opacity: 0 , y: -100}}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
        className='font-black text-[220px] xl:text-[275px] kraken-gradient lg:mt-[-7%] lg:mb-[-5%]'>KRAKEN</motion.h1>
      <motion.div 
  whileInView={{ opacity: 1, y: 0 }}  // Final position
  initial={{ opacity: 0, y: 200 }}     // Start off-screen (bottom)
  transition={{ duration: 3.0, ease: 'easeOut' }}  // Smooth movement upwards
  viewport={{ once: true }}
      
      className='absolute'>
        <Image 
          src="/jellyleft.svg" alt="logo" width={197} height={224}
          className='top-0 lg:ml-[-300%] lg:mt-[80%]'
        />
      </motion.div>
      <motion.div 
      whileInView={{ opacity: 1, y: 0 }}  // Final position
      initial={{ opacity: 0, y: 200 }}     // Start off-screen (bottom)
      transition={{ duration: 3.0, ease: 'easeOut' }}  // Smooth movement upwards
      viewport={{ once: true }}
      className='absolute'>
        <Image 
          src="/jellyright.svg" alt="logo" width={197} height={224}
          className='top-0 ml-[300%] mt-[80%]'
        />
      </motion.div>
    </div>
    
  )
}

export default Parallax