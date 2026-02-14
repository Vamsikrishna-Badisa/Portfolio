import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formFocus, setFormFocus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMouseMove = (e, itemId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:vamsibadisabadisa126@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="accent-bar"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p>I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>
          
          <div className="contact-details">
            <div
              className="contact-item-wrapper"
              onMouseMove={(e) => handleMouseMove(e, 'email')}
              onMouseLeave={handleMouseLeave}
              style={{
                '--rotate-x': hoveredItem === 'email' ? `${mousePosition.y * 15}deg` : '0deg',
                '--rotate-y': hoveredItem === 'email' ? `${mousePosition.x * -15}deg` : '0deg'
              }}
            >
              <a href="mailto:vamsibadisabadisa126@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>vamsibadisabadisa126@gmail.com</p>
                </div>
              </a>
            </div>

            <div
              className="contact-item-wrapper"
              onMouseMove={(e) => handleMouseMove(e, 'phone')}
              onMouseLeave={handleMouseLeave}
              style={{
                '--rotate-x': hoveredItem === 'phone' ? `${mousePosition.y * 15}deg` : '0deg',
                '--rotate-y': hoveredItem === 'phone' ? `${mousePosition.x * -15}deg` : '0deg'
              }}
            >
              <a href="tel:9381447684" className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9381447684</p>
                </div>
              </a>
            </div>

            <div
              className="contact-item-wrapper"
              onMouseMove={(e) => handleMouseMove(e, 'location')}
              onMouseLeave={handleMouseLeave}
              style={{
                '--rotate-x': hoveredItem === 'location' ? `${mousePosition.y * 15}deg` : '0deg',
                '--rotate-y': hoveredItem === 'location' ? `${mousePosition.x * -15}deg` : '0deg'
              }}
            >
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Madhira, Telangana State, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://linkedin.com/in/vamsi-krishna-b-7b99872a3" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group" style={{animationDelay: '0.1s'}}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFormFocus('name')}
              onBlur={() => setFormFocus(null)}
              required
              placeholder="Your name"
              className={formFocus === 'name' ? 'focused' : ''}
            />
          </div>

          <div className="form-group" style={{animationDelay: '0.2s'}}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFormFocus('email')}
              onBlur={() => setFormFocus(null)}
              required
              placeholder="Your email"
              className={formFocus === 'email' ? 'focused' : ''}
            />
          </div>

          <div className="form-group" style={{animationDelay: '0.3s'}}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFormFocus('message')}
              onBlur={() => setFormFocus(null)}
              required
              placeholder="Your message"
              rows="5"
              className={formFocus === 'message' ? 'focused' : ''}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
