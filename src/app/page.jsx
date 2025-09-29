import Footer from '@/Components/Footer'
import AllCollections from '@/Pages/AllCollections'
import HeroSection from '@/Pages/HeroSection'

import React from 'react'

const page = () => {
  return (
    <div>
    <HeroSection/>
      <AllCollections/>
      <Footer/>
    </div>
  )
}

export default page