// // import React from "react";
// // class Child extends React.Component{
// //     render(){
// //         return(
// //             <>
// //             my name is {this.props.name}
// //             </>
// //         )
// //     }
// // }
// import React from "react";
// const Child =(props) =>{
//     console.log(props);
//     return (

//         <>
//         {/* <h1>My Name is {props.name}</h1> */}
//         <h1>{props.arr}</h1>
//         </>
//     )
    
// }
// export default Child;
import React from 'react'

const Child = (props) => {
    console.log(props);
    
  return (
    <>
    {props.children}
    </>
  )
}

export default Child
