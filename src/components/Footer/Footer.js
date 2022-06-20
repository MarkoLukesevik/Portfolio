import React from "react";

import FooterLogo from "../../images/FooterLogo.svg";
import Github from "../../images/Github.svg";
import LinkList from "../LinkList/LinkList";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-content">
          <img src={FooterLogo} alt=""></img>
          <LinkList />
        </div>

        <div className="social-media-icons">
          <a
            href="https://github.com/MarkoLukesevik?tab=repositories"
            target="_blank"
          >
            <img className="github" src={Github} alt=""></img>
          </a>
          <a href="https://www.instagram.com/markolukesevik/" target="_blank">
            <img
              className="instagram"
              src={require(`../../images/instagram.png`)}
              alt=""
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/marko-lukeshevikj-630268214/"
            target="_blank"
          >
            <img
              className="linkedin"
              src={require(`../../images/linkedin.png`)}
              alt=""
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
