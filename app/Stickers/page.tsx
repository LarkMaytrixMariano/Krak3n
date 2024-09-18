import React from 'react'
import Image from 'next/image'
import { STICKERS } from '@/constants'
import StickerCarousel from "../components/StickerCarousel";

const page = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px]'>
        <div className=''>
            <h1 className='font-black lg:text-[100px] kraken-gradient text-[70px] '>STICKERS</h1>
        </div>
        <div className="lg:flex lg:flex-row bg-[#EEF4F4] bg-opacity-15 rounded-xl px-10 py-[9%] lg:py-[7%] my-5 text-sm shadow-xl lg:w-[1000px] w-[420px] displaynone">
          <div className='mx-auto flex'>
            <Image 
              src="bigSticker.svg"
              alt="Sticker"
              height={308}
              width={514}
            />
          </div>  
          <div className='px-auto mt-5 flex flex-wrap gap-10 items-center justify-center'>
            {STICKERS.links.map((link, index) => (
              <div key={index} className='px-auto mt-5 flex flex-wrap gap-5 items-center justify-center'>
              <Image 
              src={link}
              alt="stickers"
              width={150}
              height={150}
             />
             </div>
             ))}
          </div>
        </div>
        <StickerCarousel />
    </section>

  )
}
  
export default page