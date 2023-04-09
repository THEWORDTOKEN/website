import React, { useState, useEffect, useRef } from 'react'
import './Hero.scss'
import copy from '../../../assets/copy.png'
import { useClipboardToastContext } from '../../../context/clipboardToastContext'
import ClipboardToast from '../../../components/ClipboardToast/ClipboardToast'

const Hero = () => {

  const { show, showClipboardToast, removeClipboardToast } = useClipboardToastContext()

  const copyToClipboard = () => {
    const clipboardValue = '0xf00cD9366A13e725AB6764EE6FC8Bd21dA22786e';
    navigator.clipboard.writeText(clipboardValue);

    showClipboardToast()
  }

  console.log("Hero")

  return (
    <div className="max-wrapper margin-top">
      <div className="max-wrapper__content buycoin-hero">

        {show && <ClipboardToast message="Copied to clipboard!" removeClipboardToast={removeClipboardToast} />}

        <div className="buycoin-hero__title">
          <h1>HOW TO BUY $TWD ON PANCAKESWAP.</h1>
        </div>
        <div className="buycoin-hero__subtitle">
          <h2>The Word Token ($TWD)</h2>
          <div className="buycoin-hero__subtitle--contract">
            <span>Contract Address:</span>
            <div>
              <a href="https://bscscan.com/address/0xf00cd9366a13e725ab6764ee6fc8bd21da22786e">0xf00cD9366A13e725AB6764EE6FC8Bd21dA22786e</a>
              <img src={copy} alt="Copy" onClick={copyToClipboard} />
            </div>
          </div>
        </div>
        <div className="buycoin-hero__summary">
          <div><span className="hero__summary--title">Network:</span><span className="buycoin-hero__summary--value buycoin-hero__summary--value-1">BSC</span></div>
          <div><span className="hero__summary--title">Slippage:</span><span className="buycoin-hero__summary--value buycoin-hero__summary--value-2">7%</span></div>
        </div>
      </div>
    </div>
  )
}


export default Hero