import React from "react";
import "./index.css";
import { useState,useEffect} from "react";
export const Challenge=()=>{
    const [count,setCount] = useState(0);
    const [name,setName] = useState("sakshi");
    

    useEffect(()=>{
document.title =`count : ${count}`
    },[count]);
    useEffect(()=>{
console.log(name);

    },[name])
    return(
        <div className="container effect-container">
            <h1>useEffect Challenge</h1>
            <p> Count : <span>{count}</span>
            </p>
            <button onClick={(e) => setCount(count+1)}>Increement</button>
            <p>Name : <span>{name}</span>
            </p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}