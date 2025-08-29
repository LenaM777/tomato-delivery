import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__content-left">
          <img src={assets.logo} alt="" />
          <p>
            Choose from a divers menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <div className="footer__social-icons">
            <img src={assets.facebook_icon} alt="facebook_icon" />
            <img src={assets.twitter_icon} alt="twitter_icon" />
            <img src={assets.linkedin_icon} alt="linkedin_icon" />
          </div>
        </div>
        <div className="footer__content-center">
          <h2 className="footer__title">COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer__content-right">
          <h2 className="footer__title">GET IN TOUCH</h2>
          <ul>
            <li>+1-222-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer__copyright">
        Copyright 2025 &copy; Tomato.com - All Rigth Reserved.
      </p>
    </div>
  );
};

export default Footer;
