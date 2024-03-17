import React from "react";

import Cook from "./Cook/Cook";
import Recipe from "./Recipe/Recipe";

const Cooks = ({ newRecipe,handlePreparing,prepareRecipe,totalTime,totalCal }) => {

   

    // console.log(newRecipe)
  return (

    
    <div>
      <h1 className="font-bold text-xl text-center mb-4">
        Want to cook: {newRecipe.length}
      </h1>
      <hr />
      

      <div className="grid grid-cols-5 p-4  ">
        <h1></h1>
        <h1>Name</h1>
        <h1 className="mx-2">Time</h1>
        <h1>Calories</h1>
        <h1></h1>
      </div>
        <div>
            {
                newRecipe.map((r,idx) =>(<div className=" bg-slate-200 grid grid-cols-5 p-4 rounded-xl mt-4 ">
                        <h1>{idx+1}</h1>
                          <h1>{r.recipe_name}</h1>
                         <h1 className="mx-2">{r.preparing_time} minutes</h1>
                          <h1>{r.calories} calories</h1>
                        <button onClick={()=>handlePreparing(r,r.recipe_id)} className="btn bg-green-400 rounded-full px-8">Preparing</button>
                </div>))
            }
        </div>

        <h1 className="font-bold text-xl text-center mb-4 mt-16">Currently Cooking: {prepareRecipe.length}</h1>
        <hr />

    <div className="grid grid-cols-4 p-4  ">
        <h1></h1>
        <h1>Name</h1>
        <h1>Time</h1>
        <h1>Calories</h1>
      </div>

      <div>
            {
                prepareRecipe.map((r,idx)=>(<div className=" bg-slate-200 grid grid-cols-4 p-4 rounded-xl mt-4 ">
                        <h1>{idx+1}</h1>
                          <h1>{r.recipe_name}</h1>
                         <h1>{r.preparing_time} minutes</h1>
                          <h1>{r.calories} calories</h1>
                </div>))
            }
        </div>
      
      <div className="grid grid-cols-4 p-4  ">
        <h1></h1>
        <h1>Total   = </h1>
        <h1 className="font-bold pr-4">{totalTime} minutes</h1>
        <h1 className="font-bold pr-4">{totalCal} calories</h1>
      </div>

    </div>
  );
};

export default Cooks;
