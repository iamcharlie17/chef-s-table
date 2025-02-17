import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooks from "../Cooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setRecipe] = useState([]);
  const [prepareRecipe, setPrepareRecipe] = useState([]);
  let [totalTime, setTotalTime] = useState(0);
  let [totalCal, setTotalCal] = useState(0);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  // console.log(recipes)

  const handleCook = (recipe) => {
    const isExist = newRecipe.find(
      (item) => item.recipe_id == recipe.recipe_id
    );
    if (!isExist) {
      setRecipe([...newRecipe, recipe]);
    } else {
      toast("Your selection already exist!!");
    }
  };

  const handlePreparing = (r, id) => {
    totalTime = totalTime + r.preparing_time;
    setTotalTime(totalTime);

    totalCal = totalCal + r.calories;
    setTotalCal(totalCal);

    const remainingRecipe = newRecipe.filter(
      (recipe) => id != recipe.recipe_id
    );
    setRecipe(remainingRecipe);

    const isPrepareRecipe = prepareRecipe.find(
      (item) => item.recipe_id == r.recipe_id
    );
    if (!isPrepareRecipe) {
      setPrepareRecipe([...prepareRecipe, r]);
    }
  };

  // console.log(totalCal);
  // console.log(totalTime);
  // console.log(prepareRecipe);
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
                handleCook={handleCook}
              ></Recipe>
            ))}
          </div>
        </div>
        <div className=" w-1/3">
          <Cooks
            totalCal={totalCal}
            totalTime={totalTime}
            prepareRecipe={prepareRecipe}
            handlePreparing={handlePreparing}
            newRecipe={newRecipe}
          ></Cooks>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
