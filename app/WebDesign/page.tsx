import React from 'react'
import Emblacarousel from "../components/WebDesignSlider"
import WebDesignCarousel from "../components/WebDesignCarousel";

const page = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px]'>
      <div className=''>
        <h1 className='font-black lg:text-[100px] kraken-gradient text-[80px] lg:inline'>WEB </h1>
        <h1 className='font-black text-white lg:text-[100px] lg:kraken-gradient text-[70px] lg:inline lg:mt-1 mt-[-23%]'>DESIGNS</h1>
      </div>
      <Emblacarousel />
      <WebDesignCarousel />
    </section>

  )
}

export default page