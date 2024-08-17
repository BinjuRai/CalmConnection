import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>Calm connection</p>
          <p>Ekantakuna, Lalitpur NEPAL</p>
        </div>
        <div className="footer-icons">
          <a href="#" className="icon"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
