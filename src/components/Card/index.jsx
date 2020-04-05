import React, { useState } from 'react';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';


import './styles.css';

export default function Card({
  img, title, instagram, description, appleLink, googleLink, webLink,
}) {
  const [showLinks, setShowLinks] = useState(false);
  const [newP, setNewP] = useState('');
  const [newButton, setNewButton] = useState('');
  const handleShowLinks = () => {
    setShowLinks(true);
    setNewP('card-button-p');
    setNewButton('card-button-new');
  };
  const handleHideLinks = () => {
    setShowLinks(false);
    setNewP('');
    setNewButton('');
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
        <div
          className="dropdown-buttons"
          onMouseEnter={handleShowLinks}
          onMouseLeave={handleHideLinks}
        >
          {
            webLink ? (
              <div className="card-button">
                <a href={webLink} className="weblink">
                  <div className="svg">
                    <FiArrowRight />
                    {' '}
                    WebSite
                  </div>
                </a>
              </div>
            )

              : (
                <div className={`card-button ${newButton}`}>
                  <div className={`svg ${newP}`}>
                    <FiDownload size={20} />
                    {' '}
                    Download
                  </div>
                  {
              showLinks ? (
                <>
                  <div className="card-button-a">
                    <a href={appleLink}>
                      <FaApple size={25} />
                      {' '}
                      Apple
                    </a>
                  </div>
                  <div className="card-button-a">
                    <a href={googleLink}>
                      <FaGooglePlay size={25} />
                      {' '}
                      Android
                    </a>
                  </div>
                </>
              ) : null
            }
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
}
