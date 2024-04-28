import React from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import left from "../../Icons/icons8-left-2-50.png";
import right from "../../Icons/icons8-right-2-50.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar">
        <NavLink className="nav-name" to="/">
          <img className="icon" src={right} alt="icon" />
          Abdul Rehman
          <img className="icon" src={left} alt="icon" />
        </NavLink>
        <NavLink className="nav-contact" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
