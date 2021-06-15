import React, { useState } from "react";
import BabyNamesData from "./data/babyNamesData.json";

//Import Components
import SearchBar from "./components/SearchBar";
import Favourites from "./components/Favourites";
import FavList from "./components/FavouriteList";

const App = () => {
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const addToFavourites = (id) => setFavourites([...favourites, id]);

  const removeFromList = (id) => {
    setFavourites(favourites.filter((babyId) => id !== babyId));
  };

  return (
    <div className="container">
      <SearchBar
        nameList={BabyNamesData}
        search={search}
        handleChange={handleChange}
      />
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
