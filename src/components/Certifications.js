import React, { useState } from 'react';
import { FaCertificate } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const certifications = [
    {
      id: 1,
      title: 'SQL and Relational Databases 101',
      issuer: 'IBM (Cognitive Class)',
      date: '2025',
      description: 'IBM (Cognitive Class) certificate in SQL and Relational Databases validates foundational knowledge of databases, essential for modern software and frontend roles.'
    },
    {
      id: 2,
      title: 'Frontend Web Development',
      issuer: 'PROCO',
      date: '2025',
      description: 'Proco certification validates practical exposure and foundational skills related to real-world software/technical workflows.'
    },
    {
      id: 3,
      title: 'Introduction To Internet Of Things',
      issuer: 'NPTEL',
      date: '2025',
      description: 'Government-recognized NPTEL course (Jan–Apr 2025, 12 weeks), adding academic credibility. Supports coursework alignment and strengthens academic profile.'
    },
    {
      id: 4,
      title: 'FLIPKART SCOA - WAREHOUSING (DIGITAL)',
      issuer: 'Flipkart',
      date: '2025',
      description: 'Industry-recognized training from Flipkart SCOA, showing exposure to real-world warehousing & digital operations.'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-header">
        <h2>Certifications</h2>
        <div className="accent-bar"></div>
      </div>
      <div className="certifications-container">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className={`certification-card-wrapper ${flipped[cert.id] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(cert.id)}
          >
            <div className="certification-card-3d">
              {/* Front of card */}
              <div className="certification-card-front">
                <div className="certification-icon">
                  <FaCertificate />
                  <span className="blink-ring"></span>
                </div>
                <div className="certification-content">
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <span className="cert-date">Year: {cert.date}</span>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="certification-card-back">
                <div className="back-content">
                  <p className="cert-description">{cert.description}</p>
                  <span className="flip-hint">Click to flip</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
