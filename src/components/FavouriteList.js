import React from "react";
import BabyNamesList from "./BabyNamesList";

const FavouriteList = ({ nameList, favourites, removeFromList }) => {
  const addListedNames = nameList.filter((baby) =>
    favourites.includes(baby.id)
  );

  const containNames = favourites.length > 0;

  return (
    <div className="list">
      <h2>{containNames ? "Favourites:" : "Click to add to favourites:"}</h2>
      {containNames && (
        <>
          <BabyNamesList 
          list={addListedNames} 
          addFavourite={removeFromList} 
          />
          <hr />
        </>
      )}
    </div>
  );
};

export default FavouriteList;
