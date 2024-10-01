import React from 'react'
import Image from 'next/image'
import StickerCarousel from "../components/StickerCarousel";
import Emblacarousel from "../components/StickerSlider"

const page = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px]'>
        <div className=''>
            <h1 className='font-black lg:text-[100px] kraken-gradient text-[70px] '>MEMES</h1>
        </div>
        <Emblacarousel />
        <StickerCarousel />
    </section>

  )
}
  
export default page