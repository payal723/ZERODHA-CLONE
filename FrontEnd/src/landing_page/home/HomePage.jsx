import React from 'react'
import Hero from './Hero'
import Award from './Award'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <>
        <Navbar/>
    <Hero />
    <Award />
    <Pricing />
    <Education/>
    <OpenAccount />
    <Footer/>
    </>
  )
}

export default HomePage