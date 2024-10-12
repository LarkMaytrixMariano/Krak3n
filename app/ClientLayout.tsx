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
  const positions = [1, 10, 25, 40, 50, 60, 70, 90];

  return (
    <div className={`bg-bg-img-6 bg-no-repeat bg-cover bg-center ${isHomePage ? 'lg:h-[1240px] h-[800px]' : 'lg:h-[auto] h-[auto]'}`}>
      {/* Render multiple sun rays with random animation */}
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute top-[-5%] -translate-x-1/2 h-full bg-gradient-to-b from-white to-transparent opacity-20 z-[10000]"
          style={{
            width: '200px',
            clipPath: 'polygon(0% 0%, 15% 0%, 50% 100%, 45% 100%)',
            transform: 'rotate(30deg)',
            left: `${pos}%` // Randomize the left position
          }}
          animate={{
            opacity: [0, 0.5, 0], // Fade in and fade out
          }}
          transition={{
            duration: 2, // Duration of the fade
            repeat: Infinity, // Infinite loop
            delay: Math.random() * 2, // Random delay for each ray to desynchronize
          }}
        ></motion.div>
      ))}

      <Navbar />
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
