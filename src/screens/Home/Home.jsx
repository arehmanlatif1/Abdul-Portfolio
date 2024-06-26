import React from "react";
import Experience from "../../components/Experience/Experience.jsx";
import Education from "../../components/Education/Education.jsx";
import Project from "../../components/Projects/Project.jsx";
import Contact from "../../components/Contact/Contact.jsx";
// import abdul from "../../Icons/ar.jpeg";
import Skills from "../../components/Skills/Skill.jsx";
import prof from "../../gif-files/DesktopW.json"
import Lottie from "lottie-react";
import hand from "../../gif-files/Waving.json"
import "./Home.css";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {
  return (
    <div className="home-container">
      <div className="abdul-portfolio">
        <div className="content">
          <h2 className="hey"> Hi all,
            <Lottie animationData={hand}  style={{ width: "6rem", display: "inline-block", verticalAlign: "middle"  }}/>
          </h2>
          <h2 className="home-ar">I'm <span>Abdul Rehman</span></h2>
          <p className="summary">
            A highly motivated and detail-oriented software engineer with experience in Web development and social media marketing. A recent graduate from General Assembly with Bootcamp in Software Engineer Full Stack Developer, I am well-versed in various programming languages, including HTML / CSS / JavaScript / React. I am a quick learner and highly adaptable, with a strong drive to continuously improve my skills and knowledge.
          </p>
          <div>
            <button className="download-btn">
          <a 
            href="https://docs.google.com/document/d/1t0FhEagcEJBbntU1log_lJhBaewILPhJ/edit?usp=sharing&ouid=114357877718036734215&rtpof=true&sd=true"
            target="_blank"
            download="Resume_Abdul_Rehman.pdf"
          >
            Resume
          </a>
          </button>
          </div>
        </div>

        <Lottie animationData={prof} loop={true}  id="ar-lottie"/> 

       
      </div>

      <section className="section-skills">
        <div className="skills" id="skills">
          <Skills />
        </div>
      </section>
      <section className="section-project">
        <div className="div-project" id="project">
          <Project />
        </div>
        </section>

      <section className="section-edu">
        <div className="div-edu" id="education">
          <Education />
        </div>
      </section>

      {/* <section className="section-ex">
        <div className="div-ex" id="experience">
          <Experience />
        </div>
      </section> */}

      <section className="section-contact">
        <div className="div-contact" id="contact">
          <Contact />
        </div>
      </section>

      <section className="section-footer">
        <div className="div-footer" id="footer">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Home;
