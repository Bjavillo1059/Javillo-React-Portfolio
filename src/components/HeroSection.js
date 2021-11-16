import { Button } from './Button';
import React from 'react';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    const heroPhotoSize = () => {
        if (window.innerWidth <= 960) {
            return "heroCover-medium";
        } else if (window.innerWidth <= 768) {
            return "heroCover-small";
        } else if (window.innerWidth <= 480) {
            return "heroCover-mobile";            
        } else {
            return "heroCover-large";
        }
    }

    window.addEventListener('resize', heroPhotoSize);

    return (
        <div className='hero-container'>
           <img src='/' alt="heroCover" />
           <h1>Brandon Javillo</h1>
            <p>Let's go explore!</p>
            <div className='hero-btns'>
                <Button 
                to='../img' //this path should go to photo gallery
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    EXPLORE <i className="fas fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
