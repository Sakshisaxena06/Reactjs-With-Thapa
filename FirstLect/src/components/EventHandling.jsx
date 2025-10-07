import "./EV.css" ;

import React from "react";
export const EventHandling = () =>{
    // function handleButtonClick(){
    //     alert("Hey i am onClick Event") ;
    // }
    const handleButtonClick = () => {
        alert("Hey i am on click event") ;
    } ;
    const handleWelcomeUser =() => {
        console.log("Welcome");
        
    }
return (
<>
<button onClick={handleButtonClick}>click me</button>
<br/>
<button onClick={() => handleButtonClick()}>click me 2 </button> 
<br />
<button onClick={(event) => console.log(event)}>Inline Function </button> 
<br />
<button onClick={()=> alert("Hey i am inline event")}>Inline Arr function</button>
<br />
{/* // passing argument to event Handlers  */}
<button onClick={handleWelcomeUser}>click me </button>
</>
);
};