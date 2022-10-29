import React from 'react'
import { useLocation } from 'react-router-dom'
import Nava from '../components/navbar/Navi'
import meal from '../assets/diet.svg'

const Details = () => {
  const {state:{recipe}}= useLocation()
  console.log(recipe)

  return (
    <div style={{ background: "#caf0f8", height: "100vh" }}>
      <Nava />
      <div>
        <div className="py-5 d-flex justify-content-around align-items-center">
          <h3>{recipe.label}</h3>
          <img style={{ width: "200px" }} src={meal} alt="" />
        </div>
      </div>
      <div style={{fontFamily:"tahoma"}} className="d-flex justify-content-around">
        <div className="text-end">
          <p>Nutrients</p>
          <p>
            {recipe.totalNutrients.CA.label}:
            {recipe.totalNutrients.CA.quantity.toFixed(2)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label}:
            {recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label}:
            {recipe.totalNutrients.CHOLE.quantity.toFixed(2)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label}:
            {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>
            {recipe.totalNutrients.FAT.label}:
            {recipe.totalNutrients.FAT.quantity.toFixed(2)}
            {recipe.totalNutrients.FAT.unit}
          </p>
          <p>
            {recipe.totalNutrients.PROCNT.label}:
            {recipe.totalNutrients.PROCNT.quantity.toFixed(2)}
            {recipe.totalNutrients.PROCNT.unit}
          </p>
        </div>
        <div>
          <img style={{ borderRadius: "35px" }} src={recipe.image} alt="" />
        </div>
        <div>
          {recipe.ingredientLines.map((item, index) => (
            <p>
              {index + 1} - {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details