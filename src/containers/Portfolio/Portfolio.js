import React from "react";

import { portfolioData } from "../../components/Utils/PortfolioData";
import About from "../../components/About/About";
import DoingProject from "../../components/DoingProject/DoingProject";

import "./Portfolio.css";

export default function Portfolio() {
  const renderAllProjects = () => {
    return portfolioData.map((project) => {
      return (
        <About
          key={project.id}
          {...project}
          btnText="VIEW PROJECT"
          link={`/project/${project.id}`}
        />
      );
    });
  };
  return (
    <div className="portfolio">
      {renderAllProjects()}
      <DoingProject />
    </div>
  );
}
