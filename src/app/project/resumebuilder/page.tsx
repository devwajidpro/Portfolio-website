import ProjectPreview from '@/components/ProjectPreview'
import React from 'react'

const page = () => {

    const name = "AI Resume Builder"
    const description = "An AI-powered Resume Builder built with the MERN stack, enabling users to create, customize, and manage professional resumes with modern templates and AI-enhanced content."
    const liveDemo = "https://resume-builder-eight-topaz-53.vercel.app/"
    const repoLink = "https://github.com/devwajidpro/Resume-builder"
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
    NoOfTechnologies={8} 
    NoOfFeatures={8} 
    liveDemo={liveDemo} 
    github={repoLink}
    technologies={technologies}
    image='/AI-Resume-Builder.png'
    features={features}
    />
  )
}

export default page



