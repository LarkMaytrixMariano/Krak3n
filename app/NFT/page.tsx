import React from 'react'
import Image from 'next/image'
import NftCarousel from "../components/NftCarousel";
import NftSlider from "../components/NftSlider";


const page = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px]'>
        <div className=''>
            <h1 className='font-black lg:text-[100px] kraken-gradient text-[70px] '>NFTs</h1>
        </div>
        <NftSlider />
        <NftCarousel />
    </section>

  )
}

export default page