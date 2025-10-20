// import React from "react";
// import "./index.css" ;
// import { useEffect,useState } from "react";
//  export const ReactUseEffect = () => {
//     const [count,setCount] =useState(0);
//     useEffect(() => {
//         console.log(count);
        
//     },[count]);
//     return (
//         <div className="container effect-container">
//        <h1>useEffect hook</h1>
//        <p>Count : {count }</p>
//        <button onClick={()=>setCount(count+1)}>Increment</button>
//         </div>
//     )
//  }
 import React from "react";
import "./index.css" ;
 import { useEffect,useState } from "react";
 export const ReactUseEffect = () => {
    const [date,setDate]=useState(0);

    useEffect(()=>{
    setInterval(()=>{
            const updateDate = new Date();
        setDate(updateDate.toLocaleTimeString());
    },1000);
    },[]);


    return (
      <div className="container effect-container">
        <h1> Date : {date}</h1>
         </div>
    )
 }