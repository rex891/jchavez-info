import './index.css'

import React, { StrictMode, createElement } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // StrictMode({ children: App() })
  <StrictMode>
    <App />
  </StrictMode>
)
