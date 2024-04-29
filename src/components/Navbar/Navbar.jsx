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
        <ul>
          <li><a className="nav-link" href="#skills">Skills</a></li>
          <li><a className="nav-link" href="#education">Education</a></li>
          <li><a className="nav-link" href="#experience">Experience</a></li>
          <li><a className="nav-link" href="#project">Project</a></li>
        </ul>
      </nav>
        <NavLink className="nav-contact" to="/contact">
          Contact
        </NavLink>
        
      </div>
      
    </div>
  );
}

export default Navbar;
