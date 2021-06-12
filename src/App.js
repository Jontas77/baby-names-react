import React, { useState } from "react";
import BabyNamesData from "./data/babyNamesData.json";

//Import Components
import BabyNamesList from "./components/BabyNamesList";
import SearchBar from "./components/SearchBar";
import Favourites from "./components/Favourites";

const App = () => {
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value); 
  };
  
  const addFavourite = (id) => {
    const list = favourites.concat([id])
    setFavourites(list)
  }

  return (
    <div className="container">
      <SearchBar nameList={BabyNamesData} search={search} handleChange={handleChange} />
      <Favourites nameList={BabyNamesData} favourites={favourites} />
      <BabyNamesList nameList={BabyNamesData} search={search} addFavourite={addFavourite}/>
    </div>
  );
};

export default App;

