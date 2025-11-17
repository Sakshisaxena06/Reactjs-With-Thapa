import "./index.css"
import React, { useEffect, useState } from "react"
export const LoginForm = ()=>{
     const [user,setUser] = useState({
        username:"",
        password:"",
     });
    //  const [password,setPassword] = useState("");

    useEffect(()=> {
        const storedUser = localStorage.getItem("loginUser");
        if(storedUser){
        setUser(JSON.parse(storedUser));
        }
    },[]);
     const handleInput = (e)=> {
        const {name,value} =e.target;
   setUser((prev) => ({...prev,[name]:value}));

     }
     const handleFormSubmit =(e)=>{
     e.preventDefault();
   console.log(user);
  localStorage.setItem("loginUser", JSON.stringify(user));

    alert("Login details saved to local storage!");
  };
     
    return (
        <div className="container">
            <div className="card">
                <h1>Login Form </h1>
                <form   onSubmit={handleFormSubmit} >
                    <label htmlFor="username">Username</label>
                    <input type="text"
                     name="username"
                     required autoComplete="off" 
                     value={user.username}
                      onChange={handleInput}/> 
                    
                    <label htmlFor="password">Password</label>
                    <input type="text" 
                    name="password"
                     required autoComplete="off" 
                     value={user.password} 
                     onChange={handleInput} />
                    <button type ="submit" 
                  >Login</button>
                     </form>
            </div>
        </div>
    )
}