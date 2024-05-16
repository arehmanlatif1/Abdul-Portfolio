import React from "react";
import { NavLink } from "react-router-dom";
import left from "../../Icons/icons8-left-2-50.png";
import right from "../../Icons/icons8-right-2-50.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar">
        <NavLink className="nav-name" to="/">
          <img className="icon-right" src={left} alt="icon" />
          Abdul Rehman
          <img className="icon-left" src={right} alt="icon" />
        </NavLink>
        <nav>
        <ul className="nav-list">
          <li className="nav-items"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-items"><a className="nav-link" href="#project">Project</a></li>
          <li className="nav-items"><a className="nav-link" href="#education">Education</a></li>
          <li className="nav-items"><a className="nav-link" href="#experience">Experience</a></li>
          <li className="nav-items"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </nav>
      </div>
      
    </div>
  );
}

export default Navbar;
