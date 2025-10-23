import React, { forwardRef, useId, useRef } from "react";
export const ForwardRefs=()=>{

    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value,password.current.value);
        
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <BeforeReact19Input label="username" ref={username}/>
            <BeforeReact19Input label ="password" ref={password}/>
            <button>Submit</button>
        </form>
    )
}

const BeforeReact19Input = forwardRef((props,ref)=>{
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={ref} />
        </div>
    )

});