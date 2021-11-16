import React from 'react'
import Navbar from "../Navbar";
import "../../App.css";
import FooterBlock from '../FooterBlock';
import Projects from '../Projects';

export default function ProjectsMain() {
    return (
        <>
        <img src={require,("./img/projects cover.jpg")} alt="projects cover" className="projects-cover"/>
            <Projects />
            <FooterBlock />
        </>
    )
}
