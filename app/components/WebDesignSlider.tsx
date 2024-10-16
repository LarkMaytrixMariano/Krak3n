"use client";
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { WebDesignCard } from '@/constants'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'


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

const EmblaCarousel = () => {
    const variants = createIconVariants(duration, offset);
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla displaynone lg:w-[928px] w-[420px] ">
            <motion.div 
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    initial={{ opacity: 0, x: -100 }}
                                                    transition={{ duration: 1.5 }}
                                                    viewport={{ once: true }}  
            className="embla__viewport shadow-xl slider_background " ref={emblaRef}>
                <div 
                className='embla__container'>
                    {WebDesignCard.map((link, index) => (
                        <div   
                        className="embla__slide lg:flex lg:flex-row rounded-xl  py-[9%] lg:py-[7%] my-5 text-sm lg:w-[1000px] w-[420px]" key={index}>
                            <Image
                                src={link.links}
                                alt="webdesign"
                                height={308}
                                width={514}
                                className='mx-auto'
                            />
                            <div className='ml-2 mx-auto pr-[50px] my-auto py-auto '>
                                <div className='lg:items-end lg:justify-end lg:text-end text-center items-center justify-center lg:mt-[5%] lg:w-[300px] leading-6'>
                                    <p className='text-[#DFFAFF] font-bold text-[24px] mt-5 lg:text-[#043F48]'>
                                        {link.title}
                                    </p>
                                    <p className='text-[#DFFAFF] font-normal text-[15px] mt-5 lg:text-[#043F48]'>
                                        {link.description}
                                    </p>
                                </div>
                                {/* <motion.div 
                                              initial="initial"
                                              animate="animate"
                                              variants={variants}  
                                className='flex lg:justify-end justify-center'>
                                    <button className="w-[180px] rounded-lg bg-[#043F48] bg-opacity-90 text-[#DFFAFF] py-3 mt-8 font-medium leading-3 text-[14px]">Sea on Figma</button>
                                </motion.div> */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                <button className="embla__prev pr-3 mb-5 text-[#DFFAFF] flex" onClick={scrollPrev}>
                    <Image 
                        src={'/Left.svg'}
                        alt="Previous"
                        height={10}
                        width={10}
                        className='mr-2 mt-1.5'
                    /> Prev
                </button>
                <button className="embla__next pl-3 mb-5 text-[#DFFAFF] flex" onClick={scrollNext}>
                    Next
                    <Image 
                        src={'/Right.svg'}
                        alt="Next"
                        height={10}
                        width={10}
                        className='ml-2 mt-1.5'
                    />
                </button>
                </div>
            </motion.div>
        </div>
    )
}

export default EmblaCarousel