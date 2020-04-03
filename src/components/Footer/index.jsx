import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

import './styles.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="social-midias-container">
        <div>
          <FiInstagram size={30} />
        </div>
        <div>
          <FiFacebook size={30} />
        </div>
        <div>
          <FiTwitter size={30} />
        </div>
      </div>
      <div className="description-container">
        <p>Designed with ♡ by Matteus da Costa / Coded by Guilherme Lisboa</p>
        <p>Alguns direitos reservados © 2020</p>
      </div>
      <button type="button" className="button button-footer">
        ir para versão mobile
      </button>
    </div>
  );
}
