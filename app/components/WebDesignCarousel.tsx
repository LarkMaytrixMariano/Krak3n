"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import { WebDesignCard } from '@/constants'
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

const NextJsCarousel = () => {
    const variants = createIconVariants(duration, offset);
    return (
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}  
        className="slider_background rounded-xl px-10 text-sm shadow-xl lg:w-[1000px] w-[380px] py-10 carousel2 carousel_width">
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
            >
                {WebDesignCard.map((link, index) => (
                    <div className="pb-12" key={index}>
                        <Image
                            src={link.links}
                            alt="webdesign"
                            height={308}
                            width={514}
                            className='mx-auto'
                        />
                        <div className='ml-2 mt-9 py-auto'>
                            <div className='lg:items-end lg:justify-end lg:text-end text-center items-center justify-center lg:mt-[5%] lg:w-[300px] leading-6'>
                                <p className='text-[#DFFAFF] font-bold text-[24px] mt-5 lg:text-[#043F48]'>
                                    {link.title}
                                </p>
                                <p className='text-[#DFFAFF] font-normal text-[15px] mt-5 lg:text-[#043F48]'>
                                    {link.description}
                                </p>
                            </div>
                            <motion.div 
                                               initial="initial"
                                               animate="animate"
                                               variants={variants}                            
                            className='flex lg:justify-end justify-center'>
                                <button className="w-[180px] rounded-lg bg-[#043F48] bg-opacity-90 text-[#DFFAFF] py-3 mt-8 font-medium leading-3 text-[14px]">Sea on Figma</button>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </motion.div>
    );
};

export default NextJsCarousel;