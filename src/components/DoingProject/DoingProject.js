import React from "react";

import Button from "../Button/Button";

import "./DoingProject.css";

export default function DoingProject() {
  return (
    <div className="doing-project">
      <h1>Interested in doing a project together?</h1>
      <span></span>
      <Button btnText={"CONTACT ME"} link={"/contact"} navigateTo="/contact" />
    </div>
  );
}
