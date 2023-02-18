import React from 'react'
import './Footer.scss'
import telegram_alt from '../../assets/telegram-alt.png'
import mail_alt from '../../assets/mail-alt.png'
import twitter_alt from '../../assets/twitter-alt.png'

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="max-wrapper">
            <div className="max-wrapper__content footer">
                <div className="footer__main">
                    <div className="footer__main--about">
                        <h1>About $TWD</h1>
                        <p>The Word Token has been created as God's strategy for the end-time wealth transfer and security - Securing the seven years Joseph Strategy for the coming famine.</p>
                    </div>
                    <div className="footer__main--links">
                        <h1>Get in touch</h1>
                        <div>
                            <a href='#'><img src={telegram_alt} alt="Telegram"/></a>
                            <a href='#'><img src={mail_alt} alt="Mail"/></a>
                            <a href='#'><img src={twitter_alt} alt="Twitter"/></a>
                        </div>
                    </div>
                </div>
                <div className="footer__links">
                    <div>
                        <h1>Navigation</h1>
                        <a href="#">Home</a>
                        <a href="#">About Token</a>
                        <a href="#">Buy Now</a>
                        <a href="#">Road Map</a>
                    </div>
                    <div>
                        <h1>External Links</h1>
                        <a href="#">Download Whitepaper</a>
                        <a href="#">View $TWD Chart</a>
                        <a href="#">Smart Contract Audit</a>
                        <a href="#">Liquidity</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-wrapper copyright-wrapper">
            <div className="max-wrapper__content copyright">
                <p>(C) The Word Token, 2023. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer