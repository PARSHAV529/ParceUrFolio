import React from "react";
import { useSelector } from "react-redux";
import ProjectContainer from "./ProjectContainer";

function Projects() {
  const projects = useSelector((s) => s.formData.projects);
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const theme = useSelector((state) => state.theme.themes[selectedTheme]);

  return (
    <div className={`flex flex-col items-center py-10 ${theme.textColor} ${theme.backgroundColor}`}>
      <h1 className={`text-center text-4xl font-bold py-12 px-10 ${theme.textColor}`}>
        {"< Projects />"}
      </h1>
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
