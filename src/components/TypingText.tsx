
"use client"

import { useEffect, useState } from "react"

const words = [
  "AI Engineer",
  "MERN Stack Developer",
  "Next.js Developer",
]

export default function TypingText() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1))

        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1200)
        }
      } else {
        setText(currentWord.substring(0, text.length - 1))

        if (text.length === 2) {
          setDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, deleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex])

  return (
    <span className="inline-flex items-center">
      <span className="text-xl md:text-2xl bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
        {text}
      </span>

      <span className="ml-2 h-[1.5em] w-0.75 bg-linear-to-t from-[#6366f1] to-[#a855f7]
        animate-pulse" />
    </span>
  )
}
