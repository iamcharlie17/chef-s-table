import React from "react";

import Cook from "./Cook/Cook";
import Recipe from "./Recipe/Recipe";

const Cooks = ({ newRecipe }) => {

    // console.log(newRecipe)
  return (

    
    <div>
      <h1 className="font-bold text-xl text-center mb-4">
        Want to cook: {newRecipe.length}
      </h1>
      <hr />
      

      <div className="grid grid-cols-4 p-4  ">
    
        <h1>Name</h1>
        <h1>Time</h1>
        <h1>Calories</h1>
        <h1></h1>
      </div>
        <div>
            {
                newRecipe.map(r =>(<div className=" bg-slate-200 grid grid-cols-4 p-4 rounded-xl mt-4 ">
                        
                          <h1>{r.recipe_name}</h1>
                         <h1>{r.preparing_time} minutes</h1>
                          <h1>{r.calories} calories</h1>
                        <button className="btn bg-green-400 rounded-full px-8">Preparing</button>
                </div>))
            }
        </div>
      
    </div>
  );
};

export default Cooks;
