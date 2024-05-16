import React from "react";
import Lottie from "lottie-react";
import htmlicon from "../../gif-files/Html.json";
import styling from "../../gif-files/Cssheet.json";
import js from "../../gif-files/Javascript.json";
import github from "../../gif-files/Github.json";
import ec from "../../gif-files/CurrencyEx.json"
import cloudy from "../../gif-files/Clouds.json"
import rektgame from "../../gif-files/Games.json"
import product from "../../gif-files/Product.json"
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
          <Lottie
                  animationData={ec}
                  loop={true}
                />
            <h3 className="app-title">Currency Exchange</h3>
            <p className="app-description">
              {/* Utilized an API link to fetch the data that convert the currencies with real-time rates for seamless global transactions. */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi aliquid harum, iure voluptate autem, consequatur, cupiditate animi quam soluta modi aliquam sit recusandae ab cumque quas quis ut nobis dicta!
            </p>

            <ul className="app-icon">
              <li className="icon-html">
                <Lottie
                  animationData={htmlicon}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                HTML
              </li>
              <li>
                <Lottie
                  animationData={styling}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                CSS
              </li>
              <li>
                <Lottie
                  animationData={js}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                Javascript
              </li>
            </ul>
          </div>

          {/* <div className="site-link">
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
        </div> */}
        </section>

        {/* Weather App Project */}
        <section className="section-container">
          <div className="app-container">
            <Lottie animationData={cloudy} />
            <h3 className="app-title">Weather App</h3>
            <p className="app-description">
              {/* Developed a dynamic weather application using HTML, CSS, and JavaScript, fetching real-time weather data from an API. */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio impedit numquam possimus ipsam, deserunt iusto natus qui consequuntur eum inventore, ipsa quidem? Deleniti sunt ab facere vitae rem aspernatur enim.
            </p>

            <ul className="app-icon">
              <li className="icon-html">
                <Lottie
                  animationData={htmlicon}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                HTML
              </li>
              <li>
                <Lottie
                  animationData={styling}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                CSS
              </li>
              <li>
                <Lottie
                  animationData={js}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                Javascript
              </li>
            </ul>
          </div>
          {/* <div className="site-link">
          <ul className="site-item">
            
          <li>
              <a href="https://github.com/arehmanlatif1/Weather-project">
                <Lottie animationData={github} loop={true} style={{ width: "3.5rem" }} />
                Github
              </a>
            </li>
            <li>
              <a href="https://weather-app-caramel.netlify.app/">
              <Lottie animationData={weathericon} loop={true}  style={{ width: "3.5rem" }} />

                Live Site
              </a>
            </li>
          </ul>
        </div> */}
        </section>

        <section className="section-container">
        <div className="app-container">
            <Lottie animationData={product} loop={true} style={{ width: "15rem", height: "17.5rem" }} />
            <h3 className="app-title">Product API</h3>
            <p className="app-description">
              {/* Create a Department store application, Using the  HTML, CSS, REACT and Javascript. */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, aliquid earum veniam enim nihil reiciendis labore animi, facilis doloremque nemo nesciunt minus quod inventore, ipsam odit. Eaque quasi molestiae possimus?
            </p>

            <ul className="app-icon">
              <li className="icon-html">
                <Lottie
                  animationData={htmlicon}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                HTML
              </li>
              <li>
                <Lottie
                  animationData={styling}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                CSS
              </li>
              <li>
                <Lottie
                  animationData={js}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                Javascript
              </li>
            </ul>
          </div>
          {/* <div className="site-link">
          <ul className="site-item">
            
          <li>
              <a href="https://github.com/arehmanlatif1/Weather-project">
                <Lottie animationData={github} loop={true} style={{ width: "3.5rem" }} />
                Github
              </a>
            </li>
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
            <Lottie animationData={rektgame} />
            <h3 className="app-title">REK’T</h3>
            <p className="app-description">
              {/* Spearheaded the development of REK'T, a comprehensive gaming
              review website featuring front-end and back-end functionalities.
              Utilized JSON data for comprehensive game details and images. */}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam fuga dolore similique, unde optio numquam qui quaerat molestiae natus neque ullam eaque architecto illo quo, perspiciatis laboriosam vitae autem? Similique!
            </p>

            <ul className="app-icon">
              <li className="icon-html">
                <Lottie
                  animationData={htmlicon}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                HTML
              </li>
              <li>
                <Lottie
                  animationData={styling}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                CSS
              </li>
              <li>
                <Lottie
                  animationData={js}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                Javascript
              </li>
            </ul>
          </div>
          {/* <div className="site-link">
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
        </div> */}
        </section>

        <section className="section-container">
          <div className="app-container">
          <Lottie
                  animationData={ec}
                  loop={true}
                />
            <h3 className="app-title">Code.Pal</h3>
            <p className="app-description">
              {/* We create a freeleance website, where a client can hire a delveloper */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate deserunt quae omnis minus vero nostrum? Necessitatibus saepe, asperiores debitis sit magni eveniet tenetur quo rem harum impedit tempore velit?
            </p>

            <ul className="app-icon">
              <li className="icon-html">
                <Lottie
                  animationData={htmlicon}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                HTML
              </li>
              <li>
                <Lottie
                  animationData={styling}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                CSS
              </li>
              <li>
                <Lottie
                  animationData={js}
                  loop={true}
                  style={{ width: "3.5rem" }}
                />
                Javascript
              </li>
            </ul>
          </div>

          {/* <div className="site-link">
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
        </div> */}
        </section>





        

      </div>
    </div>
  );
}

export default Project;
