'use client'

import React from 'react'
import HomeSection from '@/sections/HomeSection'
import AboutSection from '@/sections/AboutSection'
import PortfolioSection from '@/sections/PortfolioSection'
import useActiveSection from '@/hooks/useActiveSection'

const Page = () => {

  useActiveSection()
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
    </div>
  )
}

export default Page
