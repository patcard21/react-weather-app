import React from "react";
import "./Weather.css";

export default function Weather() {
  let apiKey = "f4e257f61e44c9e6b5b1129ee526efb9";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}";
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
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/ph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
