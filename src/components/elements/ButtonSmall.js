import React from "react";
import "./ButtonSmall.css";

function ButtonSmall(props) {
  return (
    <div>
      <button className="btn-small">{props.text}</button>
    </div>
  );
}

export default ButtonSmall;
