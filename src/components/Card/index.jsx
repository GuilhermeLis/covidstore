import React, { useState } from 'react';

import appleButton from '../../assets/aple-button.png';
import googleButton from '../../assets/google-button.png';
import './styles.css';

export default function Card({
  img, title, instagram, description, dataRelease, appleLink, googleLink, webLink,
}) {
  const [showDiv, setShowDiv] = useState(true);

  const handleEnter = () => {
    setShowDiv(false);
  };
  const handleLeave = () => {
    setShowDiv(true);
  };
  return (
    <div
      className="container"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      { showDiv
        ? (
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
          </div>
        )
        : (
          <div className="mask">
            <h2 className="mask-title">
              {title}
            </h2>
            <div className="mask-info">
              <p className="mask-instagram">
                {instagram}
              </p>
              <p className="mask-disponivel">
                disponivel em
                {' '}
                {dataRelease}
              </p>
            </div>
            <div className="mask-description">
              <p>
                {description}
              </p>
            </div>

          </div>
        )}


      <div className="card-button">
        <a href={appleLink}>
          <img src={appleButton} alt="" className="img-button" />
        </a>
        <a href={googleLink}>
          <img src={googleButton} alt="" className="img-button" />
        </a>
        <a href={webLink}>
          <div className="button-web"><div>WEBSite</div></div>
        </a>
      </div>
    </div>
  );
}
