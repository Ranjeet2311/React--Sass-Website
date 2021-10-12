import React from "react";

import "./CaptionBoxCenter.css";

function CaptionBoxCenter(props) {
  return (
    <div>
      <div className="caption">
        <h1> {props.title} </h1>
        <hr />
        <p>{props.para}</p>
      </div>
    </div>
  );
}

export default CaptionBoxCenter;
