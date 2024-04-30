import React from "react";
import usa from "../../Icons/usa.png"
import babyplanet from "../../Icons/babyplanet.pk.png"
import explore from "../../Icons/explore.png";
import "./Experience.css";

function Experience() {
  return (
    <div className="tab-display">
      <h2 className="title">Experience</h2>
      <div className="ex-container">

      <div className="company-name">
      <h5 className="ex-company">Explore Logic’s IT Solutions | Pk</h5>
      <img className="explore" src={explore} alt="logics" />
      </div>

        <h3 className="ex-tab">Web Developer</h3>
        <h6 className="ex-date">Feb 2020 - August 2022</h6>
        <p className="ex-p">
          <ul>
            <li>
              Developed and maintained responsive websites and applications
              using HTML, CSS, ensuring cross-browser compatibility and
              optimized performance.
            </li>
            <li>
              Leveraged HTML and CSS to develop and maintain responsive websites
              and applications, ensuring seamless cross-browser compatibility
              and optimal performance.
            </li>
          </ul>
        </p>
      </div>

      <div className="ex-container">
        <div className="company-name">
      <h5 className="ex-company">Babyplanet.pk</h5>
      <img className="explore" src={babyplanet} alt="logics" />

      </div>
        <h3 className="ex-tab">Customer Service</h3>
        <h4 className="ex-title">Social Media Management</h4>

        <h6 className="ex-date">Sept 2016 - Feb 2018</h6>
        <p className="ex-p">
          <ul>
            <li>
              Managed customer service operations and social media content to
              increase brand visibility and engagement.
            </li>
            <li>
              Developed effective customer engagement strategies to ensure
              satisfaction.
            </li>
            <li>
              Met and exceeded customer expectations through prompt and
              efficient resolution of inquiries and complaints.
            </li>
            <li>
              Strengthened brand image through engaging social media campaigns
              and improved customer experiences.
            </li>
          </ul>
        </p>
      </div>
      <div className="ex-container">

        <div className="company-name">
        <h3 className="ex-company">University of South Asia</h3>
        <img className="explore" src={usa} alt="logics" />

        </div>
        <h4>Social Media Intern</h4> 
        <h6 className="ex-date">November 2015 - May 2018</h6>
        <p>
          Assisted in maintaining brand identity by working on marketing
          campaigns Conducted market research and collaborated with other
          marketing professionals to create effective campaigns. Boosted and
          promoted campaigns through social media platforms, including Facebook
          and Instagram. Contributed to the success of marketing campaigns
          through strategic planning and content creation Project:
          https://usa.edu.pk/
        </p>
      </div>
    </div>
  );
}

export default Experience;
