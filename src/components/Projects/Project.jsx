import React from "react";
import Lottie from "lottie-react";
import htmlicon from "../../gif-files/Html.json";
import styling from "../../gif-files/Cssheet.json";
import js from "../../gif-files/Javascript.json";
import cloudy from "../../gif-files/Clouds.json";
import rektgame from "../../gif-files/Games.json";
import product from "../../gif-files/Product.json";
import cdpal from "../../gif-files/Codepal.json"
import currencyex from '../../gif-files/Currencyex.json'
import "./Project.css";

function Project() {
  return (
    <div className="project-container">
      <h2 className="project-header">
        <span>TECHNICAL PROJECTS</span>
      </h2>

      <div className="project-main">
                                                        {/* Currency Exchange Project */}

        <section className="section-container">
          <div className="app-container">
            <Lottie animationData={currencyex} loop={true} />
            <h3 className="app-title">
              <a href="https://exchangecurrencies.netlify.app/">
                " Currency Exchange "
              </a>
            </h3>
            <p className="app-description">
              Utilized an API link to fetch the data that convert the currencies with real-time rates for seamless global transactions.
            </p>

            {/* <div className="lang-icons"> 

            <h6><i className="fa-brands fa-3x fa-html5"></i><p>HTML</p></h6>
          <h6><i className="fa-brands fa-3x fa-css3"></i><p>CSS</p></h6>
          <h6><i className="fa-brands fa-3x fa-js"></i><p>Javascript</p></h6>

            </div> */}

            <div className="app-icon">
                <a className="icon-html">
                <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }} />
                HTML
                </a>
             
              <a className="icon-html">
                <Lottie animationData={styling} loop={true} style={{ width: "3.5rem" }} />
                CSS
                </a>
                <a className="icon-html">
                <Lottie animationData={js} loop={true} style={{ width: "3.5rem", margin: "3px" }}/>
                Javascript
                </a>
            </div>
          </div>
        </section>

                                                        {/* Weather App Project */}

        <section className="section-container">
          <div className="app-container">
            <Lottie animationData={cloudy} />
            <h3 className="app-title">
              <a href="https://weather-app-caramel.netlify.app/">" Weather App "</a>
            </h3>
            <p className="app-description">
              Developed a dynamic weather application using HTML, CSS, React and JavaScript, fetching real-time weather data from an API.
            </p>

            <div className="app-icon">
            <a className="icon-html">
              <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }}/>
                React
                </a>
              <a className="icon-html" >
                <Lottie animationData={styling} loop={true} style={{ width: "3.5rem" }}/>
                CSS
              </a>
              <a className="icon-html">
                <Lottie animationData={js} loop={true} style={{ width: "3.5rem", margin: "3px" }}/>
                Javascript
              </a>
             
            </div>
          </div>
        </section>

 
                                                        {/* REK'T Project */}
        <section className="section-container">
          <div className="app-container">
            <Lottie animationData={rektgame} />
            <h3 className="app-title">
              <a href="https://rekt-api.netlify.app/">" REK’T "</a>
            </h3>
            <p className="app-description">
              Spearheaded the development of REK'T, a comprehensive gaming
              review website featuring front-end and back-end functionalities.
              Utilized JSON data for comprehensive game details and images.
            </p>

            <div className="app-icon">
              <a className="icon-html">
                <Lottie animationData={styling} loop={true} style={{ width: "3.5rem" }}/>
                CSS
              </a>
              <a className="icon-html">
                <Lottie animationData={js} loop={true} style={{ width: "3.5rem" }}/>
                Javascript
              </a>
              <a className="icon-html">
              <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }}/>
                React
              </a>
            </div>
          </div>
        </section>
                                                        {/* Code.pal */}
        <section className="section-container">
          <div className="app-container">
            <Lottie animationData={cdpal} loop={true} />
            <h3 className="app-title">
              <a href="https://dev--jovial-macaron-61c636.netlify.app/">" Code.Pal "</a>
              </h3>
            <p className="app-description">
              We create a freeleance website, where a User can hire a delveloper. This website have SignUp, SignIn and Signout. A developer can make different profile than Users. Developer can showcase there projects which users can give a like.
            </p>

            <div className="app-icon">
              <a className="icon-html">
              <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }}/>
                React</a>
              <a className="icon-html">
                <Lottie animationData={js} loop={true} style={{ width: "3.5rem" }}/>
                Python
              </a>
              <a className="icon-html">
              <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }}/>
                Django</a>
            </div>
          </div>
        </section>

                                                        {/* Product API */}
                                                      
        <section className="section-container">
          <div className="app-container">
            <Lottie animationData={product} loop={true} style={{ width: "15rem", height: "17.5rem" }}/>
            
            <h3 className="app-title">
              <a href="https://product-api-project.netlify.app/">" Product API "</a>
            </h3>
            <p className="app-description">
              Create a Departmental store application, Using the  HTML, CSS, REACT and Javascript.
            </p>

            <div className="app-icon">
            <a className="icon-html">
              <Lottie animationData={htmlicon} loop={true} style={{ width: "3.5rem" }}/>
                React
                </a>
              <a className="icon-html">
                <Lottie animationData={styling} loop={true} style={{ width: "3.5rem" }}/>
                CSS
              </a>
              <a className="icon-html">
                <Lottie animationData={js} loop={true} style={{ width: "3.5rem", margin: "3px" }}/>
                Javascript
              </a>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Project;
