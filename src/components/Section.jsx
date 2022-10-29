import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import RecipeCard from '../pages/RecipeCard'

const Section = () => {
    const [ana,setAna]=useState()
    const [er,setEr]=useState("")
    const [hem,setHem]=useState("breakfast")


const naber =(e)=> {
  
console.log(er)
console.log(hem)
setAna({er,hem})
setEr("")
}

  return (
    <div >
      <div className="d-flex align-item-center justify-content-center mt-4">
        <input value={er} onChange={(e) => setEr(e.target.value)} type="text" />
        <button className="btn btn-info" onClick={() => {naber()}}>SEARCH</button>
        <select onChange={(e) => setHem(e.target.value)} value="breakfast" id="">
          <option value="brakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select></div>
      <RecipeCard ana={ana} />
    </div>
  );
};

export default Section;
