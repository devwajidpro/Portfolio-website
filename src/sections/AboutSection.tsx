import Button from '@/components/AboutButtons'
import AboutCard from '@/components/AboutCard'
import ScrollReveal from '@/components/ScrollReveal'
import { Code2, Layers, Rocket } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section
      id="About"
      className="relative flex flex-col items-center justify-center pt-25 pb-15 px-4 text-center scroll-mt-24"
    >
        <div className='flex items-center flex-col justify-center w-full h-full gap-4 lg:pl-14 lg:pr-14 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4'>
            <ScrollReveal className="flex justify-center items-center w-full mb-5">
                <h2 className="bg-linear-to-r from-[#6366f1] to-[#a855f7] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl bg-clip-text text-transparent font-bold">
                About Me
                </h2>
            </ScrollReveal>

            <ScrollReveal
                delay={0.1}
                className="flex justify-center items-center w-full mb-3"
            >
                <p className="md:text-lg text-gray-400 max-w-lg font-light text-center">
                I&apos;m <span className='text-[#e2d3fd]'>Wajid Ali</span>, a Full Stack Developer passionate about creating
                modern, responsive, and user-friendly digital experiences. I enjoy
                building creative projects, solving problems, and turning ideas into
                reality through clean and efficient code. Always learning, always
                building, and constantly exploring new technologies.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="flex items-center gap-3 mb-9 w-full flex-wrap justify-center">
                <Button />
            </ScrollReveal>

            <ScrollReveal delay={0.3} className='flex items-center gap-3 mb-6 w-full flex-wrap justify-center'>
                <AboutCard   icon={<Code2 />}
                    number={3}
                    title="TOTAL PROJECTS"
                    description="Innovative web solutions crafted" />

                <AboutCard   icon={<Layers />}
                    number={12}
                    title="TOTAL SKILLS"
                    description="Explore the technologies and tools I work with" />

                <AboutCard   icon={<Rocket />}
                    number={2}
                    title="YEARS OF EXPERIENCE"
                    description="Continuous learning journey" />
            </ScrollReveal>
        </div>
    </section>
  )
}

export default AboutSection