import React from "react";

const SearchBar = ({ search, handleChange }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="Search Names..."
        value={search}
        onChange={handleChange}
      />
    </header>
  );
};

export default SearchBar;
