import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Frontend Developer - Intern',
      company: 'Agile Tribers',
      location: 'Chennai, Tamil Nadu, India',
      period: 'March 2025 - June 2025',
      responsibilities: [
        'Developed responsive UI components using React.js, JavaScript, HTML, and CSS',
        'Transformed Figma/UI designs into clean, pixel-perfect web pages',
        'Enhanced UI responsiveness and ensured cross-browser compatibility',
        'Designed, developed, and improved web and mobile applications'
      ]
    },
    {
      id: 2,
      role: 'Software Development Engineer (SDE)',
      company: 'BLUESTOCK',
      location: 'Remote',
      period: 'April 2025 - May 2025',
      responsibilities: [
        'Built and maintained responsive web interfaces using React.js, HTML, CSS, and JavaScript',
        'Developed reusable UI components, enhancing performance and user experience',
        'Integrated the frontend with backend APIs and managed data flow and state effectively',
        'Collaborated with backend teams to ensure seamless API integration'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <div className="experience-info">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="location">{exp.location}</p>
              </div>
              <span className="period">{exp.period}</span>
            </div>
            <div className="responsibilities">
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
