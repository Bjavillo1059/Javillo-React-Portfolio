import { Button } from './Button';
import React from 'react';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
           <img src='/' alt="heroCover" />
           <h1>Brandon Javillo</h1>
            <p>Let's go explore!</p>
            <div className='hero-btns'>
                <Button 
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
