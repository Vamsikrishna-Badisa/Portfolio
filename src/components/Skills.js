import React, { useState } from 'react';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiPython, SiDjango, SiMysql } from 'react-icons/si';
import { FaProjectDiagram } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: SiCss3 }
      ]
    },
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'JavaScript', icon: SiJavascript }
      ]
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Django', icon: SiDjango },
        { name: 'SQL', icon: SiMysql }
      ]
    },
    {
      category: 'Problem Solving',
      skills: [
        { name: 'Data Structures Algorithms', icon: FaProjectDiagram },
        { name: 'Problem Solving', icon: FaProjectDiagram }
      ]
    }
  ];

  const handleMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
    setHoveredCard(idx);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <h2>Skills & Expertise</h2>
        <div className="accent-bar"></div>
      </div>
      
      <div className="skills-categories">
        <h3>Technical Skills</h3>
        <div className="categories-grid">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`category-card-wrapper ${hoveredCard === idx ? 'active' : ''}`}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={handleMouseLeave}
              style={{
                '--rotate-x': hoveredCard === idx ? `${mousePosition.y * 12}deg` : '0deg',
                '--rotate-y': hoveredCard === idx ? `${mousePosition.x * -12}deg` : '0deg'
              }}
            >
              <div className="category-card-3d">
                <div className="category-card">
                  <div className="card-glow"></div>
                  <h4>{cat.category}</h4>
                  <div className="skills-list">
                    {cat.skills.map((skill, sidx) => {
                      const IconComponent = skill.icon;
                      return (
                        <div 
                          key={sidx} 
                          className="skill-item"

                          style={{
                            animationDelay: `${sidx * 0.15}s`
                          }}
                        >
                          <IconComponent className="skill-icon" />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
