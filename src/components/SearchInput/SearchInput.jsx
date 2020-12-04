import React from "react";
import "./SearchInput.css";

const SearchInput = ({ handleSearch, queryStr }) => {
  return (
    <div className="search-input">
      <input
        type="text"
        value={queryStr}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Enter your query here..."
      ></input>
    </div>
  );
};

export default SearchInput;
