import React from "react";


export default function Date(props) {
 let date=props.date.getDate();
 let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 let day=days[props.date.getDay()];
let year=props.date.getFullYear();
 let month=props.date.getMonth()+1;
 if(month<10){month=`0${month}`};
 let hours=props.date.getHours();
 if(hours<10){hours=`0${hours}`};
 let minutes=props.date.getMinutes();
 if(minutes<10){
   minutes=`0${minutes}`
 }
  return (
    <div className="Time">
      <div className="row">
        <div className="col-6">{day}{""}{hours}:{minutes}</div>
        <div className="col-6">
          Today:<span className="Today">{date}:{month}:{year}</span>
        </div>
      </div>
    </div>
  );
}
