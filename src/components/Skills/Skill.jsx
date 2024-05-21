import React from "react";
import skillsdesing from "../../gif-files/Skilldesign.json"
import Lottie from "lottie-react";
import { SiMongodb,SiExpress,SiDjango,SiJquery,SiJavascript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5,FaCss3,FaReact,FaPython,FaNode,FaNpm,FaDatabase } from "react-icons/fa";

import "./Skill.css";
function Skill() {
  return (
    <div className="skills-main">
      <h3 className="tab-header">
        <span>SKILLS</span>
      </h3>
      <div className="skills-container">
      <div className="lottie-container">
        <Lottie animationData={skillsdesing} id="lottie-skills" loop={true} style={{ width: "50rem" }}/>
      </div>

      <div className="skills-slider">
      <h2>What I do</h2>
      <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
      <div className="skills-icon">
        <div className="icon-container"><FaHtml5 size={50} id="lol-icons"/> <h6>HTML</h6></div>
        <div className="icon-container"><FaCss3 size={50} id="lol-icons" /> <h6>CSS</h6></div>
        <div className="icon-container"><SiJavascript size={50} id="lol-icons" /> <h6>JavaScript</h6></div>
        <div className="icon-container"><FaReact size={50} id="lol-icons"/> <h6>React</h6></div>
        <div className="icon-container"><FaPython size={50} id="lol-icons"/> <h6>Python</h6></div>
        <div className="icon-container"><FaNode size={50} id="lol-icons"/> <h6>Node.js</h6></div>
        <div className="icon-container"><SiExpress size={50} id="lol-icons"/> <h6>Express</h6></div>
        <div className="icon-container"><FaNpm size={50} id="lol-icons"/> <h6>NPM</h6></div>
        <div className="icon-container"><SiMongodb size={50} id="lol-icons"/> <h6>MongoDB</h6></div>
        <div className="icon-container"><SiDjango size={50} id="lol-icons"/> <h6>Django</h6></div>
        <div className="icon-container"><SiJquery size={50} id="lol-icons"/> <h6>jQuery</h6></div>
        <div className="icon-container"><FaDatabase size={50} id="lol-icons"/> <h6>SQL</h6></div>
        <div className="icon-container"><BiLogoPostgresql size={50} id="lol-icons"/> <h6>PostgreSQL</h6></div>
      </div>
    </div>
        {/* <div className="skills-slider">
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src= "experience/html.svg" alt="HTML" /> HTML
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
          <img className="skills-icon" src={styling} alt="HTML" />
            CSS
            <p>
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={java} alt="JavaScript" />
              JavaScript
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={pythons} alt="Python" /> Python
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={sql} alt="SQL" /> SQL
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="Node.js" /> Node.js
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={reactjs} alt="React" /> React
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="MongoDB" /> MongoDB
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="Express" /> Express
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="PostgreSQL" />{" "}
              PostgreSQL
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={django} alt="Django" /> Django
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="JQuery" /> JQuery
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="Bootstrap" />{" "}
              Bootstrap
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="Semantic UI" />{" "}
              Semantic UI
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="RESTful Routing" />{" "}
              RESTful Routing
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="JSON" /> JSON
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="API" /> API
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="Github" /> Github
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="MongoDB" /> MongoDB
            </p>
          </div>
          <div className="skillx" style={{ backgroundColor: "#e8eaf6" }}>
            <p>
              <img className="skills-icon" src={html} alt="PostgreSQL" />{" "}
              PostgreSQL
            </p>
          </div> 
        {/* </div> */}
      </div>
    </div>
  );
}
export default Skill;
