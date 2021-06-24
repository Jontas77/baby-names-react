import React from "react";
import BabyNamesList from "./BabyNamesList";

const Favourites = ({ list, nameList, search, favourites, addToFavourites, toggleGender}) => {

const filterNames = nameList
.filter((baby) => baby.name.toLowerCase().includes(search.toLowerCase()))
.filter((baby) => !favourites.includes(baby.id));

  return <BabyNamesList list={filterNames}  addFavourite={addToFavourites} />;
};

export default Favourites;
