import type { Metadata } from "next";

import Navigation from "../components/ui/navigation";
import Footer from "../components/ui/footer"

import { Inter } from "next/font/google";

import "./globals.css";
import {cn} from '../utils/cn'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pieter Deane Portfolio",
  description: "Created with Next.js",
};

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}>

        <Navigation />

        {children}
        <Footer/>

      </body>
    </html>
  );
}
