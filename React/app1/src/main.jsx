import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cbc from './Component/Cbc.jsx'
import Fbc from './Component/Fbc.jsx'
import MySelf from './Component/MySelf.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Cbc/>
    <Fbc/>
   <MySelf/>
  </StrictMode>,
)
