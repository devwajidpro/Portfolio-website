import { Code, FileText } from 'lucide-react'
import Link from 'next/link'

const Button = () => {
  return (
    <div className="relative flex flex-wrap gap-4  items-center justify-center">

      {/* CV Button */}
      <div className="relative group/projects">

       
        <Link
            href="/Wajid_Ali_CV.pdf"
            download="Wajid-Ali-CV.pdf"
          className="relative px-8 py-3 rounded-lg bg-linear-to-r from-[#6366f1] to-[#a855f7] border-white/10 group-hover/projects:gap-3 group-hover/projects:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base font-medium text-gray-300"
        >
            Download CV
           <FileText className="w-4 h-4 ml-2 group-hover/contact:translate-x-1 transition-transform duration-300" />
        </Link>

      </div>

      {/* Project Button */}
      <div className="relative group/contact">

        <Link
          href="#Portfolio"
          className="relative px-8 py-3 rounded-lg  backdrop-blur-xl border border-white/10 group-hover/contact:gap-3 group-hover/projects:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base font-medium text-gray-300"
        >
          View Projects
          <Code className="w-4 h-4 ml-2 group-hover/contact:translate-x-1 transition-transform duration-300" />
        </Link>

      </div>

    </div>
  )
}

export default Button

