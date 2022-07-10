import React, { useState } from "react";

import github from "../../images/githubContact.svg";
import instagram from "../../images/instagramContact.svg";
import linkedin from "../../images/linkedinContact.svg";
import emailjs from "emailjs-com";

import "./Contact.css";

export default function Contact() {
  const [thanksMsg, setThanksMsg] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yp6yefi",
        "template_0fye2pn",
        e.target,
        "GX7dM3yGSju2wAVXV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setThanksMsg(!thanksMsg);
  }

  const thanksMsgClass = !thanksMsg ? "thanks" : "thanks thanks-visible";

  return (
    <div className="contact">
      <div className="get-in-touch">
        <h1>Get in Touch</h1>
        <div className="get-in-touch-content">
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in Skopje. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className="contact-icons">
            <a
              href="https://github.com/MarkoLukesevik?tab=repositories"
              target="_blank"
            >
              <img className="github" src={github} alt=""></img>
            </a>
            <a href="https://www.instagram.com/markolukesevik/" target="_blank">
              <img className="instagram" src={instagram} alt=""></img>
            </a>
            <a
              href="https://www.linkedin.com/in/marko-lukesevik-630268214/"
              target="_blank"
            >
              <img className="linkedin" src={linkedin} alt=""></img>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-me">
        <h1>CONTACT ME</h1>

        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Marko Lukesevik"
            required
          ></input>

          <label htmlFor="email">Email Adress</label>
          <input
            id="email"
            type="email"
            name="user-email"
            placeholder="email@example.com"
            required
          ></input>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="How can I help?"
            required
          ></textarea>

          <input
            className="contact-btn"
            type="submit"
            value="CONTACT ME"
          ></input>

          <p className={thanksMsgClass}>
            Email send, thank you for contacting me
          </p>
        </form>
      </div>
    </div>
  );
}
