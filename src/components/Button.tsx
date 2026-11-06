import { ExternalLink, Mail } from 'lucide-react'
import Link from 'next/link'

const Button = () => {
  return (
    <div className="relative flex flex-col gap-4 sm:flex-row items-center">

      {/* Projects Button */}
      <div className="relative group/projects">

        <div className="absolute -inset-0.5 bg-linear-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover/projects:opacity-90 transition-all duration-700" />

        <Link
          href="#Portfolio"
          className="relative px-6 py-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 group-hover/projects:gap-3 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base font-medium text-gray-300"
        >
          Projects
          <ExternalLink className="w-4 h-4 ml-2 group-hover/projects:translate-x-1 transition-transform duration-300" />
        </Link>

      </div>

      {/* Contact Button */}
      <div className="relative group/contact">

        <div className="absolute -inset-0.5 bg-linear-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover/contact:opacity-90 transition-all duration-700" />

        <Link
          href="#Contact"
          className="relative px-6 py-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 group-hover/contact:gap-3 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base font-medium text-gray-300"
        >
          Contact
          <Mail className="w-4 h-4 ml-2 group-hover/contact:translate-x-1 transition-transform duration-300" />
        </Link>

      </div>

    </div>
  )
}

export default Button