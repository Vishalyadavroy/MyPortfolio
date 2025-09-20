import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'Amazon Sales Analysis Dashboard',
      description: 'An interactive dashboard built with Power BI to analyze sales data and track key performance indicators.',
      imageUrl: 'src/assets/projects/project1.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/Vishalyadavroy/Amazon-Sales-Analysis-Dashboard'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'A machine learning model developed with Python and scikit-learn to predict customer churn for a telecom company.',
      imageUrl: 'https://placehold.co/600x400/2d264a/c0b9ce?text=Project+2+Image',
      liveUrl: '#',
      githubUrl: 'https://github.com/VishalYadav'
    },
    {
      title: 'Big Data Processing Pipeline',
      description: 'Built a robust ETL pipeline for processing large datasets using Hadoop to ensure data integrity and availability.',
      imageUrl: 'https://placehold.co/600x400/2d264a/c0b9ce?text=Project+3+Image',
      liveUrl: '#',
      githubUrl: 'https://github.com/VishalYadav'
    },
  ];

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-header">My Projects</h2>
      <p className="projects-description">A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </a>
            <div className="project-content">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link-btn">
                <FaGithub /> View Code
              </a>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;