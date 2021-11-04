import React from "react";
import axios from "axios";

export default function Weather(props){

    function handleResponse(response){
        alert(`Weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`);
    }

    let apiKey = "6adf9ca14282ecabf35274d15e8bf416";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
    return(
        <h1>Hello!</h1>
    );
}