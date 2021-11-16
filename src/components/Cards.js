import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Misc  from "./Misc";

function Cards() {
  return (
    <div className="cards">
      <h1>Take a look around!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
              <Carditem 
              src="./img/Deadhorse point.jpg"
              text="Here's a little about myself!"
              label="About Me"
              path={ AboutMe }
              />              
              <Carditem 
              src="./img/projects cover.jpg"
              text="Take a look at a few projects that I've created."
              label="Projects"
              path={ Projects }>
                Take a look at a few projects that I've created.
              </Carditem>              
              <Carditem 
              src="./img/Deadhorse point.jpg"
              text="Read some extra info about me and who I am in everyday life!"
              label="Miscellaneous"
              path={ Misc }
              />              
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
