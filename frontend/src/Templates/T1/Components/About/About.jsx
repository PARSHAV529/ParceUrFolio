import React from "react";
import { useSelector } from "react-redux";
import "../../GlobalT1.css";
import Education from "./Education";
import Experience from "./Experince";

function About() {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const theme = useSelector((state) => state.theme.themes[selectedTheme]);

  return (
    <div className={`flex flex-col items-center py-10 ${theme.backgroundColor}`}>
      <h1 className={`text-center text-4xl font-bold py-12 px-10 ${theme.textColor}`}>
        {"< About />"}
      </h1>
      <div className="flex justify-center items-center gap-5 px-5">
        <Education theme={theme} />
        <Experience theme={theme} />
      </div>
    </div>
  );
}

export default About;
