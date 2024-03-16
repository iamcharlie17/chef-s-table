import React from "react";


const NavBar = () => {
  return (
    <div className="navbar bg-base-100 my-8 ">
      <div className="flex-1">
        <a className=" text-xl md:text-3xl font-bold">Recipe Calories</a>
      </div>

      <div className="">
        <ul className=" flex gap-4 justify-between items-center mr-11">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
        </ul>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            
                
            
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default NavBar;
