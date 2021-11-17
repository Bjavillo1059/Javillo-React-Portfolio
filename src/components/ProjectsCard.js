import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsCard(props) {
  return (
    <li className='projects__item'>
      <Link className='projects__item__link' to={props.path}>
        <figure className='projects__item__pic-wrap' data-category={props.label}>
          <img
            className='projects__item__img'
            alt=''
            src={props.src} 
            />
        </figure>
        <div className='projects__item__info'>
          <h3 className='projects__item__text'>{props.text}</h3>
          </div>
      </Link>
    </li>
  );
}



// import "../App.css";
// import "./Projects.css";
// import projects from "../projects.json";
    // <div className="projectsCard-contatiner">
    //   <Link
    //     to={ props.projects.repoLink }
    //     className="projectsCard-container-link text-primary"
    //   >
    //     { props.projects.title }{" "}
    //   </Link>{" "}
    //   { props.projects.description }{" "}
    //   <Link to={ props.projects.deployedLink }>
    //     <img
    //       src={ props.projects.image }
    //       alt={ props.projects.alt }
    //       className="popout"
    //       id={ props.projects.id }
    //     />
    //   </Link>
    // </div>