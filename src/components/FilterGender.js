import React, { useState } from "react";
import BabyNamesList from "./BabyNamesList";

const FilterGender = ({ filterGender, search, nameList }) => {
  const [gender, setGender] = useState([]);

  const boyNames = nameList.filter((baby) => {
    if (baby.sex === "m") {
      return baby.name.toLowerCase().includes(search.toLowerCase());
    } 
  });

  const toggleMale = () => {
    setGender(boyNames);
  };

  const girlNames = nameList.filter((baby) => {
    if (baby.sex === "f") {
      return baby.name.toLowerCase().includes(search.toLowerCase());
    } 
  });

  const toggleFemale = () => {
    setGender(girlNames);
  };

  return (
    <>
      <div className="gender">
        <button className="all-names" onClick={filterGender}>
          All Names
        </button>
        <button className="boy" onClick={toggleMale}>
          Boy Names
        </button>
        <button className="girl" onClick={toggleFemale}>
          Girl Names
        </button>
      </div>
      <BabyNamesList list={gender} addFavourite={() => { 
        toggleMale()
        toggleFemale()
      }} />
    </>
  );
};

export default FilterGender;
