import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Outlet from './outlet'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home