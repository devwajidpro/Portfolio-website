
import type { Metadata } from "next";
import ProjectPreview from "@/components/ProjectPreview";

export const metadata: Metadata = {
  title: "Portfolio Website | Next.js & TypeScript Project",
  description:
    "Explore Wajid Ali's personal portfolio website, built with Next.js, React, TypeScript, and Tailwind CSS. Discover its responsive design, interactive animations, projects showcase, and modern UI.",
  alternates: {
    canonical: "/projects/portfolio",
  },
  openGraph: {
    title: "Portfolio Website | Next.js & TypeScript Project",
    description:
      "A modern, responsive developer portfolio built with Next.js and TypeScript, featuring projects, skills, smooth animations, and professional information.",
    url: "https://www.devwajidpro.com/project/portfolio",
    siteName: "Wajid Ali Portfolio",
    type: "article",
    images: [
      {
        url: "/Portfolio.png",
        width: 1200,
        height: 630,
        alt: "Wajid Ali personal portfolio website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Website | Next.js & TypeScript Project",
    description:
      "A modern personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.",
    images: ["/Portfolio.png"],
  },
};

export default function Page() {
  const name = "Portfolio Website";

  const description =
    "A modern and responsive personal portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, experience, and professional journey through a clean and interactive design.";

  const liveDemo = "https://www.devwajidpro.com";
  const repoLink = "https://github.com/devwajidpro/Portfolio-website";

  const technologies = [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
    "Lucide React",
    "JavaScript",
  ];

  const features = [
    {
      icon: "🎨",
      title: "Modern UI Design",
      description: "Clean and visually appealing portfolio interface.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Optimized experience across all screen sizes.",
    },
    {
      icon: "✨",
      title: "Smooth Animations",
      description: "Engaging animations and scroll reveal effects.",
    },
    {
      icon: "⌨️",
      title: "Typing Effect",
      description: "Dynamic typing animation for professional headlines.",
    },
    {
      icon: "🖱️",
      title: "Custom Cursor",
      description: "Interactive cursor with smooth movement effects.",
    },
    {
      icon: "🚀",
      title: "Projects Showcase",
      description: "Highlight projects, technologies, and key features.",
    },
    {
      icon: "📄",
      title: "Download CV",
      description: "Allow visitors to download my professional resume.",
    },
    {
      icon: "🔗",
      title: "Social Links",
      description: "Connect through GitHub, LinkedIn, Fiverr, and Upwork.",
    },
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
      image="/Portfolio.png"
      features={features}
    />
  );
}
