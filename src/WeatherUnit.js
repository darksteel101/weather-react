import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="WeatherUnit">
          <span className="celsius-link">°C</span> |{" "}
          <span className="fahrenheit-link">
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="WeatherUnit">
          <span className="celsius-link">
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
          </span>{" "}
          | <span className="fahrenheit-link">°F</span>
        </span>
      </span>
    );
  }
}
