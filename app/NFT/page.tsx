import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NFTs } from '@/constants'

const page = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px]'>
        <div className=''>
            <h1 className='font-black text-white lg:text-[100px] lg:kraken-gradient text-[70px] '>NFTs</h1>
        </div>
        <div className="lg:flex lg:flex-row bg-[#EEF4F4] bg-opacity-15 rounded-xl px-10 py-[9%] lg:py-[7%] my-5 text-sm shadow-xl lg:w-[1000px] w-[420px]">
           <Image 
            src="NFT1.svg"
            alt="NFT"
            height={308}
            width={514} 
           />
            <div className='pl-32 mt-9 flex flex-wrap '>
            <NFTsImage>
                <ul className='flex flex-wrap gap-4'>
                  {NFTs.links.map((link) => (
                    <Link
                      href=""
                      key={link}
                    >
                        <Image 
                          src={link}
                          alt="NFTs"
                          width={150}
                          height={150}
                        />
                    </Link>
                  ))}
                </ul>
            </NFTsImage>
            </div>
        </div>
    </section>

  )
}

type NFTsProps = {
    children: React.ReactNode;
  }
  
  const NFTsImage = ({children }: NFTsProps) => {
    return(
      <div className='flex flex-col gap-5'>
        {children}
      </div>
    )
  }
export default page