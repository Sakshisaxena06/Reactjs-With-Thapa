import React from "react";
import { useState } from "react";
export const State = () => {
//     let value =0;
//     const handleButtonClick =() =>{
//         value++;
//         console.log(value);
        
//     }
const [count, setCount] = useState(5);
console.log("Parent rendered");

const handleButtonClick =()=>{
    setCount(()=>count+1);
    console.log(count);
    
}
// console.log(count);

    return(
        <>
      <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increement</button>
      </div>
      <ChildComponent/>
        </>
    );
}
function ChildComponent() {
console.log("Child Component rendered");
return(<div className="main-div">
 
<h2>Child Component</h2> 
        </div>
        ) 
}