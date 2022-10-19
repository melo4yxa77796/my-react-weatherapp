import React from "react";
import FormatDate from"./FormatDate";
import WeatherIcon from"./WeatherIcon";

export default function WeatherInfo(props){
    return(<div className="WeatherInfo">
        <h1>{props.data.city}</h1>
    <FormatDate date={props.data.date}/>
    <span className="text-capitalize">{props.data.description}</span>
    <div className="row">
      <div className="col-6">
        <div className="float-left">
        < WeatherIcon code={props.data.icon} size={68}/></div>
        
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity:{props.data.humidity}%</li>{" "}
          <li>Wind:{Math.round(props.data.wind)} m/s</li>
        </ul>
      </div>
    </div>
    <div className="Temperature">
      <h2>
        {Math.round(props.data.temperature)}º <a href="/">C</a>|<a href="/">F</a>
      </h2>
    </div>
    </div>);
}