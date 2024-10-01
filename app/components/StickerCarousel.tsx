"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import { STICKERSCAROUSEL } from '@/constants'

const NextJsCarousel = () => {
    return (
        <div className="bg-[#EEF4F4] bg-opacity-15 rounded-xl px-10 text-sm shadow-xl lg:w-[1000px] w-[420px] carousel2">
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
            >
                    {STICKERSCAROUSEL.map((sticker, index) => (
                        <div className="px-10 py-[9%] lg:py-[7%] w-[350px] mb-10" key={index}>
                            <div className='mx-auto flex mb-5'>
                                <Image
                                src={sticker.main}
                                alt="webdesign" 
                                height={308}
                                width={514}
                            />
                            </div>
                            <div className='flex justify-center mx-auto'>
                            {sticker.sub.map((image, index) => (
                                <div key={index} className="mx-1 border border-white bg-[#038AA2] rounded-xl">
                                    <Image      
                                        src={image}
                                        alt="stickers"
                                        width={80} 
                                        height={80}
                                        className="rounded-xl"
                                    />
                                </div>    
                            ))}    
                            </div>    
                        </div>
                    ))}
            </Carousel>
        </div>
    );
};

export default NextJsCarousel;