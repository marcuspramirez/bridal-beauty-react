import React from 'react';
import './AboutCard.css';
import CardItem from './CardItem';

function AboutCard() {
    return (
        <div className='cards'>
            <h1>Brittany A. Moncivais is a 5x Certified Makeup Artist and has been in the beauty industry for the last 12 years. Brittany is a certified pro with certifications from MAC, Makeup Forever, Mario Dedivanovic (2x), and Temptu Airbrush. Brittany and her team currently specialize in Bridal Hair and Makeup. Our team provides In-Studio and On-Location hair and makeup services.</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/brit-about.jpg'
                            text='Let Brittany Help You Take Your Grooms Breath away'
                            label='Brit'
                            path='/services'
                        />

                    </ul>

                </div>
            </div>
        </div>
    );
}

export default AboutCard;