import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


export default function Cards() {
  return (
    <div className='cards'>
      <h1>Feel Free to Take a Look Around!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              className='cards__item__item1'
              text='This is who I am if you do not like it feel free to leave'
              label='About Me'
              path='/aboutMe'
            />
            <CardItem
              src='images/img-15.jpg'
              className='cards__item__item1'
              text='Take a Look at a Few Projects That I have Created'
              label='Pojects'
              path='/projectsMain'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.PNG'
              className='cards__item__item1'
              text='Electronics, Music, VidoeGames, Tinkering, Guns, Family'
              label='Hobbies'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              className='cards__item__item1'
              text='I am an Open Book!'
              label='Photos'
              path='/' // adding a photo galler for later use
            />
            <CardItem
              src='images/img-8.jpg'
              className='cards__item__item1'
              text='Be Kind, and Help Your Fellow Americans to Get Through to Another Day'
              label='Miscellaneous'
              path='/miscInfo'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}