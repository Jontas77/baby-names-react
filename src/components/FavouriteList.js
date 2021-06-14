import React, { useState } from "react";
import BabyNamesList from "./BabyNamesList";

const FavouriteList = ({ nameList }) => {
  const [list, setList] = useState([]);

  const addListedNames = nameList.filter((baby) => list.includes(baby.id));
    
  const removeFromList = (id) => {
    setList(list.filter((babyId) => id !== babyId));
  };

  const containNames = list.length > 0;

  return (
    <div className="list">
      <h2>{containNames ? "Favourites" : "Click to add to favourites"}</h2>
      {containNames && (
        <>
          <BabyNamesList list={addListedNames} addFavourite={removeFromList} />
          <hr />
        </>
      )}
    </div>
  );
};

export default FavouriteList;
