"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import { WebDesignCard } from '@/constants'

const NextJsCarousel = () => {
    return (
        <div className="bg-[#EEF4F4] bg-opacity-15 rounded-xl px-10 text-sm shadow-xl lg:w-[1000px] w-[420px] py-10 carousel2">
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
                            <div className='flex lg:justify-end justify-center'>
                                <button className="w-[180px] rounded-lg bg-[#043F48] bg-opacity-90 text-[#DFFAFF] py-3 mt-8 font-medium leading-3 text-[14px]">Sea on Figma</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default NextJsCarousel;