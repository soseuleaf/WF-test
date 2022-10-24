/**
 * proj_path: ch06/ex/proj/ex-02-1
 * ./src/components/StarRating.js
 */

// import modules
import { useState } from "react";
import Star from "./Star";

const createArray = length => [...Array(length)];

const StarRating = ({ totalStars = 5 }) => {
  // state variable: selectedStars with default value 3
  // state update function: setSelectedStars
  const [selectedStars, setSelectedStars] = useState(3);
  const [overStar, setOverStar] = useState(-1);

  return (
    // Stars : [red, red, red, grey, grey]
    // define onSelect()
    // text: 3 of 5 stars
    <>
      {createArray(totalStars).map((n, i) => 
        <Star 
          key={i} 
          selected={selectedStars > i}
          setover={overStar == i}
          onSelect={() => setSelectedStars(i+1)}
          onOver={()=> setOverStar(i)}          
        />)}
      <p>{selectedStars} of {totalStars} stars</p>
      <p>Your over {overStar+1} star</p>
    </>    
  );
}
  
// export module
export default StarRating;