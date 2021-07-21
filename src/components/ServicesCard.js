import React from 'react';
import './ServicesCard.css';


function Services() {
    return (
        <div className='cards'>
            <h1 className='main-header'>Our Team Specializes in Making Brides Look & Feel Beautiful</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                  <div className='services-list-header'>
                      <h3>Services Include:
                      </h3>
                  </div>

                  <ul className='services-list'>
                      <li>Formal Hairstyling</li>
                      <li>Traditional & Airbrush Makeup</li>
                      <li>Lash Extensions</li>
                      <li>Teeth Whitening</li>
                      <li>Spray Tanning</li>
                      <li>Facials</li>
                  </ul>

                  

                </div>
            </div>
        </div>
    );
}

export default Services;