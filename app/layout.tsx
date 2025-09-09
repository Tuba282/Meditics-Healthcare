
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Meditics Medical-Healthcare",
  description: "Made by Tuba Jan",
};

export default function RootLayout({children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
  <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
