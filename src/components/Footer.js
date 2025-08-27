import React from 'react'
import './Footer.css'
import { FaFacebook, FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
// will not be displayed on screen size under 600px 
const Footer = () => {
  return (
    <div className="footer">
      <div className="product_footer">
        <h4>our product</h4>
        <ul>
          <li>sculptures</li>
          <li>Drawings</li>
          <li>paintings</li>
        </ul>
      </div>
      {/* will not be desplayed on screen sizes under 600px but like a ribon */}
      <div className="social-media">
        <FaFacebook />
        <FaWhatsapp />
        <FaTiktok />
        <FaInstagram />
      </div>
      <div className="bottom">
        <p>&copy; 2025 artevia curated with passion, inspired by art</p>
      </div>
    </div>
  );
}

export default Footer
