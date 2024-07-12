import type { Metadata } from "next";

import Navigation from "../components/ui/navigation";
import { Footer } from "../components/ui/footer";

import { AR_One_Sans } from "next/font/google";

import "./globals.css";
import { cn } from '../utils/cn'

export const metadata: Metadata = {
  title: "Pieter Deane Portfolio",
  description: "Created with Next.js",
};

const fontHeading = AR_One_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = AR_One_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'antialiased',
        fontHeading.variable,
        fontBody.variable
      )}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
