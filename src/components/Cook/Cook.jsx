import React from "react";

const Cook = () => {

   
  return (
    <tr className=" rounded-xl ">
      <td className="">{}</td>
      <td className="">{}</td>
      <td className="">{} mins</td>
      <td className="">{} calories</td>
      <td className="">
        <button className="btn bg-green-400 rounded-full">Preparing</button>
      </td>
    </tr>
  );
};

export default Cook;
