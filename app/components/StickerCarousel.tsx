"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import { STICKERS1 } from '@/constants'

const NextJsCarousel = () => {
    return (
        <div className="bg-[#EEF4F4] bg-opacity-15 rounded-xl px-10 text-sm shadow-xl lg:w-[1000px] w-[420px] carousel2">
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
            >
            {STICKERS1.links.map((link) => (
              <div className='carousel2 pb-12'>
              <Image 
              src={link}
              alt="stickers"
              width={50}
              height={50}
             />
             </div>
             ))}
            </Carousel>
        </div>
    );
};

export default NextJsCarousel;