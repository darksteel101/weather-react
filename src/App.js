import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  let weatherData = {
    city: "New York",
    temperature: 8,
    date: "01/29/2022",
    description: "Snowy",
    humidity: 1,
    wind: 5,
  };
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <main className="App">
      <div className="Search">
        <form className="search-form" id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            autofocus="on"
            autocomplete="off"
            className="search-bar"
            id="city-input"
            onChange={updateCity}
          />
          <button className="search-button btn btn-primary">Search</button>
          <button id="current-button" className="btn btn-success">
            Current
          </button>
        </form>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h1>{weatherData.city}</h1>
          <h2>{weatherData.date}</h2>
          <h3>{weatherData.description}</h3>
          <h3>
            Humidity: <span>{weatherData.humidity}</span>%
          </h3>
          <h3>
            Wind: <span>{weatherData.wind}</span> m/h
          </h3>
        </div>
        <div className="col">
          <h2>
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">
              <span id="fahrenheit-link">°F</span>
            </span>
          </h2>
        </div>
        <div className="col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-snow"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" />
          </svg>
        </div>
      </div>
    </main>
  );
}
