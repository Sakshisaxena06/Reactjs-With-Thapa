import React, { useState} from "react";

import "./index.css";
 export const ContactForm = () => {
    // const [username,setUsername] =useState("");
    // const [password,setPassword] = useState("");
    // const [message,setMessage] = useState("");
 
//     const handleFormSubmit =(event) => { 
//  event.preventDefault();
// const formData = {
//     username,
//    message,
//     password
// };
// console.log(formData);  
// }
 const [user,setUser] = useState({
    username : "",
    password:"",
    message:"",
 })
 const handleInputChange =(e) => {
    const {name,value} = e.target;
setUser((prev) => ({...prev ,[name] :value}));
 }
 const handleFormSubmit =(e)=> {
e.preventDefault();
console.log(user);
 }

    return(
        <div className="container">
            <div className="card">
                <h1>Contact Form </h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" value={user.username}
                    onChange={handleInputChange} />
                    {/* // onChange={(e) => setUsername(e.target.value)}  */}

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" required autoComplete="off" value={user.password}
                    onChange={handleInputChange}/>
                    {/* // onChange={(e) => setPassword(e.target.value)} */}

                    <label htmlFor="message" >Message</label>
               <textarea 
               type= "password"
               name = "message"
               required autoComplete="off"
               rows="6"
            //    onChange={(e) => setMessage(e.target.value)}
               value={user.message} 
               onChange={handleInputChange}  />
             
               <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
 }