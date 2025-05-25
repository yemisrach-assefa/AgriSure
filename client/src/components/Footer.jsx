import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-4">
    <Container>
      <div className="mb-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaFacebookF size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaTwitter size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaInstagram size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaLinkedin size={20} />
        </a>
      </div>
      <small>&copy; {new Date().getFullYear()} AgriSure. All rights reserved.</small>
    </Container>
  </footer>
);

export default Footer;
