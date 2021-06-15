import React from "react";
import BabyNamesList from "./BabyNamesList";

const Favourites = ({ nameList, search, favourites, addToFavourites }) => {
  const filterNames = nameList
    .filter((baby) => baby.name.toLowerCase().includes(search.toLowerCase()))
    .filter((baby) => !favourites.includes(baby.id));

  return <BabyNamesList list={filterNames} addFavourite={addToFavourites} />;
};

export default Favourites;
