import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const sora = localFont({
  src: "./fonts/sora.ttf",
  variable: "--sora",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PortFolio",
  description: "My PortFolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased lg:w-[80%] mx-auto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
