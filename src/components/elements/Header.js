import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <h1> {props.title} </h1>
      <p> {props.para} </p>
    </div>
  );
}

export default Header;
