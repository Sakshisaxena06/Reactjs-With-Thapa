import "./ToggleSwitch.css";
import React, { useState } from "react";
export const ToggleSwitch = ()=>{
    const [isOn , setIsOn] = useState(false) ;
    const handleToggleSwitch = ()=>{
        setIsOn(!isOn) ;
    }
    return (
<> 
<h1 style = {{color: "#000", textAlign: "center"}}>Toggle Switch </h1>
<div className="toggle-switch"  style ={{backgroundColor:isOn ? "#4caf50":"#f44336"}} onClick={handleToggleSwitch}>
    <div className={`switch ${isOn ? "on" : "Off"}`}>
        <span className="switch-state">{isOn ? "on" : "Off"}</span>
    </div>
     </div>
     </>  
    )
}
