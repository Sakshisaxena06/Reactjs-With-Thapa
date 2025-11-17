import React, { useState } from "react";
// const users=[
//     {name:"sakshi",age:"18"},
//     {name:"anjali",age:"12"},
//     {name:"vansh",age:"13"},
// ]

export const DerivedState =() =>{
    const[users , setUsers] =useState([
    {name:"sakshi",age:18},
    {name:"anjali",age:12},
    {name:"vansh",age:13},
]);
console.log(users);
const userCount =users.length ;
const averageAge= users.reduce((accum, curElem)=> accum + (curElem.age), 0) / userCount;
    return (
        <div className="main-div">
            <h1>UserList</h1>
            <ul>{
    users.map((curElem , index) =>{
     return(
        <li key={index}> 
            {curElem.name} - {curElem.age} years old
        </li>
     )
    })}

  </ul>
  <p>Total User : {userCount}</p>
  <p>Average Age : {averageAge}</p>
        </div>
    );
};