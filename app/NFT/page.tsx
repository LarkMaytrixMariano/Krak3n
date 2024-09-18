import React from 'react'
import Image from 'next/image'
import { NFTs } from '@/constants'
import NftCarousel from "../components/NftCarousel";


const page = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px]'>
        <div className=''>
            <h1 className='font-black lg:text-[100px] kraken-gradient text-[70px] '>NFTs</h1>
        </div>
        <div className="lg:flex lg:flex-row bg-[#EEF4F4] bg-opacity-15 rounded-xl px-10 py-[9%] lg:py-[7%] my-5 text-sm shadow-xl lg:w-[1000px] w-[420px] items-center justify-center displaynone">
          <div className='ml-10 flex'>
           <Image 
            src="NFT1.svg"
            alt="NFT"
            height={308}
            width={514} 
           />
           </div>
           <div className='ml-10 px-auto flex flex-wrap gap-10 items-center justify-center w-3/4'>
              {NFTs.links.map((link, index) => (
                  <div key={index} className='px-auto flex flex-wrap gap-5 items-center justify-center'>
                  <Image 
                  src={link}  
                  alt="NFTs"
                  width={160}
                  height={160}
                  />
                  </div>
                  ))}
            </div>
        </div>
        <NftCarousel />
    </section>

  )
}

export default page