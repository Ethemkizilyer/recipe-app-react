import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const RecipeCard = ({ ana }) => {
  const navigate = useNavigate()
  useEffect(() => {
    console.log("ethem");
    arda();
  }, [ana]);

  const [naber, setNaber] = useState([]);
  const [kul, setKul] = useState();

  const arda = async () => {
    const {
      data: { hits },
    } = await axios(
      `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${ana?.er}&app_id=703d0200&app_key=6cb4c4e13e53f02cb362c18a2784e9f1&mealType=${ana?.hem}`
    );

    setNaber(hits);
  };

  //!  useEffect(()=> {
  // // naber.map((item)=> { const {calories,totalNutrients:{CA,CHOCDF,CHOLE,ENERC_KCAL,FAT,PROCNT,SUGAR,VITBIZ},images:{SMALL},ingredientLines,label} = item.recipe;
  // // setKul({label,SMALL})} )

  // // },[naber])

  // console.log(naber);

  return (
    <div
      
      className=" d-flex flex-wrap gap-4 align-items-center justify-content-center m-5 py-2"
    >
      {naber?.map((item) => {
        return (
          <Card
            style={{
              width: "16rem",
              height: "20rem",
              position: "relative",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center"
           
            }}
          >
            <Card.Img
              style={{ width: "16rem", height: "12rem" }}
              variant="top"
              className="rounded-lg object-cover "
              src={item?.recipe.image}
            />
            <Card.Body className="border w-100 text-center p-2 relative">
              <Card.Title style={{ border: "1px solid red", width: "100%",height:"4.6rem" ,borderRadius:"10px" }}>
                {item?.recipe.label}
              </Card.Title>

              <button className="btn btn-success" onClick={()=> navigate(`${item?.recipe.label}`,{state:item})} to="/home/details" style={{position:"absolute",bottom:"0",right:"5rem"}} variant="primary">View More</button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default RecipeCard;
