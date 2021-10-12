import React from "react";
import ButtonSmall from "./ButtonSmall";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-wrapper">
      <img src={props.img} alt="" />
      <div className="card-caption">
        <h2>{props.title} </h2>
        <hr />
        <p>{props.para} </p>
      </div>
      <ButtonSmall text="Learn more" />
    </div>
  );
}

export default Card;
