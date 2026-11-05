'use client'
import Link from "next/link"
import React from "react"

const Navbar = () => {
    const [open, setOpen] = React.useState(false)


    const [activeSection, setActiveSection] = React.useState('Home')

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.5 }
      )

      document.querySelectorAll('section').forEach((section) => {
        observer.observe(section)
      })

      return () => observer.disconnect()
    }, [])


    return (
        <nav className="fixed top-0 lg:pl-14 lg:pr-14 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6
        w-full max-w-full
        bg-[#0f0a19]/55
        backdrop-blur-xl
        border border-purple-500/20
        shadow-lg shadow-black/20
        z-50 h-18
        flex items-center justify-between 
        px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 border-b transition-all">

            <Link href="#" className="text-3xl font-bold bg-linear-to-r from-[#a855f7] to-[#6366f1] text-transparent bg-clip-text">
                Wajid Ali
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 ">
                <Link href="#Home" className={`relative group font-semibold ${activeSection === 'Home' ? 'transition-colors duration-300 bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent' : 'text-[#e2d3fd]' }`}>Home
                  <span
                    className={`absolute bottom-0 top-8 left-0  h-0.75 w-full
                    origin-left scale-x-0
                    bg-linear-to-r from-[#6366f1] to-[#a855f7]
                    transition-transform duration-300
                    group-hover:scale-x-100
                    ${activeSection === 'Home' ? 'scale-x-100' : ''}`}
                  />
                </Link>
                <Link href="#About" className={`relative group font-semibold ${activeSection === 'About' ? 'transition-colors duration-300 bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent' : 'text-[#e2d3fd]' }`}>About
                  <span
                    className={`absolute bottom-0 top-8 left-0  h-0.75 w-full
                    origin-left scale-x-0
                    bg-linear-to-r from-[#6366f1] to-[#a855f7]
                    transition-transform duration-300
                    group-hover:scale-x-100
                    ${activeSection === 'About' ? 'scale-x-100' : ''}`}
                  />
                </Link>
                <Link href="#Portfolio" className={`relative group font-semibold ${activeSection === 'Portfolio' ? 'transition-colors duration-300 bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent' : 'text-[#e2d3fd]' }`}>Portfolio
                  <span
                    className={`absolute bottom-0 top-8 left-0  h-0.75 w-full
                    origin-left scale-x-0
                    bg-linear-to-r from-[#6366f1] to-[#a855f7]
                    transition-transform duration-300
                    group-hover:scale-x-100
                    ${activeSection === 'Portfolio' ? 'scale-x-100' : ''}`}
                  />
                </Link>
                <Link href="#Contact" className={`relative group font-semibold ${activeSection === 'Contact' ? 'transition-colors duration-300 bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent' : 'text-[#e2d3fd]' }`}>Contact
                  <span
                    className={`absolute bottom-0 top-8 left-0  h-0.75 w-full
                    origin-left scale-x-0
                    bg-linear-to-r from-[#6366f1] to-[#a855f7]
                    transition-transform duration-300
                    group-hover:scale-x-100
                    ${activeSection === 'Contact' ? 'scale-x-100' : ''}`}
                  />
                </Link>
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="md:hidden">
              {open ? (
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.06066" y="0.93934" width="21" height="1.5" rx=".75" transform="rotate(45 1.06066 0.93934)" fill="#e2d3fd"/>
                    <rect x="14.1421" y="0.93934" width="21" height="1.5" rx=".75" transform="rotate(135 14.1421 0.93934)" fill="#e2d3fd"/>
                </svg>
                ) : (
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#e2d3fd" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#e2d3fd" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#e2d3fd" />
                </svg>
              )}
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-15 left-0 w-full bg-[#0f0a19]/55 shadow-md py-4 flex-col items-start gap-5 px-15 text-lg md:hidden`}>
                <Link onClick={() => setOpen(false)} href="#Home" className={`relative group font-semibold ${activeSection === 'Home' ? 'transition-colors duration-300 bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent' : 'text-[#e2d3fd]' }`}>Home</Link>
                <Link onClick={() => setOpen(false)} href="#About" className={`relative group font-semibold ${activeSection === 'About' ? 'transition-colors duration-300 bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent' : 'text-[#e2d3fd]' }`}>About</Link>
                <Link onClick={() => setOpen(false)} href="#Portfolio" className={`relative group font-semibold ${activeSection === 'Portfolio' ? 'transition-colors duration-300 bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent' : 'text-[#e2d3fd]' }`}>Portfolio</Link>
                <Link onClick={() => setOpen(false)} href="#Contact" className={`relative group font-semibold ${activeSection === 'Contact' ? 'transition-colors duration-300 bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent' : 'text-[#e2d3fd]' }`}>Contact</Link>
            </div>

        </nav>
    )
}



export default Navbar