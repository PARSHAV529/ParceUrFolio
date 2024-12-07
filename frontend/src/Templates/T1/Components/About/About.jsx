import React from "react";
import "../../GlobalT1.css";
import "./About.css";
import Education from "./Education";
import Experience from "./Experince";

function About() {
  return (
    <div className="about">
      <h1>{"<About />"}</h1>
      <div className="about-description">
        <Education />
        <Experience />
        
      </div>
    </div>
  );
}

export default About;
