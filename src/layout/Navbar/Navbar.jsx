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
            <a href='#audit'>Audit</a>
            <Link to='/buycoin'>How to Buy</Link>
            <a href='#roadmap'>Road Map</a>
            <Link>
              <button className="btn">Buy Now</button>
            </Link>
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
          <Link to='/'>Home</Link>
          <a href='#about-token'>About Token</a>
          <a href='#audit'>Audit</a>
          <Link to='/buycoin'>How to Buy</Link>
          <a href='#roadmap'>Road Map</a>
        </div>
        <div className="mobile-navigation__connect">
          <h1>Get in Touch</h1>
          <div>
            <Link>
              <img src={telegram} alt="The Word Token Telegram Link" />
            </Link>
            <Link>
              <img src={twitter} alt="The Word Token Twitter Link" />
            </Link>
            <Link>
              <img src={mail} alt="The Word Token Mail Link" />
            </Link>
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