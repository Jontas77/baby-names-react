import React from "react";


const FilterGender = ({ filterGender }) => {
  return (
    <>
    <div className="gender">
      <button className="all-names" onClick={filterGender}>All Names</button>
      <button className="boy" onChange={filterGender}>Boy Names</button>
      <button className="girl" onChange={filterGender}>Girl Names</button>
    </div>
    </>
  );
};

export default FilterGender;
