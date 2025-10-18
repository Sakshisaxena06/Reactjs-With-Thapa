import React from "react";
import "./CleanUp.css"
import { useState } from "react";
import { useEffect } from "react";
export const CleanUp =()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
         const timer= setInterval(() =>{
            setCount((prev) => prev+1);
        },1000);
        return ()=> clearInterval(timer);
    },[])
    return(
        <div className="container">
            <div className="counter">
                <p>Followers on Insta </p>
                <div className="odometer" id="odometer">{count}</div>
                <h3 className="title" >Followers <br/> Real Time Counter</h3>
            </div>
        </div>
    )
}