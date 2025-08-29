import React from 'react'
import './Footer.css'
import { FaFacebook, FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
// will not be displayed on screen size under 600px 
const Footer = () => {
  const location = useLocation();
  //where not to display
  const hideFooterpaths = ["/logIn/signUp"];

  if (hideFooterpaths.includes(location.pathname)){
    return null; //dont render footer to this paths
  }
  return (
    <div className="footer">
      <div className="product_footer">
        <h4>our product</h4>
        {/* should be links later */}
        <ul>
          <li>sculptures</li>
          <li>Drawings</li>
          <li>paintings</li>
        </ul>
      </div>
      {/* will not be desplayed on screen sizes under 600px but like a ribon */}
      <div className="social-media">
        <h4>follow us</h4>
        <FaFacebook />
        <FaWhatsapp />
        <FaTiktok />
        <FaInstagram />
      </div>
      <div className="shop">
        <h4>browse</h4>
        <ul>
          <li>Collection</li>
          <li>New Arrivals</li>
          <li>Limited Edition</li>
          {/* link for a new page for Faqs */}
          <li>FAQ </li>
        </ul>
      </div>
      <div className="bottom">
        <p>&copy; 2025 artevia curated with passion, inspired by art</p>
      </div>
    </div>
  );
}

export default Footer
