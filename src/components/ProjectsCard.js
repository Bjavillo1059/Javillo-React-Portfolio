import React from "react";

function ProjectsCard(props) {
  return (
    <p>
      <a
        href={ props.projects.appLink }
        className="text-primary"
      >
        { props.projects.title }{" "}
      </a>{" "}
      { props.projects.description }{" "}
      <a href={ props.projects.githubLink }>
        <img
          src={ props.projects.image }
          alt={ props.projects.alt }
          className="popout"
          id={ props.projects.id }
        />
      </a>
    </p>
  );
}

export default ProjectsCard;
