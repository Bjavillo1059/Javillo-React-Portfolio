import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Cards</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
              <Carditem />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
