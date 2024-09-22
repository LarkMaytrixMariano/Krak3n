import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden  pt-[32%]'>
    <div className='absolute inset-0 lg:bg-bg-img-3 max-lg:bg-bg-img-5 bg-cover bg-no-repeat bg-bottom z-[-1] '>
    </div> 
  
    <div className='max-w-[1440px] mx-auto px-[10%]'>
      <div className='pb-5 krakendisplay'>
        <Link href="/">
          <Image 
          src="/Kraken_GFX.png"
          alt='logo'
          width={230}
          height={59}
          />
        </Link>
      </div>
      <div className='border bg-gray-20 mb-10'/>
      <div className='flex flex-row items-start justify-center gap-[10%] pb-10'>
        <div className='flex flex-col gap-2 basis-1/2 footernav max-sm:basis-1/4' id='div1'>
          <div className='flex flex-row'>
            <ul>
              <li className='mb-5 displaynone'>
                <Link href="/">
                  <Image 
                    src="/kraken GFX.png"
                    alt='logo'
                    width={230}
                    height={59}
                  />
                </Link>
              </li>
              <li className='pt-2'>
                <span className='text-white mb-[-50px] pt-4 displaynone'>krakengfxweb3@gmail.com</span>
              </li>
              <li className='pt-2'>
                <button className='text-white border rounded-lg border-white border-solid w-48 h-10 max-sm:w-28 max-sm:text-xs'>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-5 mt-10 md:mt-5 text-white max-sm:text-xs max-sm:mt-0'>
            <FooterColumn title={SOCIALS.title}>
              <ul className='flex gap-4 pb-5 max-sm:gap-2'>
                {SOCIALS.links.map((link) => (
                  <li key={link}>
                    <Link href="/">
                      <Image 
                        src={link}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
  
        <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 text-white basis-1/4 mb-5 max-sm:gap-6 max-sm:text-xs max-sm:basis-3/4' id='div2'>
          {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
              <ul className='flex flex-col gap-4'>
                {columns.links.map((link) => (
                  <li key={link}>
                    <Link href="/">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>
      </div>
      <div className='text-center pb-7 max-sm:text-xs'>
        <span className='text-white '>&#169; 2024 KRAKEN | All rights reserved </span>
      </div>
    </div>
  </footer>  
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap max-sm:bold-16'>{title}</h4>
      {children}
    </div>
  )
}


export default Footer