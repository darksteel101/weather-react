import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "",
    });
  }

  function search() {
    const apiKey = "91129ff72c8f2d6daa442c167fe1e8a2";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <main className="App">
        <div className="Search">
          <form
            className="search-form"
            id="search-form"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Enter a city.."
              autofocus="on"
              autocomplete="off"
              className="search-bar"
              id="city-input"
              onChange={handleCityChange}
            />
            <button className="search-button btn btn-primary">Search</button>
            <button id="current-button" className="btn btn-success">
              Current
            </button>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </main>
    );
  } else {
    search();
    return "Loading..";
  }
}
