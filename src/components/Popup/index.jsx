/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// import { FiX } from 'react-icons/fi';

import './styles.css';

export default function Popup({ closePopup}) {
  return (
    <div
      className="popup"
      onClick={closePopup}
    >
      <div className="popup-inner">
        
        {/* <div className="popup-header">
          <h1>{text}</h1>
          <button
            className="popup-button"
            onClick={closePopup}
          >
            <FiX />
          </button>
        </div>
        <div className="popup-body">
          <p>
            Uma iniciativa de varias pessoas para ajudar
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...

          </p>
        </div> */}
      </div>
    </div>
  );
}
