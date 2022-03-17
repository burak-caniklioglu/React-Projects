import React, { useState} from "react";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleClick() {}
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="type city name.."
            id="search"
            value={search}
            onChange={handleChange}
          />
        </div>
        <button className="searchButton" onClick={handleClick}>
          search
        </button>
      </div>
      <WeatherDetails />
    </>
  );
}

export default SearchMain;
