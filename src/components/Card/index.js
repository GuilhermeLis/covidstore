import React from 'react';

// import { Container } from './styles';

import LogoDog from '../../assets/dogs.jpg' 
import LogoApple from '../../assets/apple-logo.png'
import './styles.css'

export default function Card() {
  return (
    <div class = "card-container" >
        <img src = {LogoApple} alt=''/>
    
        <div class= "titles-container" >
            <p>T</p>
            <p>sub title</p>
        </div>
        <div class = "text-container" >
            <p>
                texto texto
            </p>
        </div>
        <div class = "button-container" >
            <button>
                android
            </button>
            <button>
                ios
            </button>
            <button>
                web
            </button>
        </div>
    </div>
  );
}
