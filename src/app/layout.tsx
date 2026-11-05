import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from '@/components/CustomCursor'
import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wajid Ali — Full Stack Developer | Next.js, React & Node.js",
  description: "Full Stack Developer building modern, scalable web applications and AI-powered solutions using Next.js, React, Node.js, and MongoDB.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundEffect />
        <CustomCursor />
        <Navbar />
        {children}</body>
    </html>
  );
}
