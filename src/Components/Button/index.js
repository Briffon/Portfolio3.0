import React from "react";
import "./index.css";

function Button(props) {
  return (
    <button
      style={{ width: props.width, height: props.height }}
      className={`button-container ${props.className}`}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}

export default Button;
