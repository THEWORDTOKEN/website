import React from 'react'
import './Hero.scss'
import download from '../../../assets/download.png'


const Hero = () => {
  return (
    <header className="max-wrapper margin-top">
      <div className="max-wrapper__content hero">
        <div className="hero__title">
          <div className="hero__title--h1"><h1>Welcome onboard your journey to Kingdom Wealth Creation.</h1></div>
          <div className="hero__title--image"><img src={download} alt="download" className="hero__download--icon-mobile"/></div>
        </div>
        <div className="hero__content">
          <div className="hero__content--main">
            <p>The Word Token $TWD is a community-driven BSC project 
providing unique read to earn opportunities for users, by utilizing Web 3 e-library and publishing platforms, staking opportunities for rewards, and social ecosystem for networking among community members.</p>
            <div><img src={download} alt="download" className="hero__download--icon"/></div>
            <a href="https://thewordtoken.com/THE-WORD-TOKEN-WHITEPAPER-V1.pdf" target="_blank">
              <button className="btn-black">Read our white paper</button>
            </a>
          </div>
          <div className="hero__content--stats">
            <div className="hero__content--stats__box">
              <div className="hero__content--stats__box--box">
                <h1>100B</h1>
                <p>Total Supply</p>
              </div>
            </div>
            <div className="hero__content--stats__box">
              <div className="hero__content--stats__box--box">
                <h1>38B</h1>
                <p>Circulating Supply</p>
              </div>
            </div>
            <div className="hero__content--stats__box">
              <div className="hero__content--stats__box--box">
                <h1>30B</h1>
                <p>Locked for 7 Years</p>
              </div>
            </div>
            <div className="hero__content--stats__box">
              <div className="hero__content--stats__box--box">
                <h1>32B</h1>
                <p>Burnt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
