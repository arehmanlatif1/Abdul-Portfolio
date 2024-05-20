import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import github from "../../gif-files/Github.json";
import linkedin from "../../gif-files/LinkedIn.json";
import email from "../../gif-files/Email.json";
import Lottie from "lottie-react";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p50z9gc",
        "template_c3yy5w8",
        form.current,
        "rsl9wvoTbM1uO250C"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-titile">
        <span>Contact Me</span>
      </h2>
      <div className="contact-main">
        <div className="con-form-container">

          <form ref={form} onSubmit={sendEmail} className="con-form">
          <p>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>

            <label className="con-label">Name</label>
            <input className="con-input" type="text" name="user_name" />
            <label className="con-label">Email</label>
            <input className="con-input" type="email" name="user_email" />
            <label className="con-label">Message</label>
            <textarea name="message" />
            <input className="con-input-button" type="submit" value="Send" />
          </form>
        </div>

        <div className="con-message">
          <h3 className="con-class">Keep In Touch!</h3>
          <p className="con-msg">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </p>
          <p className="italic"><i>New York, NY. USA</i></p>
          <div className="con-item-div">
            <ul className="con-items">
              <li>
                <a
                  href="https://github.com/arehmanlatif1"
                  className="social-btns"
                >
                  <Lottie
                    animationData={github}
                    loop={true}
                    style={{ width: "2rem" }}
                  />
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdulrehmanlatif1/"
                  className="social-btns"
                >
                  <Lottie
                    animationData={linkedin}
                    loop={true}
                    style={{ width: "3rem" }}
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:arehmanlatif@gmail.com" className="social-btns">
                  <Lottie
                    animationData={email}
                    loop={true}
                    style={{ width: "3rem" }}
                  />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
