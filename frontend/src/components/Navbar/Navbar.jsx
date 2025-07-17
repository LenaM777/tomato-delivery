import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={assets.logo} alt="logo" />
      <ul className="navbar__menu">
        <li>
          <a href="">home</a>
        </li>
        <li>
          <a href="">menu</a>
        </li>
        <li>
          <a href="">mobile-app</a>
        </li>
        <li>
          <a href="">contact us</a>
        </li>
      </ul>
      <div className="navbar__right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar__search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="navbar__dot"></div>
        </div>
        <button className="navbar__button">sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
