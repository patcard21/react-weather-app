import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        {" "}
        <a
          className="App-link"
          href="https://github.com/patcard21"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coded by Patricia Cardona
        </a>
      </footer>
    </div>
  );
}

export default App;
