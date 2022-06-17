import React from "react";
import "../styles/nav.scss";
import { CgPhone } from "react-icons/cg";
import logo from "../images/logo75.png";

export default function NavMenu() {
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="phoneNumberContainer">
        <CgPhone className="callIcon" />
        <p>+351 968757017</p>
      </div>
      <div className="navMenuContainer">
        <ul>
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Potfolio</li>
          <li>Packages</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
