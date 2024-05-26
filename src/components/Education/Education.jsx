import React from "react";
import "./Education.css";
import Lottie from "lottie-react";
import edu from "../../gif-files/Education.json"
import generalassembly from "../../Icons/GA.png"
import usaedu from "../../Icons/usa.png"


function Education() {

  const educations = [
    { id: 1, title: "Software Engineering", institution: "General Assembly", duration: "2024", image: usaedu },
    { id: 2, title: "Computer Science", institution: "University of South Asia", duration: "2015 - 2019", image: generalassembly }

  ]

  return (
    <div className="edu-container">
      <h2 className="edu-header">
        <span>EDUCATION</span>
        </h2>
        <div className="education-list">
        <Lottie animationData={edu} loop={true} style={{ width: "20rem" }} id="lottie-edu" />

        {educations.map((education) => (
          <div key={education.id} className="education-item">
            <img src={education.image} alt={`${education.institution} logo`} className="edu-image" />
            <h3 className="edu-title">{education.title}</h3>
            <p className="edu-paragraph">{education.institution}</p>
            <p className="edu-date">{education.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;