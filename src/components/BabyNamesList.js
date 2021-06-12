import React from "react";

const BabyNamesList = ({ nameList, search, addFavourite }) => {
  return (
    <ul>
      {nameList
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .filter((value) => {
          let result;
          if (search === "") {
            result = value;
          } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            result = value;
          }
          return result;
        })
        .map((baby) => (
          <li className={baby.sex} key={baby.id}>
            <button onClick={() => addFavourite(baby.id)}>{baby.name}</button>
          </li>
        ))}
    </ul>
  );
};

export default BabyNamesList;

