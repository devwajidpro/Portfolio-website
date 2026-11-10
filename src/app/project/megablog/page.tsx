
import type { Metadata } from "next";
import ProjectPreview from "@/components/ProjectPreview";

export const metadata: Metadata = {
  title: "MegaBlog | Full Stack Blogging Platform",
  description:
    "Explore MegaBlog, a full-stack blogging platform built with React, Node.js, Express.js, MongoDB, and Appwrite. Create, edit, publish, and manage blog posts with a responsive user-friendly interface.",
  keywords: [
    "MegaBlog",
    "Blogging Platform",
    "MERN Stack Project",
    "React.js Project",
    "Full Stack Web Development",
    "MongoDB",
    "Node.js",
    "Appwrite",
  ],
  alternates: {
    canonical: "/project/megablog",
  },
  openGraph: {
    title: "MegaBlog | Full Stack Blogging Platform",
    description:
      "A modern blogging platform featuring blog management, authentication, image uploads, and responsive design.",
    url: "https://www.devwajidpro.com/project/megablog",
    siteName: "Wajid Ali Portfolio",
    type: "article",
    images: [
      {
        url: "/MegaBlog.png",
        width: 1200,
        height: 630,
        alt: "MegaBlog blogging platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MegaBlog | Full Stack Blogging Platform",
    description:
      "Explore MegaBlog, a modern full-stack blogging platform built with the MERN stack.",
    images: ["/MegaBlog.png"],
  },
};

export default function Page() {
  const name = "MegaBlog";

  const description =
    "MegaBlog is a modern blogging platform built with the MERN stack, allowing users to create, edit, publish, and manage blog posts with a clean and user-friendly interface.";

  const liveDemo = "https://appwriteblog-sage-eta.vercel.app/";
  const repoLink = "https://github.com/devwajidpro/appwriteblog";

  const technologies = [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "Appwrite",
    "JavaScript",
  ];

  const features = [
    { icon: "✍️", title: "Create Blogs", description: "Write and publish blog posts with ease." },
    { icon: "📝", title: "Edit Blogs", description: "Update and manage your published content." },
    { icon: "🗑️", title: "Delete Blogs", description: "Remove unwanted posts whenever needed." },
    { icon: "📸", title: "Image Upload", description: "Add images to make your blogs engaging." },
    { icon: "👀", title: "Read Blogs", description: "Explore and read blogs shared by users." },
    { icon: "🔐", title: "Authentication", description: "Secure login and user account management." },
    { icon: "👤", title: "User Profiles", description: "Manage your account and personal information." },
    { icon: "📱", title: "Responsive Design", description: "Enjoy a seamless experience across devices." },
  ];

  return (
    <ProjectPreview
      name={name}
      description={description}
      NoOfTechnologies={technologies.length}
      NoOfFeatures={features.length}
      liveDemo={liveDemo}
      github={repoLink}
      technologies={technologies}
      image="/MegaBlog.png"
      features={features}
    />
  );
}
