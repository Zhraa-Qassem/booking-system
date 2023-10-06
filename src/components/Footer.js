import React from 'react';
import logo from '../images/Logo.svg';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <p>Little Lemon Restaurant is your destination for delightful dining.</p>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Reservations</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Address: <br /> 123 Main St, Las Vegas, NV</li>
            <li>Phone: <br /> +1 123-456-7890</li>
            <li>Email: <br /> info@littlelemon.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <ul>
          <li><a href='/'>Facebook</a></li>
          <li><a href='/'>Instagram</a></li>
          <li><a href='/'>Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

