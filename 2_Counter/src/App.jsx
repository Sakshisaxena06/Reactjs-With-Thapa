import "./components/EV.css" ;
import { DerivedState } from "./components/hooks/DerivedState";
import {State} from "./components/hooks/State";
import React from "react";
import { LiftingState } from "./components/LiftStateUp";
export const App =() =>{
  return <section className="container">
{/* <State/> */}
{/* <DerivedState/> */}
<LiftingState/>
  </section>
}
export default App; 