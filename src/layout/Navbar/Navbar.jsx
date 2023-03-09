import React, { useState, useEffect } from 'react'
import logo from '../../assets/twt-logo.png'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import telegram from '../../assets/telegram.png'
import twitter from '../../assets/twitter.png'
import mail from '../../assets/mail.png'
import discord from '../../assets/discord.png'
import tiktok from '../../assets/tiktok.png'
import youtube from '../../assets/youtube.png'
import { accordion_nav } from '../../utils/accordion'

const Navbar = () => {

  // current state of the side menu bar
  const [click, setClick] = useState(false)

  const clickHandler = () => {
    setClick(true)
  }
  const removeHandler = () => {
    setClick(false)
  }

  
  useEffect(()=>{
    accordion_nav(".mobile-navigation__accordion-title")
  }, [])

  return (
    <>
      {/* Desktop Navigation */}

      <nav className="max-wrapper">
        <div className="max-wrapper__content navigation">
          <div className="navigation__logo">
            <Link to='/'><img src={logo} alt="The Word Token logo" /></Link>
          </div>
          <div className="navigation__links">
            <a href='#about-token'>About Token</a>
            <div className="navigation__links--link">
              <div class="navigation__links--link__item">
                <span>$TWD MarketPlace</span>
                <span className="material-icons"> expand_more </span>
                <div className="navigation-dropdown">
                  <div><a href="https://t.me/TWDP2P" target="_blank">Peer to Peer MarketPlace</a></div>
                  <div><Link to='/merch'>Buy $TWD Merch</Link></div>
                </div>
              </div>
            </div>
            <div className="navigation__links--link">
              <div className="navigation__links--link__item">
                <span>Utilities</span>
                <span className="material-icons"> expand_more </span>
                <div className="navigation-dropdown">
                  <div><a href='https://app.thewordtoken.com/'>Staking</a></div>
                  <div><Link to='/'>Read-to-Earn</Link></div>
                  <div><Link to='/'>AI Model</Link></div>
                  <div><Link to='/'>Social Ecosystem</Link></div>
                  <div><Link to='/'>Building Goshen</Link></div>
                </div>
              </div>
            </div>
            {/* <Link to='/merch'>Merch</Link> */}
            {/* <a href='https://solidity.finance/audits/THEWORD/' target="_blank">Audit</a> */}
            <Link to='/buycoin'>How to Buy</Link>
            <a href='#roadmap'>Road Map</a>
            <a href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=BNB&outputCurrency=0xf00cD9366A13e725AB6764EE6FC8Bd21dA22786e" target="_blank">
              <button className="btn">Buy Now</button>
            </a>
          </div>
          <span className="material-icons navigation__menu" onClick={clickHandler}>menu</span>
        </div>
      </nav>

      {/* Navigation Backdrop */}

      <div className={click ? "mobile-navigation-backdrop active" : "mobile-navigation-backdrop"} onClick={removeHandler}></div>

      {/* Mobile Navigation  */}
      <nav className={click ? "mobile-navigation active" : "mobile-navigation"}>
        <div className="mobile-navigation__title">
          <Link to='/'><img src={logo} alt="The Word Token logo" /></Link>
          <span className="material-icons navigation__menu" onClick={removeHandler}>close</span>
        </div>
        <div className="mobile-navigation__links">
          <div className="mobile-navigation__links--link"><Link to='/' onClick={removeHandler}>Home</Link></div>
          <div className="mobile-navigation__links--link"><a href='/#about-token' onClick={removeHandler}>About Token</a></div>
          <div className="mobile-navigation__accordion">
            <h3 className="mobile-navigation__accordion-title mobile-navigation__links--link">$TWD MARKETPLACE <span><span className="material-icons mobile-navigation-accordion-indicator">expand_more</span></span></h3>
            <div className="mobile-navigation__accordion-content">
              <div className="mobile-navigation__sublink"><a href="https://t.me/TWDP2P" target="_blank" onClick={removeHandler}>P2P MarketPlace</a></div>
              <div className="mobile-navigation__sublink"><Link to='/merch' onClick={removeHandler}>$TWD Merch</Link></div>
            </div>
          </div>
          <div className="mobile-navigation__accordion">
            <h3 className="mobile-navigation__accordion-title mobile-navigation__links--link">UTILITIES <span><span className="material-icons mobile-navigation-accordion-indicator">expand_more</span></span></h3>
            <div className="mobile-navigation__accordion-content">
              <div className="mobile-navigation__sublink"><a href='https://app.thewordtoken.com/' onClick={removeHandler}>Staking</a></div>
              <div className="mobile-navigation__sublink"><Link to='/' onClick={removeHandler}>Read-to-Earn</Link></div>
              <div className="mobile-navigation__sublink"><Link to='/' onClick={removeHandler}>AI Model</Link></div>
              <div className="mobile-navigation__sublink"><Link to='/' onClick={removeHandler}>Social Ecosystem</Link></div>
              <div className="mobile-navigation__sublink"><Link to='/' onClick={removeHandler}>Building Goshen</Link></div>
            </div>
          </div>
          <div className="mobile-navigation__links--link"><Link to='/buycoin' onClick={removeHandler}>How to Buy</Link></div>
          <div className="mobile-navigation__links--link"><a href='/#roadmap' onClick={removeHandler}>Road Map</a></div>
        </div>
        <div className="mobile-navigation__connect">
          <h1>Get in Touch</h1>
          <div>
            <a href="https://t.me/thewordcryptotoken" target="_blank">
              <img src={telegram} alt="The Word Token Telegram Link" />
            </a>
            <a href="https://twitter.com/newTWDtoken" target="_blank">
              <img src={twitter} alt="The Word Token Twitter Link" />
            </a>
            <a href='mailto:Support@thewordtoken.com' target='_blank'>
              <img src={mail} alt="The Word Token Mail Link" />
            </a>
            <Link>
              <img src={tiktok} alt="The Word Token Tiktok Link" />
            </Link>
            <Link>
              <img src={discord} alt="The Word Token Discord Link" />
            </Link>
            <Link>
              <img src={youtube} alt="The Word Token Youtube Link" />
            </Link>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar