import React from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';

import './styles.css';

export default function Header(props) {

  return (
    <div className = "header">
        <div className = 'header-item-1' >
            <div className = 'header-item-2' >
                <div>
                    <div className = "title-icon">
                        <p>
                        Aplicativo para corona virus
                        </p>
                        <button 
                        className = "button-icon"
                        onClick ={props.togglePopup}
                        >
                        <AiFillExclamationCircle size ='2em' color='#90ee90'/>
                        </button>
                    </div>
                    <button className= "button">
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
