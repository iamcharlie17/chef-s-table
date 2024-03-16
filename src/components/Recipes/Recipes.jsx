import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooks from "../Cooks";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  
  const handleCook = (recipe) =>{
      
  }

  return (
    <div>
      <div className=" text-center my-16">
        <h1 className=" text-4xl font-bold mb-8">Our Recipes</h1>
        <p className=" px-20">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>

      <div className=" flex gap-8 justify-between">
        <div className=" w-2/3">
          

          <div className=" grid grid-cols-2 gap-4">
            {recipes.map((recipe) => (
              <Recipe 
              recipe={recipe}
              handleCook={handleCook}></Recipe>
            ))}
          </div>
        </div>
        <div className=" w-1/3">
          <Cooks
          ></Cooks>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
