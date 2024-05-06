import React from "react";
import Lottie from "lottie-react";
import htmlicon from "../../gif-files/Html.json";
import styling from "../../gif-files/Cssheet.json";
import js from "../../gif-files/Javascript.json";
import ec from "../../Photos/CurrencyExchange.png";
import weatherapp from "../../Photos/Weather app.png";
import github from "../../gif-files/Github.json";
import rektproject from "../../Photos/Rekt.png";
import weathericon from "../../gif-files/Cloudsite.json"
import "./Project.css";

function Project() {
  return (
    <div className="project-container">
      <h2 className="project-header">
        <span>TECHNICAL PROJECTS</span>
      </h2>

      {/* Currency Exchange Project */}

      <section className="section-container">
        <div className="app-container">
          <img className="app-img" src={ec} alt="Currency exchange application interface" />
          <h4 className="app-title">Currency Exchange</h4>
          <p className="app-description">
            Utilized an API link to fetch the data. Converted currencies effortlessly on the go with our intuitive currency exchange app, providing real-time rates for seamless global transactions.
          </p>
        </div>
        <ul className="app-skills">
          <li>
            <a aria-label="HTML skill">
              <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }} />
            </a>
            HTML
          </li>
          <li>
            <a aria-label="CSS skill">
              <Lottie animationData={styling} loop={true} style={{ width: "3.5rem" }} />
            </a>
            CSS
          </li>
          <li>
            <a aria-label="JavaScript skill">
              <Lottie animationData={js} loop={true} style={{ width: "3.5rem" }} />
            </a>
            Javascript
          </li>
        </ul>

        <div className="site-link">
          <ul className="site-item">
            <li>
              <a href="https://github.com/arehmanlatif1/Currency-Exchange">
                <Lottie animationData={github} loop={true} style={{ width: "3.5rem" }} />
                Github
              </a>
            </li>
            <li>
              <a href="https://exchangecurrencies.netlify.app/">
                Live Site
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Weather App Project */}
      <section className="section-container">
        <div className="app-container">
          <img className="app-img" src={weatherapp} alt="Weather app interface" />
          <h4 className="app-title">Weather App</h4>
          <p className="app-description">
            Developed a dynamic weather application using HTML, CSS, and JavaScript, fetching real-time weather data from an API. Implemented intuitive user interface design for seamless navigation, enhancing user experience and accessibility.
          </p>
        </div>
        <ul className="app-skills">
          <li>
            <a aria-label="HTML skill">
              <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }} />
            </a>
            HTML
          </li>
          <li>
            <a aria-label="CSS skill">
              <Lottie animationData={styling} loop={true} style={{ width: "3.5rem" }} />
            </a>
            CSS
          </li>
          <li>
            <a aria-label="JavaScript skill">
              <Lottie animationData={js} loop={true} style={{ width: "3.5rem" }} />
            </a>
            Javascript
          </li>
          <li>
              <a href="https://github.com/arehmanlatif1/Weather-project">
                <Lottie animationData={github} loop={true} style={{ width: "3.5rem" }} />
                Github
              </a>
            </li>
        </ul>
        {/* <div className="site-link">
          <ul className="site-item">
            
            <li>
              <a href="https://weather-app-caramel.netlify.app/">
              <Lottie animationData={weathericon} loop={true}  style={{ width: "3.5rem" }} />

                Live Site
              </a>
            </li>
          </ul>
        </div> */}
      </section>

      {/* REK'T Project */}
      <section className="section-container">
        <div className="app-container">
          <img className="app-img" src={rektproject} alt="REK'T gaming review website interface" />
          <h4 className="app-title">REK’T</h4>
          <p className="app-description">
            Spearheaded the development of REK'T, a comprehensive gaming review website featuring front-end and back-end functionalities. Utilized JSON data for comprehensive game details and images, dynamically sourced from Google.
          </p>
        </div>
        <ul className="app-skills">
          <li>
            <a aria-label="HTML skill">
              <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }} />
            </a>
            HTML
          </li>
          <li>
            <a aria-label="CSS skill">
              <Lottie animationData={styling} loop={true} style={{ width: "3.5rem" }} />
            </a>
            CSS
          </li>
          <li>
            <a aria-label="JavaScript skill">
              <Lottie animationData={js} loop={true} style={{ width: "3.5rem" }} />
            </a>
            Javascript
          </li>
        </ul>
        <div className="site-link">
          <ul className="site-item">
            <li>
              <a href="https://github.com/jbourke16/team-rekt-frontend" >
                <Lottie animationData={github} loop={true}  style={{ width: "3.5rem" }} />
                Github
              </a>
            </li>
            <li>
              <a href="https://rekt-api.netlify.app/">
                Live Site
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Project;
