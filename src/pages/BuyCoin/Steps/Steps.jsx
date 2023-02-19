import React from 'react'
import './Steps.scss'
import step1 from '../../../assets/step-1.png'
import step2 from '../../../assets/step-2.png'
import step3 from '../../../assets/step-3.png'
import step4 from '../../../assets/step-4.png'
import step5 from '../../../assets/step-5.png'
import step6 from '../../../assets/step-6.png'
import step7 from '../../../assets/step-7.png'
import step8 from '../../../assets/step-8.png'

const Steps = () => {
  return (
    <div className="max-wrapper margin-top steps-wrapper">
        <div className="max-wrapper__content steps">
          <div className="steps__step">
            <div className="steps__step--block">
              <div className="steps__step--block-content">
                <h1>STEP ONE</h1>
                <p>Find and Click DApps on the tab sections on your Wallet as seen in the image below</p>
              </div>
              <div>
                <img src={step1} alt="Step 1"/>
              </div>
            </div>
          </div>
          <div className="steps__step">
            <div className="steps__step--block display-right">
              <div>
                <h1>STEP TWO</h1>
                <p>Enter the web address <a href="https://pancakeswap.finance">https://pancakeswap.finance.</a></p>
              </div>
              <div>
                <img src={step2} alt="Step 2"/>
              </div>
            </div>
          </div>
          <div className="steps__step">
            <div className="steps__step--block">
              <div className="steps__step--block-content">
                <h1>STEP THREE</h1>
                <p>Connect wallet address following the popup on your screen. Once connected, ensure your network is set to Binance Smart Chain as seen:</p>
              </div>
              <div>
                <img src={step3} alt="Step 3"/>
              </div>
            </div>
          </div>
          <div className="steps__step">
            <div className="steps__step--block display-right">
              <div className="steps__step--block-content">
                <h1>STEP FOUR</h1>
                <p>Click on 'Trade Now' to go to the trading page:</p>
              </div>
              <div>
                <img src={step4} alt="Step 4"/>
              </div>
            </div>
          </div>
          <div className="steps__step">
            <div className="steps__step--block">
              <div className="steps__step--block-content">
                <h1>STEP FIVE</h1>
                <p>Select the token you are paying with, BNB is selected as seen in [1] below, click on [2] to add $TWD as the token you want to purchase:</p>
              </div>
              <div>
                <img src={step5} alt="Step 5"/>
              </div>
            </div>
          </div>
          <div className="steps__step">
            <div className="steps__step--block display-right">
              <div className="steps__step--block-content">
                <h1>STEP SIX</h1>
                <p>Paste $TWD contract address [1]: <span>0xf00cD9366A13e725AB6764EE6FC8Bd21dA22786e</span> as seen below and select TWD [2]</p>
              </div>
              <div>
                <img src={step6} alt="Step 6"/>
              </div>
            </div>
          </div>
          <div className="steps__step">
            <div className="steps__step--block">
              <div className="steps__step--block-content">
                <h1>STEP SEVEN</h1>
                <p>Enter the amount of BNB you want to purchase with [1] or enter the amount of $TWD you are buying [2] and click on Swap.</p>
              </div>
              <div>
                <img src={step7} alt="Step 7"/>
              </div>
            </div>
          </div>
          <div className="steps__step">
            <div className="steps__step--block display-right">
              <div className="steps__step--block-content">
                <h1>STEP EIGHT</h1>
                <p>Click on Confirm Swap to finalize transaction. Your purchased TWD will be credited to your wallet right away.</p>
              </div>
              <div className="steps__step--block-img">
                <img src={step8} alt="Step 8"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Steps