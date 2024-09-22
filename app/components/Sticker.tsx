import { PEOPLE_URL } from '@/constants'
import React from 'react'
import Image from 'next/image'

const Sticker = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px] lg:pt-[400px] pt-[200px]' id="Stickers">
      <div className='relative flex flex-col items-center justify-center lg:items-start lg:justify-start gap-12'>
      <div className='lg:hidden z-30 absolute'>
       <Image 
          src="/stickerBg.svg" alt="bubbles" width={1440} height={1440}
          className='mb-[125%] ml-[15%]'
        />
       </div>
       <div className='lg:absolute z-30 hidden lg:block'>
       <Image 
          src="/stickerBg2.svg" alt="bubbles" width={1440} height={1440}
          className='mt-[-4%] ml-[10%]'
        />
       </div>
        <h2 className='font-black text-[76px] text-center lg:text-[264px] web-gradient w-full lg:w-auto'>STICKERS</h2>
        <div className='grid grid-cols-2'>
          {/* Left Side: Grid of images */}
          <div className='grid grid-cols-2 lg:flex lg:flex-nowrap lg:mt-[37%] mt-[-5%]'>
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
          <div className='absolute top-[calc(3%+10px)] lg:top-[calc(15%+10px)] left-[calc(30%+10px)] lg:left-[calc(50%+10px)]'>
            <Image 
              src="/stickerleader.svg"
              alt="mainsticker"
              height={333}
              width={333}
              className='lg:h-[856px] lg:w-[856px]'
            />
          </div>
        </div>
        <div className='items-center justify-center  lg:pt-[0.5%] lg:items-start lg:text-start'>
          <div className='flex items-start justify-start lg:justify-start lg:items-start'>
            <p className='font-normal text-[16px] text-white text-center leading-8 px-4 lg:text-start lg:w-[50%] w-[100%] lg:mt-[-40%]'>
            We design unique stickers that reflect your unique taste. Our stickers are fun, engaging, and humorous— they're sure to spark conversation and lighten the mood. We believe that stickers have the power to bring people together, and we're here to help you create a sticker collection that perfectly captures the spirit of your community.
            </p>
          </div>
        </div>
      <div className='flex flex-1 items-center lg:justify-end justify-center mt-[-5%]'>
        <button className='text-end flex justify-end items-end btn-white btn-shadow  lg:mt-[-600%] lg:ml-[15px]'>
          <p className='text-end flex justify-end items-end'>Sea more Samples</p>
        </button>
      </div>
      </div>
    </section>
  )
}

export default Sticker