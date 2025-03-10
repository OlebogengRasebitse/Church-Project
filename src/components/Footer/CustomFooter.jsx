import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomFooter.css';

function CustomFooter() {
  return (
    <footer className='footer bg-light text-center text-lg-start'>
      <Container className='container'>
            <div className='social-icons'>
              <a href="https://facebook.com" className='me-3'><FaFacebook /></a>
              <a href="https://twitter.com" className='me-3'><FaTwitter /></a>
              <a href="https://instagram.com"><FaInstagram /></a>
            </div>
            <ul className='list-unstyled mb-0 footer-links'>
              <li><Link to="/terms">Terms and Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
    
      <div className='nav-link' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        © {new Date().getFullYear()} Brand. All Rights Reserved.
      </div>
      </Container>
    </footer>
  );
}

export default CustomFooter;
