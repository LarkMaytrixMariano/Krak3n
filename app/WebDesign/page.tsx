import React from 'react'
import Image from 'next/image'
import Footer from "../components/Footer";

const page = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px]'>
        <div className=''>
            <h1 className='font-black lg:text-[100px] kraken-gradient text-[80px] lg:inline'>WEB </h1>
            <h1 className='font-black text-white lg:text-[100px] lg:kraken-gradient text-[70px] lg:inline lg:mt-1 mt-[-23%]'>DESIGNS</h1>
        </div>
        <div className="lg:flex lg:flex-row bg-[#EEF4F4] bg-opacity-15 rounded-xl px-10 py-[9%] lg:py-[7%] my-5 text-sm shadow-xl lg:w-[1000px] w-[420px]">
           <Image 
            src="LAPTOP1.svg"
            alt="laptop"
            height={308}
            width={514}
           />
           <div className='ml-2 mt-9'>
            <div className='lg:items-end lg:justify-end lg:text-end text-center items-center justify-center lg:mt-[5%] lg:w-[300px] leading-6'>
              <p className='text-[#DFFAFF] font-bold text-[24px] mt-5 lg:text-[#043F48]'>ClubMonteCarlo</p>
              <p className='text-[#DFFAFF] font-normal text-[15px] mt-5 lg:text-[#043F48]'>A web3 NFT/Casino<br/>gaming platform project, launched<br/>on SOL and ETH network.</p>
            </div>
            <div className='flex lg:justify-end justify-center'>
                  <button className="w-[180px] rounded-lg bg-[#043F48] bg-opacity-90 text-[#DFFAFF] py-3 mt-8 font-medium leading-3 text-[14px]">Sea on Figma</button>
              </div>
            </div>
        </div>
    </section>

  )
}

export default page