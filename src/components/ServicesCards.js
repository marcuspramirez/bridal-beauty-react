import React from 'react';
import './ServicesCards.css';
import CardItem from './CardItem';

function ServicesCards() {
  return (

    <div className='cards'>
      <h1>Our Services Include:<br></br></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='brown-images/look.jpg'
              text='Formal Hairstyling'
              path='/services'
            />
            <CardItem
              src='hayes-images/tools.jpg'
              text='Traditional & Airbrush Makeup'
              path='/services'
            />
            <CardItem
              src='brown-images/lashes.jpg'
              text='Lash Extensions'
              path='/services'
            />
            <CardItem
              src='esbrook-images/two-smile.jpg'
              text='Teeth Whitening'
              path='/services'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXJ6ICTQlS5ythDyvil0pc529xOHJQmZqpA&usqp=CAU'
              text='Spray Tanning'
              path='/services'
            />
            <CardItem
              src='https://www.mostinside.com/wp-content/uploads/2016/03/pros-and-cons-of-face-bleaching.jpg'
              text='Facials'
              path='/about'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGrGSPi3TLCiXQh8wSPTfXJozY7aByfJwFA&usqp=CAU'
              text='Microblading'
              path='/sign-up'
            />

          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;