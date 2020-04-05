import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

import './styles.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="social-midias-container">
        <a href="/">
          <FiInstagram size={30} />
        </a>
        <a href="/">
          <FiFacebook size={30} />
        </a>
        <a href="/">
          <FiTwitter size={30} />
        </a>
      </div>
      <div className="description-container">
        <p>
          Designed with ♡ by
          <a
            href="be.net/matteusdacosta"
            className="link-makers"
          >
            {' '}
            Matteus da Costa
            {' '}
          </a>
          / Coded by
          <a
            href="https://github.com/GuilhermeLis"
            className="link-makers"
          >
            {' '}
            Guilherme Lisboa
          </a>
        </p>
        <p>Alguns direitos reservados &copy; 2020</p>
      </div>
      <button type="button" className="button button-footer">
        ir para versão mobile
      </button>
    </div>
  );
}
