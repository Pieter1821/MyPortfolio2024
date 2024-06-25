import type { Metadata } from "next";
import FloatingNavbar from "./components/ui/floating-navbar";

import { Inter } from "next/font/google";

import "./globals.css";
import { navItems } from "./components/ui/navItems";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pieter Deane Portfolio",
  description: "Created with Next.js",
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
