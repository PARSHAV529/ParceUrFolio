import React from "react";
import { useSelector } from "react-redux";
import Pill from "../Pill/Pill";

function ProjectContainer({ project }) {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const theme = useSelector((state) => state.theme.themes[selectedTheme]);

  return (
    <div
      className={`flex flex-col items-center w-[350px] min-h-[400px] border ${theme.borderColor || 'border-gray-300'}`}
    >
      <div className="w-full h-[50%] overflow-hidden border-b border-gray-300">
        <img
          src="https://placehold.co/350x230"
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`h-[50%] w-full flex flex-col justify-start items-start gap-2 p-4 ${theme.textColor}`}
      >
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-base">{project.description}</p>
        {/* <div className="flex flex-wrap justify-start gap-2">
          {project.technologies.map((technology) => (
            <Pill content={technology} theme={theme} />
          ))}
        </div> */}
        <a
          className={`bg-secondary text-primary rounded-full w-full text-center py-2 mt-2 ${theme.buttonColor || 'bg-secondary'}`}
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
