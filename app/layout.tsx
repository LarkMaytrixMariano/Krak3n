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
      <body>
      <ClientLayout>{children}</ClientLayout>
      <link rel="icon" href="/krakenlogo.svg" />
      </body>
    </html>
  );
}
