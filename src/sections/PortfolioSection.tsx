import PortfolioSections from "@/components/PortfolioSections";
import ScrollReveal from "@/components/ScrollReveal";

import React from 'react'

const PortfolioSection = () => {
  return (
    <section
      id="Portfolio"
      className="relative flex flex-col items-center justify-center pt-25 pb-15 px-4 text-center scroll-mt-24"
    >
        <div className='flex items-center flex-col justify-center w-full h-full gap-4 lg:pl-14 lg:pr-14 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4'>
            <ScrollReveal className="flex justify-center items-center w-full mb-5">
                <h2 className="bg-linear-to-r from-[#6366f1] to-[#a855f7] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl bg-clip-text text-transparent font-bold">
                Portfolio Showcase
                </h2>
            </ScrollReveal>

            <ScrollReveal
                delay={0.1}
                className="flex justify-center items-center w-full mb-3"
            >
                <p className="md:text-lg text-gray-400 max-w-2xl font-light text-center">
                    Explore my web development projects, technical skills, and
                    educational background. Discover the technologies I use to
                    build modern, responsive, and scalable web applications.
                </p>
            </ScrollReveal>

            <div>
                <PortfolioSections />
            </div>

            
        </div>
    </section>
  )
}

export default PortfolioSection
