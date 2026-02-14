import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Solar Charge Umbrella',
      category: 'Product Design & Development',
      period: 'January 2025 - March 2025',
      description: 'Integrated solar panels convert sunlight into usable energy to charge phones, tablets, or other USB-powered devices. Excess energy is stored in a built-in power bank.',
      technologies: ['IoT', 'Solar Panels', 'Power Management', 'Hardware'],
      image: '☀️'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'Frontend Web Application',
      period: 'January 2025 - March 2025',
      description: 'Personal portfolio website showcasing projects, skills, and professional details with a modern UI and smooth animations. Built with React.js and CSS3.',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive Design'],
      image: '💼',
      links: {
        demo: '#',
        code: '#'
      }
    },
    {
      id: 3,
      title: 'Task Management Dashboard',
      category: 'Frontend Web Application',
      period: 'January 2025 - March 2025',
      description: 'Modern and responsive task management dashboard designed to help users organize, track, and manage daily tasks efficiently. Features clean UI with status tracking.',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'State Management'],
      image: '✓',
      links: {
        demo: '#',
        code: '#'
      }
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">{project.image}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-period">{project.period}</p>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.links && (
                <div className="project-links">
                  <a href={project.links.demo} className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.links.code} className="project-link">
                    <FaCode /> Source Code
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
