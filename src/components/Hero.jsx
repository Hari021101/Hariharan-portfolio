import React from 'react';
import { ChevronRight, Briefcase, Award } from 'lucide-react';
import profileImage from '../assets/HariHaran Profile Pic.webp';

export default function Hero() {
  return (
    <section id="about" className="section hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-dot"></span> Available for New Opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Hariharan M</span>
          </h1>

          <div className="hero-roles-wrap">
            <div className="hero-primary-role">
              .NET Full Stack Developer <span className="hero-role-divider">•</span> React.js Developer
            </div>
            
            <div className="hero-meta-badges">
              <span className="hero-meta-badge highlight">
                <Award size={14} /> 3+ Years of Experience in Microsoft Tech
              </span>
              <span className="hero-meta-badge">
                <Briefcase size={14} /> Insurance, Logistics & Manufacturing
              </span>
            </div>
          </div>

          <p className="hero-desc">
            Full Stack Developer specializing in building high-performance enterprise applications with ASP.NET Core, C#, React.js, SQL Server, and Microsoft Azure. Experienced across the full software lifecycle — from clean architecture API design and reactive frontends to cloud deployments, performance optimization, and mission-critical production support.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore Projects <ChevronRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-glow-ring"></div>
          <img src={profileImage} alt="Hariharan M" className="hero-image" fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
