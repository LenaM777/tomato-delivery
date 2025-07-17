import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img className="navbar__logo" src={assets.logo} alt="logo" />
      <ul className="navbar__menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar__right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar__search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button className="navbar__button">sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
