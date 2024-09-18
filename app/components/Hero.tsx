import { NAV_LINKS2 } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Parallax from './Parallax'

const Hero = () => {
  return (
<section className='lg:w-screen overflow-hidden bg-bg-img-2 bg-no-repeat bg-bottom bg-cover 4xl:bg-custom-bottom 4xl:h-[1200px] 4xl:w-full '>
  <div className='max-w-[1440px] mx-auto px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row h-[1250px] '>
    <div className='flex flex-col items-center w-full'>
      <Image 
        src="/krakenlogo.svg" alt="logo" width={197} height={224} className='mt-10 lg:hidden flex'
      />
      <Parallax />  
      <div className='mt-10 flex flex-wrap'>
        <ul className='flex flex-wrap gap-1 items-center justify-center'>
          {NAV_LINKS2.map((link) => (
            <li key={link.key} className='lg:text-[24px] text-[18px] text-[#DFFAFF] font-medium flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-white'>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>       
      </div>
      <div className='btn-border mt-5 lg:mt-10'>
        <button className="btn btn-gradient btn-shadow lg:text-[24px]">
          Let's Connect
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero