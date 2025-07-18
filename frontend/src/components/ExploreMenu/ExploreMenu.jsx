import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="explore-menu__title">Explore our menu</h1>
      <p className="explore-menu__text">
        Choose from a divers menu featuring a delectable array of dishes crafted
        with the finest ingredients and culinary expertise. Our mission is to
        satisfy your cravings and elevate your dining experience, one delicious
        meal at a time.
      </p>
      <div className="explore-menu__list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu__item">
              <img src={item.menu_image} alt="" />
              <p className="explore-menu__item-name">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
