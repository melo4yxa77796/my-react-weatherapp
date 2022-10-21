import React,{useState} from "react";

export default function WeatherTemperature(props){
  const[unit, setUnit]=useState("celsius");
  function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit(){
    return(props.celsius*9/5)+32;
  }
  if(unit==="celsius"){return (
        <div className="Temperature">
    <h2>
      {Math.round(props.celsius)}º <a href="/">C</a>|<a href="/" onClick={convertToFahrenheit}>F</a>
    </h2>
  </div>);
  }else{
    
    return (<div className="Temperature">
    <h2>
      {Math.round(fahrenheit())}º <a href="/">C</a>|<a href="/" onClick={convertToCelsius}>F</a>
    </h2>
  </div>);
  }
    
}