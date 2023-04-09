import React, { useEffect, useRef } from 'react'



const ClipboardToast = ({ message, removeClipboardToast }) => {

  const toastRef = useRef()

  useEffect(() => {
    toastRef.current.classList.add('move-up')

    const toastAnimationTimer = setTimeout(removeClipboardToastHandler, 3000)

    return () => clearTimeout(toastAnimationTimer)
  }, [])

  const removeClipboardToastHandler = () =>{
    toastRef.current.classList.remove('move-up')
    toastRef.current.classList.add('move-down')

    toastRef.current.onanimationend = () =>{
      removeClipboardToast()
    }
  }

  return (
    <div className="clipboard-toast" role='alert'>
      <div className="clipboard-tooltip" role='alert' ref={toastRef}>
        <p>{message}</p>
        <span className="clipboard-tooltip-close" onClick={removeClipboardToastHandler}>
          <span className="material-icons">close</span>
        </span>
      </div>
    </div>
  )
}

export default ClipboardToast