import React from 'react'
import Image from 'next/image'

const WebDesign = () => {
  return (
    <section className='relative padding-container flexCenter flex-col items-center justify-center 4xl:pt-[18%] pt-[15%] lg:pt-[1%]' id="WebDesign" >
      <div className='absolute left-0 right-0 top-0 lg:mt-[-45%] mt-[-35%] 4xl:mt-[-17%]'>
        <img 
          src="/bghero.svg"
          className="bg-cover h-full w-full"
          style={{ width: '100vw', height: 'auto' }} // Ensures full width
        />
       </div>
       <div className='lg:absolute z-30 hidden lg:block'>
       <Image 
          src="/bubblesBg2.svg" alt="bubbles" width={1440} height={1440}
          className='mt-[20%] ml-[5%]'
        />
       </div>
       <div className='lg:hidden z-30 absolute'>
       <Image 
          src="/bubblesMobile.svg" alt="bubbles" width={1440} height={1440}
          className='mt-[-45%] ml-[5%]'
        />
       </div>
    <div className='items-center justify-center'>
      <div className=' relative flex flex-col items-center justify-center lg:items-end lg:justify-end gap-12'>
      <h2 className='font-black text-[145px] text-center lg:text-[384px] web-gradient w-full lg:w-auto'>WEB</h2>
      <p className='absolute left-1/2 transform -translate-x-1/2 font-black text-[62px] text-center z-10 text-white lg:text-[152px] w-full lg:w-auto lg:left-auto lg:right-0 lg:transform-none lg:text-right lg:top-[calc(47%+50px)] top-[calc(35%+50px)]'>
        DESIGNS
      </p>
      <Image 
      src="/laptop_1.png"
      alt="laptop"
      width={390}
      height={418}
      className='absolute z-20 top-[calc(58%+50px)] lg:top-[calc(40%+80px)] lg:left-[calc(13%+10px)] lg:w-[600px] lg:h-[500px] lg:rotate-[20deg]' 
      />
      </div>
        <div className='items-center justify-center pt-[70%] lg:pt-[0.5%]'>
          <div className='flex items-center justify-center lg:justify-end lg:items-end'>
            <p className='font-normal text-[16px] lg:text-[24px] text-white text-center leading-8 px-4 lg:text-end lg:w-[50%] w-[100%] pt-15'>
              We don’t just design, we craft digital
              experiences that are interactive, and visually 
              stunning. Your website is your digital 
              storefront, and first impressions matter. We'll 
              help you make a splash with a website that's
              as unique as your brand.
            </p>
          </div>
        </div>
      <div className='flex flex-1 items-center lg:justify-end mt-4 justify-center m-4'>
        <button className='text-end flex justify-end items-end btn-white btn-shadow '>
          <p className='text-end flex justify-end items-end'>Sea more Samples</p>
        </button>
      </div>
    </div>
   </section>
  )
}

export default WebDesign