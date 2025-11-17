import React from "react";
import "../Hooks.css";
import { useState } from "react";
export const Counter = () => {
  // console.log(useState(5));
  const [count, setCount] = useState(0);
  const handleIncreement = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="container state-container" style={{ textAlign: "center" }}>
      <h1>useState Hook!</h1>
      <br />
      <p>{count}</p>
      {/* <button className="state-button" onClick={() => setCount(count+1)}>Increment</button> */}
      <button className="state-button" onClick={handleIncreement}>
        Increment
      </button>
    </div>
  );
};
