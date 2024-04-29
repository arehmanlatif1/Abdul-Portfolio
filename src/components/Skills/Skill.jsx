import React from "react";
import skillgif from "../../gif-files/skillgif.gif";
import html from "../../Icons/html-icon.png";
import styling from "../../Icons/css-icon.png";
import java from "../../Icons/javascript-programming-language-icon.png";
import pythons from "../../Icons/python-programming-language-icon.png";
import django from "../../Icons/django-icon.png";
import reactjs from "../../Icons/react-js-icon.png";
import sql from "../../Icons/database-icon.png";

import "./Skill.css";
function Skills() {
  return (
    <div className="skills-main">
    <h3 className="tab-header">Skills</h3>
    <div className="skills-container">
        <div className="skills-slider">
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="HTML" /> HTML
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={styling} alt="CSS" /> CSS
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={java} alt="JavaScript" /> JavaScript
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={pythons} alt="Python" /> Python
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={sql} alt="SQL" /> SQL
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="Node.js" /> Node.js
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={reactjs} alt="React" /> React
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="MongoDB" /> MongoDB
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="Express" /> Express
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="PostgreSQL" /> PostgreSQL
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={django} alt="Django" /> Django
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="JQuery" /> JQuery
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="Bootstrap" /> Bootstrap
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="Semantic UI" /> Semantic UI
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="RESTful Routing" /> RESTful Routing
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="JSON" /> JSON
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="API" /> API
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="Github" /> Github
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="MongoDB" /> MongoDB
                </p>
            </div>
            <div className="skillx" style={{ backgroundColor: '#e8eaf6' }}>
                <p>
                    <img className="skills-icon" src={html} alt="PostgreSQL" /> PostgreSQL
                </p>
            </div>
        </div>
    </div>
</div>

  );
}
export default Skills;
