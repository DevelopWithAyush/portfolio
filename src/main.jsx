import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HandleState from './hooks/HandleState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HandleState>
      <App />
</HandleState>
  </StrictMode>,
)
