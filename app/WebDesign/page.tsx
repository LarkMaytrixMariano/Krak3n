"use client";
import React from 'react'
import Emblacarousel from "../components/WebDesignSlider"
import WebDesignCarousel from "../components/WebDesignCarousel";
import { motion, Variants } from 'framer-motion'



const page = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px]'>
      <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}    
      className=''>
        <h1 className='font-black lg:text-[100px] kraken-gradient text-[80px] lg:inline'>WEB </h1>
        <h1 className='font-black text-white lg:text-[100px] lg:kraken-gradient text-[70px] lg:inline lg:mt-1 mt-[-23%]'>DESIGNS</h1>
      </motion.div>
      <Emblacarousel />
      <WebDesignCarousel />
    </section>

  )
}

export default page