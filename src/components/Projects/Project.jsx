import React from "react";
import Lottie from "lottie-react";
import htmlicon from "../../gif-files/Html.json"
import styling from "../../gif-files/Cssheet.json"
import js from "../../gif-files/Javascript.json"
import "./Project.css";

function Project() {
  return (
    <div className="project-container">
      <h3 className="tab-header">
        <span>TECHNICAL PROJECTS</span>
      </h3>

      <section className="section-currency">
        <div className="app-container">

          <h4 className="app-title">Currency Exchange</h4>
          <p className="app-title">
            Utilized an API link to fetch the data. Converted currencies
            effortlessly on the go with our intuitive currency exchange app,
            providing real-time rates for seamless global transactions.
          </p>
        </div>
        <ul className="app-skills">
          <li className="li-html">
            <a>
              <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }} />
            </a> 
            HTML</li>
          <li className="li-css"><a>
              <Lottie animationData={styling} loop={true} style={{ width: "3.5rem" }} />
            </a> 
            CSS
            </li>
          <li className="li-js"><a>
              <Lottie animationData={js} loop={true} style={{ width: "3.5rem" }} />
            </a> 
            Javascript
            </li>
        </ul>


      </section>

      <section>
        <div>
          <h3>Weather App</h3>
          <p>
            Developed a dynamic weather application using HTML, CSS, and
            JavaScript, fetching real-time weather data from an API.Implemented
            intuitive user interface design for seamless navigation, enhancing
            user experience and accessibility.
          </p>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <h4>REK’T</h4>
          <p>
            Spearheaded the development of REK'T, a comprehensive gaming review
            website featuring front-end and back-end functionalities, styled
            with HTML and CSS, and powered by JavaScript.Optimized user
            engagement through the integration of essential features including
            user authentication (sign-up/sign-in), a user-friendly search bar,
            and personalized game favoriting functionality. Utilized JSON data
            for comprehensive game details and images, dynamically sourced from
            Google.
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Project;
