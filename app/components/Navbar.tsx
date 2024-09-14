import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5 '>
      <Link href="/">
        <h1 className='font-black text-[36px] text-green-50 lg:hidden'>KRAKEN</h1>
        <Image className='hidden lg:flex mt-5' src="/krakenlogo.svg" alt="logo" width={76} height={92}/>
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
    {NAV_LINKS.map((link) => (
      <li key={link.key}>
        <a 
          href={link.href}
          className='text-[18px] font-medium flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
        >
          {link.label}
        </a>
      </li>
        ))}
      </ul>
      <div className='mr-2 lg:hidden'>
        <Image 
          src="/menu.svg"
          alt="menu"
          width={36}
          height={25.71}
        />
      </div>
    </nav>
  )
}

export default Navbar