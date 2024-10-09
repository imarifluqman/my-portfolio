import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




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
      <body className="lg:w-[80%] mx-auto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
