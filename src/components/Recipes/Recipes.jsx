import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooks from "../Cooks";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setRecipe] =useState([]);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  // console.log(recipes)

  
  const handleCook = (recipe) =>{
    
    setRecipe([...newRecipe, recipe]);
      
  }
  // console.log(newRecipe);

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
              key={recipe.recipe_id} 
              recipe={recipe}
              handleCook={handleCook}></Recipe>
            ))}
          </div>
        </div>
        <div className=" w-1/3">
          <Cooks
          newRecipe={newRecipe}></Cooks>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
