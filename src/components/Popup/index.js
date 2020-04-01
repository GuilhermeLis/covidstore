import React from 'react';
import { FiX } from 'react-icons/fi'

import './styles.css';

export default function Popup(props) {
  return (
    <div className='popup' onClick= {props.closePopup}>  
        <div className='popup-inner'>
            <div className = 'popup-header'>
                <h1>{props.text}</h1>  
                <button 
                className="popup-button"
                onClick={props.closePopup}>
                    <FiX/>
                </button>
            </div> 
            <div className = "popup-body">
                <p>
                    Uma iniciativa de varias pessoas para ajudar
                    <br/> 
                    ...
                    <br/>
                    ...
                    <br/>
                    ...
                    <br/>
                    ...
                    <br/>
                    ...
                    <br/>
                    ...

                </p>
            </div>
        </div>  
    </div> 
  );
}
