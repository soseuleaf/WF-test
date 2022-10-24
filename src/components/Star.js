/**
 * proj_path: ch06/ex/proj/ex-02-1
 * ./src/components/Star.js
 */

// import module FaStar from react-icons/fa
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, setover = false, onSelect = f => f, onOver = f => f}) => 
  // onClick eventlistener
  <FaStar 
    color={setover ? "yellow" : (selected ? "red" : "grey")}
    onClick={onSelect}
    onMouseOver={onOver}
  />
  
// export module
export default Star;