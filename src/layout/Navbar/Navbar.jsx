import React, { useState, useEffect } from 'react'
import logo from '../../assets/twt-logo.png'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { accordion_nav } from '../../utils/accordion'
import { socialLinks, utilitiesLinks } from './NavbarData'

const Navbar = () => {

  // current state of the side menu bar
  const [click, setClick] = useState(false)

  const clickHandler = () => {
    setClick(true)
  }
  const removeHandler = () => {
    setClick(false)
  }


  useEffect(() => {
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
              <div className="navigation__links--link__item">
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
                  {
                    utilitiesLinks.map((utilitiesLink, index) => (
                      <div key={index}><Link to={utilitiesLink.url}>{utilitiesLink.label}</Link></div>
                    ))
                  }
                </div>
              </div>
            </div>
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

      {/* Mobile Navigation  */}

      <nav className={click ? "mobile-navigation active" : "mobile-navigation"}>
        <div className="mobile-navigation__title">
          <Link to='/'><img src={logo} alt="The Word Token logo" /></Link>
          <span className="material-icons navigation__menu" onClick={removeHandler}>close</span>
        </div>
        <div className="mobile-navigation__links">
          <div className="mobile-navigation__links--link"><Link to='/' onClick={removeHandler}>Home</Link></div>
          <div className="mobile-navigation__links--link"><Link to='/#about-token' onClick={removeHandler}>About Token</Link></div>

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
              {
                utilitiesLinks.map((utilitiesLink, index) => (
                  <div key={index} className="mobile-navigation__sublink"><a href={utilitiesLink.url} onClick={removeHandler}>{utilitiesLink.label}</a></div>
                ))
              }
            </div>
          </div>
          <div className="mobile-navigation__links--link"><Link to='/buycoin' onClick={removeHandler}>How to Buy</Link></div>
          <div className="mobile-navigation__links--link"><a href='/#roadmap' onClick={removeHandler}>Road Map</a></div>
        </div>

        <div className="mobile-navigation__connect">
          <h1>Get in Touch</h1>
          <div>
            {
              socialLinks.map((socialLink, index) => (
                <a onClick={removeHandler} href={socialLink.url} target="_blank" key={index}>
                  <img src={socialLink.img} alt={socialLink.alt} />
                </a>
              ))
            }
          </div>
        </div>
      </nav>

      {/* Navigation Backdrop */}

      <div className={click ? "mobile-navigation-backdrop active" : "mobile-navigation-backdrop"} onClick={removeHandler}></div>
      
    </>

  )
}

export default Navbar