import Badge from "@/components/Badge";
import Button from "@/components/HomeButtons";
import ScrollReveal from "@/components/ScrollReveal";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import TypingText from "@/components/TypingText";

export default function HomeSection() {
  const skills = [
    "Next.js",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
  ];
  return (
    <>
      <section id='Home' className="relative flex flex-wrap flex-col items-center justify-start pt-25 pb-15 px-4 text-center scroll-mt-24">
        <div className = 'flex items-center flex-col justify-start w-full h-full gap-4 lg:pl-14 lg:pr-14 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4'>
          <ScrollReveal className="flex items-center gap-3 mb-1 w-full flex-wrap justify-start text-left">
            <Badge />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="flex items-center gap-3 w-full flex-wrap justify-start text-left">
            <h2 className="text-[#e2d3fd] text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold">Hi, I&apos;m Wajid Ali</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex items-center gap-3 w-full flex-wrap justify-start text-left">
            <h1 className="bg-linear-to-r from-[#6366f1] to-[#a855f7] text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl bg-clip-text text-transparent font-bold">Full Stack Developer</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="flex items-center gap-3 w-full flex-wrap justify-start text-left">
            <TypingText />
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-3 items-center w-full flex-wrap justify-start text-left">
            <p className='md:text-lg text-gray-400 max-w-2xl font-light'>
             I&apos;m Wajid Ali, a Full Stack Developer specializing in Next.js,
            React, JavaScript, and Node.js. I build modern, responsive,
            and scalable web applications with clean code and user-focused experiences.
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
