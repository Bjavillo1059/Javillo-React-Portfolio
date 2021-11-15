import { Button } from './Button';
import React from 'react';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
           <video src='/videos/video-2.mp4' autoPlay loop muted />
           <h1>Brandon Javillo</h1>
            <p>Let's go explore!</p>
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    EXPLORE
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                >
                    WATCH TRAILER <i className="fas fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
