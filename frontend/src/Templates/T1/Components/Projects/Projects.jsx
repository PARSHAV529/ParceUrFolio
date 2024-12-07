import React from 'react'
import '../../GlobalT1.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'
import { useSelector } from 'react-redux'
function Projects(
){
  const projects= useSelector(s=>s.formData.projects)
  console.log(projects);
  
  return (
    <div className="projects">
      <h1>{"< Projects />"}</h1>
        <div className="projects-description">
            {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
            ))}
        </div>
    </div>
  )
}

export default Projects
