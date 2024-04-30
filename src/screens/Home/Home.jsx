import React from "react";
import Experience from "../../components/Experience/Experience.jsx";
import Education from "../../components/Education/Education.jsx";
import Project from "../../components/Projects/Project.jsx";
import abdul from "../../Icons/ar.jpeg";
import Skills from "../../components/Skills/Skill.jsx";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="abdul-portfolio">
        <div className="content">
          <h2> Who am I?</h2>
          <h2 className="home-ar">ᗩᗷᗪᑌᒪ ᖇEᕼᗰᗩᑎ</h2>
          <p className="summary">
            A highly motivated and detail-oriented software engineer with
            experience in Web development, social media marketing, and customer
            service. A recent graduate from General Assembly with Bootcamp in
            Software Engineer Full Stack Developer, I am well-versed in various
            programming languages, including HTML, CSS, and JavaScript, React. I
            am a quick learner and highly adaptable, with a strong drive to
            continuously improve my skills and knowledge.
          </p>
          <a
            href="https://docs.google.com/document/d/1t0FhEagcEJBbntU1log_lJhBaewILPhJ/edit?usp=sharing&ouid=114357877718036734215&rtpof=true&sd=true"
            target="_blank"
            download="Resume_Abdul_Rehman.pdf"
          >
            <button className="resume-btn">My Resume</button>
          </a>
        </div>
        <img className="img-ar" src={abdul} alt="ar" />
       
      </div>
      <hr className="animated" />

      <section className="section-skills">
        <div className="skills" id="skills">
          <Skills />
        </div>
      </section>
      <section className="section-ex">
        <div className="div-ex" id="experience">
          <Experience />
        </div>
      </section>
      <section className="section-edu">
        <div className="div-edu" id="education">
          <Education />
        </div>
      </section>
      <section className="section-project">
        <div className="div-project" id="project">
          <Project />
        </div>
      </section>
    </div>
  );
}

export default Home;
