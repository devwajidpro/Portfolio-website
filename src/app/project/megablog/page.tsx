import ProjectPreview from '@/components/ProjectPreview'
import React from 'react'

const page = () => {

    const name = "MegaBlog"
    const description = "MegaBlog is a modern blogging platform built with the MERN stack, allowing users to create, edit, publish, and manage blog posts with a clean and user-friendly interface."
    const liveDemo = "https://appwriteblog-sage-eta.vercel.app/"
    const repoLink = "https://github.com/devwajidpro/appwriteblog"
    const technologies = [
    "MongoDB", 
    "Express.js", 
    "React.js", "Node.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "Appwrite",
    "JavaScript"
    ];

    const features = [
    {
        icon: "✍️",
        title: "Create Blogs",
        description: "Write and publish blog posts with ease.",
    },
    {
        icon: "📝",
        title: "Edit Blogs",
        description: "Update and manage your published content.",
    },
    {
        icon: "🗑️",
        title: "Delete Blogs",
        description: "Remove unwanted posts whenever needed.",
    },
    {
        icon: "📸",
        title: "Image Upload",
        description: "Add images to make your blogs engaging.",
    },
    {
        icon: "👀",
        title: "Read Blogs",
        description: "Explore and read blogs shared by users.",
    },
    {
        icon: "🔐",
        title: "Authentication",
        description: "Secure login and user account management.",
    },
    {
        icon: "👤",
        title: "User Profiles",
        description: "Manage your account and personal information.",
    },
    {
        icon: "📱",
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices.",
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
    image='/MegaBlog.png'
    features={features}
    />
  )
}

export default page



