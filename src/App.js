import "./styles.css";

import Date from "./Date";
import axios from "axios";
import React, { useState} from"react";


export default function Form(props) {
  
const[weatherData,setWeatherData]=useState({ready:false});

function handleResponse(response){
  console.log(response.data);
  setWeatherData({
    ready:true,
    description:response.data.weather[0].description,
    iconUrl:response.data.weather[0].icon,
    temperature: response.data.main.temp,
  wind:response.data.wind.speed,
  humidity:response.data.main.humidity,
city:response.data.name});
 
}
if(weatherData.ready){
  return (
  <div className="A">
  <div className="container">
    <form>
      <input type="text" name="Enter city" placeholder="Enter city"></input>
      <input type="submit" value="Submit" class="btn btn-success"></input>
    </form>
    <button>Current</button>
    <h1>{weatherData.city}</h1>
    <Date />
    <span className="text-capitalize">{weatherData.description}</span>
    <div className="row">
      <div className="col-6">
        <img
          src={weatherData.iconUrl}
          alt={weatherData.description}
          className=""
        ></img>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity:{weatherData.humidity}%</li>{" "}
          <li>Wind:{Math.round(weatherData.wind)} m/s</li>
        </ul>
      </div>
    </div>
    <div className="Temperature">
      <h2>
        {Math.round(weatherData.temperature)}º <a href="/">C</a>|<a href="/">F</a>
      </h2>
    </div>
  </div> 
  <footer><a href="https://github.com/melo4yxa77796/my-react-weatherapp" rel="noreferrer" target="_blank">Open source code</a></footer>

</div>
);

}
else{const apiKey="3fc4a1a542593e4089e587a81b28f31f";

  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return"Loading";
  }

}

  