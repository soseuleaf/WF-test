/**
 * proj_path: ch06/ex/proj/ex-02-1
 * ./src/App.js
 */

// import data and module
import React from 'react';
import StarRating from "./components/StarRating";
import DragBox from "./components/DragBox";

function App() {
  return (
    // return StarRating component with totalStars property
    <React.Fragment>
      <StarRating totalStars={99}/>
      <DragBox/>
    </React.Fragment>
  );
}

// export module
export default App;