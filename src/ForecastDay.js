import React from "react";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weekday">{day()}</div>
      {/* <img src={props.data.weather[0].icon} alt="/"></img> */}
      <div className="Temperatures">
        <span className="MaxTemperature">{maxTemperature()}</span>
        <span className="MinTemperature">{minTemperature()}</span>
      </div>
    </div>
  );
}
