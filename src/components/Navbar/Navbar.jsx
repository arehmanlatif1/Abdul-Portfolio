import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import togglebtn from "../../gif-files/ToggleBtn.json";
import "./Navbar.css";
import Lottie from "lottie-react";

function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar">
        <NavLink className="nav-name" to="/" onClick={() => onUpdateActiveLink('/')}>
          Abdul Rehman
        </NavLink>
        <button className="menu-toggle" onClick={toggleMenu}>
          <Lottie animationData={togglebtn} style={{ width: "3rem", margin: "10px"}}/>
        </button>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-items">
              <a className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} href="#skills" onClick={() => onUpdateActiveLink('skills')}>Skills</a>
            </li>
            <li className="nav-items">
              <a className={`nav-link ${activeLink === 'project' ? 'active' : ''}`} href="#project" onClick={() => onUpdateActiveLink('project')}>Project</a>
            </li>
            <li className="nav-items">
              <a className={`nav-link ${activeLink === 'education' ? 'active' : ''}`} href="#education" onClick={() => onUpdateActiveLink('education')}>Education</a>
            </li>
            {/* <li className="nav-items">
              <a className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`} href="#experience" onClick={() => onUpdateActiveLink('experience')}>Experience</a>
            </li> */}
            <li className="nav-items">
              <a className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => onUpdateActiveLink('contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;


