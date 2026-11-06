import Badge from "@/components/Badge";
import Button from "@/components/HomeButtons";
import ScrollReveal from "@/components/ScrollReveal";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import TypingText from "@/components/TypingText";

export default function HomeSection() {
  const skills = ['Next JS', 'React', 'TypeScript', 'MongoDB']
  return (
    <>
      <section id='Home' className="relative flex flex-wrap flex-col items-center justify-start pt-25 pb-15 px-4 text-center">
        <div className = 'flex items-center flex-col justify-start w-full h-full gap-4 lg:pl-14 lg:pr-14 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4'>
          <ScrollReveal className="flex items-center gap-3 mb-1 w-full flex-wrap justify-start text-left">
            <Badge />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="flex items-center gap-3 w-full flex-wrap justify-start text-left">
            <h1 className="text-[#e2d3fd] text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold">Full Stack</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex items-center gap-3 w-full flex-wrap justify-start text-left">
            <h1 className="bg-linear-to-r from-[#6366f1] to-[#a855f7] text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl bg-clip-text text-transparent font-bold">Developer</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="flex items-center gap-3 w-full flex-wrap justify-start text-left">
            <TypingText />
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-3 items-center w-full flex-wrap justify-start text-left">
            <p className='md:text-lg text-gray-400 max-w-2xl font-light'>
              Building scalable, modern, and user-focused web applications with clean code and innovative solutions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5} className="flex flex-wrap items-center gap-3 mb-3 w-full justify-start text-left">

            {skills.map((skill, index) => (
                <span key={index} className='px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors'>
                  {skill}
                </span>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={0.6} className="flex items-center gap-3 mb-3 w-full flex-wrap justify-start text-left">
            <Button />
          </ScrollReveal>
          <ScrollReveal delay={0.7} className="flex items-center gap-3 mb-3 w-full flex-wrap justify-start text-left">
            <SocialMediaIcons />
          </ScrollReveal>
        </div>
      </section>
    </>
    
  );
}
