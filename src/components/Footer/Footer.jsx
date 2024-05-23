import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/abdulrehmanlatif1/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/arehmanlatif1"><i className="fa-brands fa-github"></i></a>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>

        </div>
        <div className="footer-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy;2023; Designed by <span className="designer">Abdul</span></p>
      </div>
    </footer>
  );
}

export default Footer;
