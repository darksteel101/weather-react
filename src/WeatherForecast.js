import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "3dc2fa5565925534ab98e8d4101ee354";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiurl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weekday">Sat</div>
          <img src={props.data.iconUrl} alt={props.data.description}></img>
          <div className="Temperatures">
            <span className="MaxTemperature">20°</span>
            <span className="MinTemperature">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
