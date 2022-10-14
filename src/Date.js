import React from "react";


export default function Date(props) {
 
 let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 let day=days[props.date.getDay()];
 let hours=props.date.getHours();
 if(hours<10){hours=`0${hours}`};
 let minutes=props.date.getMinute();
 if(minutes<10){
   minutes=`0${minutes}`
 }
  return (
    <div className="Time">
      <div className="row">
        <div className="col-6">{hours}:{minutes}</div>
        <div className="col-6">
          Today:<span className="Today">{day}</span>
        </div>
      </div>
    </div>
  );
}
