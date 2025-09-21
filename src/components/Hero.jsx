import React from 'react';
import './Hero.css';
import profileImage from '/assets/profile-logo.png';
import Tilt from 'react-parallax-tilt';
import resumePDF from '/assets/resumes/vishal_resume70.pdf';

function Hero() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h2 className="hero-title">
          Hello, I'm <span className="hero-name">Vishal Yadav</span>
        </h2>
        <p className="hero-subtitle">
          An Enthusiast in Data Science & Data Analytics
        </p>
        <p className="hero-description">
          With a strong background in data science and analytics, I leverage powerful tools like Python, R, and Power BI to transform complex data into actionable insights. My expertise spans data manipulation, statistical modeling, and creating compelling visualizations to drive business decisions. I am passionate about solving challenging problems and building efficient data pipelines.
        </p>
        <div className="button-group">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-btn">
            View/Download Resume
          </a>
        </div>
      </div>
      <Tilt
        className="parallax-effect"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div className="hero-image-container">
          <img
            src={profileImage}
            alt="Vishal Yadav"
            className="profile-image"
          />
        </div>
      </Tilt>
    </section>
  );
}

export default Hero;