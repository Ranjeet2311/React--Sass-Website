import React from "react";
import "./FooterBox.css";

function FooterBox(props) {
  return (
    <div className="footer-item-wrapper">
      <h2>{props.title}</h2>
      <div className="links">
        <h3> {props.link1} </h3>
        <h3> {props.link2} </h3>
        <h3> {props.link3} </h3>
        <h3> {props.link4} </h3>
        <h3> {props.link5} </h3>
      </div>
    </div>
  );
}

export default FooterBox;
