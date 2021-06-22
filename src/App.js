import React, { useState } from "react";
import BabyNamesData from "./data/babyNamesData.json";

//Import Components
import SearchBar from "./components/SearchBar";
import FilterGender from "./components/FilterGender";
import Favourites from "./components/Favourites";
import FavList from "./components/FavouriteList";

const App = () => {
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [gender, setGender] = useState([]);
  

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const addToFavourites = (id) => setFavourites([...favourites, id]);

  const removeFromList = (id) => {
    setFavourites(favourites.filter((babyId) => id !== babyId));
  };

  const toggleFemale = () => {
   let girlNames = gender.filter((baby) => {
      if(baby.sex === "f") {
    return baby.name.toLowerCase().includes(search.toLowerCase())
      } 
  })
    setGender(girlNames)
}

const toggleMale = () => {
  let boyNames = gender.filter((baby) => {
    if(baby.sex === "m") {
  return baby.name.toLowerCase().includes(search.toLowerCase())
    } 
 
})
   setGender(boyNames);
}

  return (
    <div className="container">
      <header>
        <SearchBar
          nameList={BabyNamesData}
          search={search}
          handleChange={handleChange}
        />
        <FilterGender female={toggleFemale} male={toggleMale} search={search} nameList={BabyNamesData}/>
      </header>
      <main>
        <FavList
          nameList={BabyNamesData}
          favourites={favourites}
          removeFromList={removeFromList}
        />
        <Favourites
          nameList={BabyNamesData}
          search={search}
          favourites={favourites}
          addToFavourites={addToFavourites}
        />
      </main>
    </div>
  );
};

export default App;
