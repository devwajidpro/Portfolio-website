import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import './../../public/fiverr.svg'
import Image from 'next/image'

const SocialMediaIcons = () => {
  return (
    <div className="relative flex flex-wrap gap-4  items-center">

        <div className="relative group/projects">
            <div className="absolute -inset-0.5 bg-linear-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover/projects:opacity-90 transition-all duration-700" />
            
            <a
                href="https://github.com/devwajidpro"
                aria-label="Visit Wajid Ali's GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300"
                >
                <FaGithub className="w-6 h-6" />
            </a>
        </div>

        <div className="relative group/projects">
            <div className="absolute -inset-0.5 bg-linear-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover/projects:opacity-90 transition-all duration-700" />
            
            <a
                href="https://www.linkedin.com/in/devwajidpro/"
                aria-label="Visit Wajid Ali's LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300"
                >
                <FaLinkedinIn className="w-6 h-6" />
            </a>
        </div>

        <div className="relative group/projects">
            <div className="absolute -inset-0.5 bg-linear-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover/projects:opacity-90 transition-all duration-700" />
            
            <a
                href="https://www.fiverr.com/devwajidpro"
                aria-label="Visit Wajid Ali's Fiverr profile"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300"
                >
               <Image width={24} height={24} src="/fiverr.svg" alt="Fiverr" /> 
            </a>
        </div>

        <div className="relative group/projects">
            <div className="absolute -inset-0.5 bg-linear-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover/projects:opacity-90 transition-all duration-700" />
            
            <a
                href="https://www.upwork.com/freelancers/~01756bc606e240601e"
                aria-label="Visit Wajid Ali's Upwork profile"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300"
                >
                <SiUpwork className="w-6 h-6" />
            </a>
        </div>
      
    </div>
  )
}

export default SocialMediaIcons
