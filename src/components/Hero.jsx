import React from 'react';
import { ChevronRight } from 'lucide-react';
import profileImage from '../assets/HariHaran Profile Pic.webp';

export default function Hero() {
  return (
    <section id="about" className="section hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Hariharan M</span>
          </h1>
          <h2 className="hero-subtitle" style={{ textTransform: 'none', letterSpacing: '0.5px', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--text-primary)', fontSize: '1.35rem', display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              .NET Full Stack Developer <span style={{ margin: '0 0.5rem', color: 'var(--accent-primary)' }}>|</span> React.js Developer
            </span>
            <span style={{ color: 'var(--text-secondary)', fontWeight: '400' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>3+ Years of Experience</span> in Microsoft Technologies 
              <span style={{ margin: '0 0.5rem', color: 'var(--accent-primary)' }}>|</span> 
              <span>Industries: Insurance, Logistics & Manufacturing</span>
            </span>
          </h2>
          <p className="hero-desc">
            .NET Full Stack Developer with 3+ years of experience designing, building, and shipping enterprise applications using ASP.NET Core, C#, React.js, SQL Server, and Microsoft Azure. Skilled in RESTful API development, Object-Oriented Programming (OOP), and application modernization, with hands-on experience delivering full-stack features across the complete Agile/Scrum SDLC — from requirement analysis and development through testing, deployment, and post-release enhancement. Comfortable troubleshooting and optimizing performance when needed, with a strong track record of delivering scalable, high-quality solutions.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get in Touch <ChevronRight size={20} />
            </a>
            <a href="#experience" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={profileImage} alt="Hariharan M" className="hero-image" fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
