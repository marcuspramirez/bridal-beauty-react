import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We Provide On-Location Hair and Makeup Services for Bridal Parties...<br></br>Let Us Bring Your Vision to Life!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='jordan-images/bridal-party.jpeg'
              text='Hair and makeup perfection is just one click away'
              label='Hair'
              path='/services'
            />
            <CardItem
              src='powell-images/brit-eyes.png'
              text='Relax while we enhance your natural beauty'
              label='Makeup'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='tabetha-short-images/brit.jpg'
              text='Our professionls know all there is to know when it comes to cosmetics'
              label='Brushing'
              path='/services'
            />
            <CardItem
              src='alyssa-images/curls.jpg'
              text='Look back at your photos with happiness and pride'
              label='Curls'
              path='/about'
            />
            <CardItem
              src='brown-images/look.jpg'
              text='See yourself shine on your special day'
              label='Mirror-Image'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;