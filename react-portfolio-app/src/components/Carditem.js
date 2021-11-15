import React from 'react';
import { Link } from 'react-router-dom';

function Carditem() {
    return (
        <>
          <li className="card__item">
              <Link className="card__item__link">
                <figure className="card__item__pic-wrap">
                    <img 
                    src="/" 
                    alt="Travel Image" 
                    className="cards__item__img"
                    />   
                </figure>
                <div className="cards__item__info">
                   <h5 className="cards__item__text"></h5>
                </div>
                </Link>
            </li>  
        </>
    )
}

export default Carditem
