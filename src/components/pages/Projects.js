import React from "react";
import "../../App.css";
import ProjectsCard from "../ProjectsCard";
import projects from "../../projects.json"

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects">PROJECTS</h1>
      <div className="projects-content">
      <div>
          {" "}
          {projects.map((projects) => (
            <ProjectsCard projects={projects} />
          ))}
        </div>
      </div>
    </div>
  );
}
