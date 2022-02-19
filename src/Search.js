import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
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
  );
}
