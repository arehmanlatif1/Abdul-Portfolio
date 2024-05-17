import React from "react";
import github from "../../gif-files/Github.json";
import linkedin from "../../gif-files/LinkedIn.json"
import email from "../../gif-files/Email.json"
import Lottie from "lottie-react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-container">

            <h2 className="contact-titile">
                <span>Contact Me</span>
            </h2>

            <div className="contact-main">
                
                <h3 className="con-class">Keep In Touch!</h3>
                <p className="con-msg">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                <i>New York, NY. USA</i>
                <div className="con-item-div">
                <ul className="con-items">
                    <li>
                        <a href="https://github.com/arehmanlatif1">
                    <Lottie animationData={github} loop={true}  style={{ width: "5rem" }} />
                        Github
                        </a>
                        </li>
                    <li>
                        <a href="https://www.linkedin.com/in/abdulrehmanlatif1/">
                    <Lottie animationData={linkedin} loop={true}  style={{ width: "5rem" }} />
                        LinkedIn
                        </a>
                        </li>
                    <li>
                        <a email="arehmanlatif@gmail.com">
                    <Lottie animationData={email} loop={true}  style={{ width: "7rem" }} />
                        Email
                        </a>
                        </li>
                </ul>
                </div>
                <hr />

            </div>

           
        </div>

    )
}
export default Contact;
