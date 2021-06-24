import React, { useState, useEffect } from "react";
import BabyNamesData from "./data/babyNamesData.json";

//Import Components
import SearchBar from "./components/SearchBar";
import FilterGender from "./components/FilterGender";
import FavList from "./components/FavouriteList";
import NamePage from "./components/NamePage";
import Favourites from "./components/Favourites"

const App = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [gender, setGender] = useState([]);

  useEffect(() => {
    setList(BabyNamesData);
  }, []);
  
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
      result = list;
    } else {
      result = list.filter((item) => item.sex === e.target.value);
    }
    setGender(result);
  };


  return (
    <div className="container">
      <header>
        <SearchBar
          nameList={list}
          search={search}
          handleChange={handleChange}
        />
        <FilterGender
          search={search}
          nameList={list}
          toggleGender={toggleGender}
        />
      </header>
      <main>
        <FavList
          nameList={list}
          favourites={favourites}
          removeFromList={removeFromList}
        />
        {gender.length === 0 ? (
        <Favourites
          nameList={BabyNamesData}
          search={search}
          favourites={favourites}
          addToFavourites={addToFavourites}
        />
        ) : (
        <NamePage
          gender={gender}
          toggleGender={toggleGender}
          nameList={list}
          search={search}
          favourites={favourites}
          addToFavourites={addToFavourites}
        />
        )}
      </main>
    </div>
  );
};

export default App;
