import React from "react";

const FilterGender = ({ toggleGender }) => {

  return (
    <>
      <div className="gender">
        <button value="All" className="all-names" onClick={toggleGender}>
          All Names
        </button>
        <button value="m" className="boy" onClick={toggleGender}>
          Boy Names
        </button>
        <button value="f" className="girl" onClick={toggleGender}>
          Girl Names
        </button>
      </div>
    </>
  );
};

export default FilterGender;

 // const boyNames = nameList.filter((baby) => {
  //   if (baby.sex === "m") {
  //     return baby.name.toLowerCase().includes(search.toLowerCase());
  //   } 
  // });

  // const toggleMale = () => {
  //   setGender(boyNames);
  // };

  // const girlNames = nameList.filter((baby) => {
  //   if (baby.sex === "f") {
  //     return baby.name.toLowerCase().includes(search.toLowerCase());
  //   } 
  // });

  // const toggleFemale = () => {
  //   setGender(girlNames);
  // };