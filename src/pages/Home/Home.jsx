import React, { useLayoutEffect } from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import Hero from './Hero/Hero'
import Twt from './Twt/Twt'
import Utility from './Utility/Utility'
import TwtChart from './TwtChart/TwtChart'
import Roadmap from './Roadmap/Roadmap'
import Faqs from './Faqs/Faqs'
import Connect from './Connect/Connect'
import Footer from '../../layout/Footer/Footer'
import { useLocation } from 'react-router-dom'

const Home = () => {
  
  const location = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [ location.pathname ]);

  return (
    <>
      <Navbar/>
      <Hero/>
      <Twt/>
      <Utility/>
      {/* <TwtChart/> */}
      <Roadmap/>
      <Faqs/>
      <Connect/>
      <Footer/>
    </>
  )
}

export default Home