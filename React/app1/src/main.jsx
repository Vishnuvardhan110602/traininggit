import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Parent from './props/Parent.jsx'
// import Cbc from './Component/Cbc.jsx'
// import Fbc from './Component/Fbc.jsx'
// import MySelf from './Component/MySelf.jsx'
// import Props from './props/Props.jsx'
// import Child from './props/Child.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Cbc/>
    <Fbc/>
    <Props/>
   <MySelf/>
   <Child/> */}
   <State/>
   {/* <Parent/> */}
  </StrictMode>,
)
