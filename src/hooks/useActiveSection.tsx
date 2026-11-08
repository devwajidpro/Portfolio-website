'use client'

import { useEffect, useState } from 'react'

export default function useActiveSection(): string {
    const [activeSection, setActiveSection] = useState<string>('Home')

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id

                        setActiveSection(sectionId)

                        window.history.replaceState(
                            null,
                            '',
                            `#${sectionId}`
                        )
                    }
                })
            },
            {
                rootMargin: '-30% 0px -60% 0px',
                threshold: 0,
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return activeSection
}