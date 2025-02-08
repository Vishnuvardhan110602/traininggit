// import React,{useState} from 'react'


// const State=()=> {
//   let [state, setState]=useState(0)
//   let Inc =()=>{
//     setState(state+1)
//   }
//   let Dec =()=>{
//     setState(state-1)
//   }
//   let Res =()=>{
//     setState(0)
//   }

//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={Inc}>Inc</button>
//       <button onClick={Dec}>Dec</button>
//       <button onClick={Res}>Res</button>
//     </div>
//   )
// }

// export default State
import { useState } from "react"
let [name,setName]=useState('')
let [password,setPassword]=useState('')
let demo=()=>{
  e.preventdefault()
  console.log(name, password);
  (name === "admin"&& password==="1234")?windows.open('http://www.pixabay.com'):windows.locaton.reload()
  
}
const State = () => {

  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id='name' onChange={(e)=>{setName(e.target.value)}}/>
        <br/>
        <label htmlFor="password">Password </label>
        <input type="password" name="password" id='password' onChange={(e)=>{setName(e.target.value)}}/>
        <br/>
        <button onClick={demo}>Submit</button>
      </form>
    </div>
  )
}

export default State