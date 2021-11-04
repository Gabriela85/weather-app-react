import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search";
import Time from "./Time";
import Forecast from "./Forecast";

import "./Search.css";
import "./App.css";
import "./Forecast.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Time />
      <Forecast />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
