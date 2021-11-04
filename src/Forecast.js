import React from "react";

import Cloud from "../src/media/cloud.png";
import Rain from "../src//media/rain.png";
import Sun from "../src//media/sun.png";
import Covered from "../src//media/covered.png";

export default function Forecast() {
  return (
    <div className="column">
      <p>
        <strong>Sat </strong>
        <br />
        16/10 <br />
        <span className="forecast">20°C </span>
        <img src={Sun} width="70%" alt="sunny" />
        <br />
      </p>

      <p>
        <strong>Sun</strong> <br />
        17/10
        <br />
        <span className="forecast">21°C</span>
        <img src={Covered} width="70%" alt="covered" />
        <br />
      </p>

      <p>
        <strong>Mon</strong> <br />
        18/10
        <br />
        <span className="forecast">20°C</span> <br />
        <img src={Cloud} width="70%" alt="cloudy" />
      </p>

      <p>
        <strong>Thu</strong>
        <br />
        19/10
        <br />
        <span className="forecast">18°C </span>
        <img src={Rain} width="70%" alt="rainy" />
        <br />
      </p>

      <p>
        <strong>Wed </strong>
        <br />
        20/10 <br />
        <span className="forecast">24°C </span>
        <img src={Sun} width="70%" alt="sunny" />
        <br />
      </p>
    </div>
  );
}
