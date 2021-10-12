import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuLinks from "./MenuLinks";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const MenuList = MenuLinks.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink to={url}> {title} </NavLink>
        {/* <a href={url}> {title} </a> */}
      </li>
    );
  });

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbar-wrapper">
      <div className="logo">
        <h1 className="logo-item">Logo</h1>
      </div>

      <div onClick={clickHandler} className="burger-menu">
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className="navbar">
        <ul className={clicked ? "menu-list" : "menu-list-close"}>
          {MenuList}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
