
'use client'

import Link from "next/link"
import React, { useState } from "react"
import useActiveSection from "@/hooks/useActiveSection"

const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Portfolio", href: "#Portfolio" },
    { name: "Contact", href: "#Contact" },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const activeSection = useActiveSection()

    const handleNavigation = () => {
        setOpen(false)
    }

    const linkClasses = (name: string) => `
        relative group font-semibold transition-colors duration-300
        ${activeSection === name
            ? "bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
            : "text-[#e2d3fd] hover:text-white"
        }
    `

    const underlineClasses = (name: string) => `
        absolute top-8 left-0 h-0.75 w-full
        origin-left bg-linear-to-r from-[#6366f1] to-[#a855f7]
        transition-transform duration-300
        ${activeSection === name
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
        }
    `

    return (
        <nav className="fixed top-0 left-0 w-full max-w-full
            bg-[#0f0a19]/55 backdrop-blur-xl
            border-b border-purple-500/20
            shadow-lg shadow-black/20
            z-50 h-18
            flex items-center justify-between
            px-6 sm:px-8 md:px-10 lg:px-14 xl:px-24">

            {/* Logo */}
            <Link
                href="#Home"
                onClick={handleNavigation}
                className="text-3xl font-bold
                bg-linear-to-r from-[#a855f7] to-[#6366f1]
                text-transparent bg-clip-text"
            >
                Wajid Ali
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={handleNavigation}
                        className={linkClasses(link.name)}
                    >
                        {link.name}

                        <span className={underlineClasses(link.name)} />
                    </Link>
                ))}
            </div>

            {/* Mobile Toggle */}
            <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
                aria-expanded={open}
                className="md:hidden text-[#e2d3fd]"
            >
                {open ? (
                    <svg width="22" height="22" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round">
                        <path d="M4 6H20M4 12H20M4 18H20" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu */}
            <div className={`
                ${open ? "flex" : "hidden"}
                absolute top-full left-0 w-full
                bg-[#0f0a19]/95 backdrop-blur-xl
                border-b border-purple-500/20
                shadow-lg shadow-black/20
                py-6 px-8
                flex-col items-start gap-6
                md:hidden
            `}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={handleNavigation}
                        className={linkClasses(link.name)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

        </nav>
    )
}

export default Navbar
