import React from "react";

const BabyNamesList = ({ list, addFavourite }) => {
  
  return (
    <ul>
      {list
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .map((baby) => (
          <li className={baby.sex} key={baby.id}>
            <button onClick={() => addFavourite(baby.id)}>{baby.name}</button>
          </li>
        ))}
    </ul>
  );
};

export default BabyNamesList;
