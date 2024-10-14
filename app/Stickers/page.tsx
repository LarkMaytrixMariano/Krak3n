"use client";

import React from 'react'
import Image from 'next/image'
import StickerCarousel from "../components/StickerCarousel";
import Emblacarousel from "../components/StickerSlider"
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
            <h1 className='font-black lg:text-[100px] kraken-gradient text-[70px] '>MEMES</h1>
        </motion.div>
        <Emblacarousel />
        <StickerCarousel />
    </section>

  )
}
  
export default page