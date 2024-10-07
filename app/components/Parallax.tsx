import Image from 'next/image'
import React from 'react'

const Parallax = () => {
  return (
    <div className='lg:flex lg:flex-col xl:flex-row items-center justify-center hidden'>
        <h1 className='font-black text-[220px] xl:text-[275px] kraken-gradient lg:mt-[-7%] lg:mb-[-5%]'>KRAKEN</h1>
      <div className='absolute'>
        <Image 
          src="/jellyleft.svg" alt="logo" width={197} height={224}
          className='top-0 ml-[-300%] mt-[80%]'
        />
      </div>
      <div className='absolute'>
        <Image 
          src="/jellyright.svg" alt="logo" width={197} height={224}
          className='top-0 ml-[300%] mt-[80%]'
        />
      </div>
    </div>
    
  )
}

export default Parallax