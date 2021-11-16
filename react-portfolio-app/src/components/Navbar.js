import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // useEffect(() => {
  //   showButton();
  // }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navHeader navbar">
      <Router className="navHeader-center">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Cryptic<i className="fa-solid fa-dragon"/>FatDragons
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="navbar-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/img/Deadhorse point.jpg'
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to='/img/serene.jpg'
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Miscellaneous
              </Link>
            </li>
            <li>
              <Link
                to='/img/projects cover.jpg'
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
          {/* {button && (
            <Button buttonStyle="btn--outline">Click for Contact_Info</Button>
          )} */}
        
      </Router>
    </nav>
  );
}

export default Navbar;
