import React from "react";

const BabyNamesList = ({ nameList }) => {
  return (
    <ul>
      {nameList
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .map((baby) => (
          <li className={baby.sex} key={baby.id}>
            <button>{baby.name}</button>
          </li>
        ))}
    </ul>
  );
};

export default BabyNamesList;
