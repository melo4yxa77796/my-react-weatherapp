import React from "react";


export default function Date(props) {
 
 let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 let day=days[props.date.getDay()];
 let months=["0","1","2","3","4","5","6","7","8","9","10","11"];
 let month=months[props.date.getMonth()];
 let hours=props.date.getHours();
 if(hours<10){hours=`0${hours}`};
 let minutes=props.date.getMinutes();
 if(minutes<10){
   minutes=`0${minutes}`
 }
  return (
    <div className="Time">
      <div className="row">
        <div className="col-6">{day}{hours}:{minutes}</div>
        <div className="col-6">
          Today:<span className="Today">{month}</span>
        </div>
      </div>
    </div>
  );
}
