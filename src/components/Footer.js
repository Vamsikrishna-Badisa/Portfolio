import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="contact-info">
          <a href="mailto:vamsibadisabadisa126@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>vamsibadisabadisa126@gmail.com</span>
          </a>
          <a href="tel:9381447684" className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 9381447684</span>
          </a>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Vamsi Krishna Badisa</h3>
          <p>Frontend Developer & CS Engineering Student</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://linkedin.com/in/vamsi-krishna-b-7b99872a3" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github" title="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:vamsibadisabadisa126@gmail.com" className="social-icon email" title="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Made with <FaHeart style={{ display: 'inline', color: '#ec4899' }} /> by Vamsi Krishna
        </p>
        <p>&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
