import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

const root = createRoot(document.querySelector('#root')) // createRoot(container!) if you use TypeScript
root.render(<App />)
