import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Meditics Medical-Healthcare",
  description: "Made by Tuba Jan",
};

export default function RootLayout({children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
