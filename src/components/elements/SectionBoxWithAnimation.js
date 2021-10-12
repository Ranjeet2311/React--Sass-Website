import React from "react";
import Button from "./Button";
import "./SectionBoxWithAnimation.css";

function SectionBoxWithAnimation(props) {
  return (
    <div className="SectionBox">
      <div className="SectionBox-caption">
        <h1> {props.title} </h1>
        <hr />
        <p>{props.para}</p>
        <Button text="Learn more..." />
      </div>

      <img className="SectionBox-img" src={props.img} alt="flying-drone" />
    </div>
  );
}

export default SectionBoxWithAnimation;
