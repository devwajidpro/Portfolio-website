'use client'

import { Code, GraduationCap, Layers } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";

export default function PortfolioSections() {
    const [activeSection, setActiveSection] = useState("Project")

    return (
        <>
        <ScrollReveal delay={0.2} className="flex items-center gap-3 mb-6 w-full flex-wrap justify-center">
            <div className="flex w-full sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] min-w-0 h-14 sm:h-18 md:h-22 items-stretch gap-1 p-1.5
            bg-[#0f0a19]/60 backdrop-blur-xl
            border border-purple-500/20
            rounded-lg shadow-lg shadow-purple-950/20
            text-sm">

            {/* Projects */}
            <div className="flex flex-1 items-center">
                <input
                    type="radio"
                    name="options"
                    id="Project"
                    className="hidden peer"
                    onChange={() => setActiveSection("Project")}
                    checked={activeSection === "Project"}
                />

                <label
                    htmlFor="Project"
                    className="flex flex-1 h-full items-center justify-center 
                    cursor-pointer rounded-md px-0 sm:px-4 gap-0 sm:gap-2
                    text-gray-400 font-medium
                    transition-all duration-300 ease-in-out
                    hover:text-white hover:bg-purple-500/10
                    peer-checked:bg-linear-to-r
                    peer-checked:from-indigo-600
                    peer-checked:to-purple-600
                    peer-checked:text-white
                    peer-checked:shadow-md
                    peer-checked:shadow-purple-500/20
                    peer-checked:border
                    peer-checked:border-purple-400/30">

                    <Code size={18} className="hidden sm:block" />
                    Projects
                </label>
            </div>


            {/* Education */}
            <div className="flex flex-1 items-center">
                <input
                    type="radio"
                    name="options"
                    id="Education"
                    className="hidden peer"
                    onChange={() => setActiveSection("Education")}
                    checked={activeSection === "Education"}
                />

                <label
                    htmlFor="Education"
                    className="flex flex-1 h-full items-center justify-center 
                    cursor-pointer rounded-md px-0 sm:px-4 gap-0 sm:gap-2
                    text-gray-400 font-medium
                    transition-all duration-300 ease-in-out
                    hover:text-white hover:bg-purple-500/10
                    peer-checked:bg-linear-to-r
                    peer-checked:from-indigo-600
                    peer-checked:to-purple-600
                    peer-checked:text-white
                    peer-checked:shadow-md
                    peer-checked:shadow-purple-500/20
                    peer-checked:border
                    peer-checked:border-purple-400/30">

                    <GraduationCap size={20} className="hidden sm:block"/>
                    Education
                </label>
            </div>


            {/* Tech Stack */}
            <div className="flex flex-1 items-center">
                <input
                    type="radio"
                    name="options"
                    id="Skills"
                    className="hidden peer"
                    onChange={() => setActiveSection("Skills")}
                    checked={activeSection === "Skills"}
                />

                <label
                    htmlFor="Skills"
                    className="flex flex-1 h-full items-center justify-center 
                    cursor-pointer rounded-md px-0 sm:px-4 gap-0 sm:gap-2
                    text-gray-400 font-medium
                    transition-all duration-300 ease-in-out
                    hover:text-white hover:bg-purple-500/10
                    peer-checked:bg-linear-to-r
                    peer-checked:from-indigo-600
                    peer-checked:to-purple-600
                    peer-checked:text-white
                    peer-checked:shadow-md
                    peer-checked:shadow-purple-500/20
                    peer-checked:border
                    peer-checked:border-purple-400/30">

                    <Layers size={18} className="hidden sm:block"/>
                    Tech Stack
                </label>
            </div>

            </div>
        </ScrollReveal>

        {activeSection === "Project" && (
            <ScrollReveal
                delay={0.3}
                className="flex flex-wrap justify-center items-center w-full mb-3 gap-3"
            >
                
                <ProjectCard 
                image="/MegaBlog.png" 
                title="MegaBlog"
                description="A modern blogging platform to create, share, and explore engaging articles."
                demoLink="https://appwriteblog-sage-eta.vercel.app/"
                detail="#" />

                <ProjectCard 
                image="/AI-Resume-Builder.png" 
                title="AI Resume Builder"
                description="Build professional resumes with AI-powered tools and modern templates."
                demoLink="https://resume-builder-eight-topaz-53.vercel.app/"
                detail='#' />
                


                <ProjectCard 
                image="/Portfolio.png" 
                title="Portfolio Website"
                description="A modern portfolio showcasing my skills and projects."
                demoLink="https://devwajidpro.com"
                detail="#" />
            </ScrollReveal>
        )}
        </>
    );
}

