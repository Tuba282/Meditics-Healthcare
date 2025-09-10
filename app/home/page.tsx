import React from 'react'
import Hero from './hero'
import About from './about'
import Services from './services'
import Banner from './banner'
import Awards from './awards'
import TestimonialsSlider from './testimonial'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Banner/>
      <Awards/>
      <TestimonialsSlider/>
    </div>
  )
}

export default Home



