import { createContext, useContext, useState } from 'react'

const ClipboardToastContext = createContext(undefined)

export const ClipboardToastProvider = ({ children }) =>{

    const [show, setShow] = useState(false)

    return (
    <ClipboardToastContext.Provider value={{ show, showClipboardToast: () => setShow(true), removeClipboardToast: () => setShow(false)}}>
        { children }
    </ClipboardToastContext.Provider>
    )

}

export const useClipboardToastContext = () => useContext(ClipboardToastContext)