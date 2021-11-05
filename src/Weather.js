import React, { useState } from "react";
import axios from "axios";
import Sunnyfrog from "../src/media/sunny-frog.png";

export default function Weather(props) {

  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=6adf9ca14282ecabf35274d15e8bf416&units=metric`;
  axios.get(url).then(showTemperature);

  if (props.city == null) {

    return (
    <div className="default">
   
</div>
);

  } else {

  return (
    <div className="time">
      <h1>{props.city}</h1>
      <h2 id="date">Friday 15/10/2021</h2>
      <h2 id="time">10:18</h2>

      <h2 className="weather" id="description">
      {description}
      </h2>

      <h3>
        <img src={Sunnyfrog} width="25%" alt="sunny" />

        <span className="degree" id="temperature">
        {Math.round(temperature)}
        </span>

        <a href="/" id="celsius">
          °C 
        </a>
      </h3>

      <p className="humidity-wind">
        Humidity:<span id="humidity"> {humidity} </span>% <br />
        Wind: <span id="wind">{Math.round(wind)}</span>km/h
      </p>
    </div>
  );
}
}
