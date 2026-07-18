import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './uiFixes.css'
import { applyLanguageSelect } from './languageSelect.js'
import { applyHealthcareEnhancements } from './healthcareEnhancements.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

queueMicrotask(() => {
  applyLanguageSelect()
  applyHealthcareEnhancements()
})
