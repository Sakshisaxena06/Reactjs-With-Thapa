import React from "react";
import { useId } from "react";

export const UseId=()=>{
    // const usernameId = useId();
    // const emailId= useId();

    const id=useId();
   return(
      <form >
        <div>
            <label htmlFor={ id + "usernameId"} > Username : </label>
            <input type="text" id={ id + "usernameId"}   name="name" />
        </div>

        <div>
        <label htmlFor={ id +"emailId"} >Email :</label>
        <input type="email" id={ id + "emailId"} name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
}