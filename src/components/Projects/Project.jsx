import React from "react";
import Lottie from "lottie-react";
import htmlicon from "../../gif-files/Html.json";
import styling from "../../gif-files/Cssheet.json";
import js from "../../gif-files/Javascript.json";
import github from "../../gif-files/Github.json";
import ec from "../../gif-files/CurrencyEx.json";
import cloudy from "../../gif-files/Clouds.json";
import rektgame from "../../gif-files/Games.json";
import product from "../../gif-files/Product.json";
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
            <Lottie animationData={ec} loop={true} />
            <h3 className="app-title">
              {" "}
              <a href="https://exchangecurrencies.netlify.app/">
                
                " Currency Exchange "
              </a>
            </h3>
            <p className="app-description">
              {/* Utilized an API link to fetch the data that convert the currencies with real-time rates for seamless global transactions. */}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              aliquid harum, iure voluptate autem, consequatur, cupiditate animi
              quam soluta modi aliquam sit recusandae ab cumque quas quis ut
              nobis dicta!
            </p>

            <div className="lang-icons"> 

            <h6><i className="fa-brands fa-3x fa-html5"></i><p>HTML</p></h6>
          <h6><i className="fa-brands fa-3x fa-css3"></i><p>CSS</p></h6>
          <h6><i className="fa-brands fa-3x fa-js"></i><p>Javascript</p></h6>

            </div>

            {/* <ul className="app-icon">
              <li className="icon-html">
                <a><i className="fa-brands fa-html">
                <Lottie
                  animationData={htmlicon}
                  loop={true}
                  style={{ width: "3.5rem" }} 
                />
                HTML
                </i>
                </a>
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
            </ul> */}
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
              {/* Developed a dynamic weather application using HTML, CSS, and JavaScript, fetching real-time weather data from an API. */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio impedit numquam possimus ipsam, deserunt iusto natus
              qui consequuntur eum inventore, ipsa quidem? Deleniti sunt ab
              facere vitae rem aspernatur enim.
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
              <li>React</li>
            </ul>
          </div>
        </section>

        <section className="section-container">
          <div className="app-container">
            <Lottie
              animationData={product}
              loop={true}
              style={{ width: "15rem", height: "17.5rem" }}
            />
            <h3 className="app-title">
              <a href="https://product-api-project.netlify.app/">" Product API "</a>
            </h3>
            <p className="app-description">
              {/* Create a Department store application, Using the  HTML, CSS, REACT and Javascript. */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Suscipit, aliquid earum veniam enim nihil reiciendis labore animi,
              facilis doloremque nemo nesciunt minus quod inventore, ipsam odit.
              Eaque quasi molestiae possimus?
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
              <li>React</li>
            </ul>
          </div>
        </section>

        {/* REK'T Project */}
        <section className="section-container">
          <div className="app-container">
            <Lottie animationData={rektgame} />
            <h3 className="app-title">
              {" "}
              <a href="https://rekt-api.netlify.app/">" REK’T "</a>
            </h3>
            <p className="app-description">
              {/* Spearheaded the development of REK'T, a comprehensive gaming
              review website featuring front-end and back-end functionalities.
              Utilized JSON data for comprehensive game details and images. */}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              fuga dolore similique, unde optio numquam qui quaerat molestiae
              natus neque ullam eaque architecto illo quo, perspiciatis
              laboriosam vitae autem? Similique!
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
              <li>
               
                React
              </li>
            </ul>
          </div>
        </section>

        <section className="section-container">
          <div className="app-container">
            <Lottie animationData={ec} loop={true} />
            <h3 className="app-title">
              <a href="https://dev--jovial-macaron-61c636.netlify.app/">" Code.Pal "</a>
              </h3>
            <p className="app-description">
              {/* We create a freeleance website, where a client can hire a delveloper */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores cupiditate deserunt quae omnis minus vero nostrum?
              Necessitatibus saepe, asperiores debitis sit magni eveniet tenetur
              quo rem harum impedit tempore velit?
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
        </section>
      </div>
    </div>
  );
}

export default Project;
