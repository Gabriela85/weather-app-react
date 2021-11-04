import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search";
import Time from "./Time";
import Forecast from "./Forecast";

import "./Search.css";
import "./index.css";
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
