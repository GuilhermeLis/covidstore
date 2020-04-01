import React from 'react';

import appleButton from '../../assets/aple-button.png'
import googleButton from '../../assets/google-button.png'
import './styles.css';

export default function Card(props) {
  return (
      <div className='card-container'>
          <img src ={props.img} />
          <div className='card-descrition-container'>
              <h2 className='card-title'>
                  {props.title}
              </h2>
              <p className='card-instagram'>
                  {props.instagram}
              </p>
              <p className='card-descrition'>
                  {props.description}
              </p>
          </div>
          <div className='card-button'>
              <a href={props.appleLink}>
                <img src = {appleButton} alt = '' className = 'img-button'/>
              </a>
              <a href={props.googleLink}>
                <img src = {googleButton} alt = '' className = 'img-button'/>
              </a>
              <a href={props.webLink}>
                <div className = "button-web" ><div>WEBSite</div></div>
              </a>
          </div>
      </div>
  );
}

