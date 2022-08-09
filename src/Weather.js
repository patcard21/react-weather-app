import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        Hello from Weather.js
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="button" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wed 7:00pm</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <h3>{Math.round(temperature)}</h3>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/ph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f4e257f61e44c9e6b5b1129ee526efb9";
    let city = "New York";
    let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
