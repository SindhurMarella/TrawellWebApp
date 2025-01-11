import React, { useState } from 'react'
import Hero from '../components/Hero'
import PopularDestinations from '../components/PopularDestinations'
import Features from '../components/Features'

function Home() {
  return (
    <div>
      <Hero />
      <PopularDestinations />
      <Features />
    </div>
  )
}

export default Home