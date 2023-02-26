import React from 'react'
import './Connect.scss'
import telegram from '../../../assets/telegram.png'
import twitter from '../../../assets/twitter.png'
import mail from '../../../assets/mail.png'
import discord from '../../../assets/discord.png'
import tiktok from '../../../assets/tiktok.png'
import youtube from '../../../assets/youtube.png'
const Connect = () => {
  return (
    <section className="max-wrapper margin-top">
       <div className="max-wrapper__content connect">
            <div className="connect__title">
                <h1>We can't wait to connect with you!</h1>
            </div>
            <div className="connect__links">
                <div>
                <a href="https://t.me/thewordcryptotoken">
                    <img src={telegram} alt="The Word Token Telegram link"/>
                </a>
                <a href="https://twitter.com/twdtoken">
                    <img src={twitter} alt="The Word Token Twitter link"/>
                </a>
                <a href="mailto:Support@thewordtoken.com">
                    <img src={mail} alt="The Word Token Mail link"/>
                </a>
                <a href="#">
                    <img src={discord} alt="The Word Token Discord link"/>
                </a>
                <a href="#">
                    <img src={tiktok} alt="The Word Token Tiktok link"/>
                </a>
                <a href="#">
                    <img src={youtube} alt="The Word Token Youtube link"/>
                </a>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Connect