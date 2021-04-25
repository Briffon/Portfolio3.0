import React from "react";
import "./index.css";

function Technology(props) {
  return (
    <div className="technology">
      <div className="technology__img">
        <img src={props.img} alt={`${props.name} icon`} />
        <img src={props.img} alt="react icon" className="clone" />
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default Technology;
