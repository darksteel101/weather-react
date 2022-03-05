import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "3dc2fa5565925534ab98e8d4101ee354";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
        <WeatherForecast coordinates={weatherData.coordinates} />
      </main>
    );
  } else {
    search();
    return "Loading..";
  }
}
