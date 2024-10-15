"use client"; // This makes the component a client component
import { BUBBLES_NFT, PEOPLE_URL } from '@/constants'
import Image from 'next/image'
import React from 'react'
import {motion, Variants} from 'framer-motion'
import Link from 'next/link';


// Function to create randomized bubble animation variants
const createRandomBubbleVariants = () => {
  const duration = Math.random() * 3 + 1; // Random duration between 1 and 4 seconds
  const offset = Math.random() * 10 + 5; // Random offset between 5 and 25 pixels

  return {
    initial: { y: offset },
    animate: {
      y: [offset, -offset],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      } as const, // Adding 'as const' ensures TypeScript treats this as a literal type
    },
  };
}

// Define the function with explicit types
const createIconVariants = (duration: number, offset: number): Variants => ({
  initial: { y: offset },
  animate: {
    y: [offset, -offset],
    transition: {
      duration: duration,
      ease: "linear" as const, // Type assertion to specify the exact type
      repeat: Infinity,
      repeatType: "reverse" as const, // Type assertion to specify the exact type
    },
  },
});

// You can define your duration and offset here
const duration: number = 1; // Change this to your desired duration
const offset: number = 5; // Change this to your desired offset

const Nft = () => {
  const variants = createIconVariants(duration, offset);

  return (
    <section className='relative max-container padding-container flexCenter flex-col items-center justify-center lg:mt-[5%] mt-[30%]' id="Nfts">
      <motion.div 
        whileInView={{ opacity: 1 , x:0 }}
        initial={{opacity: 0 , x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      className='flex flex-col items-center justify-center gap-12'>
          <Image 
          src="/nftMint.svg"
          alt="NFT"
          width={1387}
          height={1387}
          className='z-10'
          />
          <div className='absolute z-0'>
            <Image 
                src="/nftBoat.png"
                alt="NFT_Background"
                width={240}
                height={240}
                className='h-[150px] w-[150px] lg:h-[240px] lg:w-[240px] mt-[-210%] ml-[-70%]'
            />
          </div>
          <div className='absolute'>
            <Image 
            src="/nftVector.png"
            alt="NFT_Background"
            width={1900}
            height={1900}
            />
          </div>
          <div className='hidden lg:absolute lg:block z-30'>
            <Image 
            src="/nftBg2.svg"
            alt="NFT_Background"
            width={1304}
            height={1458}
            className='h-[2700px] w-[2740px] mt-[-5%] ml-[3%]'
            />
          </div>
          <div className='lg:hidden absolute z-30'>
            <Image 
            src="/nftMobile.png" alt="bubbles" width={1440} height={1440}
            className='mt-[-75%] ml-[5%]'
              />
          </div>
        <h1 className='font-black text-[145px] text-center lg:text-[384px] web-gradient w-full lg:w-auto z-20 mt-[-50%]'>NFTs</h1>
        <div className="absolute w-[50%] h-[50%]  lg:w-[30%] lg:h-[20%] left-[calc(60%+10px)] top-[calc(50%+50px)] white__gradient z-[-2]"/>
      </motion.div>
      <div className=' items-center justify-center  lg:mt-[5%] lg:items-center lg:text-center'>
          <motion.div 
            whileInView={{ opacity: 1, x:0 }}
            initial={{opacity: 0 , x: -100}}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          className='flex items-start justify-start lg:justify-start lg:items-start'>
            <p className='font-normal text-[16px] lg:text-[24px] text-white text-center leading-8 lg:leading-[50px] px-4 lg:text-center '>
            We believe that NFT creation is more than just about the art. It's also about creating a unique and <br className='hidden lg:block'/> engaging experience for your collectors. We're here to help you create an NFT collection that <br className='hidden lg:block'/> stands out from the crowd and delivers a truly unforgettable experience for your community and <br className='hidden lg:block'/> holders.
            </p>
          </motion.div>
        </div>
      <div className=' mt-10'>
          {/* Left Side: Grid of images */}
          <motion.div 
                      whileInView={{ opacity: 1, x:0 }}
                      initial={{opacity: 0 , x: -100}}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
          className='flex flex-row'>
    {BUBBLES_NFT.map((url, index) => {
      const bubbleVariants = createRandomBubbleVariants(); // Create random variants for each bubble

      return (
        <motion.div 
          className='' 
          key={index} 
          variants={bubbleVariants}
          initial="initial"
          animate="animate"
        >
          <Image 
            className='rounded-full lg:h-[218px] lg:w-[218px]'
            src={url}
            alt="bubbles"
            width={215}
            height={226}
          />
          <Image
            src="/bubbleWrap.png"
            alt="bubblewrap"
            width={200}
            height={210}
            className='mt-[-101%] lg:mt-[-95%] ml-[1%] lg:ml-[5%]'
          />
        </motion.div>
      );
    })}
  </motion.div>
            <motion.div 
                                  initial="initial"
                                  animate="animate"
                                  variants={variants}            
            className='flex flex-1 items-center lg:justify-center justify-center mt-[10%] lg:mt-[5%] mb-2'>
            <Link href='/NFT' className='z-50'>
            <button 
            className='text-end flex justify-end items-end btn-white btn-shadow'>
              <p className='text-end flex justify-end items-end'>Sea more Samples</p>
            </button>
            </Link>
          </motion.div>
        </div>
    </section>
  )
}

export default Nft