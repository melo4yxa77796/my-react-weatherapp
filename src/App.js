import "./styles.css";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import React, { useState} from"react";


export default function Form(props) {
  
const[weatherData,setWeatherData]=useState({ready:false});
const[city,setCity]=useState(props.defaultCity);
function handleResponse(response){

  console.log(response.data);
  setWeatherData({
    ready:true,
    description:response.data.weather[0].description,
    iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    temperature: response.data.main.temp,
  wind:response.data.wind.speed,
  humidity:response.data.main.humidity,
  date:new Date(response.data.dt*1000),
city:response.data.name});
 
}



function handleSubmit(event){
  event.preventDefault();
  search();

}
function handleCityChange(event){
  setCity(event.target.value);


}

function search(){const apiKey="3fc4a1a542593e4089e587a81b28f31f";

  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);}

if(weatherData.ready){
  return (
  <div className="A">
  <div className="container">
    <form onSubmit={handleSubmit}>
      <input type="search" className="Enter city" placeholder="Enter city" autoFocus="on" onChange={handleCityChange}></input>
      <input type="submit" value="Submit" class="btn btn-success"></input>
    </form>
    <button>Current</button>
    <WeatherInfo data={weatherData}/>
    
  </div> 
  <footer><a href="https://github.com/melo4yxa77796/my-react-weatherapp" rel="noreferrer" target="_blank">Open source code</a></footer>

</div>
);

}
else{
  search();
  return"Loading";
  
  }

}

  