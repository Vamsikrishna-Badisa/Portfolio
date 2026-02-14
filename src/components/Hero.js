import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Vamsi Krishna Badisa</h1>
        <p className="hero-subtitle">Frontend Developer & CSE Engineering Student</p>
        <p className="hero-description">
          Building responsive, user-friendly web applications with React.js and modern JavaScript.
          Passionate about creating beautiful interfaces and solving complex problems.
        </p>
        
        <div className="hero-contact">
          <a href="mailto:vamsibadisabadisa126@gmail.com" className="contact-item">
            <FaEnvelope /> vamsibadisabadisa126@gmail.com
          </a>
          <a href="tel:9381447684" className="contact-item">
            <FaPhone /> +91 9381447684
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://linkedin.com/in/vamsi-krishna-b-7b99872a3" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
        </div>

        <button className="cta-button" onClick={() => {
          const element = document.getElementById('projects');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}>
          View My Work
        </button>
      </div>

      <div className="hero-image">
        <img src="/images/profile pic.png" alt="Vamsi Krishna Badisa" className="profile-pic" />
      </div>

      
    </section>
  );
};

export default Hero;
