// // import React from "react";
// // class Parent extends React.Component{

// //     render(){
// //         return(
    
// //             <>
// //             </>
// //         )
    
        
// //     }
// // }
// // export default Parent;

// import Child from "./Child";
// const Parent = ()=>{
//     return (
//         // <Child   name="vishnu"/>
//         <Child arr = {[10,20,30,40]}/>
//     )
// }
// export default Parent;
import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <>
    <Child>
        <h1>I am Child Component</h1>
    </Child>
    </>
    
  )
}

export default Parent