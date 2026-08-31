import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="portfolio-header">
        <h1>Bassant Tamer</h1>
        <p className="subtitle">Software Engineer | Front-End Developer</p>
        
        <div className="contact-info">
          <span>Zagazig, Sharqia, Egypt</span>
          <span>+201212597123</span>
        </div>

        <div className="contact-links">
          <a href="mailto:bassanttamer3@gmail.com">Email</a>
          <span>•</span>
          <a href="https://linkedin.com/in/bassanttamer3" target="_blank" rel="noreferrer">LinkedIn</a>
          <span>•</span>
          <a href="https://github.com/bassanttamer3" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      {/* Featured Graduation Project */}
      <section className="portfolio-section">
        <div className="section-title">
          <h2>Featured Graduation Project</h2>
          <span className="grade-tag">Excellent Grade</span>
        </div>

        <div className="project-hero-card">
          <div className="project-header">
            <h3>ROVEX — Smart Delivery Rover System</h3>
            <p className="project-tagline">Fleet Management System for Autonomous Logistics in Smart Cities</p>
          </div>

          <p className="project-summary">
            Integrated autonomous navigation, secure OTP-based delivery, real-time tracking, and fleet management into a unified intelligent system for real-world delivery challenges.
          </p>

          <div className="role-highlights">
            <h4>My Contributions:</h4>
            <ul>
              <li><strong>Frontend Development:</strong> Built the official Landing Page and co-developed the Internal Fleet Management System with clean, responsive UI and real-time telemetry control.</li>
              <li><strong>AI & Computer Vision:</strong> Worked on the Face Detection model utilizing YOLOv8 for system intelligence.</li>
            </ul>
          </div>

          <div className="project-buttons">
            <a href="https://rovex-website.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">
              Live Landing Page
            </a>
            <a href="https://github.com/bassanttamer3/owner_rover_delivery" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Internal System Repo
            </a>
          </div>
        </div>
      </section>

      {/* Education & Skills Grid */}
      <div className="grid-two-columns">
        <section className="portfolio-section">
          <h2>Education</h2>
          <div className="info-card">
            <h3>BSc in Computer and Systems Engineering</h3>
            <p className="institution">Zagazig University (Class of 2026)</p>
            <p className="highlight-text">Very Good with Honors | Ideal Student 2026</p>
          </div>
        </section>

        <section className="portfolio-section">
          <h2>Technical Skills</h2>
          <div className="info-card">
            <div className="tech-tags">
              <span> Basic React.js</span>
              <span>JavaScript</span>
              <span>HTML5 & CSS3</span>
              <span>Java</span>  
              <span>Python</span>
              <span>Git & GitHub</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;