"use client"; // Add this line


import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINKS, SOCIALS } from '@/constants'
import { usePathname} from 'next/navigation';

const Footer = () => {
  const pathname = usePathname(); // Get the current path
  const isContactPage = pathname === '/Contact'; // Adjust this based on your contact page route

  return (
    <footer className='relative overflow-hidden pt-[30%] lg:pt-[17%] z-[30]'>
    <div className='absolute inset-0 md:bg-bg-img-3 max-lg:bg-bg-img-5 bg-cover bg-no-repeat bg-bottom z-[-2] '>
    </div> 
  
    <div className='max-w-[1400px] mx-auto px-[10%] lg:px-[10%]  max-md:m-0 max-md:p-3 mb-[5%] '>
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
      <div className='border sm:border-2 bg-gray-20 mb-10'/>
      <div className='flex items-start justify-center gap-[10%] pb-10'>
        <div className='flex flex-col gap-2 basis-1/2 footernav max-lg:basis-1/3' id='div1'>
          <div className='flex flex-row'>
            <div className="absolute z-[-2] w-[15%] h-[30%] left-[calc(5%+10px)] top-[calc(30%+50px)] white__gradient"/>
            <ul>
              <li className='mb-2 displaynone'>
                <Link href="/">
                  <Image 
                    src="/Kraken_GFX.png"
                    alt='logo'
                    width={230}
                    height={59}
                  />
                </Link>
              </li>
              <li className='pt-2'>
                <span className='text-white mb-[-50px] pt-4 displaynone'>krakengfxweb3@gmail.com</span>
              </li>
              <li className='pt-3 max-sm:pt-0 px-auto '>
                <Link href="/Contact">
                <button className='text-white rounded-xl  w-56 h-10 lg:h-[45px] max-lg:w-44 max-md:w-28 max-md:text-xs contact__gradient'>
                  CONTACT US
                </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute z-[-2] w-[15%] h-[30%] right-[calc(5%+10px)] top-[calc(30%+50px)] white__gradient"/>
          <div className='flex flex-col gap-5 mt-10 md:mt-5 text-white max-lg:text-xs max-md:mt-1'>
          <FooterColumn title={SOCIALS.title}>
            <ul className='flex gap-3 pb-5 max-lg:gap-2 max-sm:pb-0'>
              {SOCIALS.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Image 
                      src={link.icon}
                      alt={link.alt}
                      width={25}
                      height={25}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
          </div>
        </div>
  
        <div className='flex flex-wrap gap-10 sm:justify-evenly md:flex-1 text-[#DFFAFF] font-inter basis-1/4 mb-5 max-md:gap-6 max-lg:text-xs max-lg:basis-2/3 max-sm:text-[12px]' id='div2'>
          {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
              <ul className='flex flex-col gap-4'>
                {columns.links.map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>
      </div>
    </div>
    <div className='text-center pb-7 max-md:text-xs max-sm:pb-1'>
    <span className='text-[#DFFAFF] '>&#169; 2024 KRAKEN | All rights reserved </span>
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
      <h4 className='bold-18 whitespace-nowrap max-sm:text-[13px]'>{title}</h4>
      {children}
    </div>
  )
}


export default Footer