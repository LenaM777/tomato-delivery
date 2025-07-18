import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__contents">
        <h2 className="header__title">Order your favorite food here</h2>
        <p className="header__text">
          Choose from a divers menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="header__button">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
