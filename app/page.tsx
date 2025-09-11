import React from 'react'
import Hero from './home/hero'
import About from './home/about'
import Services from './home/services'
import Banner from './home/banner'
import Awards from './home/awards'
import TestimonialsSlider from './home/testimonial'
import Consultant from './home/consultant'
import BlogSection from './home/blogs'
import Contact from './home/contact'

const Home = () => {

  
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Banner/>
      <Awards/>
      <TestimonialsSlider/>
      <Consultant/>
      <BlogSection/>
      <Contact/>
    </div>
  )
}

export default Home



