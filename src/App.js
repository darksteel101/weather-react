import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
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

  if (weatherData.ready) {
    return (
      <main className="App">
        <div className="Search">
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city.."
              autofocus="on"
              autocomplete="off"
              className="search-bar"
              id="city-input"
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
            <h2>
              <FormattedDate date={weatherData.date} />
            </h2>
            <h3 className="text-capitalize">{weatherData.description}</h3>
            <h3>
              Humidity: <span>{weatherData.humidity}</span>%
            </h3>
            <h3>
              Wind: <span>{weatherData.wind}</span> m/h
            </h3>
          </div>
          <div className="col">
            <h2>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <span id="unit-link">°C</span>
              </span>
            </h2>
          </div>
          <div className="col">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
          </div>
        </div>
      </main>
    );
  } else {
    const apiKey = "91129ff72c8f2d6daa442c167fe1e8a2";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
