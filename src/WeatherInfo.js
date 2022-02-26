import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
  return (
    <div className="row mt-5">
      <div className="col">
        <h1>{props.data.city}</h1>
        <h2>
          <FormattedDate date={props.data.date} />
        </h2>
        <h3 className="text-capitalize">{props.data.description}</h3>
        <h3>
          Humidity: <span>{props.data.humidity}</span>%
        </h3>
        <h3>
          Wind: <span>{props.data.wind}</span> m/h
        </h3>
      </div>
      <div className="col">
        <h2>
          <WeatherUnit celsius={props.data.temperature} />
        </h2>
      </div>
      <div className="col">
        <img src={props.data.iconUrl} alt={props.data.description}></img>
      </div>
    </div>
  );
}
