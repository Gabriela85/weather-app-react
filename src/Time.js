import React from "react";
import Sunnyfrog from "../media/sunny-frog.png";

export default function Time() {
  return (
    <div className="time">
      <h1>Barcelona</h1>
      <h2 id="date">Friday 15/10/2021</h2>
      <h2 id="time">10:18</h2>

      <h2 className="weather" id="description">
        Sunny
      </h2>

      <h3>
        <img src={Sunnyfrog} width="25%" alt="sunny" />

        <span className="degree" id="temperature">
          16
        </span>

        <a href="#" id="celsius">
          °C | °F
        </a>
      </h3>

      <p className="humidity-wind">
        Humidity: <span id="humidity">68</span>% <br />
        Wind: <span id="wind">18</span>km/h
      </p>
    </div>
  );
}
