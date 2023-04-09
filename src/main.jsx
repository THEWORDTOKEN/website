import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { ClipboardToastProvider } from './context/clipboardToastContext'


ReactDOM.createRoot(document.getElementById('root')).render(
<ClipboardToastProvider>
    <App />
</ClipboardToastProvider>
);
