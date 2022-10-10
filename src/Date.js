import React from "react";


export default function Date() {
  let Time = {
    time: "Wednesday 19:57",
    date: "21.09.2022"
  };
  return (
    <div className="Time">
      <div className="row">
        <div className="col-6">{Time.time}</div>
        <div className="col-6">
          Today:<span className="Today">{Time.date}</span>
        </div>
      </div>
    </div>
  );
}
