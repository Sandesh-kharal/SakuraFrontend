import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";



const sans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const serif = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  // Crucial: Load both normal and italic for the 'Japan' accent
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: "sakura",
  description: "consultancy for abroad study",
};

// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Add suppressHydrationWarning here
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
  