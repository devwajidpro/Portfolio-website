
import { Sparkles } from "lucide-react"

export default function Badge() {
  return (
    <div className="relative inline-flex group">

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-full
        bg-linear-to-r from-[#6366f1] to-[#a855f7]
        blur opacity-30 group-hover:opacity-50
        transition duration-1000"
      />

      {/* Badge Content */}
      <div className="relative px-3 sm:px-4 py-2 rounded-full
        bg-black/40 backdrop-blur-xl border border-white/10">

        <span className="bg-linear-to-r from-[#6366f1] to-[#a855f7]
          text-transparent bg-clip-text sm:text-sm text-[0.7rem]
          font-medium flex items-center gap-2">

          <Sparkles className="w-4 h-4 text-blue-400" />

          Ready to Innovate
        </span>

      </div>
    </div>
  )
}
