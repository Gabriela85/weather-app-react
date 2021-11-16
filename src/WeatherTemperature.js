
import React, { useState } from "react";
import "./forecast.css";


export default function WeatherTemperature(props) {

function showFahrenheit (event){
  event.preventDefault();
setUnit("fahrenheit");
}

function showCelsius(event){
  event.preventDefault();
  setUnit("celsius");

}

 const [unit, setUnit] = useState("celsius");
 if (unit === 'celsius') {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <sup>°C</sup>{" "}
      {" "}
      |{" "}
      <a href="/" onClick={showFahrenheit}>
      <sup>°F</sup>{" "}
      </a>
    </div>
  );
} else {
  let fahrenheit = Math.round((props.celsius * 9/5) + 32);
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{fahrenheit}</span>
      <a href="/" onClick={showCelsius}><sup>°C</sup>{" "}
      </a>{" "}
      |
      <sup>°F</sup>
    </div>
  );
}
}