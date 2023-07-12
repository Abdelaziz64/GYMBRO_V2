import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="social-media-icons">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
        <p className="footer-text">
          &copy; 2023 GYMBRO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;