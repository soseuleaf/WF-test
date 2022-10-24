/**
 * proj_path: ch06/ex/proj/ex-02-1
 * ./src/App.js
 */

// import data and module
import StarRating from "./components/StarRating";

function App() {
  return (
    // return StarRating component with totalStars property
    <StarRating totalStars={99}/>
  );
}

// export module
export default App;