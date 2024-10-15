import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientLayout from "./ClientLayout";

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
      <head>
        <title>Kraken</title>
        <meta name="description" content="Kraken Portfolio" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Kraken Portfolio" />
        <meta property="og:description" content="Explore the Kraken portfolio showcasing amazing projects and accomplishments." />
        <meta property="og:image" content="/krakenlogo.svg" /> {/* Make sure this image is accessible from public folder */}
        <meta property="og:type" content="website" />
        {/* Additional social sharing meta tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kraken Portfolio" />
        <meta name="twitter:description" content="Explore the Kraken portfolio showcasing amazing projects and accomplishments." />
        <meta name="twitter:image" content="/kraken-og-image.png" /> */}
        <link rel="icon" href="/krakenlogo.svg" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
