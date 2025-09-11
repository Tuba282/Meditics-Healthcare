
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const metadata: Metadata = {
  title: "Meditics Medical-Healthcare",
  description: "Made by Tuba Jan",
};

export default function RootLayout({children,}: Readonly<{  children: React.ReactNode;}>) {

  return (
  <html lang="en">
      <body  className='scroll-smooth'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
