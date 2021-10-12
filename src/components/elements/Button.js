import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className="btn">
      {props.text}
      <span>
        <i className="fas fa-long-arrow-alt-right"></i>{" "}
      </span>
    </button>
  );
}

export default Button;
