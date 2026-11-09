'use client'

import React from 'react'
import HomeSection from '@/sections/HomeSection'
import AboutSection from '@/sections/AboutSection'
import PortfolioSection from '@/sections/PortfolioSection'
import useActiveSection from '@/hooks/useActiveSection'
import ContactSection from '@/sections/ContactSection'

const Page = () => {

  useActiveSection()
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}

export default Page
