import React from "react";

export const ParentComponent =() => {
    return (
        <section
        className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white`}
        >
            <h1>component</h1>
            <ChildComponent data="React JS " />
        </section>
    )
}
const ChildComponent =(props) =>{
    return(
        <>
        <h1>Helllll A</h1>
        <GrandChildComponent data ={props.data}/>
        </>
    )
}

const GrandChildComponent =(props) =>{
    return(
        <>
        <h1>Helllllo  B</h1>
        <GrandGrandChildComponent data ={props.data}/>
        </>
    )
}

const GrandGrandChildComponent =(props) =>{
    return(
        <>
        <h1>Helllllo , I am {props.data}</h1>
  
        </>
    )
}