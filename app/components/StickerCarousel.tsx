"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import { STICKERSCAROUSEL } from '@/constants'
import { useState } from "react";

const NextJsCarousel = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <div className="bg-[#EEF4F4] bg-opacity-15 rounded-xl px-[5%] text-sm shadow-xl lg:w-[1000px] w-[380px] carousel2 md:w-[420px]">
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
            >
                    {STICKERSCAROUSEL.map((sticker, index) => (
                        <div className="px-10 pt-[9%] w-[340px] mb-10" key={index}>
                            <div className='mx-auto flex'>
                                <Image
                                src={hoveredIndex !== null && sticker.sub[hoveredIndex] ? sticker.sub[hoveredIndex] : sticker.main}
                                alt="webdesign" 
                                    height={400}
                                    width={450}
                                    className="pb-10"
                                />
                            </div>
                            <div className='flex mx-auto'>
                            {sticker.sub.map((image, subIndex) => (
                            <div 
                                key={subIndex} 
                                className={`cursor-pointer mx-1 border rounded-xl ${hoveredIndex === subIndex ? 'filter blur-sm' : ''}`}
                                onMouseEnter={() => setHoveredIndex(subIndex)} // Set the hovered index
                                onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
                                onClick={() => {
                                    setSelectedIndex(subIndex); // Set selected on click
                                    setHoveredIndex(null); // Reset hover on click
                                }} 
                            >
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