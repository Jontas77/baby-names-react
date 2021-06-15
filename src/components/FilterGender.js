import React from "react";

const FilterGender = ({ nameList }) => {
    const handleChange = () => {
        console.log("Clkick")
    }
  return (
    <div className="gender">
      <button className="all-names" onClick={() => handleChange}>All Names</button>
      <button className="boy">Boy Names</button>
      <button className="girl">Girl Names</button>
    </div>
  );
};

export default FilterGender;
