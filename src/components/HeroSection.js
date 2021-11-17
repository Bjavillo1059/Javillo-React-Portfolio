import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/img-12.JPG' alt='moabSelf'/>
      <h1>Hello, I'm Brandon</h1>
      <p>Explore to hearts content!</p>
      <div className='hero-btns' path='/projectsMain'>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          path='/projectsMain'
        >
          EXPLORE <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
