import React from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'
import Connect from '../Home/Connect/Connect'
import Hero from './Hero/Hero'
import Steps from './Steps/Steps'
const BuyCoin = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Steps/>
      <Connect/>
      <Footer/>
    </>
  )
}

export default BuyCoin