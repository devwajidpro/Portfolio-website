
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BackgroundEffect from "@/components/BackgroundEffect";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devwajidpro.com"),

  title: {
    default: "Wajid Ali | Full Stack Developer",
    template: "%s | Wajid Ali",
  },

  description:
    "I'm Wajid Ali, a Full Stack Developer specializing in Next.js, React, Node.js, NestJS, and MongoDB. Explore my projects, skills, and experience.",

  applicationName: "Wajid Ali Portfolio",

  authors: [{ name: "Wajid Ali" }],

  creator: "Wajid Ali",

  publisher: "Wajid Ali",

  keywords: [
    "Wajid Ali",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Web Developer Portfolio",
    "Full Stack Developer Pakistan",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Wajid Ali | Full Stack Developer",
    description:
      "Explore Wajid Ali's portfolio, projects, skills, and experience as a Full Stack Developer specializing in modern web technologies.",
    url: "https://www.devwajidpro.com",
    siteName: "Wajid Ali Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wajid Ali | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and modern web applications.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundEffect />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
