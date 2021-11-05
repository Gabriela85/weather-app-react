import React from "react";
import ReactDOM from "react-dom";

import Search from "./Search";
import Weather from "./Weather";


import "./index.css";
import "./Forecast.css";

function App() {
  return (
    <div className="App"> 
      <Search />
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
