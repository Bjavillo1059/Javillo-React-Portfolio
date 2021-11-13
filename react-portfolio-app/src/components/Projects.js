import React from "react";
import ProjectsCard from "./ProjectsCard";
import projects from "../projects.json";

function Projects() {
  return (
    <>
      <section className="projects-content" id="projectsContent">
        <div className="project-info-container d-none text-center p-2">
          <h3>*Projects*</h3>
          <p className="projects-img">
            <a href="https://github.com/Bjavillo1059">
              <img
                src="././img/garden photo.JPG"
                alt="garden photo"
                id="garden-image"
              />
            </a>
            *Click photo to view GitHub*
          </p>
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
