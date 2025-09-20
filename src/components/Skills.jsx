import React from 'react';
import './Skills.css';
import { FaPython, FaRProject, FaDatabase, FaToolbox, FaChartBar } from 'react-icons/fa';

function Skills() {
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'R', icon: <FaRProject /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Power BI', icon: <FaChartBar /> },
    { name: 'Hadoop', icon: <FaDatabase /> },
    { name: 'Tableau', icon: <FaChartBar /> },
    { name: 'Data Analytics', icon: <FaChartBar /> },
    { name: 'Data Science', icon: <FaToolbox /> },
    { name: 'ETL Processes', icon: <FaDatabase /> },
  ];

  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-header">Skills & Tools</h2>
      <p className="skills-description">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;