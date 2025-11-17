import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate =useNavigate();  // isse ham jo previous page tha vha ja skte h 
  const handleGoBack = ()=>{
    navigate(-1) ;
  }
//   console.log(error);

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      {error && <p>{error.data}</p>}
      {/* <NavLink to="/">
        <button> Go Home </button>
      </NavLink> */}
      <button className="btn" onClick={handleGoBack}>Go Back</button> //isse ham previous page pe ja skte h
    </div>
  );
};