"use client";

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className={`bg-bg-img-6 bg-no-repeat bg-cover bg-center ${isHomePage ? 'lg:h-[1240px] h-[800px]' : 'lg:h-[auto] h-[auto]'}`}>
      <Navbar />
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
