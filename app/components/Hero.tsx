import { NAV_LINKS2 } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Parallax from './Parallax'

const Hero = () => {
  return (
<section className='lg:w-screen overflow-hidden'>
  <div className='max-w-[1440px] mx-auto px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row lg:h-[1250px] 4xl:h-[600px]  '>
    <div className='flex flex-col items-center w-full '>
      <Image 
        src="/krakenlogo.svg" alt="logo" width={197} height={224} className='mt-10 lg:hidden flex'
      />
      <Parallax />  
      <div className='mt-10 flex flex-wrap'>
        <ul className='flex flex-wrap gap-1 items-center justify-center'>
          {NAV_LINKS2.map((link) => (
            <li key={link.key} className='lg:text-[32px] text-[18px] text-[#DFFAFF] font-normal flexCenter pb-1.5 transition-all font-poppins'>
              <p>{link.label}</p>
            </li>
          ))}
        </ul>       
      </div>
      <div className='mt-7 rounded-[8px] border-gradient h-[42px] w-[168px] text-center justify-center flex button__gradient '>
        <button className='font-inter font-semibold text-[16px] text-herocolor'>Let's Connect</button>
      </div>
      <div className='mt-10 rotate-90'>
        <p className='text-[24px] font-poppins font-medium text-herocolor'>{" >> "}</p>    
      </div>   
    </div>
  </div>
</section>
  )
}

export default Hero