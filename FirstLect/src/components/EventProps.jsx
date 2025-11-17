import React from "react";


export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`) ;
    } ;
    const handleHover = (user) => {
        alert(`Hey thnx for Hovering me `) ;
    } ;

    return (
        <>
        <WelcomeUser onClick = {() => HandleWelcomeUser("Vinod")} onMouseEnter={handleHover} />
        </>
    )
}
const WelcomeUser = (props) => {
    const {onClick , onMouseEnter} = props ;
    const handleGreeting = ()=>{
        console.log(`Hey`);
        onClick();
        
    }
    return(
        <>
        <button onClick={onClick}>Click</button> 
        {/* eithter we can write  <button onClick={props.onClick}>Click</button>  */}
        <br/>
            <button onMouseEnter={onMouseEnter}>hover me</button>
            <br/>
                <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}