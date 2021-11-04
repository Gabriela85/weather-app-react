import React from "react";

import Searchf from "../media/frog.png";
import Currentloc from "../media/current-loc.png";

export default function Search() {
  return (
    <form id="search-city">
      <input
        type="text"
        className="enter-city"
        id="submit-city"
        placeholder="Enter a city"
      ></input>

      <input
        type="image"
        className="search"
        src={Searchf}
        alt="Submit"
        width="15%"
      ></input>

      <input
        type="image"
        className="current"
        src={Currentloc}
        alt="Submit"
        width="15%"
        id="current_location"
      ></input>
    </form>
  );
}
