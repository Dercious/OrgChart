import React from "react";
import "./Search.css";
import SearchBar from "./Component/SearchBar.js";
import Data from "./Data.json";

function Search() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Employee Name..." data={Data} />
    </div>
  );
}

export default Search;
