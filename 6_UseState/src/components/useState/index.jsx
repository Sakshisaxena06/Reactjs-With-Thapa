import React from "react";
import "./Hooks.css";
import { useState } from "react";
export const Counter = () => {
    console.log(useState(5));
    
  return (
    <div
      className="container state-container"
      style={{ textAlign: "center" }}
    >
      <h1>useState Hook!</h1>
      <br />
      <p>Count</p>
      <button className="state-button">Increment</button>
    </div>
  );
};
