import React, { useState } from "react";
import BabyNamesData from "./data/babyNamesData.json";

//Import Components
import SearchBar from "./components/SearchBar";
import Favourites from "./components/Favourites";
import FavList from "./components/FavouriteList";

const App = () => {
  const [search, setSearch] = useState("");
  
  const handleChange = (e) => {
    setSearch(e.target.value); 
  };
  
  // const addFavourite = (id) => {
  //   const list = favourites.concat([id])
  //   setFavourites(list)
  // }

  return (
    <div className="container">
      <SearchBar nameList={BabyNamesData} search={search} handleChange={handleChange} />
      <FavList nameList={BabyNamesData} />
      <Favourites nameList={BabyNamesData} search={search} />
    </div>
  );
};

export default App;

