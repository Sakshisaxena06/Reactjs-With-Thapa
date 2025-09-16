//   const NetflixSeries = () => {
//     const name = "Demon SLayer";
//     const summary ="A Nezuko and Tanjiro Demon Slayer wallpaper typically features the younger sister Nezuko, who was transformed into a demon but retains her human side, and her older brother Tanjiro, who strives to find a cure and protect her. Wallpapers often depict their strong, unbreakable sibling bond, showcasing them in various artistic styles from official art to fan-made designs";
//     let age = 16; 
//     let canwatch = "Not Available";
//     if(age >=18) canwatch =" Watch now "
//     return (
//         <div>
//              <div>
//                 <img src="image.png" alt="image.png" />
//              </div>
//              <h2>Name : {name}</h2>
//              <h3>Rating : 9.0</h3>
//              <p>
//                 Summary : {summary} 
//              </p>
//            {/* <button> { age >= 18 ? "Watch Now " : "Not Available"} </button>  this alse a method  */}
//              <button> {canwatch}</button>
//         </div>
//     );
// };
// export default NetflixSeries;

// export const Footer = ()=> {
//     return <p>copyright @sakshi </p>
// };

import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import React from "react";

const NetflixSeries = () => {
  return (
    <ul class="grid grid-three--cols">
  
      {seriesData.map((curElem) =>( <SeriesCard  key = {curElem.id} curElem = {curElem} />       
     ) )}
    </ul>
  );
};


export default NetflixSeries;



