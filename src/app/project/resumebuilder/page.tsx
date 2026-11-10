
import type { Metadata } from "next";
import ProjectPreview from "@/components/ProjectPreview";

export const metadata: Metadata = {
  title: "AI Resume Builder | MERN Stack & Gemini AI Project",
  description:
    "Explore an AI-powered Resume Builder developed by Wajid Ali using the MERN stack and Gemini AI. Create professional resumes, enhance content with AI, choose modern templates, and share resumes online.",
  alternates: {
    canonical: "/projects/ai-resume-builder",
  },
  openGraph: {
    title: "AI Resume Builder | MERN Stack & Gemini AI Project",
    description:
      "Create and customize professional resumes with AI-powered content enhancement, modern templates, and public sharing features.",
    url: "https://www.devwajidpro.com/project/resumebuilder",
    siteName: "Wajid Ali Portfolio",
    type: "article",
    images: [
      {
        url: "/AI-Resume-Builder.png",
        width: 1200,
        height: 630,
        alt: "AI Resume Builder project preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Builder | MERN Stack Project",
    description:
      "An AI-powered resume builder featuring Gemini AI, modern templates, and professional resume creation.",
    images: ["/AI-Resume-Builder.png"],
  },
};

export default function Page() {
  const name = "AI Resume Builder";

  const description =
    "An AI-powered Resume Builder built with the MERN stack, enabling users to create, customize, and manage professional resumes with modern templates and AI-enhanced content.";

  const liveDemo = "https://resume-builder-eight-topaz-53.vercel.app/";
  const repoLink = "https://github.com/devwajidpro/Resume-builder";

  const technologies = [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "Gemini AI",
    "JavaScript",
  ];

  const features = [
    {
      icon: "📄",
      title: "Create Resume",
      description: "Build professional resumes with ease.",
    },
    {
      icon: "🤖",
      title: "AI Enhancement",
      description: "Improve summaries and job descriptions using AI.",
    },
    {
      icon: "🎨",
      title: "Resume Templates",
      description: "Choose from multiple modern resume templates.",
    },
    {
      icon: "✏️",
      title: "Edit Resume",
      description: "Update your resume information anytime.",
    },
    {
      icon: "💼",
      title: "Experience",
      description: "Showcase your professional work experience.",
    },
    {
      icon: "🎓",
      title: "Education & Skills",
      description: "Highlight your academic background and skills.",
    },
    {
      icon: "🔗",
      title: "Public Sharing",
      description: "Share your resume through a public link.",
    },
    {
      icon: "🖨️",
      title: "Download Resume",
      description: "Print and download resumes in a professional format.",
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
      image="/AI-Resume-Builder.png"
      features={features}
    />
  );
}
