import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Kraken",
  description: "Kraken Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="bg-bg-img-6 bg-no-repeat bg-cover bg-center lg:h-[1240px] h-[800px]">
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
      </div> 
      <link rel="icon" href="/krakenlogo.svg" />
      </body>
    </html>
  );
}
