'use client'

import { Code, GraduationCap, Layers } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import SkillsCard from "./SkillsCard";
import EducationSection from "./EducationSection";

export default function PortfolioSections() {
    const skills = [
    { title: "HTML5", image: "/Html.svg" },
    { title: "CSS3", image: "/css.svg" },
    { title: "JavaScript", image: "/javascript.svg" },
    { title: "TypeScript", image: "/typescript.png" },
    { title: "Tailwind", image: "/tailwind.svg" },
    { title: "Express.js", image: "/ex.png" },
    { title: "Node.js", image: "/nodejs.svg" },
    { title: "React.js", image: "/reactjs.svg" },
    { title: "Next.js", image: "/nextjs.jpg" },
    { title: "MongoDB", image: "/mongodb.png" },
    { title: "JWT", image: "/json.png" },
    { title: "Docker", image: "/docker.png" },
    ];
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

        <div hidden={activeSection !== "Project"}>
            <ScrollReveal
                delay={0.3}
                className="flex flex-wrap justify-center items-center w-full mb-3 gap-3"
            >
                
                <ProjectCard 
                image="/MegaBlog.png" 
                title="MegaBlog"
                description="A full-stack blogging platform built with React and Appwrite, featuring user authentication, blog creation, and content management."
                demoLink="https://appwriteblog-sage-eta.vercel.app/"
                detail="/project/megablog" />

                <ProjectCard 
                image="/AI-Resume-Builder.png" 
                title="AI Resume Builder"
                description="An AI-powered resume builder built with the MERN stack, allowing users to create, customize, and share professional resumes."
                demoLink="https://resume-builder-eight-topaz-53.vercel.app/"
                detail='/project/resumebuilder' />
                


                <ProjectCard 
                image="/Portfolio.png" 
                title="Portfolio Website"
                description="A personal developer portfolio built with Next.js and TypeScript to showcase projects, technical skills, and web development experience."
                demoLink="https://www.devwajidpro.com"
                detail="/project/portfolio" />
            </ScrollReveal>
        </div>

        <div hidden={activeSection !== "Skills"}>
            <ScrollReveal
                delay={0.3}
                className="flex flex-wrap justify-center items-center w-full mb-3 gap-6"
            >
                { skills.map((skill) => (
                    <SkillsCard key={skill.title} image={skill.image} title={skill.title} />
                ))}
            </ScrollReveal>
        </div>


        <div hidden={activeSection !== "Education"}>
                <ScrollReveal
                delay={0.3}
                className="flex flex-wrap justify-center items-center w-full mb-3 gap-6"
            >
                <EducationSection />
            </ScrollReveal>
        </div>
        </>
    );
}

