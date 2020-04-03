import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

import './styles.css';

export default function Card({
  img, title, instagram, description, appleLink, googleLink, webLink,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div
      className="container"
    >
      <div className="card-container">
        <img src={img} alt="" />
        <div className="card-descrition-container">
          <h2 className="card-title">
            {title}
          </h2>
          <p className="card-instagram">
            {instagram}
          </p>
          <p className="card-descrition">
            {description}
          </p>
        </div>
        <div className="dropdown-buttons">
          {
          showPopup
            ? (
              <div className="menu-dropdown">
                <a href={googleLink}>
                  <button
                    onClick={handleShowPopup}
                    className="button card-button"
                  >
                    googleplay
                  </button>
                </a>
                <a href={appleLink}>
                  <button
                    onClick={handleShowPopup}
                    className="button card-button"
                  >
                    appleStory
                  </button>
                </a>
                <a href={webLink}>
                  <button
                    onClick={handleShowPopup}
                    className="button card-button"
                  >
                    web
                  </button>
                </a>
              </div>
            )
            : (
              <button
                className="button card-button"
                onClick={handleShowPopup}
              >
                <FiDownload />
                {' '}
                Download
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}
