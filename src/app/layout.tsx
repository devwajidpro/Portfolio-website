
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
    default: "Wajid Ali | Full Stack Developer | Dev Wajid Pro",
    template: "%s | Wajid Ali",
  },

  description:
    "Wajid Ali is a Full Stack Developer specializing in Next.js, React, JavaScript, Node.js, and MongoDB. Explore his web development projects, skills, and portfolio.",

  applicationName: "Dev Wajid Pro",

  authors: [{ name: "Wajid Ali" }],
  creator: "Wajid Ali",
  publisher: "Dev Wajid Pro",

  verification: {
    google: "VuYihRBtOFylW2lagYMO803OEUPVK9aIVdE-k1A89yw",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Wajid Ali | Full Stack Developer | Dev Wajid Pro",
    description:
      "Explore Wajid Ali's portfolio, projects, and skills in Next.js, React, JavaScript, Node.js, and modern web development.",
    url: "https://www.devwajidpro.com",
    siteName: "Dev Wajid Pro",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wajid Ali | Full Stack Developer",
    description:
      "Explore Wajid Ali's web development portfolio, featuring Next.js, React, JavaScript, and Node.js projects.",
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


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.devwajidpro.com/#person",
      name: "Wajid Ali",
      url: "https://www.devwajidpro.com",
      jobTitle: "Full Stack Developer",
      description:
        "Wajid Ali is a Full Stack Developer specializing in Next.js, React, JavaScript, Node.js, and MongoDB.",
      sameAs: [
        "https://github.com/devwajidpro",
        "https://www.linkedin.com/in/devwajidpro/",
        "https://www.fiverr.com/devwajidpro",
        "https://www.upwork.com/freelancers/~01756bc606e240601e",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Next.js",
        "React",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Web Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.devwajidpro.com/#website",
      name: "Dev Wajid Pro",
      alternateName: "Wajid Ali Portfolio",
      url: "https://www.devwajidpro.com",
      publisher: {
        "@id": "https://www.devwajidpro.com/#person",
      },
    },
  ],
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


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <BackgroundEffect />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
