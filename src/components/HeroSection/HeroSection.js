import React from "react";

import Path1 from "../../images/Path1.svg";
import Path2 from "../../images/Path2.svg";
import Path3 from "../../images/Path3.svg";

import "./HeroSection.css";

export default function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Hey, I’m Marko Lukesevik and I love building beautiful websites
          </h1>
          <div className="button-div">
            <button className="hero-button">
              <img src={Path1} alt=""></img>
              <img src={Path2} alt=""></img>
              <img src={Path3} alt=""></img>
            </button>
            <a href="/Marko-CV.pdf" download>
              RESUME
            </a>
          </div>
        </div>
      </div>

      <div className="hero-section-small"></div>
      <h1 className="hero-content-small">
        Hey, I’m Marko Lukesevik and I love building beautiful websites
      </h1>
      <div className="button-div-small">
        <button className="hero-button">
          <img src={Path1} alt=""></img>
          <img src={Path2} alt=""></img>
          <img src={Path3} alt=""></img>
        </button>
        <a href="/Marko-CV.pdf" download>
          RESUME
        </a>
      </div>
    </>
  );
}
