import React, { useState } from 'react'
import logo from '../../assets/twt-logo.png'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import telegram from '../../assets/telegram.png'
import twitter from '../../assets/twitter.png'
import mail from '../../assets/mail.png'
import discord from '../../assets/discord.png'
import tiktok from '../../assets/tiktok.png'
import youtube from '../../assets/youtube.png'

const Navbar = () => {

  const [click, setClick] = useState(false)

  const clickHandler = () => {
    setClick(true)
  }
  const removeHandler = () => {
    setClick(false)
  }

  return (
    <>
      <nav className="max-wrapper">
        <div className="max-wrapper__content navigation">
          <div className="navigation__logo">
            <img src={logo} alt="The Word Token logo" />
          </div>
          <div className="navigation__links">
            <Link to='/'>Home</Link>
            <a href='#about-token'>About Token</a>
            <Link to='https://solidity.finance/audits/THEWORD/'>Merch</Link>
            <Link to='/buycoin'>How to Buy</Link>
            <a href='#roadmap'>Road Map</a>
            <a href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=BNB&outputCurrency=0xf00cD9366A13e725AB6764EE6FC8Bd21dA22786e" target="_blank">
              <button className="btn">Buy Now</button>
            </a>
          </div>
          <span className="material-icons navigation__menu" onClick={clickHandler}>menu</span>
        </div>
      </nav>

      <div className={click ? "mobile-navigation-backdrop active" : "mobile-navigation-backdrop"} onClick={removeHandler}></div>

      <nav className={click ? "mobile-navigation active" : "mobile-navigation"}>
        <div className="mobile-navigation__title">
          <img src={logo} alt="The Word Token logo" />
          <span className="material-icons navigation__menu" onClick={removeHandler}>close</span>
        </div>
        <div className="mobile-navigation__links">
          <Link to='/' onClick={removeHandler}>Home</Link>
          <a href='/#about-token' onClick={removeHandler}>About Token</a>
          <a href='https://solidity.finance/audits/THEWORD/' target="_blank" onClick={removeHandler}>Merch</a>
          <Link to='/buycoin' onClick={removeHandler}>How to Buy</Link>
          <a href='/#roadmap' onClick={removeHandler}>Road Map</a>
        </div>
        <div className="mobile-navigation__connect">
          <h1>Get in Touch</h1>
          <div>
            <a href="https://t.me/thewordcryptotoken" target="_blank">
              <img src={telegram} alt="The Word Token Telegram Link" />
            </a>
            <a href="https://twitter.com/twdtoken" target="_blank">
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