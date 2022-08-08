import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      Hello from Weather.js
      <form>
        <div className="row">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
          />
          <input type="button" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wed 7:00pm</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row"></div>
    </div>
  );
}
