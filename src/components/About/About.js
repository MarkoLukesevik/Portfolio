import React from "react";
import AboutContent from "../AboutContent/AboutContent";
import "./About.css";

export default function About({ img, title, text, btnText, link }) {
  return (
    <div className="about">
      <img className="image" src={require(`../../images/${img}`)} alt=""></img>
      <AboutContent title={title} text={text} btnText={btnText} link={link} />
    </div>
  );
}
