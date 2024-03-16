import React from "react";

import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

const Recipe = ({ recipe,handleCook }) => {
  const ing = recipe.ingredients;

//   console.log(recipe);
  // const [recipe_image] = recipe

  return (
    <div className=" p-8 border-2 border-dotted border-slate-500 rounded-xl space-y-4 bg-slate-200">
      
      <img src={recipe.recipe_image} alt="" className=" rounded-xl w-full" />
      <h1 className=" text-2xl font-bold">{recipe.recipe_name}</h1>
      <p className=" mb-4 ">{recipe.short_description}</p>
      <hr />
      <h1 className="font-bold">Ingredients: {recipe.ingredients.length}</h1>
      <ul className=" ml-4">
        <li className="flex items-center gap-2"><FaDotCircle></FaDotCircle> {ing[0]}</li>
        <li className="flex items-center gap-2"><FaDotCircle></FaDotCircle> {ing[1]}</li>
        <li className="flex items-center gap-2"><FaDotCircle></FaDotCircle> {ing[2]}</li>
        <li className="flex items-center gap-2"><FaDotCircle></FaDotCircle> {ing[3]}</li>
        <li className="flex items-center gap-2"><FaDotCircle></FaDotCircle> {ing[4]}</li>
        <li className="flex items-center gap-2"><FaDotCircle></FaDotCircle> {ing[5]}</li>
        
      </ul>
      <div className="flex gap-8">
        <div className="flex gap-2 items-center">
          <CiClock2></CiClock2>
          <h1>{recipe.preparing_time} mins</h1>
        </div>
        <div className="flex gap-2 items-center">
            <FaFire></FaFire>
            <h1>{recipe.calories} calories</h1>
        </div>
      </div>
      <button onClick={()=>handleCook(recipe)} className="btn bg-green-400  px-8 rounded-full">Want to cook</button>
    </div>
  );
};

export default Recipe;
