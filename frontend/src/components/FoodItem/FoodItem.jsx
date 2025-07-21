import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item">
      <div className="food-item__image-container">
        <img className="food-item__image" src={image} alt="" />
      </div>
      <div className="food-item__info">
        <div className="food-item__rating">
          <p className="food-item__name">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item__desc">{description}</p>
        <p className="food-item__price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
