import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comp1 from './styles/comp1'
import '../src/styles/external.css'

import External from './styles/External'
import Ref from './UseRef/Ref'
// import './index.css'
// import App from './App.jsx'
// import Parent from './props/Parent.jsx'
// import State from './State/State.jsx'
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
   {/* <State/>
   <Parent/> */}
   {/* <Inline/> */}
   {/* <Comp1/> */}
   {/* <External/> */}
   <Ref/>
  </StrictMode>,
)
