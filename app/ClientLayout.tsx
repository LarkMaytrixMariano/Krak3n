"use client";

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion } from 'framer-motion'; // Import Framer Motion

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Array of different left positions
  const positions = [1, 20 , 37,  60, 80];

  return (
    <div className={`bg-bg-img-6 bg-no-repeat bg-cover bg-center ${isHomePage ? 'lg:h-[1240px] h-[800px]' : 'lg:h-[auto] h-[auto] '}`}
>
          {/* {positions.map((pos, index) => (
          <motion.div
            key={index}
            className="absolute -translate-x-1/2 h-[75%] lg:h-[100%] opacity-50 z-[1000] white__gradient pointer-events-none"
            style={{
              width: '200px',
              // Modify clip-path to remove or minimize the top part of the polygon
              clipPath: 'polygon(15% 0%, 45% 0%, 50% 110%, 45% 120%)',
              transform: 'rotate(30deg)',
              left: `${pos}%`, // Randomize the left position

              // Apply strong blur to soften the edges
              filter: 'blur(200px)',
              contain: 'strict', // Prevent the element from affecting page layout

            }}
            animate={{
              opacity: [0, 0.5, 0], // Fade in and fade out
            }}
            transition={{
              duration: 5, // Duration of the fade
              repeat: Infinity, // Infinite loop
              delay: Math.random() * 15, // Random delay for each ray to desynchronize
            }}
          ></motion.div>
        ))} */}
      <Navbar />
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
