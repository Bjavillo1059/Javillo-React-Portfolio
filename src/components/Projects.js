import React from "react";
import ProjectsCard from "./ProjectsCard";
import projects from "../projects.json";

function Projects() {
  return (
    <>
      <section className="projects-content" id="projectsContent">
        <div className="project-info-container d-none text-center p-2">
          <h3>Projects</h3>                
        </div>
        <div>
          {" "}
          {projects.map((projects) => (
            <ProjectsCard projects={projects} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
