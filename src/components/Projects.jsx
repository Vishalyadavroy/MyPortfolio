import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'Amazon Sales Analysis Dashboard',
      description: 'An interactive dashboard built with Power BI to analyze sales data and track key performance indicators.The objective of this project is to design and develop an interactive Amazon Sales Dashboard that provides clear, data-driven insights into sales performance, and product trends. this dashboard aims to help businesses:.',
      imageUrl: '/assets/projects/project1.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/Vishalyadavroy/Amazon-Sales-Analysis-Dashboard'
    },
    {
      title: 'Rohit-Sharma-Career-Statistics-Dashboard',
      description: 'The aim of this project is to visualize Rohit Sharma’s career performance across different formats (ODI, T20, Test) using Power BI and Excel. It helps cricket fans, analysts, and sports enthusiasts easily explore trends, match-wise performances, and overall career insights.',
      imageUrl: '/assets/projects/project3.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/Vishalyadavroy/Rohit-Sharma-Career-Statistics-Dashboard-'
    },
    {
      title: 'OLA-Data-Analytics-End-to-End-Project',
      description: 'he objective of this project is to analyze Ola’s ride data using SQL, Excel, and Power BI to uncover meaningful insights that can drive business growth and operational efficiency. The focus is on understanding customer behavior, ride booking trends, payment preferences, and driver performance across different cities',
      imageUrl: '/assets/projects/project2.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/Vishalyadavroy/OLA-Data-Analytics-End-to-End-Project'
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