import ProjectPreview from '@/components/ProjectPreview'
import React from 'react'

const page = () => {

    const name = "Portfolio Website"
    const description = "A modern and responsive personal portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, experience, and professional journey through a clean and interactive design."
    const liveDemo = "https://devwajidpro.com"
    const repoLink = "https://github.com/devwajidpro/Portfolio-website"
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
    NoOfTechnologies={8} 
    NoOfFeatures={8} 
    liveDemo={liveDemo} 
    github={repoLink}
    technologies={technologies}
    image='/Portfolio.png'
    features={features}
    />
  )
}

export default page



