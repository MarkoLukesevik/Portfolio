import React from "react";
import About from "../../components/About/About";
import HeroSection from "../../components/HeroSection/HeroSection";
import DoingProject from "../../components/DoingProject/DoingProject";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <About
        img={"jas.jpg"}
        title={"About Me"}
        btnText="GO TO PORTFOLIO"
        link="/portfolio"
        text={
          "I’m a front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Skopje, MK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work."
        }
      />
      <DoingProject />
    </div>
  );
}
