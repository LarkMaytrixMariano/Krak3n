"use client";

import React from 'react'
import Image from 'next/image'
import NftCarousel from "../components/NftCarousel";
import NftSlider from "../components/NftSlider";
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
            <h1 className='font-black kraken-gradient text-[70px] lg:hidden block'>NFTs</h1>
            <h1 className='font-black text-[100px] kraken-gradient lg:block hidden'>NFT PROJECTS</h1>

        </motion.div>
        <NftSlider />
        <NftCarousel />
    </section>

  )
}

export default page