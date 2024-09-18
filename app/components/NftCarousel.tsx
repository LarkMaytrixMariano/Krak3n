"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import { NFTs1 } from '@/constants'

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
            {NFTs1.links.map((link, index) => (
              <div className='carousel2 pb-12' key={index}>
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