// import React, { useRef } from 'react'

// const Ref = () => {
//     let demo =useRef()
//     console.log(demo.current);
//     demo.current.style.backgroundColor="yellow"
//     demo.current.style.textAlign="center"
//   return (
//     <div>
//         <>
//         <h1 ref={demo}>Hello World</h1>
//         </>
//     </div>
//   )
// }

// export default Ref
import React, { useRef, useState } from 'react'
import video from './video1.mp4'
const Ref = () => {
    let ref1 = useRef()
    console.log(ref1.current);
    let [state, setState] =useState(true)
    let demo = ()=>{
        setState(!state)
        state === true? ref1.current.play() : ref1.current.pause()
    }

  return (
    <div>
        <video ref={ref1} src="video" onClick={demo} ></video>
    </div>
  )
}

export default Ref