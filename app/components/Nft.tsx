import Image from 'next/image'
import React from 'react'

const Nft = () => {
  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center pb-[100px] mt-10 border-2 border-red-500' id="Nfts">
      <Image 
        src="/NFT_SECTION.svg"
        alt="nft"
        height={900}
        width={900}
      />
    </section>
  )
}

export default Nft