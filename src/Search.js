import React, { useState } from "react";
import Weather from "./Weather";
import "./Search.css";

import Searchf from "../src/media/frog.png";
import Currentloc from "../src//media/current-loc.png";

export default function Search() {
  
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    setForecast(<Weather city={city} />);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  
  return (
    <form onSubmit={handleSearch}>
     <input type="type" className="enter-city" placeholder="Enter a city..." onChange={updateCity} />

      <input
        type="image"
        className="search"
        src={Searchf}
        alt="Submit"
        width="15%"
       /> 

      <input
        type="image"
        className="current"
        src={Currentloc}
        alt="Submit"
        width="15%"
        id="current_location"
      />
      <h1>{forecast}</h1>
    </form>
    
  );
}
