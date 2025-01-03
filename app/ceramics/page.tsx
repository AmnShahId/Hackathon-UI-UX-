import React from 'react'
import BackToTopButton from '../Components/Backtotop'
import Navbar from '../Components/Header'
import Hero from '../Components/Hero'
import Hero2 from '../Components/Hero2'
import Hero3 from '../Components/Hero3'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Footer/>

        <BackToTopButton/>
        
    </div>
  )
}

export default page