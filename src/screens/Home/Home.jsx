import React from "react";
import Experience from "../../components/Experience/Experience.jsx";
import Education from "../../components/Education/Education.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import Project from "../../components/Projects/Project.jsx";
import abdul from "../../Icons/ar.jpeg";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="abdul-portfolio">
        <h2 className="home-ar">ᗩᗷᗪᑌᒪ ᖇEᕼᗰᗩᑎ</h2>
        <p className="summary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A veniam
          illum at cum nihil, blanditiis fuga reiciendis deleniti rerum totam
          natus doloremque molestiae repudiandae nulla sunt quas nesciunt enim
          laborum.
        </p>
        <img className="img-ar" src={abdul} alt="ar" />
      </div>
      <section className="section-skills">
        <div className="skills">
          <Skills />
        </div>
      </section>
      <section className="section-ex">
        <div className="div-ex">
          <Experience />
        </div>
      </section>
      <section className="section-edu">
        <div className="div-edu">
          <Education />
        </div>
      </section>
      <section className="section-project">
        <div className="div-project">
          <Project />
        </div>
      </section>
    </div>
  );
}

export default Home;
