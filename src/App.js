import React, { useState } from "react";
import BabyNamesData from "./data/babyNamesData.json";

//Import Components
import SearchBar from "./components/SearchBar";
import FilterGender from "./components/FilterGender";
import Favourites from "./components/Favourites";
import FavList from "./components/FavouriteList";
import NamePage from "./components/NamePage";

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

  const toggleGender = (e) => {
    let result;
    if (e.target.value === "All") {
      result = BabyNamesData;
    } else {
      result = BabyNamesData.filter((item) => item.sex === e.target.value);
    }
    setGender(result);
  };

  return (
    <div className="container">
      <header>
        <SearchBar
          nameList={BabyNamesData}
          search={search}
          handleChange={handleChange}
        />
        <FilterGender
          search={search}
          nameList={BabyNamesData}
          toggleGender={toggleGender}
        />
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
        {/* <NamePage gender={gender} toggleGender={toggleGender} /> */}
      </main>
    </div>
  );
};

export default App;
