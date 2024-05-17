import React from "react";
import usa from "../../Icons/usa.png";
import babyplanet from "../../Icons/babyplanet.pkk.png";
import explore from "../../Icons/explore.png";
import "./Experience.css";

function Experience() {
  return (
    <div className="ex-header">
      <h2 className="title">
        <span>EXPERIENCE</span>
      </h2>

      <div className="tab-display">
        <div className="ex-container">
          <div className="company-header">
            <h3 className="ex-company">Explore Logic’s IT Solutions</h3>
            <img className="company-logo" src={explore} alt="Explore Logics" />
          </div>
          <h3 className="ex-role">Web Developer</h3>
          <h6 className="ex-date">Feb 2020 - Aug 2022</h6>
          <ul className="ex-details">
            <li>Developed and maintained responsive websites using HTML and CSS, focusing on cross-browser compatibility.</li>
            <li>Ensured optimized performance and user experience across all platforms.</li>
          </ul>
        </div>

        <div className="ex-container">
          <div className="company-header">
            <h3 className="ex-company">Babyplanet.pk</h3>
            <img className="company-logo" src={babyplanet} alt="Babyplanet" />
          </div>
          <h3 className="ex-role">Customer Service</h3>
          <h6 className="ex-date">Sept 2016 - Feb 2018</h6>
          <ul className="ex-details">
            <li>Managed customer service operations and social media content to increase brand visibility and engagement.</li>
            <li>Developed effective customer engagement strategies to ensure satisfaction.</li>
          </ul>
        </div>

        <div className="ex-container">
          <div className="company-header">
            <h3 className="ex-company">University of South Asia</h3>
            <img className="company-logo" src={usa} alt="University of South Asia" />
          </div>
          <h3 className="ex-role">Social Media Intern</h3>
          <h6 className="ex-date">Nov 2015 - May 2018</h6>
          <ul className="ex-details">
            <li>Engineered and executed marketing strategies, enhancing brand identity and conducting collaborative market research.</li>
            <li>Boosted brand engagement through targeted social media promotions on platforms like Facebook and Instagram.</li>
          </ul>
        </div>
      </div>
          </div>
  );
}

export default Experience;