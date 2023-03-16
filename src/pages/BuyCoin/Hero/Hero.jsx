import React, { useState, useEffect, useRef } from 'react'
import './Hero.scss'
import copy from '../../../assets/copy.png'

const Hero = () => {

  // clipboard click state
  const [click, setClick] = useState(false)

  const copyToClipboard = () => {
    setClick(true);
    const clipboardValue = '0xf00cD9366A13e725AB6764EE6FC8Bd21dA22786e';
    navigator.clipboard.writeText(clipboardValue);
  }

  const removeClipboardToast = () => setClick(false)


  return (
    <div className="max-wrapper margin-top">
      <div className="max-wrapper__content buycoin-hero">

        {click && <ClipboardToast removeClipboardToast={removeClipboardToast} />}

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

// Clipboard Toast

const ClipboardToast = ({ removeClipboardToast }) => {

  const toastRef = useRef()

  useEffect(() => {
    const toast = toastRef.current;
    toast.classList.add('move-up')

    const toastAnimationTimer = setTimeout(() => {
      toast.classList.remove('move-up')
      toast.classList.add('move-down')
    }, 2750)

    // timer to unmount component
    const timer = setTimeout(() => {
      removeClipboardToast()
    }, 3000)

    return () => {
      clearTimeout(toastAnimationTimer)
      clearTimeout(timer)
    };
  }, [])

  return (
    <div className="clipboard-toast" role='alert'>
      <div className="clipboard-tooltip" role='alert' ref={toastRef}>
        <p>Copied to clipboard!</p>
        <span className="clipboard-tooltip-close" onClick={removeClipboardToast}>
          <span className="material-icons">close</span>
        </span>
      </div>
    </div>
  )
}

export default Hero