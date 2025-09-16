import React from "react";
/* <h1>Sakshi</h1>  */
// export const App = () => {
// return <h1>Sakshi</h1> ;
// } ;
// console.log(React.createElement("h1" , null , "Sakshi"));
// import  NetflixSeries ,{ Footer} from "./components/NetflixSeries"
import NetflixSeries from "./components/NetflixSeries";

import "./components/Netflix.css"
  export const App = () => {
   return (
    <section className="container">
      <h1 className="card-heading" >List of best Netflix series </h1>
      <NetflixSeries />
         {/* <NetflixSeries /> */}
         {/* <Footer/> */}
    </section>
  );
};


export default App;