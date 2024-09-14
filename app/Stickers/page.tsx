import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { STICKERS } from '@/constants'

const page = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px]'>
        <div className=''>
            <h1 className='font-black text-white lg:text-[100px] lg:kraken-gradient text-[70px] '>STICKERS</h1>
        </div>
        <div className="lg:flex lg:flex-row bg-[#EEF4F4] bg-opacity-15 rounded-xl px-10 py-[9%] lg:py-[7%] my-5 text-sm shadow-xl lg:w-[1000px] w-[420px]">
           <Image 
            src="sticker14.svg"
            alt="Sticker"
            height={308}
            width={514}
           />
            <div className='ml-2 mt-9 flex flex-wrap'>
            <StickersImage>
                <ul className='flex flex-wrap gap-4'>
                  {STICKERS.links.map((link) => (
                    <Link
                      href=""
                      key={link}
                    >
                        <Image 
                          src={link}
                          alt="stickers"
                          width={150}
                          height={150}
                        />
                    </Link>
                  ))}
                </ul>
            </StickersImage>
            </div>
        </div>
    </section>

  )
}

type StickersProps = {
    children: React.ReactNode;
  }
  
  const StickersImage = ({children }: StickersProps) => {
    return(
      <div className='flex flex-col gap-5'>
        {children}
      </div>
    )
  }
export default page