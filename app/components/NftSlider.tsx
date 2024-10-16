"use client";
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NFTslide } from '@/constants'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}   
        className="embla displaynone lg:w-[1015px] w-[420px]">
            <div className="embla__viewport shadow-xl slider_background" ref={emblaRef}>
                <div className='embla__container'>
                    {NFTslide.map((sticker, index) => (
                        <div className="embla__slide lg:flex lg:flex-row rounded-xl px-10 py-[9%] lg:py-[7%] my-5 text-sm lg:w-[1000px] w-[420px]" key={index}>
                            <div className='ml-24 flex w-1/2'>
                                <Image
                                src={sticker.main}
                                alt="webdesign"
                                height={354}
                                width={354} 
                                loading="eager"  // Ensures images load eagerly
                                priority={true}  // Ensures this image is loaded first
                            />
                            </div>  
                            <div className='ml-10 px-auto flex flex-wrap gap-10 items-center justify-center w-4/6'>
                            {sticker.sub.map((image, index) => (
                                <div key={index} className='px-auto flex flex-wrap gap-5 items-center justify-center'>
                                    <Image
                                        src={image}
                                        alt="stickers"
                                        width={150}
                                        height={150}
                                        loading="eager"  // Ensures images load eagerly
                                    />
                                </div>
                            ))}    
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
                            loading="eager"  // Ensures images load eagerly

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
                            loading="eager"  // Ensures images load eagerly
                        />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default EmblaCarousel