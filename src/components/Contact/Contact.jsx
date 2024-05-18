// import React from "react";
// import github from "../../gif-files/Github.json";
// import linkedin from "../../gif-files/LinkedIn.json";
// import email from "../../gif-files/Email.json";
// import topbar from "../../gif-files/Top.json";
// import Lottie from "lottie-react";
// import "./Contact.css";

// function Contact() {
//   return (
//     <div className="contact-container">
//       <h2 className="contact-titile">
//         <span>Contact Me</span>
//       </h2>
//       <div className="contact-main">
//         <h3 className="con-class">Keep In Touch!</h3>

//         <p className="con-msg">
//           DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
//         </p>
//         <i>New York, NY. USA</i>
//         <div className="con-item-div">
//           <ul className="con-items">
//             <li>
//               <a href="https://github.com/arehmanlatif1" className="social-btns">
//                 <Lottie
//                   animationData={github}
//                   loop={true}
//                   style={{ width: "4rem" }}
//                 />
//                 Github
//               </a>
//             </li>
//             <li>
//               <a href="https://www.linkedin.com/in/abdulrehmanlatif1/" className="social-btns">
//                 <Lottie
//                   animationData={linkedin}
//                   loop={true}
//                   style={{ width: "5rem" }}
//                 />
//                 LinkedIn
//               </a>
//             </li>
//             <li>
//               <a href="mailto:arehmanlatif@gmail.com" className="social-btns">
//                 <Lottie
//                   animationData={email}
//                   loop={true}
//                   style={{ width: "7rem" }}
//                 />
//                 Email
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Contact;


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";



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
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
  );
};

export default Contact;

