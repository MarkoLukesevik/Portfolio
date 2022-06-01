import React from "react";
import Button from "../Button/Button";
import "./AboutContent.css";

export default function AboutContent({
  title,
  text,
  btnText,
  link,
  skills1,
  skills2,
  onBtnClick,
}) {
  return (
    <>
      <div className="about-content">
        <h1>{title}</h1>
        <p>{text}</p>
        {skills1 ? <p className="skills">{skills1}</p> : <></>}
        {skills2 ? <p className="skills">{skills2}</p> : <></>}
        <Button btnText={btnText} link={link} onBtnClick={onBtnClick} />
      </div>

      <div className="about-content small">
        <div className="wraper">
          <h1>{title}</h1>
          {skills1 ? <p className="skills">{skills1}</p> : <></>}
          {skills2 ? <p className="skills">{skills2}</p> : <></>}
          <Button btnText={btnText} link={link} onBtnClick={onBtnClick} />
        </div>
        <p className="text">{text}</p>
      </div>
    </>
  );
}
