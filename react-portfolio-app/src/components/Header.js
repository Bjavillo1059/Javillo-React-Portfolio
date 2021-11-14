import React from "react";

function Header() {
    return (
        <header>
        <h1 className="display-5 text-start">Brandon Javillo -</h1>
        <p className="display-7"> I believe the key to my success is in hard work, dedication to excellence, and happiness!
        </p>

        <ul>
            <li>
                <a href="#about-me" className="navbar-links" variant="primary">About Me</a>
            </li>
            <li>
                <a href="#misc-info" className="navbar-links">Miscellaneous</a>
            </li>
            <li>
                <a href="#projects-info" className="navbar-links">Projects</a>
            </li>
            <li>
                <a href="#contact-info" className="navbar-links">Click for Contact_Info</a>
            </li>
        </ul>

    </header>
    );
}

export default Header;