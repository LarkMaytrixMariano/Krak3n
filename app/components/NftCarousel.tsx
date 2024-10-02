"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import { NFTslide } from '@/constants'
import { useState } from "react";

const NextJsCarousel = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    return (
        <div className="bg-[#EEF4F4] bg-opacity-15 rounded-xl px-[5%] text-sm shadow-xl lg:w-[1000px] w-[380px] py-10 carousel2 md:w-[420px]">
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
            >
                    {NFTslide.map((sticker, index) => (
                        <div className="px-10 py-[9%] lg:py-[7%] w-[350px] mb-10" key={index}
                        onMouseLeave={() => setSelectedIndex(null)} // Reset on mouse leave
                        >
                            <div className='mx-auto flex mb-5'>
                                <Image
                                src={selectedIndex !== null ? sticker.sub[selectedIndex] : sticker.main}
                                alt="webdesign" 
                                height={308}
                                width={514}
                            />
                            </div>
                            <div className='flex justify-center mx-auto'>
                            {sticker.sub.map((image, subIndex) => (
                            <div 
                                key={subIndex} 
                                className={`cursor-pointer mx-1 border rounded-xl ${selectedIndex === subIndex ? 'filter blur-sm' : ''}`}
                                onClick={() => {
                                    if (selectedIndex === subIndex) {
                                        // If the clicked sticker is already selected, reset
                                        setSelectedIndex(null); // Unselect and revert to default
                                    } else {
                                        setSelectedIndex(subIndex); // Set selected on click
                                    }
                                }} 
                                onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
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