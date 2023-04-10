import React, { memo, useLayoutEffect } from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'
import Connect from '../Home/Connect/Connect'
import Hero from './Hero/Hero'
import Steps from './Steps/Steps'
import { useLocation } from 'react-router-dom'

const BuyCoin = () => {

  const location = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [ location.pathname ]);

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

export default memo(BuyCoin)